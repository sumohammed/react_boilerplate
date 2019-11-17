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
                                
                                {/* <svg toggle="#password-field" className="svg-inline--fa fa-eye fa-w-18 fa-fw field-icon toggle-password" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg> */}
                                {/* <!-- <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span> --> */}
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                            </span>
                    </div>
            </div>

        </div>
        <div className="loginP--sec--main details">
                <div className="loginP--details-btn-area">
                        <span className="loginP--li-s">Register</span>
                        <span className="loginP--li-s">  <Link to="/forgot"> forgot password?</Link></span>
                </div>
        </div>
    </div>        
</main>
  );
};

export default Login;
