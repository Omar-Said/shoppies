import "./Dialogue.scss";

const Dialogue = (props) => {
  return (
    <div className="dialogue">
      <div className="dialogue__container">
        <p className="dialogue__text">
          You have already chosen 5 nominations. Please remove one or more to
          perform this action.
        </p>
        <p onClick={props.handleDialogueExit} className="dialogue__close">
          CLOSE
        </p>
      </div>
    </div>
  );
};

export default Dialogue;
