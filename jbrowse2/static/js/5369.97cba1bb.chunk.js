"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5369],{55369:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(7552),r=a(49823),l=a(29499),i=a(36715),o=a(1343),c=a(33371),s=a(32808),u=a(58507),h=a(5401);const g=(0,a(68446).observer)((function(e){const{model:t,handleClose:a}=e,{featureHeightSetting:g,noSpacing:m}=t,[b,d]=(0,n.useState)(`${g}`),[p,v]=(0,n.useState)(m),w=""!==b&&!Number.isNaN(+b);return n.createElement(r.Dialog,{open:!0,onClose:a,title:"Set feature height"},n.createElement(l.A,null,n.createElement(i.A,null,"Adjust the feature height and whether there is any spacing between features. Setting feature height to 1 and removing spacing makes the display very compact."),n.createElement(o.A,{value:b,helperText:"Feature height",onChange:e=>{d(e.target.value)}}),n.createElement(c.A,{control:n.createElement(s.A,{checked:!!p,onChange:()=>{v((e=>!e))}}),label:"Remove spacing between features in y-direction?"}),n.createElement(u.A,null,n.createElement(h.A,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,disabled:!w,onClick:()=>{t.setFeatureHeight(""===b||Number.isNaN(+b)?void 0:+b),t.setNoSpacing(p),a()}},"Submit"),n.createElement(h.A,{variant:"contained",color:"secondary",onClick:()=>{a()}},"Cancel"))))}))}}]);
//# sourceMappingURL=5369.97cba1bb.chunk.js.map