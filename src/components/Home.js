<<<<<<< HEAD
import React, { useState } from "react";
import { useConnect } from "../context/index";
import { types } from "../utils/actionTypes";

const Home = props => {
  const [input, setInput] = useState("");

  const update = () => {
    props.dispatch({
      type: types.SET_NAME,
      payload: input
    });
  };
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <input type="text" onChange={e => setInput(e.target.value)} />
      <button onClick={() => update()}>update</button>
    </div>
  );
};

export default useConnect(({ name }) => ({ name }))(Home);
=======
import React from "react";
import {Link} from "@reach/router";

import "../assets/stylesheets/welcome.css";

const Home = () => {
  return (

    <main>
        <div className="main--iner">
            <div className="sec--main"></div>
            <div className="sec--main logo">
              
                <span className=" logo-text--w text--larges ldc--dark" > cove<span className="ldc--dark">.</span></span>
            </div>
            <div className="sec--main details">
                <span className="login--btn ldc text--fon ikon">
                 <Link to="/login"> Sign In</Link>
                </span>
                <span className="registe-pane--btn">Not member yet? <span><Link to="/register"> Register</Link></span></span>
            </div>
        </div>        
    </main>
   
  );
};

export default Home;


>>>>>>> 316b44bb4ab49b8beeaa7c4c6f07b2c149dc391d
