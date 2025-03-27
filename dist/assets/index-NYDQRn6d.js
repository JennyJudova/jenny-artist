(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,q=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),B=new WeakMap;let tt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=B.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&B.set(e,t))}return t}toString(){return this.cssText}};const P=i=>new tt(typeof i=="string"?i:i+"",void 0,j),z=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[a+1],i[0]);return new tt(e,i,j)},st=(i,t)=>{if(q)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=M.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},W=q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return P(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nt,defineProperty:lt,getOwnPropertyDescriptor:ct,getOwnPropertyNames:pt,getOwnPropertySymbols:dt,getPrototypeOf:mt}=Object,H=globalThis,V=H.trustedTypes,ht=V?V.emptyScript:"",ut=H.reactiveElementPolyfillSupport,_=(i,t)=>i,L={toAttribute(i,t){switch(t){case Boolean:i=i?ht:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},et=(i,t)=>!nt(i,t),G={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&lt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:a}=ct(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return o?.call(this)},set(s){const m=o?.call(this);a.call(this,s),this.requestUpdate(t,m,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,r=[...pt(e),...dt(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(W(o))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return st(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:L).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:L;this._$Em=o,this[o]=s.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??et)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,ut?.({ReactiveElement:w}),(H.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,U=D.trustedTypes,K=U?U.createPolicy("lit-html",{createHTML:i=>i}):void 0,rt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+f,gt=`<${ot}>`,x=document,E=()=>x.createComment(""),S=i=>i===null||typeof i!="object"&&typeof i!="function",F=Array.isArray,ft=i=>F(i)||typeof i?.[Symbol.iterator]=="function",R=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,J=/>/g,b=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,Q=/"/g,it=/^(?:script|style|textarea|title)$/i,yt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),h=yt(1),$=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),X=new WeakMap,v=x.createTreeWalker(x,129);function at(i,t){if(!F(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(t):t}const bt=(i,t)=>{const e=i.length-1,r=[];let o,a=t===2?"<svg>":t===3?"<math>":"",s=A;for(let m=0;m<e;m++){const n=i[m];let c,d,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,d=s.exec(n),d!==null);)u=s.lastIndex,s===A?d[1]==="!--"?s=Y:d[1]!==void 0?s=J:d[2]!==void 0?(it.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=b):d[3]!==void 0&&(s=b):s===b?d[0]===">"?(s=o??A,l=-1):d[1]===void 0?l=-2:(l=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?b:d[3]==='"'?Q:Z):s===Q||s===Z?s=b:s===Y||s===J?s=A:(s=b,o=void 0);const g=s===b&&i[m+1].startsWith("/>")?" ":"";a+=s===A?n+gt:l>=0?(r.push(c),n.slice(0,l)+rt+n.slice(l)+f+g):n+f+(l===-2?m:g)}return[at(i,a+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class T{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let a=0,s=0;const m=t.length-1,n=this.parts,[c,d]=bt(t,e);if(this.el=T.createElement(c,r),v.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(o=v.nextNode())!==null&&n.length<m;){if(o.nodeType===1){if(o.hasAttributes())for(const l of o.getAttributeNames())if(l.endsWith(rt)){const u=d[s++],g=o.getAttribute(l).split(f),C=/([.?@])?(.*)/.exec(u);n.push({type:1,index:a,name:C[2],strings:g,ctor:C[1]==="."?xt:C[1]==="?"?wt:C[1]==="@"?$t:N}),o.removeAttribute(l)}else l.startsWith(f)&&(n.push({type:6,index:a}),o.removeAttribute(l));if(it.test(o.tagName)){const l=o.textContent.split(f),u=l.length-1;if(u>0){o.textContent=U?U.emptyScript:"";for(let g=0;g<u;g++)o.append(l[g],E()),v.nextNode(),n.push({type:2,index:++a});o.append(l[u],E())}}}else if(o.nodeType===8)if(o.data===ot)n.push({type:2,index:a});else{let l=-1;for(;(l=o.data.indexOf(f,l+1))!==-1;)n.push({type:7,index:a}),l+=f.length-1}a++}}static createElement(t,e){const r=x.createElement("template");return r.innerHTML=t,r}}function k(i,t,e=i,r){if(t===$)return t;let o=r!==void 0?e._$Co?.[r]:e._$Cl;const a=S(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=o:e._$Cl=o),o!==void 0&&(t=k(i,o._$AS(i,t.values),o,r)),t}class vt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??x).importNode(e,!0);v.currentNode=o;let a=v.nextNode(),s=0,m=0,n=r[0];for(;n!==void 0;){if(s===n.index){let c;n.type===2?c=new O(a,a.nextSibling,this,t):n.type===1?c=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(c=new kt(a,this,t)),this._$AV.push(c),n=r[++m]}s!==n?.index&&(a=v.nextNode(),s++)}return v.currentNode=x,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),S(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==$&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=T.createElement(at(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const a=new vt(o,this),s=a.u(this.options);a.p(e),this.T(s),this._$AH=a}}_$AC(t){let e=X.get(t.strings);return e===void 0&&X.set(t.strings,e=new T(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const a of t)o===e.length?e.push(r=new O(this.O(E()),this.O(E()),this,this.options)):r=e[o],r._$AI(a),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,a){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,o){const a=this.strings;let s=!1;if(a===void 0)t=k(this,t,e,0),s=!S(t)||t!==this._$AH&&t!==$,s&&(this._$AH=t);else{const m=t;let n,c;for(t=a[0],n=0;n<a.length-1;n++)c=k(this,m[r+n],e,n),c===$&&(c=this._$AH[n]),s||=!S(c)||c!==this._$AH[n],c===p?t=p:t!==p&&(t+=(c??"")+a[n+1]),this._$AH[n]=c}s&&!o&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class wt extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class $t extends N{constructor(t,e,r,o,a){super(t,e,r,o,a),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??p)===$)return;const r=this._$AH,o=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const At=D.litHtmlPolyfillSupport;At?.(T,O),(D.litHtmlVersions??=[]).push("3.2.1");const _t=(i,t,e)=>{const r=e?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const a=e?.renderBefore??null;r._$litPart$=o=new O(t.insertBefore(E(),a),a,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}}y._$litElement$=!0,y.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:y});const Et=globalThis.litElementPolyfillSupport;Et?.({LitElement:y});(globalThis.litElementVersions??=[]).push("4.1.1");const I='*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%;margin-right:auto;margin-left:auto;padding-right:2rem;padding-left:2rem}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.static{position:static!important}.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.inset-0{inset:0!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.mb-12{margin-bottom:3rem!important}.mb-4{margin-bottom:1rem!important}.mb-8{margin-bottom:2rem!important}.block{display:block!important}.inline-block{display:inline-block!important}.inline{display:inline!important}.flex{display:flex!important}.grid{display:grid!important}.aspect-square{aspect-ratio:1 / 1!important}.h-24{height:6rem!important}.h-\\[350px\\]{height:350px!important}.h-full{height:100%!important}.h-screen{height:100vh!important}.min-h-screen{min-height:100vh!important}.w-full{width:100%!important}.max-w-2xl{max-width:42rem!important}.max-w-xl{max-width:36rem!important}.cursor-pointer{cursor:pointer!important}.resize{resize:both!important}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))!important}.items-center{align-items:center!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-8{gap:2rem!important}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0 !important;margin-right:calc(1rem * var(--tw-space-x-reverse))!important;margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))!important}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(.75rem * var(--tw-space-y-reverse))!important}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1rem * var(--tw-space-y-reverse))!important}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))!important}.overflow-hidden{overflow:hidden!important}.rounded-full{border-radius:9999px!important}.border{border-width:1px!important}.object-cover{-o-object-fit:cover!important;object-fit:cover!important}.p-2{padding:.5rem!important}.p-3{padding:.75rem!important}.px-3{padding-left:.75rem!important;padding-right:.75rem!important}.px-4{padding-left:1rem!important;padding-right:1rem!important}.px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-8{padding-left:2rem!important;padding-right:2rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-16{padding-top:4rem!important;padding-bottom:4rem!important}.py-3{padding-top:.75rem!important;padding-bottom:.75rem!important}.py-4{padding-top:1rem!important;padding-bottom:1rem!important}.py-6{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-8{padding-top:2rem!important;padding-bottom:2rem!important}.pb-16{padding-bottom:4rem!important}.pt-32{padding-top:8rem!important}.text-center{text-align:center!important}.font-space{font-family:Space Grotesk,sans-serif!important}.font-syncopate{font-family:Syncopate,sans-serif!important}.text-2xl{font-size:1.5rem!important;line-height:2rem!important}.text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.text-6xl{font-size:3.75rem!important;line-height:1!important}.text-base{font-size:1rem!important;line-height:1.5rem!important}.text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.text-sm{font-size:.875rem!important;line-height:1.25rem!important}.text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.text-xs{font-size:.75rem!important;line-height:1rem!important}.leading-relaxed{line-height:1.625!important}.tracking-\\[0\\.05em\\]{letter-spacing:.05em!important}.tracking-\\[0\\.15em\\]{letter-spacing:.15em!important}.tracking-\\[0\\.1em\\]{letter-spacing:.1em!important}.tracking-\\[0\\.2em\\]{letter-spacing:.2em!important}.tracking-wide{letter-spacing:.025em!important}.tracking-wider{letter-spacing:.05em!important}.tracking-widest{letter-spacing:.1em!important}.opacity-60{opacity:.6!important}.blur{--tw-blur: blur(8px) !important;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)!important}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important;backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.transition-all{transition-property:all!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.transition-opacity{transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.duration-500{transition-duration:.5s!important}html{scroll-behavior:smooth}.chromatic-text{position:relative;color:var(--text-primary)}.chromatic-text:before,.chromatic-text:after{content:attr(data-text);position:absolute;left:0;top:0;width:100%;height:100%;mix-blend-mode:screen}.chromatic-text:before{color:#f0f;transform:translate(-1px)}.chromatic-text:after{color:#0ff;transform:translate(1px)}.font-syncopate{font-family:Syncopate,sans-serif}.font-space{font-family:Space Grotesk,sans-serif}:root{--bg-primary: #000000;--bg-secondary: #18181B;--text-primary: #FFFFFF;--text-secondary: #D1D5DB;--border-color: #27272A}:root[data-theme=light]{--bg-primary: #FFFFFF;--bg-secondary: #F4F4F5;--text-primary: #000000;--text-secondary: #4B5563;--border-color: #E5E7EB}.hover\\:opacity-70:hover{opacity:.7!important}.focus\\:outline-none:focus{outline:2px solid transparent!important;outline-offset:2px!important}@media (min-width: 768px){.md\\:mb-12{margin-bottom:3rem!important}.md\\:mb-16{margin-bottom:4rem!important}.md\\:mb-8{margin-bottom:2rem!important}.md\\:h-32{height:8rem!important}.md\\:h-\\[600px\\]{height:600px!important}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:gap-16{gap:4rem!important}.md\\:space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0 !important;margin-right:calc(2rem * var(--tw-space-x-reverse))!important;margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))!important}.md\\:space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1rem * var(--tw-space-y-reverse))!important}.md\\:space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))!important}.md\\:space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(2rem * var(--tw-space-y-reverse))!important}.md\\:p-4{padding:1rem!important}.md\\:px-12{padding-left:3rem!important;padding-right:3rem!important}.md\\:px-4{padding-left:1rem!important;padding-right:1rem!important}.md\\:px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.md\\:py-12{padding-top:3rem!important;padding-bottom:3rem!important}.md\\:py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.md\\:py-32{padding-top:8rem!important;padding-bottom:8rem!important}.md\\:py-4{padding-top:1rem!important;padding-bottom:1rem!important}.md\\:pb-24{padding-bottom:6rem!important}.md\\:text-2xl{font-size:1.5rem!important;line-height:2rem!important}.md\\:text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.md\\:text-4xl{font-size:2.25rem!important;line-height:2.5rem!important}.md\\:text-5xl{font-size:3rem!important;line-height:1!important}.md\\:text-8xl{font-size:6rem!important;line-height:1!important}.md\\:text-base{font-size:1rem!important;line-height:1.5rem!important}.md\\:text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.md\\:text-sm{font-size:.875rem!important;line-height:1.25rem!important}.md\\:text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.md\\:tracking-\\[0\\.15em\\]{letter-spacing:.15em!important}.md\\:tracking-\\[0\\.1em\\]{letter-spacing:.1em!important}.md\\:tracking-\\[0\\.2em\\]{letter-spacing:.2em!important}}@media (min-width: 1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}.lg\\:text-6xl{font-size:3.75rem!important;line-height:1!important}}';class St extends y{static styles=[P(I),z`
      :host {
        display: block;
        width: 100%;
        position: fixed;
        z-index: 50;
      }

      .mobile-menu {
        display: none;
      }

      @media (max-width: 768px) {
        .desktop-menu {
          display: none;
        }
        
        .mobile-menu {
          display: block;
        }
        
        .mobile-menu-expanded {
          position: fixed;
          top: 96px;
          left: 0;
          right: 0;
          background-color: var(--bg-primary);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 40;
          border-bottom: 1px solid var(--border-color);
        }
      }
    `];static properties={theme:{type:String},page:{type:String},mobileMenuOpen:{type:Boolean},navItems:{type:Array}};constructor(){super(),this.theme="dark",this.page="home",this.mobileMenuOpen=!1,this.navItems=[{href:"#story",label:"Story",type:"hash"},{href:"#product",label:"Product",type:"hash"},{href:"#contact",label:"Contact",type:"hash"},{href:"/tools",label:"Tools",type:"path"}]}firstUpdated(){window.addEventListener("resize",()=>{window.innerWidth>768&&this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())})}toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",document.documentElement.setAttribute("data-theme",this.theme),this.dispatchEvent(new CustomEvent("theme-toggle",{detail:this.theme})),this.requestUpdate()}toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen,this.requestUpdate()}handleNavigation(t,e){if(t.type==="path")e.preventDefault(),this.dispatchEvent(new CustomEvent("navigate",{detail:t.href}));else if(t.type==="hash"){e.preventDefault();const r=t.href.slice(1);this.dispatchEvent(new CustomEvent("scroll-to",{detail:r}))}this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())}render(){return h`
      <nav class="py-6" style="background-color: var(--bg-primary); backdrop-filter: blur(8px);">
        <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="/" class="text-xl md:text-2xl font-syncopate tracking-[0.2em]" data-text="MADE WITH">MADE WITH</a>
          <div class="flex items-center">
            <!-- Desktop Menu -->
            <div class="desktop-menu flex items-center space-x-4 md:space-x-8">
              <div class="space-x-4 md:space-x-8 text-sm font-space tracking-wider">
                ${this.navItems.map(t=>h`
                  <a 
                    href="${t.href}" 
                    @click="${e=>this.handleNavigation(t,e)}"
                    class="hover:opacity-70 transition-opacity cursor-pointer" 
                    style="color: var(--text-primary);"
                  >
                    ${t.label}
                  </a>
                `)}
              </div>
              <button 
                @click=${this.toggleTheme}
                class="p-2 rounded-full hover:opacity-70 transition-opacity"
                style="color: var(--text-primary);"
              >
                ${this.theme==="dark"?"☀️":"🌙"}
              </button>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="mobile-menu flex items-center space-x-4">
              <button 
                @click=${this.toggleTheme}
                class="p-2 rounded-full hover:opacity-70 transition-opacity"
                style="color: var(--text-primary);"
              >
                ${this.theme==="dark"?"☀️":"🌙"}
              </button>
              <button @click=${this.toggleMobileMenu} class="text-2xl" style="color: var(--text-primary);">
                ${this.mobileMenuOpen?"✕":"☰"}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu Expanded -->
        ${this.mobileMenuOpen?h`
          <div class="mobile-menu-expanded">
            ${this.navItems.map(t=>h`
              <a 
                href="${t.href}" 
                @click="${e=>this.handleNavigation(t,e)}"
                class="text-lg hover:opacity-70 transition-opacity cursor-pointer" 
                style="color: var(--text-primary);"
              >
                ${t.label}
              </a>
            `)}
          </div>
        `:""}
      </nav>
    `}}customElements.define("nav-bar",St);class Tt extends y{static styles=[P(I),z`
      :host {
        display: block;
      }
    `];static properties={theme:{type:String}};constructor(){super(),this.theme=document.documentElement.getAttribute("data-theme")||"dark",this.navItems=[{href:"/",label:"Home",type:"path"}]}handleThemeToggle(t){this.theme=t.detail,this.requestUpdate()}navigate(t){window.history.pushState({},"",t),window.location.href=t}render(){return h`
      <div class="min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);">
        <nav-bar 
          .theme=${this.theme}
          .page="tools"
          .navItems=${this.navItems}
          @theme-toggle=${this.handleThemeToggle}
          @navigate=${t=>this.navigate(t.detail)}
        ></nav-bar>

        <!-- Tools Grid -->
        <div class="pt-32 pb-16 md:pb-24" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <h1 class="text-3xl md:text-5xl font-syncopate mb-8 md:mb-16 chromatic-text tracking-[0.15em] text-center" data-text="OUR TOOLS">OUR TOOLS</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
              <!-- Tool 1 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1615713170963-2595d2c721a3?auto=format&fit=crop&q=80"
                    alt="Traditional spinning wheel"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">SPINNING WHEEL</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Hand-carved from sustainable maple wood, our spinning wheels maintain perfect tension for consistent yarn production. Each wheel is calibrated to work with the finest fibers.
                  </p>
                </div>
              </div>

              <!-- Tool 2 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1598867543295-4d48e81be78d?auto=format&fit=crop&q=80"
                    alt="Wooden loom"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">TRADITIONAL LOOM</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Our century-old looms create intricate patterns while maintaining the delicate nature of the wool. These masterpieces of engineering allow our artisans to weave complex designs.
                  </p>
                </div>
              </div>

              <!-- Tool 3 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
                    alt="Natural dye ingredients"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">NATURAL DYES</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    We source local plants and minerals to create our signature colors, ensuring each piece tells a unique story. Our dye masters blend traditional techniques with modern color theory.
                  </p>
                </div>
              </div>

              <!-- Tool 4 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&q=80"
                    alt="Wooden spindle"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">HAND SPINDLES</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Our collection of hand spindles allows for the finest control over yarn creation. Each spindle is weighted perfectly for its intended fiber, ensuring optimal twist and tension.
                  </p>
                </div>
              </div>

              <!-- Tool 5 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80"
                    alt="Weaving tools"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">WEAVING TOOLS</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Our specialized collection of shuttles, beaters, and combs are crafted from rare hardwoods. Each tool is designed to work in harmony with our fibers and looms.
                  </p>
                </div>
              </div>

              <!-- Tool 6 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1628744404730-5e143358539b?auto=format&fit=crop&q=80"
                    alt="Finishing tools"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">FINISHING TOOLS</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    The final touch comes from our selection of finishing tools. From specialized scissors to blocking frames, these instruments ensure each piece meets our exacting standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="py-8 md:py-12" style="background-color: var(--bg-primary); border-top: 1px solid var(--border-color);">
          <div class="container mx-auto px-4 md:px-6 text-center">
            <p class="text-xs md:text-sm font-space tracking-widest" style="color: var(--text-secondary);">© 2025 MADE WITH. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    `}}customElements.define("tools-page",Tt);class Pt extends y{static styles=[P(I),z`
      :host {
        display: block;
      }
    `];static properties={theme:{type:String}};constructor(){super(),this.theme=document.documentElement.getAttribute("data-theme")||"dark",this.navItems=[{href:"/",label:"Home",type:"path"}]}handleThemeToggle(t){this.theme=t.detail,this.requestUpdate()}navigate(t){window.history.pushState({},"",t),window.location.href=t}render(){return h`
      <div class="min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);">
        <nav-bar 
          .theme=${this.theme}
          .page="404"
          .navItems=${this.navItems}
          @theme-toggle=${this.handleThemeToggle}
          @navigate=${t=>this.navigate(t.detail)}
        ></nav-bar>

        <div class="pt-32 pb-16 md:pb-24" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto text-center">
              <h1 class="text-6xl md:text-8xl font-syncopate mb-8 chromatic-text tracking-[0.15em]" data-text="404">404</h1>
              <h2 class="text-2xl md:text-3xl font-syncopate mb-8 tracking-wider" style="color: var(--text-primary);">PAGE NOT FOUND</h2>
              <p class="text-base md:text-lg font-space mb-12 tracking-wide" style="color: var(--text-secondary);">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <a 
                href="/"
                class="font-space border px-8 py-4 transition-all duration-500 inline-block cursor-pointer"
                style="border-color: var(--text-primary); color: var(--text-primary);"
                onmouseover="this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary'); this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');"
                onmouseout="this.style.backgroundColor = 'transparent'; this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="py-8 md:py-12" style="background-color: var(--bg-primary); border-top: 1px solid var(--border-color);">
          <div class="container mx-auto px-4 md:px-6 text-center">
            <p class="text-xs md:text-sm font-space tracking-widest" style="color: var(--text-secondary);">© 2025 MADE WITH. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    `}}customElements.define("not-found",Pt);class Ot extends y{static styles=[P(I),z`
      :host {
        display: block;
      }
      
      .carousel-slide {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease-in-out;
        position: absolute;
        width: 100%;
      }
      
      .carousel-slide.active {
        opacity: 1;
        pointer-events: auto;
        position: relative;
      }

      .mobile-menu {
        display: none;
      }

      @media (max-width: 768px) {
        .desktop-menu {
          display: none;
        }
        
        .mobile-menu {
          display: block;
        }
        
        .mobile-menu-expanded {
          position: fixed;
          top: 96px;
          left: 0;
          right: 0;
          background-color: var(--bg-primary);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 40;
          border-bottom: 1px solid var(--border-color);
        }
      }
    `];constructor(){super(),this.theme="dark",this.page=this.getPageFromPath(window.location.pathname),this.currentProduct=0,this.mobileMenuOpen=!1,this.navItems=[{href:"#story",label:"Story",type:"hash"},{href:"#product",label:"Product",type:"hash"},{href:"#contact",label:"Contact",type:"hash"},{href:"/tools",label:"Tools",type:"path"}],this.products=[{name:"YAK & CAMEL",description:"A masterpiece of natural luxury, our signature scarf combines the softness of yak wool with the lightweight warmth of camel fiber. Each piece is uniquely textured and naturally hypoallergenic.",price:"$895",image:"https://images.unsplash.com/photo-1601244005535-a48d21d951ac?auto=format&fit=crop&q=80"},{name:"OLD SWEATER",description:"Crafted from carefully selected vintage wool garments, our Old Sweater collection gives new life to timeless materials. Each piece tells a story of heritage and sustainable luxury.",price:"$695",image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80"},{name:"BRITISH SHEEP",description:"Sourced from heritage breeds across the British Isles, this collection celebrates traditional shepherding. The natural lanolin content creates a water-resistant finish that improves with age.",price:"$795",image:"https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?auto=format&fit=crop&q=80"}]}getPageFromPath(t){switch(t){case"/":return"home";case"/tools":return"tools";default:return"404"}}firstUpdated(){document.documentElement.setAttribute("data-theme",this.theme),this.setupScrollBehavior(),window.addEventListener("popstate",()=>{this.page=this.getPageFromPath(window.location.pathname),this.requestUpdate()}),window.addEventListener("resize",()=>{window.innerWidth>768&&this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())})}setupScrollBehavior(){this.shadowRoot.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const o=e.getAttribute("href").slice(1),a=this.shadowRoot.getElementById(o);if(a){const m=a.offsetTop-96;window.scrollTo({top:m,behavior:"smooth"})}this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())})})}handleThemeToggle(t){this.theme=t.detail,document.documentElement.setAttribute("data-theme",this.theme),this.requestUpdate()}toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen,this.requestUpdate()}scrollToSection(t){const e=this.shadowRoot.getElementById(t);if(e){const o=e.offsetTop-96;window.scrollTo({top:o,behavior:"smooth"})}}navigate(t){window.history.pushState({},"",t),this.page=this.getPageFromPath(t),window.scrollTo(0,0),this.mobileMenuOpen&&(this.mobileMenuOpen=!1),this.requestUpdate()}nextProduct(){this.currentProduct=(this.currentProduct+1)%this.products.length,this.requestUpdate()}prevProduct(){this.currentProduct=(this.currentProduct-1+this.products.length)%this.products.length,this.requestUpdate()}renderHome(){return h`
      <div class="min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);">
        <nav-bar 
          .theme=${this.theme}
          .page=${this.page}
          .navItems=${this.navItems}
          @theme-toggle=${this.handleThemeToggle}
          @navigate=${t=>this.navigate(t.detail)}
          @scroll-to=${t=>this.scrollToSection(t.detail)}
        ></nav-bar>

        <!-- Hero Section -->
        <section class="h-screen flex items-center justify-center relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80"
            alt="Luxury scarf texture"
            class="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div class="absolute inset-0" style="background-color: var(--bg-primary); opacity: 0.5;"></div>
          <div class="relative text-center px-4">
            <h2 class="text-3xl md:text-4xl lg:text-6xl font-syncopate mb-4 md:mb-8 chromatic-text tracking-[0.15em] md:tracking-[0.2em]" data-text="ARTISANAL">ARTISANAL</h2>
            <p class="text-base md:text-xl font-space tracking-[0.05em] md:tracking-[0.1em] mb-8 md:mb-12" style="color: var(--text-secondary);">Hand-spun from the finest yak and camel wool</p>
            <a 
              href="#product" 
              class="font-space border px-6 md:px-12 py-3 md:py-4 transition-all duration-500 inline-block cursor-pointer"
              style="border-color: var(--text-primary); color: var(--text-primary);"
              onmouseover="this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary'); this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');"
              onmouseout="this.style.backgroundColor = 'transparent'; this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');"
            >
              See projects
            </a>
          </div>
        </section>

        <!-- Story Section -->
        <section id="story" class="py-16 md:py-32" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto text-center">
              <h3 class="text-2xl md:text-3xl font-syncopate mb-8 md:mb-12 chromatic-text tracking-[0.15em]" data-text="OUR STORY">OUR STORY</h3>
              <p class="text-base md:text-lg font-space leading-relaxed tracking-wide" style="color: var(--text-secondary);">
                In the heart of the Himalayas, our artisans carefully select and hand-spin the finest yak and camel wool.
                Each scarf is a testament to centuries-old craftsmanship, taking over 60 hours to complete.
              </p>
            </div>
          </div>
        </section>

        <!-- Product Section -->
        <section id="product" class="py-16 md:py-32 relative" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
              ${this.products.map((t,e)=>h`
                <div class="carousel-slide ${e===this.currentProduct?"active":""}">
                  <img 
                    src=${t.image}
                    alt=${t.name}
                    class="w-full h-[350px] md:h-[600px] object-cover"
                  />
                </div>
              `)}
              <div class="space-y-6 md:space-y-8">
                <div class="flex justify-between items-center mb-4 md:mb-8">
                  <button 
                    @click=${this.prevProduct}
                    class="text-xl md:text-2xl font-space px-3 md:px-4 py-1 md:py-2 transition-opacity hover:opacity-70"
                    style="color: var(--text-primary);"
                  >←</button>
                  <h3 class="text-xl md:text-3xl font-syncopate chromatic-text tracking-[0.1em] md:tracking-[0.15em]" data-text=${this.products[this.currentProduct].name}>
                    ${this.products[this.currentProduct].name}
                  </h3>
                  <button 
                    @click=${this.nextProduct}
                    class="text-xl md:text-2xl font-space px-3 md:px-4 py-1 md:py-2 transition-opacity hover:opacity-70"
                    style="color: var(--text-primary);"
                  >→</button>
                </div>
                <p class="text-base md:text-lg font-space tracking-wide" style="color: var(--text-secondary);">
                  ${this.products[this.currentProduct].description}
                </p>
                <div class="space-y-4 md:space-y-6">
                  <p class="text-xl md:text-2xl font-space tracking-widest" style="color: var(--text-primary);">
                    ${this.products[this.currentProduct].price}
                  </p>
                  <button 
                    class="w-full py-3 md:py-4 transition-colors duration-500 font-space text-base md:text-lg"
                    style="background-color: var(--text-primary); color: var(--bg-primary);"
                    onmouseover="this.style.opacity = '0.9';"
                    onmouseout="this.style.opacity = '1';"
                  >
                    Request Private Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-16 md:py-32" style="background-color: var(--bg-secondary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-xl mx-auto text-center">
              <h3 class="text-2xl md:text-3xl font-syncopate mb-8 md:mb-12 chromatic-text tracking-[0.15em]" data-text="PRIVATE CONSULTATION">PRIVATE CONSULTATION</h3>
              <p class="text-base md:text-lg font-space mb-8 md:mb-12 tracking-wide" style="color: var(--text-secondary);">
                Experience our collection in person. Schedule a private viewing at our atelier.
              </p>
              <form class="space-y-4 md:space-y-6">
                <input 
                  type="text" 
                  placeholder="Name"
                  class="w-full p-3 md:p-4 font-space transition-colors focus:outline-none"
                  style="background-color: transparent; border: 1px solid var(--border-color); color: var(--text-primary);"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  class="w-full p-3 md:p-4 font-space transition-colors focus:outline-none"
                  style="background-color: transparent; border: 1px solid var(--border-color); color: var(--text-primary);"
                />
                <textarea 
                  placeholder="Message"
                  class="w-full p-3 md:p-4 font-space transition-colors focus:outline-none h-24 md:h-32"
                  style="background-color: transparent; border: 1px solid var(--border-color); color: var(--text-primary);"
                ></textarea>
                <button 
                  class="w-full py-3 md:py-4 transition-colors duration-500 font-space text-base md:text-lg"
                  style="background-color: var(--text-primary); color: var(--bg-primary);"
                  onmouseover="this.style.opacity = '0.9';"
                  onmouseout="this.style.opacity = '1';"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="py-8 md:py-12" style="background-color: var(--bg-primary); border-top: 1px solid var(--border-color);">
          <div class="container mx-auto px-4 md:px-6 text-center">
            <p class="text-xs md:text-sm font-space tracking-widest" style="color: var(--text-secondary);">© 2025 MADE WITH. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    `}render(){switch(this.page){case"tools":return h`<tools-page .theme=${this.theme}></tools-page>`;case"404":return h`<not-found .theme=${this.theme}></not-found>`;default:return this.renderHome()}}}customElements.define("app-root",Ot);
