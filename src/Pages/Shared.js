import firebase from "../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shared.scss";
import goBack from "../assets/icons/arrow_back-24px.svg";

const Shared = () => {
  const [nom, setNom] = useState("");

  const getNoms = () => {
    const db = firebase.firestore();
    db.collection("users")
      .doc(localStorage.id)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.data().nomination);
        let results = querySnapshot.data().nomination;
        setNom(results);
      });
  };

  useEffect(() => {
    if (!localStorage.id) {
      console.log("wassup");
    } else {
      getNoms();
    }
  }, []);

  return (
    <div className="shared">
      <div className="shared__container">
        <div className="shared__header">
          <Link className="shared__link" to="/">
            <img className="shared__link" src={goBack} alt="go back" />
          </Link>
          <h1 className="shared__header-title">Nominated Movies</h1>
        </div>
        <div className="shared__wrapper">
          <div className="nominations__dialogue">
            <p className="nominations__dialogue-text">
              Here are the 5 nominated movies, go back to nominate the movies
              you like!
            </p>
          </div>
          <ul>
            {nom &&
              nom.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={"https://www.imdb.com/title/" + item.id}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.title}, ({item.year})
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shared;
