import React, { Component } from 'react';

class Step2 extends Component {  

    constructor(props){
        super(props);

        this.state = {
            countryCode:  '',
            telphone: '',
          }
    }

    render() {

      if (this.props.currentStep !== 2) { // Prop: The current step
        return null
      }
      
      const verifyBoxes = [
        {id: "verifyBoxOne", number: 6},
        {id: "verifyBoxTwo", number: 7},
        {id: "verifyBoxThree", number: 8},
        {id: "verifyBoxFour", number: 9}
       ]
       
  
      // The markup for the Step 1 UI
      return(
        <div id="verify-pane" className="registerP--tab">
            <span className="registerP--logo txt" >Please enter the 4-digit verification code we sent via SMS:</span>
            <div>
                <div className="verify-boxes--cona">
                {verifyBoxes.map(el => ( 
                    <input key={el.id} className="verify-boxes--box" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}"  placeholder="."></input>
                    ))}
                </div>
                
                
            </div>
            <div className="empti-div"></div>
            <div className="empti-div">
                <span className="txt-sm">Didn't receive the code?</span>
                <span>Resend</span>
            </div>
        </div>
    
      )
    }
  }

  export default Step2;