import "./MovieDisplay.scss";

const MovieDisplay = () => {
  return (
    <section className="moviedisplay">
      <div className="moviedisplay__wrapper">
        <p className="moviedisplay__wrapper-title">Results For ""</p>
        <p className="moviedisplay__wrapper-text">
          Please enter a movie name to see the result
        </p>
        <p className="moviedisplay__wrapper-text">Incorrect IMDb ID.</p>
      </div>
    </section>
  );
};

export default MovieDisplay;
