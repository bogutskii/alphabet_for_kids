(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=(a(7),a(2)),s=a(4),i=a(1);a(14),a(15),a(16);function u(e){return c.a.createElement("div",{className:"center-div"},c.a.createElement("div",{className:"all-alph"},e.abc.map(function(t,a){return a===e.count?c.a.createElement("span",{className:"selected",key:a},t):c.a.createElement("span",{className:"letterCircle",key:a},t)})))}a(17);var m=function(e){var t=e.title,a=e.children,n=c.a.useState(!1),r=Object(i.a)(n,2),o=r[0],l=r[1];return c.a.createElement("div",{className:"accordion-wrapper"},c.a.createElement("div",{className:"accordion-title ".concat(o?"open":""),onClick:function(){return l(!o)}},t),c.a.createElement("div",{className:"accordion-item ".concat(o?"":"collapsed")},c.a.createElement("div",{className:"accordion-content"},a)))};function b(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Your score!"),c.a.createElement(m,{title:"Correct: "+e.results.correct,children:e.results.corList.join(", ")}),c.a.createElement(m,{title:"Wrong: "+e.results.incorrect,children:e.results.incList.join(", ")}),c.a.createElement(m,{title:"Skipped: "+e.results.pasS,children:e.results.pasList.join(", ")}))}var d=function(e){return e.show?c.a.createElement(c.a.Fragment,null):c.a.createElement("div",null,["Apple","Ball","Cat","Dog","Eat","Fox","Grass","Hat","Ice","Jam","Kid","Life","Mouse","Nose","Oak","Pet","Queen","Red","Sport","Tab","Up","Van","Water","Xenia","Yes","Zoo"][e.index])},p=function(e){var t="#".concat(Math.floor(16777215*Math.random()).toString(16)),a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r=Object(n.useState)(a.map(function(e){return e+e.toLowerCase()})),o=Object(i.a)(r,2),m=o[0],p=o[1],E=Object(n.useState)(0),f=Object(i.a)(E,2),N=f[0],v=f[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),k=O[0],C=O[1],h=Object(n.useState)(0),L=Object(i.a)(h,2),S=L[0],w=L[1],y=Object(n.useState)(!1),g=Object(i.a)(y,2),M=g[0],x=g[1],B=Object(n.useState)({correct:0,incorrect:0,pasS:0,incList:[],corList:[],pasList:[]}),F=Object(i.a)(B,2),J=F[0],T=F[1],U=function(){v(25===N?0:N+1)},W=function(){v(0===N?25:N-1)},A=function(){v(0),w(0),x(!M),C(!k),T({correct:0,incorrect:0,pasS:0,corList:[],incList:[],pasList:[]}),p(m.sort())},G=function(){25===N&&(v(0),x(!M)),v(N+1),w(S+1)};return c.a.createElement(c.a.Fragment,null,M?c.a.createElement("div",null,c.a.createElement(b,{results:J,goBack:A,hide:k}),c.a.createElement("br",null),k?c.a.createElement("button",{onClick:A,className:"btn btn-secondary"},"Go back"):""):c.a.createElement("div",null,k?"":c.a.createElement(u,{abc:m,count:N}),c.a.createElement("div",{className:"wrap"},c.a.createElement("a",{className:"wrap-child-active-25",onClick:W},"\u227a"),c.a.createElement("div",{style:{color:t},className:"wrap-child-active-50"},m[N],c.a.createElement("div",{className:"wrap-child-active-15"},"  ",c.a.createElement(d,{index:N,show:k}))),c.a.createElement("a",{className:"wrap-child-active-25",onClick:U},"\u227b")),k?c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){v(0),x(!M),p(m.sort())}},"Stop Test"):c.a.createElement("button",{onClick:function(){v(0),C(!k),p(Object(s.a)(m).sort(function(){return.5-Math.random()}))},className:"btn btn-secondary"},"Start Test"),c.a.createElement("p",null),c.a.createElement("br",null),k?c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){G(),T(Object(l.a)(Object(l.a)({},J),{},{correct:J.correct+1,corList:[].concat(Object(s.a)(J.corList),[m[N]])}))}},"Correct"),c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){G(),T(Object(l.a)(Object(l.a)({},J),{},{incorrect:J.incorrect+1,incList:[].concat(Object(s.a)(J.incList),[m[N]])}))}},"Wrong"),c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){G(),T(Object(l.a)(Object(l.a)({},J),{},{pasS:J.pasS+1,pasList:[].concat(Object(s.a)(J.pasList),[m[N]])}))}},"Skip"),c.a.createElement("p",null),c.a.createElement("h4",null,S+"/26")):"",c.a.createElement("p",null),k?"":c.a.createElement("div",{className:"btn-group",role:"group"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:W},"Previous"),c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:U},"Next"),c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){var e=Math.floor(26*Math.random());v(e)}},"Random")),k?"":c.a.createElement("div",{className:"lower-upper-both"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){p(a.map(function(e){return e+e.toLowerCase()}))}},"Both"),c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){p(m.map(function(e){return e[0].toUpperCase()}))}},"Upper"),c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){p(m.map(function(e){return e[0].toLowerCase()}))}},"Lower"))))};function E(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null))}var f=document.getElementById("root");o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),f)}],[[9,1,2]]]);
//# sourceMappingURL=main.ea1adc72.chunk.js.map