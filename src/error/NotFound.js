// import React from 'react';
import React from 'react'; 
// import IndexPage from '../components/indexPage/IndexPage.js';
// import Join from '../components/auth/join/Join.js';
// // // import {Register} from '../components/auth/join/Register.js';
// // import {Welcome} from '../components/auth/welcome/Welcome.js'; 

// const uls = (path) => ({
// 	'/':       					secureUrl(<IndexPage />, false),
// 	'/join': 					secureUrl(<Join />, false),
// 	'/join/register': 			secureUrl(<Register />, false),
// 	'/welcome': 				secureUrl(<Welcome />),
// })[path]

// const secureUrl = (template, secure=true) => {
// 	return {
// 		template: template,
// 		secure: secure
// 	}
// }

// console.log(Join)
const NotFound = () => {
  return (
    <div className="container">
	    <div className="row">
	      <div className="eight column" style={{"marginTop": "25%"}}>
	        <h1>Oooooops !!!</h1>
	        <p>We cant seem to find seem to find the page you looking for. Go back <a href="/">Home</a>.</p>
	      </div>
	    </div>
	</div>
  );
}

// const Url = (path) => ({
// 	'/':       					secureUrl(<IndexPage />, false),
// 	'/join': 					secureUrl(<Join />, false),
// })[path]

export default NotFound;