"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7126],{53740:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(7552),o=n(68584),a=n(99546),l=n(68446),s=n(9502);function i(e,t){const n=t?(0,s.h)(t):void 0,r=e.get("start");let o=e.get("end");const a=e.get("strand"),l=e.get("mate"),i=e.get("refName");let c,m=0,u=0,d=0,g=0;if(["<TRA","<DEL","<INV","<INS","<DUP","<CNV"].some((e=>t?.startsWith(e)))){const t=e.get("INFO"),n=t?.END?.[0]??o;c=t?.CHR2?.[0]??i,m=n,u=n-1,o=r+1}else if(n?.MatePosition){const e=n.MatePosition.split(":");g="left"===n.MateDirection?1:-1,d="left"===n.Join?-1:1,m=+e[1],u=+e[1]-1,c=e[0]}return{k1:{refName:i,start:r,end:o,strand:a,mateDirection:g},k2:l??{refName:c||"unknown",end:m,start:u,mateDirection:d}}}function c(e,t){const{k1:n,k2:r}=i(e,t);return[e.get("name"),e.get("id"),(0,a.assembleLocString)(n),(0,a.assembleLocString)(r),e.get("INFO")?.SVTYPE,t].filter((e=>!!e)).join(" - ")}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}const u=(0,r.lazy)((()=>n.e(2241).then(n.bind(n,72241)))),d=(0,l.observer)((function({model:e,feature:t,alt:n,assembly:l,view:s}){const[d,g]=(0,r.useState)(!1),{height:f}=e,{k1:b,k2:h}=i(t,n),k=(0,r.useRef)(null),p=(0,o.getConf)(e,"color",{feature:t,alt:n}),E=l.getCanonicalRefName(b.refName)||b.refName,v=l.getCanonicalRefName(h.refName)||h.refName,x=b.start,N=h.start,C=s.bpToPx({refName:E,coord:x})?.offsetPx,y=s.bpToPx({refName:v,coord:N})?.offsetPx;if(void 0!==C&&void 0!==y){const o=(y-C)/2,l=Math.abs(o),i=Math.min(f,l),E=C-s.offsetPx,v=y-s.offsetPx,x=d?"black":p,N=3;return l>1?r.createElement(r.Fragment,null,r.createElement("path",m({d:`M ${E} 0 C ${E} ${i}, ${v} ${i}, ${v} 0`,ref:k},(0,a.getStrokeProps)(x),{strokeWidth:N,onMouseOut:()=>{g(!1)},onMouseOver:()=>{g(!0)},onClick:()=>{e.selectFeature(t)},fill:"none",pointerEvents:"stroke"})),b.mateDirection?r.createElement("line",m({},(0,a.getStrokeProps)(x),{strokeWidth:N,onMouseOut:()=>{g(!1)},onMouseOver:()=>{g(!0)},onClick:()=>{e.selectFeature(t)},x1:E,x2:E+20*b.mateDirection,y1:1.5,y2:1.5})):null,h.mateDirection?r.createElement("line",m({},(0,a.getStrokeProps)(x),{strokeWidth:N,onMouseOut:()=>{g(!1)},onMouseOver:()=>{g(!0)},onClick:()=>{e.selectFeature(t)},x1:v,x2:v+20*h.mateDirection,y1:1.5,y2:1.5})):null,d?r.createElement(r.Suspense,{fallback:null},r.createElement(u,{contents:c(t,n)})):null):null}return null})),g=(0,l.observer)((function({model:e,exportSVG:t,children:n}){const{height:o}=e,l=(0,a.getContainingView)(e),s=Math.round(l.dynamicBlocks.totalWidthPx);return t?n:r.createElement("svg",{width:s,height:o},n)})),f=(0,l.observer)((function({model:e,exportSVG:t}){const n=(0,a.getContainingView)(e),o=(0,a.getSession)(e),{assemblyManager:l}=o,{features:s}=e,i=l.get(n.assemblyNames[0]);return i?r.createElement(g,{model:e,exportSVG:t},s?.map((t=>{const a=t.get("ALT");return a?.map((a=>r.createElement(d,{key:`${t.id()}-${a}`,session:o,feature:t,alt:a,view:n,model:e,assembly:i})))??r.createElement(d,{key:t.id(),session:o,feature:t,view:n,model:e,assembly:i})}))):null}))},87126:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(7552),o=n(68446),a=n(53740),l=n(49823),s=n(99546),i=n(20529),c=n(4902),m=n(71627),u=n(89003),d=n(61723),g=n(75785);const f=(0,r.lazy)((()=>Promise.all([n.e(1631),n.e(4630)]).then(n.bind(n,74630)))),b=(0,g.n9)()((e=>({loading:{backgroundColor:e.palette.background.default,backgroundImage:`repeating-linear-gradient(45deg, transparent, transparent 5px, ${e.palette.action.disabledBackground} 5px, ${e.palette.action.disabledBackground} 10px)`,position:"absolute",bottom:0,height:50,width:300,right:0,pointerEvents:"none",textAlign:"center"}}))),h=(0,o.observer)((function({model:e,children:t}){const{error:n,regionTooLarge:o}=e;return n?r.createElement(i.LW,{message:`${n}`,severity:"error",action:r.createElement(r.Fragment,null,r.createElement(u.A,{title:"Reload"},r.createElement(d.A,{"data-testid":"reload_button",onClick:()=>{e.reload()}},r.createElement(c.A,null))),r.createElement(u.A,{title:"Show stack trace"},r.createElement(d.A,{onClick:()=>{(0,s.getSession)(e).queueDialog((t=>[f,{onClose:t,error:e.error}]))}},r.createElement(m.A,null))))}):o?e.regionCannotBeRendered():r.createElement(k,{model:e},t)})),k=(0,o.observer)((function({model:e,children:t}){const{loading:n}=e;return r.createElement("div",null,t,n?r.createElement(p,{model:e}):null)})),p=(0,o.observer)((function({model:e}){const{classes:t}=b(),{message:n}=e;return r.createElement("div",{className:t.loading},r.createElement(l.LoadingEllipses,{message:n}))})),E=h,v=(0,o.observer)((function({model:e,exportSVG:t}){return r.createElement(E,{model:e},r.createElement(a.A,{model:e,exportSVG:t}))}))}}]);
//# sourceMappingURL=7126.7086a213.chunk.js.map