import{R as e}from"./index-80ae32d7.js";import{L as t,n as a}from"./index-b337307e.js";import"./defineProperty-a0480c32.js";import"./slicedToArray-e1941acd.js";import"./toConsumableArray-0ed5356c.js";import"./common-27892a1c.js";import{a as n}from"./api-17772ac6.js";import"./actionTypes-edbc1405.js";import{u as c}from"./index-f0f0d0e2.js";import"./extends-cc4fca12.js";import"./objectWithoutProperties-234758e1.js";import{P as r}from"./Pager-96b949a7.js";import{E as o}from"./Icons-5efe7a19.js";import{a as l}from"./index-0d44c75a.js";import{m,b as i}from"./DataSets-5c0a33f1.js";var p=c()(function(c){var p=c.payee,u=c.uid,s=c.option,d=function(t){return t.map(function(t,a){var n=t.code,c=t.name;return e.createElement("option",{key:a,value:n},c)})};return e.createElement(r,null,e.createElement("div",{className:"header"},e.createElement(t,{to:"/pay?tab=pay&option=pay&payee=".concat(p,"&uid=").concat(u,"#/payee")},e.createElement(o,null)),e.createElement("h5",null,"New ",s," payment ")),e.createElement("div",null,e.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("form"),c=new FormData(t);l(n.addPayeeAccount,c).then(function(){return a("/payee/".concat(p,"/").concat(u))})}},"email"===s?e.createElement("label",null,e.createElement("input",{type:"email",name:"account",placeholder:"Email"})):"",e.createElement("input",{type:"hidden",name:"payee_uid",value:"".concat(u)}),e.createElement("input",{type:"hidden",name:"account_type",value:"option"}),"bank"===s?e.createElement(e.Fragment,null,e.createElement("label",null,e.createElement("select",{name:"account_processor"},d(i))),e.createElement("label",null,e.createElement("input",{type:"tel",name:"account",placeholder:"".concat(s)+" digit"}))):"","momo"===s?e.createElement(e.Fragment,null,e.createElement("label",null,e.createElement("select",{name:"account_processor"},d(m))),e.createElement("label",null,e.createElement("input",{type:"tel",name:"account",placeholder:"".concat(s)+" digit"}))):"",e.createElement("button",null,"Add to ","".concat(p)))))});export default p;