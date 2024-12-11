"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6932],{36932:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(7552),o=n(99546),a=n(29499),r=n(5401),c=n(58507),i=n(75785),s=n(30157),u=n(943),m=n(40985),d=n(2187),h=n(43163),g=n(61723),p=n(24387),E=n(68446),f=n(21254),b=n.n(f);function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},C.apply(null,arguments)}const w=(0,i.n9)()((e=>({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})));function v(e){const t=(0,l.useRef)(null);return l.createElement(b(),{nodeRef:t,cancel:'[class*="MuiDialogContent-root"]',onStart:e=>e.target?.className?.includes("MuiDialogTitle")},l.createElement(u.A,C({ref:t},e)))}const k=(0,E.observer)((function(e){const{classes:t}=w(),{title:n,children:o,onClose:a}=e;return l.createElement(m.A,C({},e,{PaperComponent:v}),l.createElement(d.A,null,l.createElement(h.A,{style:{cursor:"move"}},n,a?l.createElement(g.A,{className:t.closeButton,onClick:()=>{a()}},l.createElement(s.A,null)):null),l.createElement(p.A,null),o))}));var A=n(49823),S=n(66395),y=n(66195),M=n(21430),x=n(91388),O=n(42281),T=n(28237),N=n(58474);const H=(0,i.n9)()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),j=function({rows:e,onChange:t,showTips:n}){const{classes:a}=H(),[c,i]=(0,l.useState)(null),[s,u]=(0,l.useState)([]),{name:m,color:d,baseUri:h,...g}=e[0],[p,E]=(0,l.useState)("blue"),[f,b]=(0,l.useState)({idx:0,field:null});return l.createElement("div",null,l.createElement(r.A,{disabled:!s.length,onClick:e=>{i(e.currentTarget)}},"Change color of selected items"),l.createElement(r.A,{onClick:()=>{t((0,N.BO)([...e],s))},disabled:!s.length},l.createElement(M.A,null),n?"Move selected items up":null),l.createElement(r.A,{onClick:()=>{t((0,N.oJ)([...e],s))},disabled:!s.length},l.createElement(y.A,null),n?"Move selected items down":null),l.createElement(r.A,{onClick:()=>{t((0,N.BO)([...e],s,e.length))},disabled:!s.length},l.createElement(O.A,null),n?"Move selected items to top":null),l.createElement(r.A,{onClick:()=>{t((0,N.oJ)([...e],s,e.length))},disabled:!s.length},l.createElement(x.A,null),n?"Move selected items to bottom":null),l.createElement(S.FO,{anchorEl:c,color:p,onChange:n=>{E(n),s.forEach((t=>{const l=e.find((e=>e.name===t));l&&(l.color=n)})),t([...e])},onClose:()=>{i(null)}}),l.createElement("div",{style:{height:400,width:"100%"}},l.createElement(T.z,{getRowId:e=>e.name,checkboxSelection:!0,disableRowSelectionOnClick:!0,onRowSelectionModelChange:e=>{u(e)},rows:e,rowHeight:25,columnHeaderHeight:33,columns:[{field:"color",headerName:"Color",renderCell:({value:n,id:o})=>l.createElement(S.Ay,{color:n||"blue",onChange:n=>{const l=e.find((e=>e.name===o));l&&(l.color=n),t([...e])}})},{field:"name",headerName:"Name",width:(0,o.measureGridWidth)(e.map((e=>e.name)))},...Object.keys(g).map((t=>({field:t,renderCell:({value:e})=>l.createElement("div",{className:a.cell},l.createElement(A.SanitizedHTML,{html:(0,o.getStr)(e)})),width:(0,o.measureGridWidth)(e.map((e=>`${e[t]}`)))})))],sortModel:[],onSortModelChange:n=>{const l=n[0],a=(f.idx+1)%2,r=l.field||f.field;b({idx:a,field:r}),t(r?[...e].sort(((e,t)=>{const n=(0,o.getStr)(e[r]),l=(0,o.getStr)(t[r]);return 1===a?n.localeCompare(l):l.localeCompare(n)})):e)}})))},B=(0,i.n9)()({content:{minWidth:800}});function L({model:e,handleClose:t}){const{classes:n}=B(),{sources:i}=e,[s,u]=(0,l.useState)(structuredClone(i||[])),[m,d]=(0,o.useLocalStorage)("multiwiggle-showTips",!1);return l.createElement(k,{open:!0,onClose:t,maxWidth:"xl",title:"Multi-wiggle color/arrangement editor"},l.createElement(a.A,{className:n.content},l.createElement(r.A,{variant:"contained",style:{float:"right"},onClick:()=>{d(!m)}},m?"Hide tips":"Show tips"),l.createElement("br",null),m?l.createElement(l.Fragment,null,"Helpful tips",l.createElement("ul",null,l.createElement("li",null,"You can select rows in the table with the checkboxes"),l.createElement("li",null,"Multi-select is enabled with shift-click and control-click"),l.createElement("li",null,'The "Move selected items up/down" can re-arrange subtracks'),l.createElement("li",null,"Sorting the data grid itself can also re-arrange subtracks"),l.createElement("li",null,"Changes are applied when you hit Submit"),l.createElement("li",null,"You can click and drag the dialog box to move it on the screen"),l.createElement("li",null,"Columns in the table can be hidden using a vertical '...' menu on the right side of each column"))):null,l.createElement(j,{rows:s,onChange:u,showTips:m})),l.createElement(c.A,null,l.createElement(r.A,{variant:"contained",type:"submit",color:"inherit",onClick:()=>{e.clearLayout(),u(e.sources||[])}},"Clear custom settings"),l.createElement(r.A,{variant:"contained",color:"secondary",onClick:()=>{t(),u([...e.sources||[]])}},"Cancel"),l.createElement(r.A,{variant:"contained",color:"primary",type:"submit",onClick:()=>{e.setLayout(s),t()}},"Submit")))}},58474:(e,t,n)=>{n.d(t,{A3:()=>i,BO:()=>a,oJ:()=>r});var l=n(68584),o=n(99546);function a(e,t,n=1){const l=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>e-t));let o=0;for(const t of l){const l=Math.max(o,t-n);l>=o&&e.splice(l,0,e.splice(t,1)[0]),o+=1}return e}function r(e,t,n=1){const l=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>t-e));let o=e.length-1;for(const t of l){const l=Math.min(o,t+n);l<=o&&e.splice(l,0,e.splice(t,1)[0]),o-=1}return e}const c=12.8;function i(e){const{prefersOffset:t}=e,{trackLabels:n}=(0,o.getContainingView)(e),a=(0,o.getContainingTrack)(e),r=(0,l.getConf)(a,"name");return"overlapping"!==n||t?10:(0,o.measureText)(r,c)+100}}}]);
//# sourceMappingURL=6932.cd4dac4b.chunk.js.map