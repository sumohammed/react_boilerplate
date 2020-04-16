import React from "react";
import {Link} from "@reach/router";

import "../assets/stylesheets/login.css";

const Login = () => {
  return (
    <main>
    <div className="main--iner">
        <div className="loginP--sec--main loginP--Logo-area">
            <span className="loginP--logo " > cove<span className="ldc--dark">.</span></span>
        </div>
        <div className="loginP--sec--main middle">
            <div className="loginP--fields">
                <div>
                         <label className="field a-field a-field_a2 page__field">
                            <input className="field__input a-field__input" type="email" placeholder="rx@iamcove.com" required=""></input>
                            <span className="a-field__label-wrap">
                              <span className="a-field__label">Email</span>
                            </span>
                          </label> 
                </div>
                <div>
                        <label className="field a-field a-field_a2 page__field">
                                
                                <input className="field__input a-field__input" type="password" placeholder="the magic word" required=""></input>
                              
                                <span className="a-field__label-wrap">
                                <span className="a-field__label">Password</span>
                                </span>
                        </label> 
                </div>
            </div> 
            <div className="loginP--btns">
                    <div className="loginP--fields-btn-area">
                            <span className="loginP--li">Sign In</span>
                            <span className="fabi">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                            </span>
                    </div>
            </div>

        </div>
        <div className="loginP--sec--main details">
                <div className="loginP--details-btn-area">
                        <span className="loginP--li-s"><Link to="/register">Register</Link></span>
                        <span className="loginP--li-s">  <Link to="/forgot"> forgot password?</Link></span>
                </div>
        </div>
    </div>        
</main>
  );
};

export default Login;
