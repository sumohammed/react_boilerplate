import{R as e}from"./index-80ae32d7.js";import{L as t}from"./index-b337307e.js";import{_ as r}from"./defineProperty-a0480c32.js";import"./slicedToArray-e1941acd.js";import"./toConsumableArray-0ed5356c.js";import{checkSession as n,updateUserStore as o}from"./common-27892a1c.js";import{a}from"./api-17772ac6.js";import{t as s}from"./actionTypes-edbc1405.js";import{u as c}from"./index-f0f0d0e2.js";import"./extends-cc4fca12.js";import"./objectWithoutProperties-234758e1.js";import{P as i}from"./Pager-96b949a7.js";import"./Icons-5efe7a19.js";import{A as m}from"./Animate-9feb1866.js";import{a as l}from"./index-0d44c75a.js";function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u=c(function(e){return{session:e.session}})(function(r){var c=r.session,p=r.dispatch;return e.createElement(i,{classname:"customize"},e.createElement("div",{className:"header"},e.createElement(t,{to:"/profile",className:"exit"},"Cancel"),e.createElement("h5",null,"Theme")),e.createElement("div",{className:"list"},e.createElement(m,null,e.createElement("div",{onClick:function(){return e={theme:!c.theme},o(e),n().then(function(t){p({type:s.SET_SESSION,payload:f({},t,{},e)})}).then(function(){return l(a.updateTheme)});var e}},e.createElement("div",{className:"item"},e.createElement("li",null,"White mode"),e.createElement("p",null,"Keep things simple with a white theme.")),e.createElement("label",{className:"switch"},e.createElement("input",{type:"checkbox",onChange:function(){},checked:!c.theme||""}),e.createElement("span",{className:"slider round"}))))))});export default u;