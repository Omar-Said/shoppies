import "./SearchBar.scss";
import { useState } from "react";

const SearchBar = () => {
  const [movie, setMovie] = useState("");

  const getMovie = (e) => {
    e.preventDefault();
    setMovie(e.target.value);
  };

  return (
    <section className="searchbar">
      <form className="searchbar__form">
        <p className="searchbar__form-title">Movie Title</p>
        <input className="searchbar__form-input" onChange={getMovie}></input>
        <p className="searchbar__form-text">
          Please enter a title of the movie e.g. Shawshank Redemption
        </p>
        <p>{movie}</p>
      </form>
    </section>
  );
};

export default SearchBar;
