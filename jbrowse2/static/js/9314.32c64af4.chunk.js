"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9314],{99314:(t,e,r)=>{r.r(e),r.d(e,{parseVcfBuffer:()=>a});var n=r(9502),s=r(6171),i=r(8543),o=r(32622);function a(t){const e=(0,o.P)(t),r=e.filter((t=>t.startsWith("#"))).join("\n"),a=e.filter((t=>!t.startsWith("#"))),c=new n.A({header:r}),u=new Set,p=[];let f=0;for(const t of a){const[e,r,n,o,a,m,l,b,w,...d]=t.split("\t"),O=Object.fromEntries(b?.split(";").map((t=>t.trim())).map((t=>{const[e,r="true"]=t.split("="),n=`INFO.${e.trim()}`;u.add(n);const s=r.trim();return[n,(0,i.E)(s)?+s:s]}))||[]);p.push({cellData:{CHROM:e,POS:+r,ID:n,REF:o,ALT:a,QUAL:(0,i.E)(m)?+m:m,FILTER:l,FORMAT:w,...O,...Object.fromEntries(c.samples.map(((t,e)=>[t,d[e]])))},feature:new s._({parser:c,variant:c.parseLine(t),id:`vcf-${f}`}).toJSON()}),f++}return{columns:["CHROM","POS","ID","REF","ALT","QUAL","FILTER",...u,"FORMAT",...c.samples].map((t=>({name:t}))),rowSet:{rows:p}}}},8543:(t,e,r)=>{function n(t){return"number"==typeof t?t-t==0:"string"==typeof t&&""!==t.trim()&&Number.isFinite(+t)}r.d(e,{E:()=>n})},32622:(t,e,r)=>{function n(t){return"+"===t?1:"-"===t?-1:void 0}function s(t){return new TextDecoder("utf8").decode(t).split(/\n|\r\n|\r/).map((t=>t.trim())).filter((t=>!!t))}r.d(e,{P:()=>s,c:()=>n})}}]);
//# sourceMappingURL=9314.32c64af4.chunk.js.map