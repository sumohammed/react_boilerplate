System.register(["./index-b0513f57.js","./index-272f0464.js","./defineProperty-a1089ec5.js","./slicedToArray-4acdf83a.js","./toConsumableArray-62f8d598.js","./common-d400c37d.js","./api-79424633.js","./actionTypes-b0d14a88.js","./index-fbae8ffb.js","./extends-0c7a6a58.js","./objectWithoutProperties-6039c2e9.js","./Pager-f37bd16c.js","./Dialog-24c60389.js","./Icons-c6c555dc.js","./index-21526502.js","./Link-d68e5b48.js"],function(e){"use strict";var t,n,a,c,i,l,r,s,o,u,f,m,d,p;return{setters:[function(e){t=e.b,n=e.a,a=e.R},function(e){c=e.L},function(){},function(e){i=e._},function(){},function(e){l=e.createCanvas},function(e){r=e.a},function(e){s=e.t},function(e){o=e.u},function(){},function(){},function(e){u=e.P},function(e){f=e.D},function(e){m=e.E},function(e){d=e.a},function(e){p=e.A}],execute:function(){e("default",o(function(e){return{payees:e.payees}})(function(e){var o=e.payees,y=e.dispatch,E=t(!1),h=i(E,2),j=h[0],g=h[1],v=t({}),x=i(v,2),b=x[0],C=x[1],P=function(e,t){g(!0),C({payee:e,uid:t})};return n(function(){d(r.getPayees).then(function(e){return y({type:s.SET_PAYEES,payload:e})})},[]),n(function(){l("canvas")},[o]),a.createElement(a.Fragment,null,a.createElement(u,{classname:"search"},a.createElement("div",{className:"header"},a.createElement(c,{to:"/pay"},a.createElement(m,null))),a.createElement("div",{className:"content"},a.createElement("label",null,a.createElement("input",{type:"search",name:"name",placeholder:"Search",onChange:function(e){var t,n,a,c;for(t=e.target.value.toUpperCase(),n=document.querySelector(".search-list").getElementsByTagName("a"),a=0;a<n.length;a++)(c=n[a].getElementsByTagName("li")[0])&&((c.textContent||c.innerText).toUpperCase().indexOf(t)>-1?n[a].style.display="":n[a].style.display="none")},autoFocus:!0})),a.createElement("div",{className:"search-list"},a.createElement("div",null,function(e){if(e)return e.map(function(e,t){return a.createElement("a",{className:"ripple",onClick:function(){return P(e.name,e.uid)},key:t},a.createElement("div",null,a.createElement("canvas",{height:"22",width:"22",style:{width:"44px",height:"44px"},"data-name":e.name}),a.createElement("li",null,e.name)))})}(o))))),j?a.createElement(f,{onClick:g},a.createElement(p,{to:"/payee/pay/".concat(b.payee,"/").concat(b.uid)},a.createElement("li",null,"Pay")),a.createElement(p,{to:"/payee/request/".concat(b.payee,"/").concat(b.uid)},a.createElement("li",null,"Request"))):"")}))}}});