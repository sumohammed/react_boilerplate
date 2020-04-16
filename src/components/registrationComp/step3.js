import React, { Component } from 'react';

class Step3 extends Component {
    constructor(props){
        super(props);
    }

    

    render(props) {
      if (this.props.currentStep !== 3) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div id="number-pane" className="registerP--tab">
            <span className="registerP--logo heading" >Personal Details </span>
        <div>

                {/* personal details */}

                <div>
                    <div className="personalD--field-wrapper">
                            <label className="field a-field a-field_a2 page__field">
                                    
                                    <input className="field__input a-field__input" type="text" placeholder="mr." value={this.props.firstName} name="firstName" onChange={this.props.handleChange } required=""></input>
                                                                    
                                    <span className="a-field__label-wrap">
                                    <span className="a-field__label">First Name</span>
                                    </span>
                            </label> 
                    </div>
                    <div  className="personalD--field-wrapper">
                               <label className="field a-field a-field_a2 page__field">
                                    
                                    <input className="field__input a-field__input" type="text" placeholder="cove" value={this.props.lastName} name="lastName" onChange={this.props.handleChange } required=""></input>
                                                                        
                                    <span className="a-field__label-wrap">
                                        <span className="a-field__label">Last name</span>
                                    </span>
                                </label> 
                    </div>

                    <div className="personalD--field-wrapper">  
                                <label className="field a-field a-field_a2 page__field ">
                                    
                                <select value={this.props.gender} className="personalD--field-select" name="gender" onChange={this.props.handleChange }>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                </select>
                                                                        
                                    <span className="a-field__label-wrap wwew">
                                       <span className="a-field__label">Gender</span>
                                    </span>
                                </label>
                    
                    </div>

                    <div  className="personalD--field-wrapper">  
                                <label className="field a-field a-field_a2 page__field ">
                                    
                                  <input className="personalD--field-InputDate" type="date" name="dateOfbirth" value={this.props.dateOfbirth} required="" onChange={this.props.handleChange }></input>
                                                                        
                                    <span className="a-field__label-wrap wwew">
                                       <span className="a-field__label">Birth date</span>
                                    </span>
                                </label>
                    
                    </div>
                </div>


                

        </div>
         
        <div className="personalD--field-wrapper">
              <div className="login--btn ldc text--fon registerP--ikon" onClick={this.props.next} >next</div>
        </div>
        
      </div>
      )
    }
  }

  export default Step3;

//   onChange={props.handleChange}  onChange={props.handleChange} onChange={props.handleChange}