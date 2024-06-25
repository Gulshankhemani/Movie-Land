//Scalable Vector Graphics full form of svg
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {   //const ek data type hai or app ek variable hai
  const [searchTerm, setSearchTerm] = useState(""); //searchterm is an empty string and can only be changed by setsearchterm
  const [movies, setMovies] = useState([]); // movie ek array setmovie ke through apan movie change kar sakkte hai 

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => { //searcmovie is a variable, datatype list 
    const response = await fetch(`${API_URL}&s=${title}`); // response is a variable ,await is a keyword use hold the response until the search is meet
    const data = await response.json(); //respnse.json is actul place where data is stored we do this so that response remaim empty for next search

    setMovies(data.Search); // search is predifined keyword setmovie is to update movie search and they do this by local data 
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm} // searchterm is a constant variable and its a constant string
          onChange={(e) => setSearchTerm(e.target.value)} //e.target.variable basically take value from user and sent it for search in api
          placeholder="Search for movies" // its an attribute to display a relevant text until user input the value 
        />
        <img
          src={SearchIcon} // image search from api
          alt="search" // when internet is slow it will show this 
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => ( // map in react means itteration 
            <MovieCard movie={movie} /> 
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;