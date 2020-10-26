import React, { useState, useContext, useEffect } from "react";

const CartContext = React.createContext();
const CartAddContext = React.createContext();
const CartRemoveContext = React.createContext();
const CartTotalContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const useAddItem = () => {
  return useContext(CartAddContext);
};

export const useRemoveItem = () => {
  return useContext(CartRemoveContext);
};

export const useTotal = () => {
  return useContext(CartTotalContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "lalalal",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "lalalal",
      price: 20,
      quantity: 1,
    },
    {
      id: 3,
      name: "lalalal",
      price: 30,
      quantity: 1,
    },
  ]);

  const [total, setTotal] = useState(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  });

  useEffect(() => {
    setTotal(() => {
      return cart.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    });
  }, [cart]);

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const deleteFromCart = (id) => {
    const newCart = cart.filter((item) => id !== item.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={cart}>
      <CartTotalContext.Provider value={total}>
        <CartAddContext.Provider value={addToCart}>
          <CartRemoveContext.Provider value={deleteFromCart}>
            {children}
          </CartRemoveContext.Provider>
        </CartAddContext.Provider>
      </CartTotalContext.Provider>
    </CartContext.Provider>
  );
};
