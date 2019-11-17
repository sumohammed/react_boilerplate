import React, { Component } from "react";
import {Link} from "@reach/router";

import Step1 from './registrationComp/step1';
import Step2 from './registrationComp/step2';
import Step3 from './registrationComp/step3';
import Controls from './registrationComp/buttonControls';

import "../assets/stylesheets/register.css";


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      phone_country:  '',
      telphone: '',
      country: '+233', 
      flexDir:'row-reverse'
    }
  }

  

  
  
 changeDivDir() {
    let currentStep = this.state.currentStep
  
    if (currentStep == 1) {
      this.setState({flexDir:'row'});
    }

    if (currentStep == 2) {
       this.setState({flexDir: 'row-reverse' });
       this.setState({hide: 'none' });
    }

    if (currentStep == 3) {
      this.setState({flexDir: 'row' });
      
    }
    
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
    this.changeDivDir();
  }

    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
    this.changeDivDir();
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    
    if(currentStep !==1){
      return (
        <div className="login--btn ldc text--fon registerP--ikon" id="prevBtn" onClick={this._prev} >Change phone number</div>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    this._changeDivDir;
    if(currentStep == 2){
      return (
        <button className="registerP--fabi" id="nextBtn" onClick={this._next} >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
       </button>   
      )
    }
    if(currentStep < 2){
       
        return (
          <span className="registerP--fabi" id="nextBtn" onClick={this._next} >
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
          </span>    
        )
      }
    return null;
  }

  render() {

  
    return (
      
        <main>
          <div className="main--iner">
                  <div className="registerP--sec--main registerP--Logo-area">
                          <span className="registerP--logo svvg ">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#0c0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                          </span>             
                  </div>

                  <div className="registerP--sec--main registerP--Bottom-section">
                          <form id="regForm" action="">      
                                
                                  <Step1 
                                    currentStep ={this.state.currentStep} 
                                    handleChange ={this.handleChange}
                                    countryCode ={this.state.countryCode}
                                    telphone  = {this.state.telphone}
                                    country  = {this.state.country}
                                  />
                                  <Step2 
                                    currentStep={this.state.currentStep} 
                                    handleChange={this.handleChange}
                                    
                                  />

                                 <Step3 
                                    currentStep={this.state.currentStep} 
                                    handleChange={this.handleChange}
                                    
                                  />
                                 
                                 <Controls  currentStep={this.state.currentStep} flexDir={this.state.flexDir} previous={this.previousButton()} next={this.nextButton()} />
                               
                          </form>
                  </div>
                  
          </div>        
      </main>


    );
  
  };



function() {
    'use strict';
  
    var body = $('body');
  
    function goToNextInput(e) {
      var key = e.which,
        t = $(e.target),
        sib = t.next('input');
  
      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }
  
      if (key === 9) {
        return true;
      }
  
      if (!sib || !sib.length) {
        sib = body.find('input').eq(0);
      }
      sib.select().focus();
    }
  
    function onKeyDown(e) {
      var key = e.which;
  
      if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
      }
  
      e.preventDefault();
      return false;
    }
    
    function onFocus(e) {
      $(e.target).select();
    }
  
    body.on('keyup', 'input.verify-boxes--box', goToNextInput);
    body.on('keydown', 'input.verify-boxes--box', onKeyDown);
    body.on('click', 'input.verify-boxes--box', onFocus);
  
  }

};
export default Register;

