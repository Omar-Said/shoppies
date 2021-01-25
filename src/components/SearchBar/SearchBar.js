import "./SearchBar.scss";
import { useDispatch } from "react-redux";
import { input } from "../../actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <section className="searchbar">
      <form className="searchbar__form">
        <p className="searchbar__form-title">Movie Title</p>
        <input
          maxLength="100"
          className="searchbar__form-input"
          onChange={(e) => dispatch(input(e.target.value))}
        ></input>
        <p className="searchbar__form-text">
          Please enter a title of the movie e.g. Shawshank Redemption
        </p>
      </form>
    </section>
  );
};

export default SearchBar;
