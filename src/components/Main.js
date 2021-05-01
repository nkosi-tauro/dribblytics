import React, {useContext} from "react";
import firebaseConfig from "../firebase";
import { AuthContext } from "./Auth";

const Main = () => {
  const { currentUser } = useContext(AuthContext);
  const loggedInUser = currentUser.displayName
  return (
    <div class="px-2 text-center">
      <div>
        <h1 class="text-2xl p-2">Welcome {loggedInUser} </h1>
      </div>
      <div>
        <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none" onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
      </div>
    </div>
  );
};

export default Main;
