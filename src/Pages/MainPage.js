import "./MainPage.scss";
import SearchBar from "../components/SearchBar/SearchBar.js";
import MovieDisplay from "../components/MovieDisplay/MovieDisplay.js";
import Nominations from "../components/Nominations/Nominations.js";
import { connect } from "react-redux";
import firebase from "../firebase";

const MainPage = ({ results, nomination }) => {
  console.log(nomination);

  // firebase.firestore().collection("times").add({
  //   title: "hello",
  //   time_ok: "hello",
  // });

  const handleSave = () => {
    const db = firebase.firestore();

    db.collection("users")
      .add({
        nomination,
      })
      .then((res) => {
        console.log("Written successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCopy = () => {
    console.log("This worked aswell");
  };

  return (
    <div className="mainpage">
      {results.length > 1 ? (
        <div className="mainpage__toolbar">
          <div>
            <p className="mainpage__toolbar-text">
              Nominate 5 movies to save and share!
            </p>
          </div>

          {nomination.length === 5 ? (
            <div className="mainpage__toolbar-wrap">
              <p onClick={handleSave} className="mainpage__toolbar-text">
                SAVE
              </p>
              <p onClick={handleCopy} className="mainpage__toolbar-text">
                COPY
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      <div className="mainpage__container">
        <h2 className="mainpage__title">The Shoppies</h2>
        <SearchBar />
        <div className="mainpage__wrapper">
          <MovieDisplay />
          <Nominations />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.inputReducer.results,
    nomination: state.inputReducer.nomination,
  };
};

export default connect(mapStateToProps)(MainPage);
