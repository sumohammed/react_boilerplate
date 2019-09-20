import React from "react";
import { render } from "react-dom";
import Provider from "./context/Provider";
import { checkSession } from "./utils/common.js";
import App from "./app/App.js";
import "./assets/stylesheets/main.css";
import "./assets/stylesheets/normalize.css";
import "./assets/stylesheets/skeleton.css";

let AppIndex = Provider(App);

checkSession()
  .then(function(user) {
    return render(<AppIndex user={user} />, document.getElementById("root"));
  })
  .catch(function(err) {
    render(<AppIndex user={null} />, document.getElementById("root"));
  });
