import firebase from "../firebase";
import { useEffect, useState } from "react";

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
    <div>
      <ul>
        {nom &&
          nom.map((item) => {
            return (
              <li key={item.id}>
                {item.title}, ({item.year})
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Shared;
