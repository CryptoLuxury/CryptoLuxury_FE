import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "./utils/AxiosWithAuth";

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
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  });

  const [user, setUser] = useState();

  useEffect(() => {
    if (window.localStorage.getItem("id") !== null) {
      setTimeout(() => {
        axiosWithAuth()
          .get(
            `https://crypto-luxury.herokuapp.com/api/form/watchOrders/${window.localStorage.getItem(
              "id"
            )}`
          )
          .then((res) => {
            console.log("LLLLLLLLLLLLLLLLL", res.data);
            setCart(res.data);
          })
          .catch((err) => console.log(err));
      }, 500);
    } else {
      console.log("it is null");
    }
  }, []);

  useEffect(() => {
    setTotal(() => {
      return cart.reduce((acc, item) => {
        return acc + item.watchPrice;
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
