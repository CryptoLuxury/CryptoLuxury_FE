import React, {useState, useEffect} from 'react';

import axios from "axios";

import NewCardCard from "./CardNavCard";

import WatchCard from "./WatchNavCard";

import Form from "react-bootstrap/Form";


const Search = () => {

    const [allWatches, setAllWatches] = useState([]);
    const [allCards, setAllCards] = useState([]);

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [cardResults, setCardResults] = React.useState([]);

    useEffect(() => {
        axios.get(`https://crypto-luxury.herokuapp.com/api/store/watches`)
        .then(res => {
          setAllWatches([
            ...res.data
          ])
        })
      }, []);

      useEffect(() => {
        axios.get(`https://crypto-luxury.herokuapp.com/api/store/cards`)
        .then(res => {
          setAllCards([
            ...res.data
          ])
        })
      }, []);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };

     useEffect(() => {
        const results = allWatches.filter(watch =>
          watch.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);

      useEffect(() => {
        const results = allCards.filter(card =>
          card.name.toLowerCase().includes(searchTerm)
        );
        setCardResults(results);
      }, [searchTerm]);



	return(
      <div style={{
        margin: "0 auto"
      }}>

      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search Full Collection" onChange={handleChange} />
      </Form.Group>
      </Form>
      <div style={{width: "55px", margin: "0 auto"}}>
      {searchResults.map(item => {
        if(searchTerm !== null) {
          return(<WatchCard key={item.id} watchInfo={item} />)
        }
      })}
        {cardResults.map(item => {
          if(searchTerm !== null) {
          return(<NewCardCard key={item.id} cardInfo={item} />)
        }})}
      </div>

			</div>
    )
}
export default Search;