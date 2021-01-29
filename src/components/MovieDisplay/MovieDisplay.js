import "./MovieDisplay.scss";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { nominate } from "../../actions";
import Dialogue from "../Dialogue/Dialogue";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieDisplay = ({ results, title, nomination }) => {
  const dispatch = useDispatch();
  const [dialogue, setDialogue] = useState(false);

  const handleDialogueExit = () => {
    setDialogue(false);
  };

  const handleDialogue = () => {
    setDialogue(true);
  };

  const handleNomination = (id, title, year) => {
    dispatch(nominate({ title, id, year }));
    toast.success(`${title} has been nominated successfully`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section className="moviedisplay">
      <div className="moviedisplay__wrapper">
        <p className="moviedisplay__wrapper-title">Results For " {title} "</p>
        {title ? (
          <ul className="moviedisplay__map">
            {results &&
              results.map((element) => {
                return (
                  <li key={element.imdbID}>
                    <div className="moviedisplay__map-wrapper">
                      <a
                        href={"https://www.imdb.com/title/" + element.imdbID}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="moviedisplay__map-li">
                          {element.Title}
                        </span>
                        <span className="moviedisplay__map-li">
                          ({element.Year})
                        </span>
                      </a>
                      <button
                        className="moviedisplay__map-btn"
                        onClick={() => {
                          nomination.length < 5
                            ? handleNomination(
                                element.imdbID,
                                element.Title,
                                element.Year
                              )
                            : handleDialogue();
                        }}
                        disabled={(() => {
                          const find = nomination.find((item) => {
                            return element.imdbID === item.id;
                          });
                          return find ? true : false;
                        })()}
                      >
                        Nominate
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          <div>
            <p className="moviedisplay__wrapper-text">
              Please enter a movie name to see the result
            </p>
            <p className="moviedisplay__wrapper-text">Incorrect IMDb ID.</p>
          </div>
        )}
      </div>
      {dialogue && (
        <Dialogue
          onClick={handleDialogue}
          handleDialogueExit={handleDialogueExit}
        />
      )}
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
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.inputReducer.results,
    title: state.inputReducer.title,
    nomination: state.inputReducer.nomination,
  };
};

export default connect(mapStateToProps)(MovieDisplay);
