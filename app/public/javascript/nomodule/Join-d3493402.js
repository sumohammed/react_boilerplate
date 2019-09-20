System.register(["./index-b0513f57.js","./index-272f0464.js","./defineProperty-a1089ec5.js","./slicedToArray-4acdf83a.js","./toConsumableArray-62f8d598.js","./common-d400c37d.js","./api-79424633.js","./actionTypes-b0d14a88.js","./index-fbae8ffb.js","./extends-0c7a6a58.js","./objectWithoutProperties-6039c2e9.js","./Pager-f37bd16c.js","./index-e4d520eb.js","./Icons-c6c555dc.js","./index-21526502.js"],function(e){"use strict";var t,a,n,r,l,o,c,i,u,m,d,s,f,p,E,y,h,v,b,g,w,T;return{setters:[function(e){t=e.R,a=e.b,n=e.a,r=e.d},function(e){l=e.L,o=e.n},function(){},function(e){c=e._},function(){},function(e){i=e.setUserStore,u=e.saveCredentials},function(e){m=e.a},function(e){d=e.t},function(e){s=e.u},function(){},function(){},function(e){f=e.P},function(e){p=e.L,E=e.T,y=e.E,h=e.N,v=e.P,b=e.A},function(e){g=e.B},function(e){w=e.a,T=e.A}],execute:function(){var F=function(e){var a=e.form,n=e.handleFormOne;return t.createElement(f,null,t.createElement("div",{className:"header"},t.createElement(l,{to:"/",className:"exit"},"Cancel"),t.createElement("h5",null,"Personal ",t.createElement("br",null),"Details")),t.createElement("div",null,t.createElement("form",{onSubmit:n},t.createElement(p,null,"Firstname",E({name:"firstname",defaultValue:a.firstname,required:!0})),t.createElement(p,null,"Lastname",E({name:"lastname",defaultValue:a.lastname,required:!0})),t.createElement(p,null,"Gender",t.createElement("select",{name:"gender",defaultValue:a.gender},t.createElement("option",null,"Male"),t.createElement("option",null,"Female"))),t.createElement(p,null,"Birth Day",t.createElement("input",{type:"date",name:"date",defaultValue:"".concat(a.birthdayYear+"-"+a.birthdayMonth+"-"+a.birthdayDay),required:!0})),t.createElement(p,null,t.createElement("button",null,"Next")))))},S=function(e){return t.createElement(f,null,t.createElement("div",{className:"header"},t.createElement("div",{className:"back"},t.createElement("a",{onClick:function(){return e.back()}},t.createElement(g,null))),t.createElement("h5",null,"Contact & location")),t.createElement("div",null,t.createElement("form",{onSubmit:e.handleFormTwo},t.createElement("h5",null),t.createElement(p,null,"Email",y({required:!0})),t.createElement(p,null,"Tel",h({name:"tel",placeholder:"eg. 0200146732",required:!0})),t.createElement(p,null,"Country",t.createElement("select",{name:"country"},t.createElement("option",null,"Ghana"),t.createElement("option",null,"Other"))),t.createElement("button",null,"Next"))))},O=function(e){var r=a(!1),l=c(r,2),o=l[0],i=l[1];return n(function(){var e=setTimeout(function(){i(!0)},8e3);return function(){clearTimeout(e)}},[]),t.createElement(f,null,t.createElement("div",{className:"header"},t.createElement("div",{className:"back"},t.createElement("a",{onClick:function(){return e.back()}},t.createElement(g,null))),t.createElement("h5",null,"Verification Code")),t.createElement("div",null,t.createElement("form",{onSubmit:e.handleFormThree},t.createElement("h5",null),t.createElement(p,null,h({name:"code",autoFocus:!0})),t.createElement("button",null,"Next"),o?t.createElement("a",{className:"resend",onClick:function(){return e.resend()}},"Resend code"):null)))},k=function(e){return t.createElement(f,null,t.createElement("div",{className:"header"},t.createElement("div",{className:"back"},t.createElement("a",{onClick:function(){return e.back()}},t.createElement(g,null))),t.createElement("h5",null,"Your Password")),t.createElement("div",null,t.createElement("form",{onSubmit:e.handleFormFour},t.createElement("h5",null),t.createElement(p,null,"Password",v({required:!0})),t.createElement(p,null,"Password ( Confirm )",v({name:"confirmPassword",required:!0})),t.createElement("button",null,"Next"))))},N=function(e){return t.createElement(f,null,t.createElement("div",{className:"header"},t.createElement("div",{className:"back"},t.createElement("a",{onClick:function(){return e.back()}},t.createElement(g,null))),t.createElement("h5",null,"Before you Join")),t.createElement("div",null,t.createElement("form",{onSubmit:e.handleFormFive},t.createElement("p",null,"We are on a mission to give you the freedom to control your finances and a better way to grow them. To offer you the best services and keep your money safe. We have partnered with financial institutions like Access bank to keep your money (but you have complete control over it on triva) & a payment company to process all your payment safely and securely."),t.createElement("p",null,"Building triva for you means building with you. We can't wait to collaborate and create the future with you through feedback, feature requests & exculsive product previews."),t.createElement("p",null,"By tapping Join, I agree to Triva's Term of service, Privacy policy."),t.createElement(b,{style:{marginTop:"30px"}},"Join."))))},j=function(e){return t.createElement("div",null,t.createElement("h6",null,"Hi Suleiman,"),t.createElement("p",null,"At this time we are currently only available in Ghana. Please enter your country below so you are notified once we are available in your country."),t.createElement("form",{onSubmit:e.waitlist},t.createElement("input",{type:"text",name:"country"}),t.createElement("button",null,"Join waitlist")))},_={firstname:"",lastname:"",gender:"",birthdayDay:"",birthdayMonth:"",birthdayYear:"",email:"",tel:"",country:"Ghana",password:"",confirmPassword:"",page:"one"};function D(e,t){switch(t.type){case"SET_FORM_ONE":return Object.assign({},e,{firstname:t.payload.firstname,lastname:t.payload.lastname,gender:t.payload.gender,birthdayDay:t.payload.birthdayDay,birthdayMonth:t.payload.birthdayMonth,birthdayYear:t.payload.birthdayYear,page:t.payload.page});case"SET_FORM_TWO":return Object.assign({},e,{email:t.payload.email,tel:t.payload.tel,gender:t.payload.gender,country:t.payload.country,page:t.payload.page});case"SET_FORM_FOUR":return Object.assign({},e,{password:t.payload.password,page:t.payload.page});case"SET_COUNTRY":return Object.assign({},e,{country:t.payload.country});case"SET_PAGE":return Object.assign({},e,{page:t.payload.page});default:throw new Error}}e("default",s()(function(e){var a=r(D,_),n=c(a,2),l=n[0],s=n[1],f=function(e){e.preventDefault();var t=e.target.firstname.value,a=e.target.lastname.value,n=e.target.gender.value,r=e.target.date.value.split("-");s({type:"SET_FORM_ONE",payload:{firstname:t,lastname:a,gender:n,birthdayDay:r[2],birthdayMonth:r[1],birthdayYear:r[0],page:"two"}})},p=function(e){e.preventDefault();var t=e.target.email.value,a=e.target.tel.value,n=e.target.country.value,r="three";if("Ghana"===n){var l=new FormData;return l.append("email",t),w(m.checkEmail,l).then(function(e){if(!e.exists){var l=new FormData;return l.append("tel",a),w(m.sendCode,l),s({type:"SET_FORM_TWO",payload:{email:t,tel:a,country:n,page:r}})}T("Email Exits")})}r="waitlist"},E=function(e){e.preventDefault();var t=e.target.code.value,a=new FormData;return a.append("code",t),w(m.verifyCode,a).then(function(e){if(e.verified)return T("Verification Successful"),b("four");T("Verification Failed")})},y=function(e){e.preventDefault();var t=e.target.password.value;if(t===e.target.confirmPassword.value)return s({type:"SET_FORM_FOUR",payload:{password:t,page:"five"}});T("Passwords dont match.")},h=function(t){t.preventDefault();var a=new FormData;for(var n in l)a.append(n,l[n]);return w(m.join,a).then(function(t){if(t)return i(t),e.dispatch({type:d.SET_SESSION,payload:t}),u(t.email,a.get("password")),e.dispatch({type:d.SET_BUTTON,payload:!1}),o("/home","");e.dispatch({type:d.SET_BUTTON,payload:!1})})},v=function(e){e.preventDefault();var t=e.target.country.value;s({type:"SET_COUNTRY",payload:{country:t}});var a=new FormData;for(var n in l)a.append(n,l[n]);return w(m.waitList,a)},b=function(e){return s({type:"SET_PAGE",payload:{page:e}})};return t.createElement("div",null,"two"==l.page?t.createElement(S,{back:function(){return b("one")},form:l,handleFormTwo:p}):"three"==l.page?t.createElement(O,{back:function(){return b("two")},resend:function(){return(e=new FormData).append("tel",l.tel),T("Code sent"),w(m.sendCode,e);var e},handleFormThree:E}):"four"==l.page?t.createElement(k,{back:function(){return b("three")},handleFormFour:y}):"five"==l.page?t.createElement(N,{back:function(){return b("four")},handleFormFive:h}):"waitlist"==l.page?t.createElement(j,{handleWaitlist:v}):t.createElement(F,{form:l,handleFormOne:f}))}))}}});