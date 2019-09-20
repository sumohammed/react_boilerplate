import{c as t,R as e,b as r,a as n}from"./index-80ae32d7.js";import{_ as o}from"./defineProperty-a0480c32.js";import{_ as i}from"./slicedToArray-e1941acd.js";import"./Icons-5efe7a19.js";var a=function(t){var e=document.querySelector(".toast");e&&e.remove();var r=document.querySelector("body"),n=document.createElement("div"),o=document.createElement("hr");n.className="toast";var i=document.createElement("p");i.innerHTML=t,n.prepend(i),n.append(o),r.prepend(n),setTimeout(function(){var t=document.querySelector(".toast");t&&t.remove()},2500)},c="https://api.hitriva.com",u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return fetch(c+t,{method:"POST",body:e,credentials:"include"}).then(function(t){if(!t.ok)throw t.statusText;return t.json()}).then(function(t){return 1!=t.status&&null!==t.message&&a(t.message),t.data}).catch(function(t){return console.error("Fetch failed ".concat(t))})},s=t(function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",v={};function d(){}function m(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(_([])));b&&b!==r&&n.call(b,i)&&(g=b);var E=y.prototype=d.prototype=Object.create(g);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,a){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=E.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o){var i=new x(u(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(E),E[c]="Generator",E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}});function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var l=function(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)})}},h=function(){var t=l(s.mark(function t(e,r,n){var o,i=arguments;return s.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=i.length>3&&void 0!==i[3]?i[3]:function(){return console.log("Successful share")},navigator.share?navigator.share({title:e,text:r,url:n}).then(function(){return o()}).catch(function(t){return console.log("Error sharing",t)}):(location.href="https://api.whatsapp.com/send?text="+encodeURIComponent(r+" - ")+n,o());case 2:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}(),p=function(t){return Number(t).toFixed(2)},v=function(t){var r=Number(t).toFixed(2).split(".");return e.createElement(e.Fragment,null,r[0],".",e.createElement("span",null,r[1]))},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"credit",o=r(0),a=i(o,2),c=a[0],u=a[1],s=r(0),f=i(s,2),l=f[0],h=f[1];return n(function(){return h(p("debit"===e?Number(t)-Number(c):Number(t)+Number(c)))},[c,t]),[l,u]},m=function(){Object.fromEntries=Object.fromEntries||function(t){for(var e,r=("entries"in t?t.entries():t),n={};(e=r.next())&&!e.done;){var o=e.value;Object.defineProperty(n,o[0],{configurable:!0,enumerable:!0,writable:!0,value:o[1]})}return n};var t=new URLSearchParams(location.search);return Object.fromEntries(t)},y=function(){var t=function(t){return new Date(t)},e=new Date;return{date:t,currentDate:e,getTime:function(e){return t(e).getHours()+":"+t(e).getMinutes()},getDate:function(e){return t(e).getDate()},getWeekDay:function(e){return t(e).toLocaleString("default",{weekday:"short"})},getMonth:function(e){return t(e).toLocaleString("default",{month:"short"})},getFullYear:function(e){return t(e).getFullYear()},getDateNMonth:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"short";return t.toLocaleString("default",{month:e})+" "+t.getDate()}}},g=function(t,e,r){var n;return function(){var o=this,i=arguments,a=function(){n=null,r||t.apply(o,i)},c=r&&!n;clearTimeout(n),n=setTimeout(a,e),c&&t.apply(o,i)}};function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var E=function(t){var e=null,o=null,a=r(!1),c=i(a,2),u=c[0],s=c[1],f=r({dir:"",count:0}),l=i(f,2),h=l[0],p=l[1];n(function(){var e=document.querySelector(t);return!u&&t&&(e.addEventListener("touchstart",g(d,500),!1),e.addEventListener("touchmove",g(m,500),!1),s(!0)),function(){u&&e&&(e.removeEventListener("touchstart",g(d,500)),e.removeEventListener("touchmove",g(m,500)))}},[t]);var v=function(t){p(function(e){return b({},e,{dir:t})}),p(function(t){return"left"===t.dir?b({},t,{count:t.count-1}):"right"===t.dir?b({},t,{count:t.count+1}):void 0})},d=function(t){var r=function(t){return t.touches||t.originalEvent.touches}(t)[0];e=r.clientX,o=r.clientY},m=function(t){if(e&&o){var r=t.touches[0].clientX,n=t.touches[0].clientY,i=e-r,a=o-n;Math.abs(i)>Math.abs(a)?v(i>0?"right":"left"):a>0||alert("down"),e=null,o=null}};return[h]},L=function(t){var e=r(!1),o=i(e,2),a=o[0],c=o[1];function u(){window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight||a||c(!0)}return n(function(){var t=document.querySelector(".activity");return t.addEventListener("scroll",g(u,500)),function(){return t.removeEventListener("scroll",g(u,500))}},[]),n(function(){a&&t()},[a]),[a,c]};export{a as A,l as _,u as a,v as b,E as c,L as d,y as e,d as f,s as g,h,m as u};