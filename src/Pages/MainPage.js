import "./MainPage.scss";
import SearchBar from "../components/SearchBar/SearchBar.js";
import MovieDisplay from "../components/MovieDisplay/MovieDisplay.js";
import Nominations from "../components/Nominations/Nominations.js";

const MainPage = () => {
  return (
    <div className="mainpage">
      <h2 className="mainpage__title">The Shoppies</h2>
      <SearchBar />
      <MovieDisplay />
      <Nominations />
    </div>
  );
};

export default MainPage;
