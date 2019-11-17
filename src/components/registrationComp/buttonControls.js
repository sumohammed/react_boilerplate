import React, { Component } from 'react';

class Controls extends Component {
    constructor(props){
        super(props);
    }

    

    render(props) {
      if (this.props.currentStep > 2 ) { 
        return null;
      }
   
      var flexPosition = {
        flexDirection: this.props.flexDir,
      };

      return(
        <div className="registerP--con">
            <div id="piipii" style={flexPosition} className="registerP--con-inner" >
                {this.props.previous}
                {this.props.next}
            </div>
       </div>
      )
    }
  }

  export default Controls;







 