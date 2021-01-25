import "./MainPage.scss";
import SearchBar from "../components/SearchBar/SearchBar.js";

const MainPage = () => {
  return (
    <div className="mainpage">
      <h2 className="mainpage__title">The Shoppies</h2>
      <SearchBar />
    </div>
  );
};

export default MainPage;
