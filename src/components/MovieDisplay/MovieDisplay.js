import "./MovieDisplay.scss";
import { connect } from "react-redux";

const MovieDisplay = ({ results, title }) => {
  return (
    <section className="moviedisplay">
      <div className="moviedisplay__wrapper">
        <p className="moviedisplay__wrapper-title">Results For " {title} "</p>
        <ul>
          {results &&
            results.map((element) => {
              return (
                <li key={element.imdbID}>
                  <span>{element.Title}</span>
                  <span>{element.Year}</span>
                </li>
              );
            })}
        </ul>
        <p className="moviedisplay__wrapper-text">
          Please enter a movie name to see the result
        </p>
        <p className="moviedisplay__wrapper-text">Incorrect IMDb ID.</p>
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
