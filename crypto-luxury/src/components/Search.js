import React, {useState, useEffect} from 'react';

import axios from "axios";

import "./Search.css";


const Search = () => {

    const [allWatches, setAllWatches] = useState([]);
    const [allCards, setAllCards] = useState([]);

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

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



	return(
            <div className="container">
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						id="search-input"
                        placeholder="Search our Watches"
                        value={searchTerm}
                        onChange={handleChange}
					/>
                    <i className="fa fa-search search-icon"/>
                <div>
                {searchResults.map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </div>
                </label>
				
			</div>
    )
}
export default Search;