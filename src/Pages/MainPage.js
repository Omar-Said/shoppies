import "./MainPage.scss";
import SearchBar from "../components/SearchBar/SearchBar.js";
import MovieDisplay from "../components/MovieDisplay/MovieDisplay.js";
import Nominations from "../components/Nominations/Nominations.js";
import { connect } from "react-redux";
import firebase from "../firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const MainPage = ({ results, nomination }) => {
  const [userId, setUserId] = useState(localStorage.getItem("id") || "");

  const handleSave = () => {
    const db = firebase.firestore();
    if (!localStorage.getItem("id")) {
      db.collection("users")
        .add({
          nomination,
        })
        .then((docRef) => {
          localStorage.setItem("id", docRef.id);
          setUserId(docRef.id);
          console.log("Document successfully written");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      db.collection("users")
        .doc(localStorage.getItem("id"))
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
    toast.success("Copied successfully!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const text = window.location.href + userId;
  console.log(text);

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
                text={text}
                onCopy={() => {
                  toast.success("Copied successfully!", {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              >
                <p className="mainpage__toolbar-text">COPY</p>
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
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
