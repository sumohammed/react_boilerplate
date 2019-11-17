import React from "react";
import {Link} from "@reach/router";

import "../assets/stylesheets/forgot.css";

const Forgot = () => {
  return (
    <main>
    <div class="main--iner">
        <div class="fogotP--sec--main fogotP--Logo-area">
                
                <span class="fogotP--logo svvg ">
                {/* <Link to="/login"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#0c0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                </Link> */}

                </span>
            <span class="fogotP--logo txt" >Forgot your password?</span>
            <span className="forg_fabi">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg> */}
                            </span>
            
        </div>
        <div class="fogotP--sec--main middle">
            <div class="fogotP--fields">
            <span class="fogotP--logo txt-sm" >Enter your email address below and we'll get you back on track.</span>
                <div>
                    <label class="field a-field a-field_a2 page__field">
                            <input class="field__input a-field__input" type="email" placeholder="rx@iamcove.com" required=""></input>
                            <span class="a-field__label-wrap">
                              <span class="a-field__label">Email</span>
                            </span>
                          </label> 
                </div>
              
            </div> 
            <div class="fogotP--btns">
                    <div class="fogotP--fields-btn-area">
                           
                        <button>Request Reset link</button>
                            {/* <!-- <span class="fabi">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg><span>Request Reset Link</span>
                            </span> --> */}
                    </div>
            </div>

        </div>
        <div class="fogotP--sec--main details">
        <span class="registe-pane--btn">
            <span className="fogotP--li-s">
                <Link to="/login"> 
                    I remember the password
                </Link>
            </span>
        </span>
        </div>
    </div>        
</main>
  );
};

export default Forgot;