import React from "react";
import firebaseConfig from "../firebase";

const Main = () => {
  return (
    <>
      <h1>Welcome  </h1>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Main;
