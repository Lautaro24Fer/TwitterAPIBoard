import{r as w}from"./index.DhYZZe0J.js";/* empty css                      */var Y={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=w,lt=Symbol.for("react.element"),dt=Symbol.for("react.fragment"),ft=Object.prototype.hasOwnProperty,pt=ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yt={key:!0,ref:!0,__self:!0,__source:!0};function Z(t,e,s){var i,r={},a=null,n=null;s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(n=e.ref);for(i in e)ft.call(e,i)&&!yt.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lt,type:t,key:a,ref:n,props:r,_owner:pt.current}}M.Fragment=dt;M.jsx=Z;M.jsxs=Z;Y.exports=M;var l=Y.exports,Q=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},P=typeof window>"u"||"Deno"in globalThis;function R(){}function mt(t,e){return typeof t=="function"?t(e):t}function A(t){return typeof t=="number"&&t>=0&&t!==1/0}function tt(t,e){return Math.max(t+(e||0)-Date.now(),0)}function G(t,e){const{type:s="all",exact:i,fetchStatus:r,predicate:a,queryKey:n,stale:c}=t;if(n){if(i){if(e.queryHash!==N(n,e.options))return!1}else if(!x(e.queryKey,n))return!1}if(s!=="all"){const o=e.isActive();if(s==="active"&&!o||s==="inactive"&&o)return!1}return!(typeof c=="boolean"&&e.isStale()!==c||r&&r!==e.state.fetchStatus||a&&!a(e))}function $(t,e){const{exact:s,status:i,predicate:r,mutationKey:a}=t;if(a){if(!e.options.mutationKey)return!1;if(s){if(E(e.options.mutationKey)!==E(a))return!1}else if(!x(e.options.mutationKey,a))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function N(t,e){return(e?.queryKeyHashFn||E)(t)}function E(t){return JSON.stringify(t,(e,s)=>U(s)?Object.keys(s).sort().reduce((i,r)=>(i[r]=s[r],i),{}):s)}function x(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(s=>!x(t[s],e[s])):!1}function et(t,e){if(t===e)return t;const s=W(t)&&W(e);if(s||U(t)&&U(e)){const i=s?t:Object.keys(t),r=i.length,a=s?e:Object.keys(e),n=a.length,c=s?[]:{};let o=0;for(let d=0;d<n;d++){const h=s?d:a[d];(!s&&i.includes(h)||s)&&t[h]===void 0&&e[h]===void 0?(c[h]=void 0,o++):(c[h]=et(t[h],e[h]),c[h]===t[h]&&t[h]!==void 0&&o++)}return r===n&&o===r?t:c}return e}function I(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}function W(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function U(t){if(!z(t))return!1;const e=t.constructor;if(e===void 0)return!0;const s=e.prototype;return!(!z(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function z(t){return Object.prototype.toString.call(t)==="[object Object]"}function vt(t){return new Promise(e=>{setTimeout(e,t)})}function L(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?et(t,e):e}function gt(t,e,s=0){const i=[...t,e];return s&&i.length>s?i.slice(1):i}function bt(t,e,s=0){const i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var _=Symbol(),Ot=class extends Q{#t;#e;#i;constructor(){super(),this.#i=t=>{if(!P&&window.addEventListener){const e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(e=>{typeof e=="boolean"?this.setFocused(e):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},K=new Ot,wt=class extends Q{#t=!0;#e;#i;constructor(){super(),this.#i=t=>{if(!P&&window.addEventListener){const e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#t!==t&&(this.#t=t,this.listeners.forEach(s=>{s(t)}))}isOnline(){return this.#t}},j=new wt;function Rt(t){return Math.min(1e3*2**t,3e4)}function st(t){return(t??"online")==="online"?j.isOnline():!0}var it=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function q(t){return t instanceof it}function rt(t){let e=!1,s=0,i=!1,r,a,n;const c=new Promise((f,v)=>{a=f,n=v}),o=f=>{i||(m(new it(f)),t.abort?.())},d=()=>{e=!0},h=()=>{e=!1},S=()=>K.isFocused()&&(t.networkMode==="always"||j.isOnline())&&t.canRun(),u=()=>st(t.networkMode)&&t.canRun(),y=f=>{i||(i=!0,t.onSuccess?.(f),r?.(),a(f))},m=f=>{i||(i=!0,t.onError?.(f),r?.(),n(f))},p=()=>new Promise(f=>{r=v=>{(i||S())&&f(v)},t.onPause?.()}).then(()=>{r=void 0,i||t.onContinue?.()}),b=()=>{if(i)return;let f;try{f=t.fn()}catch(v){f=Promise.reject(v)}Promise.resolve(f).then(y).catch(v=>{if(i)return;const F=t.retry??(P?0:3),C=t.retryDelay??Rt,B=typeof C=="function"?C(s,v):C,O=F===!0||typeof F=="number"&&s<F||typeof F=="function"&&F(s,v);if(e||!O){m(v);return}s++,t.onFail?.(s,v),vt(B).then(()=>S()?void 0:p()).then(()=>{e?m(v):b()})})};return{promise:c,cancel:o,continue:()=>(r?.(),c),cancelRetry:d,continueRetry:h,canStart:u,start:()=>(u()?b():p().then(b),c)}}function Ft(){let t=[],e=0,s=u=>{u()},i=u=>{u()},r=u=>setTimeout(u,0);const a=u=>{r=u},n=u=>{let y;e++;try{y=u()}finally{e--,e||d()}return y},c=u=>{e?t.push(u):r(()=>{s(u)})},o=u=>(...y)=>{c(()=>{u(...y)})},d=()=>{const u=t;t=[],u.length&&r(()=>{i(()=>{u.forEach(y=>{s(y)})})})};return{batch:n,batchCalls:o,schedule:c,setNotifyFunction:u=>{s=u},setBatchNotifyFunction:u=>{i=u},setScheduler:a}}var g=Ft(),nt=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),A(this.gcTime)&&(this.#t=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(P?1/0:5*60*1e3))}clearGcTimeout(){this.#t&&(clearTimeout(this.#t),this.#t=void 0)}},Ct=class extends nt{#t;#e;#i;#s;#a;#n;constructor(t){super(),this.#n=!1,this.#a=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#i=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#t=t.state||St(this.options),this.state=this.#t,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.#a,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#i.remove(this)}setData(t,e){const s=L(this.state.data,t,this.options);return this.#r({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#r({type:"setState",state:t,setStateOptions:e})}cancel(t){const e=this.#s?.promise;return this.#s?.cancel(t),e?e.then(R).catch(R):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!tt(this.state.dataUpdatedAt,t)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#s?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#s?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#i.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#s&&(this.#n?this.#s.cancel({revert:!0}):this.#s.cancelRetry()),this.scheduleGc()),this.#i.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#r({type:"invalidate"})}fetch(t,e){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#s)return this.#s.continueRetry(),this.#s.promise}if(t&&this.setOptions(t),!this.options.queryFn){const o=this.observers.find(d=>d.options.queryFn);o&&this.setOptions(o.options)}const s=new AbortController,i={queryKey:this.queryKey,meta:this.meta},r=o=>{Object.defineProperty(o,"signal",{enumerable:!0,get:()=>(this.#n=!0,s.signal)})};r(i);const a=()=>!this.options.queryFn||this.options.queryFn===_?Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)):(this.#n=!1,this.options.persister?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i)),n={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:a};r(n),this.options.behavior?.onFetch(n,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==n.fetchOptions?.meta)&&this.#r({type:"fetch",meta:n.fetchOptions?.meta});const c=o=>{q(o)&&o.silent||this.#r({type:"error",error:o}),q(o)||(this.#i.config.onError?.(o,this),this.#i.config.onSettled?.(this.state.data,o,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#s=rt({fn:n.fetchFn,abort:s.abort.bind(s),onSuccess:o=>{if(o===void 0){c(new Error(`${this.queryHash} data is undefined`));return}this.setData(o),this.#i.config.onSuccess?.(o,this),this.#i.config.onSettled?.(o,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:c,onFail:(o,d)=>{this.#r({type:"failed",failureCount:o,error:d})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:n.options.retry,retryDelay:n.options.retryDelay,networkMode:n.options.networkMode,canRun:()=>!0}),this.#s.start()}#r(t){const e=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...at(s.data,this.options),fetchMeta:t.meta??null};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return q(i)&&i.revert&&this.#e?{...this.#e,fetchStatus:"idle"}:{...s,error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=e(this.state),g.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),this.#i.notify({query:this,type:"updated",action:t})})}};function at(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:st(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function St(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,s=e!==void 0,i=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var Pt=class extends Q{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){const i=e.queryKey,r=e.queryHash??N(i,e);let a=this.get(r);return a||(a=new Ct({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){g.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){const e={exact:!0,...t};return this.getAll().find(s=>G(e,s))}findAll(t={}){const e=this.getAll();return Object.keys(t).length>0?e.filter(s=>G(t,s)):e}notify(t){g.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){g.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){g.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Et=class extends nt{#t;#e;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.mutationCache,this.#t=[],this.state=t.state||xt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#e.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){this.#i=rt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(i,r)=>{this.#s({type:"failed",failureCount:i,error:r})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});const e=this.state.status==="pending",s=!this.#i.canStart();try{if(!e){this.#s({type:"pending",variables:t,isPaused:s}),await this.#e.config.onMutate?.(t,this);const r=await this.options.onMutate?.(t);r!==this.state.context&&this.#s({type:"pending",context:r,variables:t,isPaused:s})}const i=await this.#i.start();return await this.#e.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#e.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#s({type:"success",data:i}),i}catch(i){try{throw await this.#e.config.onError?.(i,t,this.state.context,this),await this.options.onError?.(i,t,this.state.context),await this.#e.config.onSettled?.(void 0,i,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,i,t,this.state.context),i}finally{this.#s({type:"error",error:i})}}finally{this.#e.runNext(this)}}#s(t){const e=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=e(this.state),g.batch(()=>{this.#t.forEach(s=>{s.onMutationUpdate(t)}),this.#e.notify({mutation:this,type:"updated",action:t})})}};function xt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Qt=class extends Q{constructor(t={}){super(),this.config=t,this.#t=new Map,this.#e=Date.now()}#t;#e;build(t,e,s){const i=new Et({mutationCache:this,mutationId:++this.#e,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){const e=D(t),s=this.#t.get(e)??[];s.push(t),this.#t.set(e,s),this.notify({type:"added",mutation:t})}remove(t){const e=D(t);if(this.#t.has(e)){const s=this.#t.get(e)?.filter(i=>i!==t);s&&(s.length===0?this.#t.delete(e):this.#t.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){const e=this.#t.get(D(t))?.find(s=>s.state.status==="pending");return!e||e===t}runNext(t){return this.#t.get(D(t))?.find(s=>s!==t&&s.state.isPaused)?.continue()??Promise.resolve()}clear(){g.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#t.values()].flat()}find(t){const e={exact:!0,...t};return this.getAll().find(s=>$(e,s))}findAll(t={}){return this.getAll().filter(e=>$(t,e))}notify(t){g.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){const t=this.getAll().filter(e=>e.state.isPaused);return g.batch(()=>Promise.all(t.map(e=>e.continue().catch(R))))}};function D(t){return t.options.scope?.id??String(t.mutationId)}function Dt(t){return{onFetch:(e,s)=>{const i=async()=>{const r=e.options,a=e.fetchOptions?.meta?.fetchMore?.direction,n=e.state.data?.pages||[],c=e.state.data?.pageParams||[],o={pages:[],pageParams:[]};let d=!1;const h=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(e.signal.aborted?d=!0:e.signal.addEventListener("abort",()=>{d=!0}),e.signal)})},S=e.options.queryFn&&e.options.queryFn!==_?e.options.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`)),u=async(m,p,b)=>{if(d)return Promise.reject();if(p==null&&m.pages.length)return Promise.resolve(m);const f={queryKey:e.queryKey,pageParam:p,direction:b?"backward":"forward",meta:e.options.meta};h(f);const v=await S(f),{maxPages:F}=e.options,C=b?bt:gt;return{pages:C(m.pages,v,F),pageParams:C(m.pageParams,p,F)}};let y;if(a&&n.length){const m=a==="backward",p=m?jt:V,b={pages:n,pageParams:c},f=p(r,b);y=await u(b,f,m)}else{y=await u(o,c[0]??r.initialPageParam);const m=t??n.length;for(let p=1;p<m;p++){const b=V(r,y);y=await u(y,b)}}return y};e.options.persister?e.fetchFn=()=>e.options.persister?.(i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=i}}}function V(t,{pages:e,pageParams:s}){const i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}function jt(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}var Mt=class{#t;#e;#i;#s;#a;#n;#r;#o;constructor(t={}){this.#t=t.queryCache||new Pt,this.#e=t.mutationCache||new Qt,this.#i=t.defaultOptions||{},this.#s=new Map,this.#a=new Map,this.#n=0}mount(){this.#n++,this.#n===1&&(this.#r=K.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#t.onFocus())}),this.#o=j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#n--,this.#n===0&&(this.#r?.(),this.#r=void 0,this.#o?.(),this.#o=void 0)}isFetching(t){return this.#t.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#e.findAll({...t,status:"pending"}).length}getQueryData(t){const e=this.defaultQueryOptions({queryKey:t});return this.#t.get(e.queryHash)?.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const s=this.defaultQueryOptions(t),i=this.#t.build(this,s);return t.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#t.findAll(t).map(({queryKey:e,state:s})=>{const i=s.data;return[e,i]})}setQueryData(t,e,s){const i=this.defaultQueryOptions({queryKey:t}),a=this.#t.get(i.queryHash)?.state.data,n=mt(e,a);if(n!==void 0)return this.#t.build(this,i).setData(n,{...s,manual:!0})}setQueriesData(t,e,s){return g.batch(()=>this.#t.findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t){const e=this.defaultQueryOptions({queryKey:t});return this.#t.get(e.queryHash)?.state}removeQueries(t){const e=this.#t;g.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=this.#t,i={type:"active",...t};return g.batch(()=>(s.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const s={revert:!0,...e},i=g.batch(()=>this.#t.findAll(t).map(r=>r.cancel(s)));return Promise.all(i).then(R).catch(R)}invalidateQueries(t={},e={}){return g.batch(()=>{if(this.#t.findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){const s={...e,cancelRefetch:e?.cancelRefetch??!0},i=g.batch(()=>this.#t.findAll(t).filter(r=>!r.isDisabled()).map(r=>{let a=r.fetch(void 0,s);return s.throwOnError||(a=a.catch(R)),r.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(i).then(R)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=this.#t.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(R).catch(R)}fetchInfiniteQuery(t){return t.behavior=Dt(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(R).catch(R)}resumePausedMutations(){return j.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#i}setDefaultOptions(t){this.#i=t}setQueryDefaults(t,e){this.#s.set(E(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...this.#s.values()];let s={};return e.forEach(i=>{x(t,i.queryKey)&&(s={...s,...i.defaultOptions})}),s}setMutationDefaults(t,e){this.#a.set(E(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...this.#a.values()];let s={};return e.forEach(i=>{x(t,i.mutationKey)&&(s={...s,...i.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...this.#i.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=N(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===_&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#i.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#t.clear(),this.#e.clear()}},Tt=class extends Q{constructor(t,e){super(),this.options=e,this.#t=t,this.#r=null,this.bindMethods(),this.setOptions(e)}#t;#e=void 0;#i=void 0;#s=void 0;#a;#n;#r;#o;#d;#f;#h;#c;#u;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),J(this.#e,this.options)?this.#l():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return k(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return k(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#O(),this.#e.removeObserver(this)}setOptions(t,e){const s=this.options,i=this.#e;if(this.options=this.#t.defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.#w(),this.#e.setOptions(this.options),s._defaulted&&!I(this.options,s)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const r=this.hasListeners();r&&X(this.#e,i,this.options,s)&&this.#l(),this.updateResult(e),r&&(this.#e!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.#y();const a=this.#m();r&&(this.#e!==i||this.options.enabled!==s.enabled||a!==this.#u)&&this.#v(a)}getOptimisticResult(t){const e=this.#t.getQueryCache().build(this.#t,t),s=this.createResult(e,t);return At(this,s)&&(this.#s=s,this.#n=this.options,this.#a=this.#e.state),s}getCurrentResult(){return this.#s}trackResult(t,e){const s={};return Object.keys(t).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),e?.(i),t[i])})}),s}trackProp(t){this.#p.add(t)}getCurrentQuery(){return this.#e}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#t.defaultQueryOptions(t),s=this.#t.getQueryCache().build(this.#t,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#l({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#s))}#l(t){this.#w();let e=this.#e.fetch(this.options,t);return t?.throwOnError||(e=e.catch(R)),e}#y(){if(this.#b(),P||this.#s.isStale||!A(this.options.staleTime))return;const e=tt(this.#s.dataUpdatedAt,this.options.staleTime)+1;this.#h=setTimeout(()=>{this.#s.isStale||this.updateResult()},e)}#m(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(t){this.#O(),this.#u=t,!(P||this.options.enabled===!1||!A(this.#u)||this.#u===0)&&(this.#c=setInterval(()=>{(this.options.refetchIntervalInBackground||K.isFocused())&&this.#l()},this.#u))}#g(){this.#y(),this.#v(this.#m())}#b(){this.#h&&(clearTimeout(this.#h),this.#h=void 0)}#O(){this.#c&&(clearInterval(this.#c),this.#c=void 0)}createResult(t,e){const s=this.#e,i=this.options,r=this.#s,a=this.#a,n=this.#n,o=t!==s?t.state:this.#i,{state:d}=t;let h={...d},S=!1,u;if(e._optimisticResults){const O=this.hasListeners(),T=!O&&J(t,e),ht=O&&X(t,s,e,i);(T||ht)&&(h={...h,...at(d.data,t.options)}),e._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:y,errorUpdatedAt:m,status:p}=h;if(e.select&&h.data!==void 0)if(r&&h.data===a?.data&&e.select===this.#o)u=this.#d;else try{this.#o=e.select,u=e.select(h.data),u=L(r?.data,u,e),this.#d=u,this.#r=null}catch(O){this.#r=O}else u=h.data;if(e.placeholderData!==void 0&&u===void 0&&p==="pending"){let O;if(r?.isPlaceholderData&&e.placeholderData===n?.placeholderData)O=r.data;else if(O=typeof e.placeholderData=="function"?e.placeholderData(this.#f?.state.data,this.#f):e.placeholderData,e.select&&O!==void 0)try{O=e.select(O),this.#r=null}catch(T){this.#r=T}O!==void 0&&(p="success",u=L(r?.data,O,e),S=!0)}this.#r&&(y=this.#r,u=this.#d,m=Date.now(),p="error");const b=h.fetchStatus==="fetching",f=p==="pending",v=p==="error",F=f&&b,C=u!==void 0;return{status:p,fetchStatus:h.fetchStatus,isPending:f,isSuccess:p==="success",isError:v,isInitialLoading:F,isLoading:F,data:u,dataUpdatedAt:h.dataUpdatedAt,error:y,errorUpdatedAt:m,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>o.dataUpdateCount||h.errorUpdateCount>o.errorUpdateCount,isFetching:b,isRefetching:b&&!f,isLoadingError:v&&!C,isPaused:h.fetchStatus==="paused",isPlaceholderData:S,isRefetchError:v&&C,isStale:H(t,e),refetch:this.refetch}}updateResult(t){const e=this.#s,s=this.createResult(this.#e,this.options);if(this.#a=this.#e.state,this.#n=this.options,this.#a.data!==void 0&&(this.#f=this.#e),I(s,e))return;this.#s=s;const i={},r=()=>{if(!e)return!0;const{notifyOnChangeProps:a}=this.options,n=typeof a=="function"?a():a;if(n==="all"||!n&&!this.#p.size)return!0;const c=new Set(n??this.#p);return this.options.throwOnError&&c.add("error"),Object.keys(this.#s).some(o=>{const d=o;return this.#s[d]!==e[d]&&c.has(d)})};t?.listeners!==!1&&r()&&(i.listeners=!0),this.#R({...i,...t})}#w(){const t=this.#t.getQueryCache().build(this.#t,this.options);if(t===this.#e)return;const e=this.#e;this.#e=t,this.#i=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#R(t){g.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#s)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function qt(t,e){return e.enabled!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function J(t,e){return qt(t,e)||t.state.data!==void 0&&k(t,e,e.refetchOnMount)}function k(t,e,s){if(e.enabled!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&H(t,e)}return!1}function X(t,e,s,i){return(t!==e||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&H(t,s)}function H(t,e){return e.enabled!==!1&&t.isStaleByTime(e.staleTime)}function At(t,e){return!I(t.getCurrentResult(),e)}var ot=w.createContext(void 0),It=t=>{const e=w.useContext(ot);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},Ut=({client:t,children:e})=>(w.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),l.jsx(ot.Provider,{value:t,children:e})),ut=w.createContext(!1),Lt=()=>w.useContext(ut);ut.Provider;function kt(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Nt=w.createContext(kt()),_t=()=>w.useContext(Nt);function Kt(t,e){return typeof t=="function"?t(...e):!!t}var Ht=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},Bt=t=>{w.useEffect(()=>{t.clearReset()},[t])},Gt=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&Kt(s,[t.error,i]),$t=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},Wt=(t,e)=>t?.suspense&&e.isPending,zt=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function Vt(t,e,s){const i=It(),r=Lt(),a=_t(),n=i.defaultQueryOptions(t);n._optimisticResults=r?"isRestoring":"optimistic",$t(n),Ht(n,a),Bt(a);const[c]=w.useState(()=>new e(i,n)),o=c.getOptimisticResult(n);if(w.useSyncExternalStore(w.useCallback(d=>{const h=r?()=>{}:c.subscribe(g.batchCalls(d));return c.updateResult(),h},[c,r]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),w.useEffect(()=>{c.setOptions(n,{listeners:!1})},[n,c]),Wt(n,o))throw zt(n,c,a);if(Gt({result:o,errorResetBoundary:a,throwOnError:n.throwOnError,query:i.getQueryCache().get(n.queryHash)}))throw o.error;return n.notifyOnChangeProps?o:c.trackResult(o)}function Jt(t,e){return Vt(t,Tt)}function Xt(){return l.jsxs("div",{className:"absolute -translate-x-1/2 left-1/2 mt-20 flex flex-col gap-4 items-center w-max",children:[l.jsx("div",{className:"spinner"}),l.jsx("h3",{className:"text-lg",children:"Loading tweet. Wait a moment"})]})}function Yt({user:t}){const[e,s]=w.useState(!1),i=()=>{s(!0)};return l.jsxs("div",{className:"h-full w-full",children:[l.jsx("img",{src:t.user.profile_banner_url,alt:t.user.name,onLoad:i,className:"object-cover w-full h-full",style:{opacity:e?"1":"0",transition:"all .2s ease-in-out",borderRadius:"2rem 2rem 0 0",position:e?"relative":"absolute"}}),!e&&l.jsx("section",{className:"w-full h-full flex justify-center items-center",children:l.jsx("div",{className:"spinner"})})]})}function Zt({user:t}){return l.jsxs(l.Fragment,{children:[l.jsx("header",{className:"relative h-2/5 w-full",children:l.jsx(Yt,{user:t})}),l.jsx("section",{className:"h-full w-full flex justify-center pt-10 ",children:l.jsxs("article",{className:"w-3/4 h-max p-6 rounded-2xl bg-white shadow-lg shadow-slate-500",children:[l.jsxs("section",{className:"flex gap-2 items-center",children:[l.jsx("img",{src:t.user.profile_pic_url,alt:t.user.name,className:"h-10 w-10 rounded-full"}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold userText",children:t.user.name}),l.jsxs("p",{className:"font-light text-grey userText",children:["@",t.user.username]})]})]}),l.jsx("p",{children:t.text})]})})]})}function te({user:t}){const e=async()=>{const n=`https://twitter154.p.rapidapi.com/tweet/details?tweet_id=${t.tweetExID}`,c={method:"GET",headers:{"X-RapidAPI-Key":"f21dbb1ea7mshbc36ea4c31da0e2p1012b5jsne3e9c888090a","X-RapidAPI-Host":"twitter154.p.rapidapi.com"}};try{return await(await fetch(n,c)).text()}catch(o){return o}},{isLoading:s,error:i,data:r,isFetching:a}=Jt({queryKey:["tweet"],queryFn:e});return l.jsxs(l.Fragment,{children:[i&&l.jsx("h1",{children:"Error fetching data"}),s||a?l.jsx(Xt,{}):l.jsx(Zt,{user:JSON.parse(r)})]})}const ee=new Mt;function re({user:t}){return l.jsx(Ut,{client:ee,children:l.jsx(te,{user:t})})}export{re as default};