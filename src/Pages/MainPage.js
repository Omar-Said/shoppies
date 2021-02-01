import "./MainPage.scss";
import SearchBar from "../components/SearchBar/SearchBar.js";
import MovieDisplay from "../components/MovieDisplay/MovieDisplay.js";
import Nominations from "../components/Nominations/Nominations.js";
import { connect } from "react-redux";
import firebase from "../firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";

const MainPage = ({ results, nomination }) => {
  const handleSave = () => {
    const db = firebase.firestore();

    if (!localStorage.id) {
      db.collection("users")
        .add({
          nomination,
        })
        .then((docRef) => {
          localStorage.setItem("id", docRef.id);
          console.log("Document successfully written");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      db.collection("users")
        .doc(localStorage.id)
        .set(
          {
            nomination,
          },
          { merge: true }
        )
        .then(() => {
          console.log("Document successfully written");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCopy = () => {
    console.log(localStorage.id);
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

              <CopyToClipboard
                text={window.location.href + localStorage.getItem("id") || ""}
                onCopy={() => {
                  console.log("Copied successfully!");
                }}
              >
                <p onClick={handleCopy} className="mainpage__toolbar-text">
                  COPY
                </p>
              </CopyToClipboard>
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
