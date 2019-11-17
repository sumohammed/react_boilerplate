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


