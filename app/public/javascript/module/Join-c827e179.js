import{R as e,b as t,a,d as n}from"./index-80ae32d7.js";import{L as r,n as l}from"./index-b337307e.js";import"./defineProperty-a0480c32.js";import{_ as o}from"./slicedToArray-e1941acd.js";import"./toConsumableArray-0ed5356c.js";import{setUserStore as i,saveCredentials as c}from"./common-27892a1c.js";import{a as u}from"./api-17772ac6.js";import{t as m}from"./actionTypes-edbc1405.js";import{u as s}from"./index-f0f0d0e2.js";import"./extends-cc4fca12.js";import"./objectWithoutProperties-234758e1.js";import{P as d}from"./Pager-96b949a7.js";import{L as p,T as f,E,N as y,P as h,A as v}from"./index-307e5487.js";import{B as b}from"./Icons-5efe7a19.js";import{a as g,A as w}from"./index-0d44c75a.js";var T=function(t){var a=t.form,n=t.handleFormOne;return e.createElement(d,null,e.createElement("div",{className:"header"},e.createElement(r,{to:"/",className:"exit"},"Cancel"),e.createElement("h5",null,"Personal ",e.createElement("br",null),"Details")),e.createElement("div",null,e.createElement("form",{onSubmit:n},e.createElement(p,null,"Firstname",f({name:"firstname",defaultValue:a.firstname,required:!0})),e.createElement(p,null,"Lastname",f({name:"lastname",defaultValue:a.lastname,required:!0})),e.createElement(p,null,"Gender",e.createElement("select",{name:"gender",defaultValue:a.gender},e.createElement("option",null,"Male"),e.createElement("option",null,"Female"))),e.createElement(p,null,"Birth Day",e.createElement("input",{type:"date",name:"date",defaultValue:"".concat(a.birthdayYear+"-"+a.birthdayMonth+"-"+a.birthdayDay),required:!0})),e.createElement(p,null,e.createElement("button",null,"Next")))))},F=function(t){return e.createElement(d,null,e.createElement("div",{className:"header"},e.createElement("div",{className:"back"},e.createElement("a",{onClick:function(){return t.back()}},e.createElement(b,null))),e.createElement("h5",null,"Contact & location")),e.createElement("div",null,e.createElement("form",{onSubmit:t.handleFormTwo},e.createElement("h5",null),e.createElement(p,null,"Email",E({required:!0})),e.createElement(p,null,"Tel",y({name:"tel",placeholder:"eg. 0200146732",required:!0})),e.createElement(p,null,"Country",e.createElement("select",{name:"country"},e.createElement("option",null,"Ghana"),e.createElement("option",null,"Other"))),e.createElement("button",null,"Next"))))},O=function(n){var r=t(!1),l=o(r,2),i=l[0],c=l[1];return a(function(){var e=setTimeout(function(){c(!0)},8e3);return function(){clearTimeout(e)}},[]),e.createElement(d,null,e.createElement("div",{className:"header"},e.createElement("div",{className:"back"},e.createElement("a",{onClick:function(){return n.back()}},e.createElement(b,null))),e.createElement("h5",null,"Verification Code")),e.createElement("div",null,e.createElement("form",{onSubmit:n.handleFormThree},e.createElement("h5",null),e.createElement(p,null,y({name:"code",autoFocus:!0})),e.createElement("button",null,"Next"),i?e.createElement("a",{className:"resend",onClick:function(){return n.resend()}},"Resend code"):null)))},S=function(t){return e.createElement(d,null,e.createElement("div",{className:"header"},e.createElement("div",{className:"back"},e.createElement("a",{onClick:function(){return t.back()}},e.createElement(b,null))),e.createElement("h5",null,"Your Password")),e.createElement("div",null,e.createElement("form",{onSubmit:t.handleFormFour},e.createElement("h5",null),e.createElement(p,null,"Password",h({required:!0})),e.createElement(p,null,"Password ( Confirm )",h({name:"confirmPassword",required:!0})),e.createElement("button",null,"Next"))))},k=function(t){return e.createElement(d,null,e.createElement("div",{className:"header"},e.createElement("div",{className:"back"},e.createElement("a",{onClick:function(){return t.back()}},e.createElement(b,null))),e.createElement("h5",null,"Before you Join")),e.createElement("div",null,e.createElement("form",{onSubmit:t.handleFormFive},e.createElement("p",null,"We are on a mission to give you the freedom to control your finances and a better way to grow them. To offer you the best services and keep your money safe. We have partnered with financial institutions like Access bank to keep your money (but you have complete control over it on triva) & a payment company to process all your payment safely and securely."),e.createElement("p",null,"Building triva for you means building with you. We can't wait to collaborate and create the future with you through feedback, feature requests & exculsive product previews."),e.createElement("p",null,"By tapping Join, I agree to Triva's Term of service, Privacy policy."),e.createElement(v,{style:{marginTop:"30px"}},"Join."))))},N=function(t){return e.createElement("div",null,e.createElement("h6",null,"Hi Suleiman,"),e.createElement("p",null,"At this time we are currently only available in Ghana. Please enter your country below so you are notified once we are available in your country."),e.createElement("form",{onSubmit:t.waitlist},e.createElement("input",{type:"text",name:"country"}),e.createElement("button",null,"Join waitlist")))},j={firstname:"",lastname:"",gender:"",birthdayDay:"",birthdayMonth:"",birthdayYear:"",email:"",tel:"",country:"Ghana",password:"",confirmPassword:"",page:"one"};function _(e,t){switch(t.type){case"SET_FORM_ONE":return Object.assign({},e,{firstname:t.payload.firstname,lastname:t.payload.lastname,gender:t.payload.gender,birthdayDay:t.payload.birthdayDay,birthdayMonth:t.payload.birthdayMonth,birthdayYear:t.payload.birthdayYear,page:t.payload.page});case"SET_FORM_TWO":return Object.assign({},e,{email:t.payload.email,tel:t.payload.tel,gender:t.payload.gender,country:t.payload.country,page:t.payload.page});case"SET_FORM_FOUR":return Object.assign({},e,{password:t.payload.password,page:t.payload.page});case"SET_COUNTRY":return Object.assign({},e,{country:t.payload.country});case"SET_PAGE":return Object.assign({},e,{page:t.payload.page});default:throw new Error}}var D=s()(function(t){var a=n(_,j),r=o(a,2),s=r[0],d=r[1],p=function(e){e.preventDefault();var t=e.target.firstname.value,a=e.target.lastname.value,n=e.target.gender.value,r=e.target.date.value.split("-");d({type:"SET_FORM_ONE",payload:{firstname:t,lastname:a,gender:n,birthdayDay:r[2],birthdayMonth:r[1],birthdayYear:r[0],page:"two"}})},f=function(e){e.preventDefault();var t=e.target.email.value,a=e.target.tel.value,n=e.target.country.value,r="three";if("Ghana"===n){var l=new FormData;return l.append("email",t),g(u.checkEmail,l).then(function(e){if(!e.exists){var l=new FormData;return l.append("tel",a),g(u.sendCode,l),d({type:"SET_FORM_TWO",payload:{email:t,tel:a,country:n,page:r}})}w("Email Exits")})}r="waitlist"},E=function(e){e.preventDefault();var t=e.target.code.value,a=new FormData;return a.append("code",t),g(u.verifyCode,a).then(function(e){if(e.verified)return w("Verification Successful"),b("four");w("Verification Failed")})},y=function(e){e.preventDefault();var t=e.target.password.value;if(t===e.target.confirmPassword.value)return d({type:"SET_FORM_FOUR",payload:{password:t,page:"five"}});w("Passwords dont match.")},h=function(e){e.preventDefault();var a=new FormData;for(var n in s)a.append(n,s[n]);return g(u.join,a).then(function(e){if(e)return i(e),t.dispatch({type:m.SET_SESSION,payload:e}),c(e.email,a.get("password")),t.dispatch({type:m.SET_BUTTON,payload:!1}),l("/home","");t.dispatch({type:m.SET_BUTTON,payload:!1})})},v=function(e){e.preventDefault();var t=e.target.country.value;d({type:"SET_COUNTRY",payload:{country:t}});var a=new FormData;for(var n in s)a.append(n,s[n]);return g(u.waitList,a)},b=function(e){return d({type:"SET_PAGE",payload:{page:e}})};return e.createElement("div",null,"two"==s.page?e.createElement(F,{back:function(){return b("one")},form:s,handleFormTwo:f}):"three"==s.page?e.createElement(O,{back:function(){return b("two")},resend:function(){return(e=new FormData).append("tel",s.tel),w("Code sent"),g(u.sendCode,e);var e},handleFormThree:E}):"four"==s.page?e.createElement(S,{back:function(){return b("three")},handleFormFour:y}):"five"==s.page?e.createElement(k,{back:function(){return b("four")},handleFormFive:h}):"waitlist"==s.page?e.createElement(N,{handleWaitlist:v}):e.createElement(T,{form:s,handleFormOne:p}))});export default D;
