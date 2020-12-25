import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./components/context/firebase";

import { firebase } from "./components/lib/firebase.prod";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,

  document.getElementById("root")
);
