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
                    <select id="countryCode" value={this.props.country} name="country" onChange={this.props.handleChange } className="form-control">
                      <option value="+233" >Ghana</option>
                      <option value="+237">Cameroon</option>
                    </select> 
                </p>
                <div className="nuber-area">
                    <input  type="number"  className=""  name="countryCode" type="tel" value={this.props.country}  onChange={this.props.handleChange }></input>
                    <hr/>                    
                    <input  type="number" name="telphone" pattern="[0-9]{1}" max="11"  placeholder="024 888 0000"  maxLength="11" value={this.props.telphone} onChange={this.props.handleChange } required></input>
                </div>
                <span className="registerP--logo txt-sm" >please confirm your country code and enter your phone number</span>
        </div>

        
      </div>
      )
    }
  }

  export default Step1;

//   onChange={props.handleChange}  onChange={props.handleChange} onChange={props.handleChange}