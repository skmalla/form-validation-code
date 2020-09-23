import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import registerServiceWorker from "./registerServiceWorker";
import UserLogin from "./Components/SignIn/SignIn";

if (sessionStorage.getItem("username") === null) {
  ReactDOM.render(<UserLogin />, document.getElementById("root"));
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}

registerServiceWorker();
