import "./MovieDisplay.scss";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { nominate } from "../../actions";
import Dialogue from "../Dialogue/Dialogue";

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
    console.log(id, title, year);
    dispatch(nominate({ title, id, year }));
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
                      <span className="moviedisplay__map-li">
                        {element.Title}
                      </span>
                      <span className="moviedisplay__map-li">
                        ({element.Year})
                      </span>
                      <button
                        className="moviedisplay__map-btn"
                        onClick={() => {
                          console.log(nomination);
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
