(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{101:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var n,a,s=c(0),i=c.n(s),r=c(13),j=c.n(r),o=(c(90),c(91),c(80)),l=[],u=[];function b(e,t){n=parseInt(e,10),a=parseInt(t,10),function(){for(var e=Object(o.a)(Array(Math.pow(n,2)).keys()).map((function(e){return++e>9?String.fromCharCode(e+55):e.toString()})),t=0,c=-1,s=0;l.length<Math.pow(n,2);s+=2){l.push([]),t%3===0&&c++;for(var i=0;i<Math.pow(n,2);i+=1){var r=x(i+t+s+c,Math.pow(n,2));l[t].push(e[r])}t++}!function(){for(var e=Math.floor(100*Math.random()-70)+70,t=0;t<e;t++){switch(Math.floor(3*Math.random())){case 0:d();break;case 1:h();break;case 2:O()}}!function(){var e=0;u=l.map((function(t){return t.map((function(t,c){return Math.random()>1-a/100&&e<a?(e++,0):t}))}))}()}()}()}function d(){var e=l[0].map((function(e,t){return l.map((function(e){return e[t]}))}));l=e}function O(){for(var e=[],t=Math.floor(Math.random()*n),c=Math.floor(Math.random()*(n-1))+1,a=0;a<Math.pow(n,2);a+=3)e.push(a);var s=l[e[t]];l[e[t]]=l[e[t]+c],l[e[t]+c]=s}function h(){for(var e=[],t=Math.floor(Math.random()*n),c=0;c<Math.pow(n,2);c+=3)e.push(c);for(var a=0;a<n;a++){var s=l[a];l[a]=l[e[t]+a],l[e[t]+a]=s}}function x(e,t){return e>=t?e%t:e}var f=c(17),m=(c(92),c(15)),p=(c(93),c(94),c(2));function v(){var e=Object(s.useState)("Unknown"),t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(p.jsxs)("div",{className:"popup-container",children:["CONGRATULATION!!! YOU WIN",Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{children:"Enter your name:"}),Object(p.jsx)("input",{onChange:function(e){n(e.target.value)}}),Object(p.jsx)(f.c,{to:"/",onClick:function(){console.log(c)},children:Object(p.jsx)("input",{type:"submit",value:"Submit"})})]})]})}var g=!1,S=50,y=!1,M=50,k="3",N="55",C=1,z=1,w=i.a.createContext(),V=function(){return Object(s.useContext)(w)},E=function(e){var t=e.children,c=Object(s.useState)(S),n=Object(m.a)(c,2),a=n[0],i=n[1],r=Object(s.useState)(M),j=Object(m.a)(r,2),o=j[0],l=j[1],u=Object(s.useState)(g),b=Object(m.a)(u,2),d=b[0],O=b[1],h=Object(s.useState)(y),x=Object(m.a)(h,2),f=x[0],v=x[1],V=Object(s.useState)(k),E=Object(m.a)(V,2),I=E[0],B=E[1],A=Object(s.useState)(N),D=Object(m.a)(A,2),L=D[0],T=D[1],U=Object(s.useState)(C),F=Object(m.a)(U,2),R=F[0],G=F[1],J=Object(s.useState)(z),W=Object(m.a)(J,2),_=W[0],H=W[1];return Object(p.jsx)(w.Provider,{value:{soundVolume:a,setSoundVolume:i,musicVolume:o,setMusicVolume:l,sound:d,setSound:O,music:f,setMusic:v,size:I,setSize:B,difficult:L,setDifficult:T,color:R,setColor:G,backgr:_,setBackgr:H},children:t})},I=[];function B(){var e=this,t=Object(s.useState)(0),c=Object(m.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(0),r=Object(m.a)(i,2),j=r[0],o=r[1],b=Object(s.useState)(!1),d=Object(m.a)(b,2),O=d[0],h=d[1],x=V();function f(e,t){a(t),o(e)}function g(e){e.target.value.length>1&&(e.target.value=e.target.value.substr(0,1)),I[j][n]=e.target.value}return Object(p.jsxs)("div",{className:"game-container",children:[O?Object(p.jsx)(v,{}):null,Object(p.jsx)("table",{className:"game-table",children:Object(p.jsx)("tbody",{className:"game-field",children:u.map((function(t,c){return I.length<Math.pow(x.size,2)&&I.push([]),Object(p.jsx)("tr",{className:"sudoku-row",children:t.map((function(t,n){return I[c].length<Math.pow(x.size,2)&&I[c].push(t),0===t?Object(p.jsx)("td",{children:Object(p.jsx)("input",{className:"input-field",type:"text",onChange:g,onClick:f.bind(e,c,n)})},n):Object(p.jsx)("td",{children:t},n)}))},c)}))})}),Object(p.jsx)("button",{onClick:function(){for(var e=0;e<u.length;e++)for(var t=0;t<u[e].length;t++)if(l[e][t]!==I[e][t])return h(!1);return h(!0)},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"}),Object(p.jsx)("div",{className:"timer",children:"00 : 00"})]})}function A(){var e=V();return Object(p.jsxs)("div",{className:"main-field",children:[Object(p.jsx)(f.c,{to:"/game",children:Object(p.jsx)("button",{children:"Load game"})}),Object(p.jsx)(f.c,{to:"/game",children:Object(p.jsx)("button",{onClick:function(){b(e.size,e.difficult)},children:"New game"})}),Object(p.jsx)(f.c,{to:"/score",children:Object(p.jsx)("button",{children:"Score"})}),Object(p.jsx)(f.c,{to:"/settings",children:Object(p.jsx)("button",{children:"Settings"})})]})}var D=c(41),L=c(58),T=(c(101),c(4)),U=c(139),F=c(149),R=c(146),G=c(141),J=c(77),W=c.n(J),_=c(79),H=c.n(_),K=c(143),P=c(144),Y=c(145),Z=c(78),q=c.n(Z),Q=c(75),X=c.n(Q),$=c(76),ee=c.n($),te=Object(U.a)({list:{width:400},fullList:{width:"auto"}});function ce(){var e=te(),t=V(),c=i.a.useState({top:!1}),n=Object(m.a)(c,2),a=n[0],s=n[1];function r(){b(t.size,t.difficult)}var j,o=function(e,t){return function(c){("keydown"!==c.type||"Tab"!==c.key&&"Shift"!==c.key)&&s(Object(L.a)(Object(L.a)({},a),{},Object(D.a)({},e,t)))}};return Object(p.jsx)("div",{className:"header-container",children:Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsxs)(R.a,{onClick:o("top",!0),children:[Object(p.jsx)(H.a,{}),"MENU"]}),Object(p.jsx)(F.a,{anchor:"top",open:a.top,onClose:o("top",!1),children:(j="top",Object(p.jsx)("div",{className:Object(T.a)(e.list,Object(D.a)({},e.fullList,"top"===j||"bottom"===j)),role:"presentation",onClick:o(j,!1),onKeyDown:o(j,!1),children:Object(p.jsx)(G.a,{children:["Main menu","New Game","Settings","Score"].map((function(e,t){return Object(p.jsx)(f.d,{to:1===t?"/game":2===t?"/settings":0===t?"/":"/score",onClick:1===t&&r,children:Object(p.jsxs)(K.a,{button:!0,children:[Object(p.jsx)(P.a,{children:1===t?Object(p.jsx)(X.a,{}):2===t?Object(p.jsx)(ee.a,{}):0===t?Object(p.jsx)(W.a,{}):Object(p.jsx)(q.a,{})}),Object(p.jsx)(Y.a,{primary:e})]},e)})}))})}))})]})})}c(103);var ne=c.p+"static/media/rs_school_js.ad178c0d.svg",ae=function(e){return Object(p.jsxs)("footer",{children:[Object(p.jsx)("div",{className:"footerauthor",children:Object(p.jsx)("p",{children:Object(p.jsx)("a",{href:"https://github.com/Vepsar",children:"Vepsar"})})}),Object(p.jsx)("div",{className:"svg",children:Object(p.jsx)("img",{src:ne})}),Object(p.jsx)("div",{className:"rslink",children:Object(p.jsx)("a",{href:"https://rs.school/js/",children:"RS.School"})})]})},se=c(148),ie=c(43),re=c(153),je=c(60),oe=c.n(je),le=c(61),ue=c.n(le),be=c(150),de=c(152),Oe=c(147),he=c(151),xe=Object(U.a)({root:{width:200}});function fe(){var e=xe(),t=V();return Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsxs)(he.a,{component:"fieldset",children:[Object(p.jsx)(ie.a,{id:"continuous-slider",gutterBottom:!0,children:"Select size"}),Object(p.jsxs)(de.a,{"aria-label":"gender",name:"gender1",value:t.size,onChange:function(e){t.setSize(e.target.value)},children:[Object(p.jsx)(Oe.a,{value:"2",control:Object(p.jsx)(be.a,{}),label:"2x2"}),Object(p.jsx)(Oe.a,{value:"3",control:Object(p.jsx)(be.a,{}),label:"3x3"}),Object(p.jsx)(Oe.a,{value:"4",control:Object(p.jsx)(be.a,{}),label:"4x4"})]})]}),Object(p.jsxs)(he.a,{component:"fieldset",children:[Object(p.jsx)(ie.a,{id:"continuous-slider",gutterBottom:!0,children:"Select difficult"}),Object(p.jsxs)(de.a,{"aria-label":"gender",name:"gender1",value:t.difficult,onChange:function(e){t.setDifficult(e.target.value)},children:[Object(p.jsx)(Oe.a,{value:"45",control:Object(p.jsx)(be.a,{}),label:"Easy"}),Object(p.jsx)(Oe.a,{value:"55",control:Object(p.jsx)(be.a,{}),label:"Normal"}),Object(p.jsx)(Oe.a,{value:"70",control:Object(p.jsx)(be.a,{}),label:"Hard"})]})]}),Object(p.jsx)(ie.a,{id:"continuous-slider",gutterBottom:!0,children:"Music Volume"}),Object(p.jsxs)(se.a,{container:!0,spacing:2,children:[Object(p.jsx)(se.a,{item:!0,children:Object(p.jsx)(oe.a,{})}),Object(p.jsx)(se.a,{item:!0,xs:!0,children:Object(p.jsx)(re.a,{value:t.musicVolume,onChange:function(e,c){t.setMusicVolume(c)},"aria-labelledby":"continuous-slider"})}),Object(p.jsx)(se.a,{item:!0,children:Object(p.jsx)(ue.a,{})})]}),Object(p.jsx)(ie.a,{id:"continuous-slider",gutterBottom:!0,children:"Sound Volume"}),Object(p.jsxs)(se.a,{container:!0,spacing:2,children:[Object(p.jsx)(se.a,{item:!0,children:Object(p.jsx)(oe.a,{})}),Object(p.jsx)(se.a,{item:!0,xs:!0,children:Object(p.jsx)(re.a,{value:t.soundVolume,onChange:function(e,c){t.setSoundVolume(c)},"aria-labelledby":"continuous-slider"})}),Object(p.jsx)(se.a,{item:!0,children:Object(p.jsx)(ue.a,{})})]}),Object(p.jsx)(f.c,{to:"/game",onClick:function(){b(t.size,t.difficult)},children:Object(p.jsx)("button",{children:"Save"})})]})}var me=[{name:"Stanley",time:"01:10",size:"3x3",diff:"easy"},{name:"Stanford",time:"03:30",size:"5x5",diff:"hard"},{name:"Dipper",time:"03:40",size:"5x5",diff:"hard"},{name:"Mable",time:"01:14",size:"3x3",diff:"easy"},{name:"Soos",time:"01:10",size:"3x3",diff:"easy"},{name:"Wendy",time:"01:10",size:"3x3",diff:"easy"},{name:"Grenda",time:"01:10",size:"3x3",diff:"easy"},{name:"Bill",time:"01:10",size:"3x3",diff:"easy"},{name:"Fiddleford",time:"01:10",size:"3x3",diff:"easy"},{name:"Shmebulock",time:"01:10",size:"3x3",diff:"easy"},{name:"Custumer",time:"01:10",size:"3x3",diff:"easy"}];function pe(){return Object(p.jsxs)("div",{className:"score-contasiner",children:["LEADERBOARD",Object(p.jsxs)("table",{children:[Object(p.jsxs)("thead",{children:[Object(p.jsx)("th",{children:"NAME"}),Object(p.jsx)("th",{children:"TIME"}),Object(p.jsx)("th",{children:"SIZE"}),Object(p.jsx)("th",{children:"DIFFICULT"})]}),Object(p.jsx)("tbody",{children:me.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.time}),Object(p.jsx)("td",{children:e.size}),Object(p.jsx)("td",{children:e.diff})]})}))})]})]})}var ve=c(12);var ge=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f.b,{basename:"/",children:Object(p.jsxs)(E,{children:[Object(p.jsx)(ce,{}),Object(p.jsxs)(ve.c,{children:[Object(p.jsx)(ve.a,{path:"/",exact:!0,component:A}),Object(p.jsx)(ve.a,{path:"/game",exact:!0,component:B}),Object(p.jsx)(ve.a,{path:"/settings",exact:!0,component:fe}),Object(p.jsx)(ve.a,{path:"/score",exact:!0,component:pe})]}),Object(p.jsx)(ae,{})]})})})},Se=Object(p.jsx)(f.a,{children:Object(p.jsx)(ge,{})});j.a.render(Se,document.getElementById("root"))},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.fca1af76.chunk.js.map