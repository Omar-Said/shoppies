import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <section className="searchbar">
      <form className="searchbar__form">
        <p className="searchbar__form-title">Movie Title</p>
        <input className="searchbar__form-input"></input>
        <p>Please enter a title of the movie e.g. Shawshank Redemption</p>
      </form>
    </section>
  );
};

export default SearchBar;
