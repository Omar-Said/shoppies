import "./MovieDisplay.scss";
import { useSelector } from "react-redux";

const MovieDisplay = () => {
  const title = useSelector((state) => state.inputReducer.title);

  return (
    <section className="moviedisplay">
      <div className="moviedisplay__wrapper">
        <p className="moviedisplay__wrapper-title">Results For " {title} "</p>
        <p className="moviedisplay__wrapper-text">
          Please enter a movie name to see the result
        </p>
        <p className="moviedisplay__wrapper-text">Incorrect IMDb ID.</p>
      </div>
    </section>
  );
};

export default MovieDisplay;
