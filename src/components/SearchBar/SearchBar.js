import "./SearchBar.scss";
import { useDispatch } from "react-redux";
import { input } from "../../actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(input(e.target.value));
  };

  return (
    <section className="searchbar">
      <form className="searchbar__form">
        <p className="searchbar__form-title">Movie Title</p>
        <input
          maxLength="50"
          className="searchbar__form-input"
          onChange={handleOnChange}
        ></input>
        <p className="searchbar__form-text">
          Please enter a title of the movie e.g. Shawshank Redemption
        </p>
      </form>
    </section>
  );
};

export default SearchBar;
