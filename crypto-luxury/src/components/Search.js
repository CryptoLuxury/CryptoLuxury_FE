import React, {useState, useEffect} from 'react';

import axios from "axios";

import ProductCard from "./ProductSearch";

import Form from "react-bootstrap/Form";

import "./SearchTwo.css";


const Search = () => {

    const [products, setProducts] = useState([]);

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(() => {
        axios.get(`https://crypto-luxury.herokuapp.com/api/store/products`)
        .then(res => {
          setProducts([
            ...res.data
          ])
        })
      }, []);

    const handleChange = event => {
       setSearchTerm(event.target.value.toLowerCase());
     };

     useEffect(() => {
        const results = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);



	return(
      <div style={{
        margin: "0 auto"
      }}>

      <form action="">
      <input type="search" placeholder="Search Collection" onChange={handleChange} name="searchTerm" />
      <i class="fa fa-search"></i>
      </form>
      <div style={{width: "55px", margin: "0 auto"}}>
      {searchResults.map(product => {
        if(searchTerm !== '') {
          return(<ProductCard key={product.id} productInfo={product} />)
        }
      })}
      </div>

			</div>
    )
}
export default Search;