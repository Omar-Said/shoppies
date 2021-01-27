import "./MovieDisplay.scss";
import { connect } from "react-redux";

const MovieDisplay = ({ results, title }) => {
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
                      <span className="test">{element.Title}</span>
                      <span className="test1">({element.Year})</span>
                      <button className="moviedisplay__map-btn">
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
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.inputReducer.results,
    title: state.inputReducer.title,
  };
};

export default connect(mapStateToProps)(MovieDisplay);
