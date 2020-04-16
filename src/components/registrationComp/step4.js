import React, { Component } from 'react';

class Step4 extends Component {
    constructor(props){
        super(props);
    }

    

    render(props) {
      if (this.props.currentStep !== 4) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div id="number-pane" className="registerP--tab">
            <span className="registerP--logo heading" >Login Details </span>
        <div>

                {/* personal details */}

                <div>
                    <div className="personalD--field-wrapper">
                         <label className="field a-field a-field_a2 page__field">
                              <input className="field__input a-field__input" type="email" placeholder="rx@iamcove.com" name="email" value={this.props.email}  onChange={this.props.handleChange } required=""></input>
                              <span className="a-field__label-wrap">
                                <span className="a-field__label">Email</span>
                              </span>
                          </label> 
                    </div>
                    <div  className="personalD--field-wrapper">
                              <label className="field a-field a-field_a2 page__field">
                                
                                <input className="field__input a-field__input" type="password" placeholder="the magic word" name="password" value={this.props.password} onChange={this.props.handleChange } required=""></input>
                              
                                <span className="a-field__label-wrap">
                                <span className="a-field__label">Password</span>
                                </span>
                            </label> 
                    </div>

                   
                </div>


                

        </div>
         
        <div className="personalD--field-wrapper finalize">
          <span className="registerP--fabi" id="nextBtn" onClick={this.props.previous}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
          </span>

           <div class="login--btn ldc text--fon registerP--ikon"  >done</div>
        </div>
        
      </div>
      )
    }
  }

  export default Step4;
//   onChange={props.handleChange}  onChange={props.handleChange} onChange={props.handleChange}