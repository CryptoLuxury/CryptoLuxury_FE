import React, {useState, useEffect} from 'react';

import axios from "axios";

import NewCardCard from "./NewCardCard";

import WatchCard from "./WatchNavCard";

import { Card } from "antd";
import Modal from "react-bootstrap/Modal";

import "./SearchNav.css";


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
            <div className="container">
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						id="search-input"
                        placeholder="Search our Collection"
                        value={searchTerm}
                        onChange={handleChange}
					/>
                    <i className="fa fa-search search-icon"/>


                <div>
                {searchResults.map(item => {
                  if(searchTerm !== '') {
                    return(<WatchCard key={item.id} watchInfo={item} />)
                  }
                })}
                  {cardResults.map(item => {
                    if(searchTerm !== '') {
                    return(<NewCardCard key={item.id} cardInfo={item} />)
                  }})}
                </div>


                </label>
				
			</div>
    )
}
export default Search;