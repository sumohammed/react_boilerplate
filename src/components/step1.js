import React, { Component } from 'react';

class Step1 extends Component {
    constructor(props){
        super(props);
    }

    

    render(props) {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div id="number-pane" className="registerP--tab">
            <span className="registerP--logo heading" >Confirm phone number</span>
        <div>
                <p>
                    <select id="countryCode" name="country" className="form-control" >
                    <option value="+233">Ghana</option>
                    <option value="+235">Cameroon</option>
                    </select> 
                </p>
                <div className="nuber-area">
                    <input  type="tel"  className="" defaultValue="+233" name="phone_country" type="tel" onChange={props.handleChange}></input>
                    <hr/>
                    {/* <input type="number" name="telphone" pattern="[0-9]{1}" max="11" oninput="this.classNameName = ''" placeholder="024 888 0000"  maxLength="11" required></input> */}
                    <input id="telphone" type="number" name="telphone" pattern="[0-9]{1}" max="11"  placeholder="024 888 0000"  maxLength="11" onChange={props.handleChange} required></input>
                </div>
                <span className="registerP--logo txt-sm" >please confirm your country code and enter your phone number</span>
        </div>

        
      </div>
      )
    }
  }

  export default Step1;

    //  onChange={props.handleChange} onChange={props.handleChange}