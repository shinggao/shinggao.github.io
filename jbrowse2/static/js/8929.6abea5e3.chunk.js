"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5904,8929],{98929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(99546),s=n(99834);function r(e,t,n,a,s,r,c,o,i){return{qname:e,qstart:t,qend:n,tname:s,tstart:r,tend:c,strand:"-"===a?-1:1,extra:{numMatches:i,blockLen:Math.max(n-t,c-r),mappingQual:0,cg:o}}}var c=n(35904);class o extends c.default{async setupPre(e){const t=(0,s.openLocation)(this.getConf("chainLocation"),this.pluginManager);return function(e){let t="",n=0,a=0,s="",c="",o="",i=0,u=0,l=0,m="";const f=[];let d=0;const p=new TextDecoder("utf8");for(;d<e.length;){const h=e.indexOf("\n",d);if(-1===h)break;const g=e.subarray(d,h);d=h+1;const b=p.decode(g).trim().replaceAll(" ","\t").split("\t");if("chain"===b[0]){if(m&&f.push(r(s,i,u,o,t,n,a,m,l)),t=b[2],n=+b[5],a=+b[6],s=b[7],c=b[8],o=b[9],i=+b[10],u=+b[11],"-"===o){const e=i;i=+c-u,u=+c-e}l=0,m=""}else{const e=+b[0]||0,t=b.length>1?+b[1]:0,n=b.length>2?+b[2]:0;0!==e&&(l+=+e,m+=`${e}M`),0!==n&&(m+=`${n}I`),0!==t&&(m+=`${t}D`)}}return m&&r(s,i,u,o,t,n,a,m,l),f}(await(0,a.fetchAndMaybeUnzip)(t,e))}}},35904:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(68584),s=n(46377),r=n(99546),c=n(99834),o=n(32595),i=n(66885),u=n(42781),l=n(72147),m=n(78054);function f(e){const[t,n]=e.reduce((([e,t],[n,a])=>[e+n*a,t+a]),[0,0]);return t/n}const{parseCigar:d}=u.aF;class p extends s.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.pluginManager,n=(0,c.openLocation)(this.getConf("pafLocation"),t),a=await(0,r.fetchAndMaybeUnzip)(n,e);return(0,m.PX)(a,m.xI)}async hasDataForRefName(){return!0}getAssemblyNames(){const e=this.getConf("assemblyNames");return 0===e.length?[this.getConf("queryAssembly"),this.getConf("targetAssembly")]:e}async getRefNames(e={}){const t=e.regions?.[0].assemblyName,n=await this.setup(e),a=this.getAssemblyNames().indexOf(t);if(-1!==a){const e=new Set;for(const t of n)e.add(0===a?t.qname:t.tname);return[...e]}return console.warn("Unable to do ref renaming on adapter"),[]}getFeatures(e,t={}){return(0,i.ObservableCreate)((async n=>{let s=await this.setup(t);const{config:r}=t;r&&"meanQueryIdentity"===(0,a.readConfObject)(r,"colorBy")&&(s=function(e){const t={};for(const n of e){const e=`${n.qname}-${n.tname}`;t[e]||(t[e]={quals:[],len:[]}),t[e].quals.push(n.extra.mappingQual||1),t[e].len.push(n.extra.blockLen||1)}const n=Object.fromEntries(Object.entries(t).map((([e,t])=>[e,f((0,m.yU)(t.quals,t.len))])));for(const t of e){const e=`${t.qname}-${t.tname}`;t.extra.meanScore=n[e]}let a=1e4,s=0;for(const t of e)a=Math.min(t.extra.meanScore||0,a),s=Math.max(t.extra.meanScore||0,s);for(const t of e){const e=t.extra.meanScore||0;t.extra.meanScore=(e-a)/(s-a)}return e}(s));const c=this.getAssemblyNames(),{start:i,end:u,refName:p,assemblyName:h}=e,g=c.indexOf(h),b=0===g;-1===g&&(console.warn(`${h} not found in this adapter`),n.complete());for(let e=0;e<s.length;e++){const t=s[e];let a=0,r=0,f="",g="",y=0,x=0;b?(a=t.qstart,r=t.qend,f=t.qname,g=t.tname,y=t.tstart,x=t.tend):(a=t.tstart,r=t.tend,f=t.tname,g=t.qname,y=t.qstart,x=t.qend);const{extra:q,strand:w}=t;if(f===p&&(0,o.R6)(i,u,a,r)){const{numMatches:t=0,blockLen:s=1,cg:o,...i}=q;let u=q.cg;q.cg&&(b&&-1===w?u=(0,m.qm)(d(q.cg)).join(""):b&&(u=(0,m.gJ)(q.cg))),n.next(new l.A({uniqueId:e+h,assemblyName:h,start:a,end:r,type:"match",refName:f,strand:w,...i,CIGAR:u,syntenyId:e,identity:t/s,numMatches:t,blockLen:s,mate:{start:y,end:x,refName:g,assemblyName:c[+b]}}))}}n.complete()}))}freeResources(){}}},72147:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(99546),s=n(42781);const{getMismatches:r}=s.aF;class c extends a.SimpleFeature{get(e){return"mismatches"===e?r(this.get("CIGAR")):super.get(e)}}},78054:(e,t,n)=>{n.d(t,{PX:()=>o,TA:()=>r,fY:()=>s,gJ:()=>l,qm:()=>u,xI:()=>i,yU:()=>c});var a=n(99546);function s(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,n,a,s,r,c]=e.split("\t");return[s,{refName:t,start:+n,end:+a,score:+r,name:s,strand:"-"===c?-1:1}]})))}async function r(e,t){const n=await(0,a.fetchAndMaybeUnzip)(e,t);return new TextDecoder("utf8").decode(n)}function c(e,t){return e.map(((e,n)=>[e,t[n]]))}function o(e,t){let n=0;const a=[],s=new TextDecoder("utf8");for(;n<e.length;){const r=e.indexOf("\n",n);if(-1===r)break;const c=e.subarray(n,r),o=s.decode(c).trim();if(o){const e=t(o);e&&a.push(e)}n=r+1}return a}function i(e){const[t,,n,a,s,r,,c,o,i,u,l,...m]=e.split("\t");return{tname:r,tstart:+c,tend:+o,qname:t,qstart:+n,qend:+a,strand:"-"===s?-1:1,extra:{numMatches:+i,blockLen:+u,mappingQual:+l,...Object.fromEntries(m.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function u(e){const t=[];for(let n=e.length-2;n>=0;n-=2){t.push(e[n]);const a=e[n+1];"D"===a?t.push("I"):"I"===a?t.push("D"):t.push(a)}return t}function l(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}}}]);
//# sourceMappingURL=8929.6abea5e3.chunk.js.map