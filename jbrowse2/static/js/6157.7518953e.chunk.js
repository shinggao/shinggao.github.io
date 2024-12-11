"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6157],{48467:(e,t,o)=>{o.d(t,{A:()=>r});const r=(0,o(26587).Ay)()},61977:(e,t,o)=>{o.d(t,{b:()=>x});var r=o(6614),l=o(83673),s=o(7552),n=o(93878),a=o(48467),i=o(70799),c=o(76959),u=o(64565),d=o(69500);const p=["className","children"],b=(0,a.A)("div",{name:"MuiDataGrid",slot:"ToolbarContainer",overridesResolver:(e,t)=>t.toolbarContainer})((({theme:e})=>({display:"flex",alignItems:"center",flexWrap:"wrap",gap:e.spacing(1),padding:e.spacing(.5,.5,0)}))),x=s.forwardRef((function(e,t){const{className:o,children:s}=e,a=(0,l.A)(e,p),x=(0,u.A)(),f=(e=>{const{classes:t}=e;return(0,i.A)({root:["toolbarContainer"]},c.B,t)})(x);return s?(0,d.jsx)(b,(0,r.A)({ref:t,className:(0,n.A)(f.root,o),ownerState:x},a,{children:s})):null}))},76157:(e,t,o)=>{o.d(t,{O:()=>f});var r=o(6614),l=o(83673),s=o(7552),n=o(61977),a=o(85262),i=o(44784),c=o(19271),u=o(38175),d=o(64565),p=o(26524),b=o(69500);const x=["className","csvOptions","printOptions","excelOptions","showQuickFilter","quickFilterProps"],f=s.forwardRef((function(e,t){const o=e,{csvOptions:s,printOptions:f,excelOptions:m,showQuickFilter:h=!1,quickFilterProps:A={}}=o,g=(0,l.A)(o,x),v=(0,d.A)();return v.disableColumnFilter&&v.disableColumnSelector&&v.disableDensitySelector&&!h?null:(0,b.jsxs)(n.b,(0,r.A)({ref:t},g,{children:[(0,b.jsx)(a.j,{}),(0,b.jsx)(c.Q,{}),(0,b.jsx)(i.z,{}),(0,b.jsx)(u.qn,{csvOptions:s,printOptions:f,excelOptions:m}),(0,b.jsx)("div",{style:{flex:1}}),h&&(0,b.jsx)(p.b,(0,r.A)({},A))]}))}))},85262:(e,t,o)=>{o.d(t,{j:()=>p});var r=o(6614),l=o(7552),s=o(89456),n=o(12274),a=o(38577),i=o(48534),c=o(76404),u=o(64565),d=o(69500);const p=l.forwardRef((function(e,t){const{slotProps:o={}}=e,l=o.button||{},p=o.tooltip||{},b=(0,s.A)(),x=(0,s.A)(),f=(0,c.h)(),m=(0,u.A)(),h=(0,n.Nc)(f,a._);if(m.disableColumnSelector)return null;const A=h.open&&h.panelId===x;return(0,d.jsx)(m.slots.baseTooltip,(0,r.A)({title:f.current.getLocaleText("toolbarColumnsLabel"),enterDelay:1e3},m.slotProps?.baseTooltip,p,{children:(0,d.jsx)(m.slots.baseButton,(0,r.A)({ref:t,id:b,size:"small","aria-label":f.current.getLocaleText("toolbarColumnsLabel"),"aria-haspopup":"menu","aria-expanded":A,"aria-controls":A?x:void 0,startIcon:(0,d.jsx)(m.slots.columnSelectorIcon,{}),onClick:e=>{h.open&&h.openedPanelValue===i.y.columns?f.current.hidePreferences():f.current.showPreferences(i.y.columns,x,b),l.onClick?.(e)}},m.slotProps?.baseButton,l,{children:f.current.getLocaleText("toolbarColumns")}))}))}))},44784:(e,t,o)=>{o.d(t,{z:()=>A});var r=o(6614),l=o(7552),s=o(50089),n=o(29527),a=o(6679),i=o(29629),c=o(66765),u=o(33658),d=o(67129),p=o(76404),b=o(12274),x=o(83749),f=o(64565),m=o(76959),h=o(69500);const A=l.forwardRef((function(e,t){const{slotProps:o={}}=e,A=o.button||{},g=o.tooltip||{},v=(0,p.h)(),j=(0,f.A)(),y=(0,b.Nc)(v,u._v),k=(0,s.A)(),F=(0,s.A)(),[T,C]=l.useState(!1),L=l.useRef(null),w=(0,n.A)(t,L),P=[{icon:(0,h.jsx)(j.slots.densityCompactIcon,{}),label:v.current.getLocaleText("toolbarDensityCompact"),value:"compact"},{icon:(0,h.jsx)(j.slots.densityStandardIcon,{}),label:v.current.getLocaleText("toolbarDensityStandard"),value:"standard"},{icon:(0,h.jsx)(j.slots.densityComfortableIcon,{}),label:v.current.getLocaleText("toolbarDensityComfortable"),value:"comfortable"}],I=l.useMemo((()=>{switch(y){case"compact":return(0,h.jsx)(j.slots.densityCompactIcon,{});case"comfortable":return(0,h.jsx)(j.slots.densityComfortableIcon,{});default:return(0,h.jsx)(j.slots.densityStandardIcon,{})}}),[y,j]);if(j.disableDensitySelector)return null;const D=P.map(((e,t)=>(0,h.jsxs)(i.A,{onClick:()=>{return t=e.value,v.current.setDensity(t),void C(!1);var t},selected:e.value===y,children:[(0,h.jsx)(c.A,{children:e.icon}),e.label]},t)));return(0,h.jsxs)(l.Fragment,{children:[(0,h.jsx)(j.slots.baseTooltip,(0,r.A)({title:v.current.getLocaleText("toolbarDensityLabel"),enterDelay:1e3},j.slotProps?.baseTooltip,g,{children:(0,h.jsx)(j.slots.baseButton,(0,r.A)({ref:w,size:"small",startIcon:I,"aria-label":v.current.getLocaleText("toolbarDensityLabel"),"aria-haspopup":"menu","aria-expanded":T,"aria-controls":T?F:void 0,id:k,onClick:e=>{C((e=>!e)),A.onClick?.(e)}},j.slotProps?.baseButton,A,{children:v.current.getLocaleText("toolbarDensity")}))})),(0,h.jsx)(x.U,{open:T,target:L.current,onClose:()=>{C(!1)},position:"bottom-start",children:(0,h.jsx)(a.A,{id:F,className:m.x.menuList,"aria-labelledby":k,onKeyDown:e=>{"Tab"===e.key&&e.preventDefault(),(0,d.HF)(e.key)&&C(!1)},autoFocusItem:T,children:D})})]})}))},19271:(e,t,o)=>{o.d(t,{Q:()=>g});var r=o(6614),l=o(7552),s=o(51148),n=o(70799),a=o(50089),i=o(33283),c=o(80163),u=o(12274),d=o(2220),p=o(38577),b=o(48534),x=o(76404),f=o(64565),m=o(76959),h=o(69500);const A=(0,s.Ay)("ul",{name:"MuiDataGrid",slot:"ToolbarFilterList",overridesResolver:(e,t)=>t.toolbarFilterList})((({theme:e})=>({margin:e.spacing(1,1,.5),padding:e.spacing(0,1)}))),g=l.forwardRef((function(e,t){const{slotProps:o={}}=e,s=o.button||{},g=o.tooltip||{},v=o.badge||{},j=(0,x.h)(),y=(0,f.A)(),k=(0,u.Nc)(j,d.Ai),F=(0,u.Nc)(j,c.gv),T=(0,u.Nc)(j,p._),C=(e=>{const{classes:t}=e;return(0,n.A)({root:["toolbarFilterList"]},m.B,t)})(y),L=(0,a.A)(),w=(0,a.A)(),P=l.useMemo((()=>{if(T.open)return j.current.getLocaleText("toolbarFiltersTooltipHide");if(0===k.length)return j.current.getLocaleText("toolbarFiltersTooltipShow");const e=e=>F[e.field].filterOperators.find((t=>t.value===e.operator)).label||j.current.getLocaleText(`filterOperator${(0,i.A)(e.operator)}`).toString(),t=e=>{const{getValueAsString:t}=F[e.field].filterOperators.find((t=>t.value===e.operator));return t?t(e.value):e.value};return(0,h.jsxs)("div",{children:[j.current.getLocaleText("toolbarFiltersTooltipActive")(k.length),(0,h.jsx)(A,{className:C.root,ownerState:y,children:k.map(((o,l)=>(0,r.A)({},F[o.field]&&(0,h.jsx)("li",{children:`${F[o.field].headerName||o.field}\n                  ${e(o)}\n                  ${null!=o.value?t(o):""}`},l))))})]})}),[j,y,T.open,k,F,C]);if(y.disableColumnFilter)return null;const I=T.open&&T.panelId===w;return(0,h.jsx)(y.slots.baseTooltip,(0,r.A)({title:P,enterDelay:1e3},y.slotProps?.baseTooltip,g,{children:(0,h.jsx)(y.slots.baseButton,(0,r.A)({ref:t,id:L,size:"small","aria-label":j.current.getLocaleText("toolbarFiltersLabel"),"aria-controls":I?w:void 0,"aria-expanded":I,"aria-haspopup":!0,startIcon:(0,h.jsx)(y.slots.baseBadge,(0,r.A)({badgeContent:k.length,color:"primary"},y.slotProps?.baseBadge,v,{children:(0,h.jsx)(y.slots.openFilterButtonIcon,{})})),onClick:e=>{const{open:t,openedPanelValue:o}=T;t&&o===b.y.filters?j.current.hidePreferences():j.current.showPreferences(b.y.filters,w,L),s.onClick?.(e)}},y.slotProps?.baseButton,s,{children:j.current.getLocaleText("toolbarFilters")}))}))}))},26524:(e,t,o)=>{o.d(t,{b:()=>k});var r=o(6614),l=o(83673),s=o(7552),n=o(93878),a=o(1343),i=o(51148),c=o(86949),u=o(70799),d=o(76959),p=o(76404),b=o(64565),x=o(12274),f=o(2220),m=o(58766),h=o(69500);const A=["quickFilterParser","quickFilterFormatter","debounceMs","className"],g=e=>{const{classes:t}=e;return(0,u.A)({root:["toolbarQuickFilter"]},d.B,t)},v=(0,i.Ay)(a.A,{name:"MuiDataGrid",slot:"ToolbarQuickFilter",overridesResolver:(e,t)=>t.toolbarQuickFilter})((({theme:e})=>({width:"auto",paddingBottom:e.spacing(.5),"& input":{marginLeft:e.spacing(.5)},"& .MuiInput-underline:before":{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},'& input[type="search"]::-webkit-search-decoration,\n  & input[type="search"]::-webkit-search-cancel-button,\n  & input[type="search"]::-webkit-search-results-button,\n  & input[type="search"]::-webkit-search-results-decoration':{display:"none"}}))),j=e=>e.split(" ").filter((e=>""!==e)),y=e=>e.join(" ");function k(e){const t=(0,p.h)(),o=(0,b.A)(),a=g(o),i=(0,x.Nc)(t,f.q6),{quickFilterParser:u=j,quickFilterFormatter:d=y,debounceMs:k=o.filterDebounceMs,className:F}=e,T=(0,l.A)(e,A),[C,L]=s.useState((()=>d(i??[]))),w=s.useRef(i);s.useEffect((()=>{(0,m.Hv)(w.current,i)||(w.current=i,L((e=>(0,m.Hv)(u(e),i)?e:d(i??[]))))}),[i,d,u]);const P=s.useCallback((e=>{const o=u(e);w.current=o,t.current.setQuickFilterValues(o)}),[t,u]),I=s.useMemo((()=>(0,c.A)(P,k)),[P,k]);s.useEffect((()=>I.clear),[I]);const D=s.useCallback((e=>{const t=e.target.value;L(t),I(t)}),[I]),S=s.useCallback((()=>{L(""),P("")}),[P]);return(0,h.jsx)(v,(0,r.A)({as:o.slots.baseTextField,ownerState:o,variant:"standard",value:C,onChange:D,className:(0,n.A)(a.root,F),placeholder:t.current.getLocaleText("toolbarQuickFilterPlaceholder"),"aria-label":t.current.getLocaleText("toolbarQuickFilterLabel"),type:"search"},T,{InputProps:(0,r.A)({startAdornment:(0,h.jsx)(o.slots.quickFilterIcon,{fontSize:"small"}),endAdornment:(0,h.jsx)(o.slots.baseIconButton,(0,r.A)({"aria-label":t.current.getLocaleText("toolbarQuickFilterDeleteIconLabel"),size:"small",sx:[C?{visibility:"visible"}:{visibility:"hidden"}],onClick:S},o.slotProps?.baseIconButton,{children:(0,h.jsx)(o.slots.quickFilterClearIcon,{fontSize:"small"})}))},T.InputProps)},o.slotProps?.baseTextField))}}}]);
//# sourceMappingURL=6157.7518953e.chunk.js.map