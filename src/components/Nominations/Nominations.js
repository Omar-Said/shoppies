import "./Nominations.scss";
import { connect, useDispatch } from "react-redux";
import { removeNom } from "../../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nominations = ({ nomination }) => {
  const dispatch = useDispatch();

  const handleClick = (id, title) => {
    dispatch(removeNom(id));
    toast.error(`${title} has been successfully removed`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section className="nominations">
      <div className="nominations__wrapper">
        <p className="nominations__wrapper-title">Nominations</p>
        {nomination.length < 5 ? (
          <p></p>
        ) : (
          <div className="nominations__dialogue">
            <p className="nominations__dialogue-text">
              You have chosen {nomination.length} nominations, congratulations,
              you can now save it and share the link!
            </p>
          </div>
        )}
        <ul>
          {nomination &&
            nomination.map((element) => {
              return (
                <li key={element.id}>
                  <div className="nominations__map-wrapper">
                    <span className="moviedisplay__map-li">
                      {element.title}
                    </span>
                    <span className="moviedisplay__map-li">
                      ({element.year})
                    </span>
                    <button
                      onClick={() => handleClick(element.id, element.title)}
                      className="nominations__map-btn"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
        {nomination.length < 1 ? (
          <p className="nominations__wrapper-text">
            Please nominate your favorite movie
          </p>
        ) : (
          ""
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    nomination: state.inputReducer.nomination,
  };
};

export default connect(mapStateToProps)(Nominations);
