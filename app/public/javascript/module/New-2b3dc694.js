import{b as e,R as t}from"./index-80ae32d7.js";import{L as n,n as r}from"./index-b337307e.js";import"./defineProperty-a0480c32.js";import{_ as a}from"./slicedToArray-e1941acd.js";import"./toConsumableArray-0ed5356c.js";import"./common-27892a1c.js";import"./api-17772ac6.js";import"./actionTypes-edbc1405.js";import{u as o}from"./index-f0f0d0e2.js";import"./extends-cc4fca12.js";import"./objectWithoutProperties-234758e1.js";import{P as l}from"./Pager-96b949a7.js";import{D as c}from"./Dialog-550d8283.js";import{A as i}from"./Animate-9feb1866.js";var m=o(function(e){return{session:e.session}})(function(o){var m=o.session,s=e(!1),p=a(s,2),u=p[0],f=p[1],d=e(),E=a(d,2),j=E[0],h=E[1],b=function(e){return location.href="chat"===e?"https://wa.me/233200146732?text="+encodeURIComponent("Support ticket - #".concat(m.uid," \n\n")+j):"mailto:support@hitrivahelp.zendesk.com?subject="+encodeURIComponent("Support")+"&amp;"+encodeURIComponent(j),r("/profile")};return t.createElement(t.Fragment,null,t.createElement(l,{classname:"support"},t.createElement("div",{className:"header"},t.createElement(n,{to:"/profile",className:"exit"},"Cancel"),t.createElement("h5",null,"Support")),t.createElement("div",null,t.createElement("section",null,t.createElement("form",{onSubmit:function(e){return e.preventDefault(),f(!0)}},t.createElement("label",null,t.createElement("textarea",{placeholder:"Hi ".concat(m.firstname,", how can we help you?"),autoFocus:!0,onChange:function(e){return h(e.target.value)}})),t.createElement("label",null,t.createElement("button",null,"send")))))),u&&t.createElement(c,{onClick:f},t.createElement(i,{onClick:function(){return b("chat")}},t.createElement("li",null,"via Whatsapp")),t.createElement(i,{onClick:function(){return b("email")}},t.createElement("li",null,"via Email"))))});export default m;
