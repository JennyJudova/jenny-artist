var gt=Object.defineProperty;var ft=(i,t,e)=>t in i?gt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var f=(i,t,e)=>ft(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,K=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),Z=new WeakMap;let lt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Z.set(e,t))}return t}toString(){return this.cssText}};const M=i=>new lt(typeof i=="string"?i:i+"",void 0,Y),R=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[a+1],i[0]);return new lt(e,i,Y)},yt=(i,t)=>{if(K)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=H.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},Q=K?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return M(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:vt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:$t,getPrototypeOf:kt}=Object,b=globalThis,X=b.trustedTypes,At=X?X.emptyScript:"",q=b.reactiveElementPolyfillSupport,S=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?At:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ct=(i,t)=>!bt(i,t),tt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&vt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:a}=xt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const c=o==null?void 0:o.call(this);a.call(this,s),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,r=[...wt(e),...$t(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(Q(o))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var a;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:B).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var a;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:B;this._$Em=o,this[o]=c.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ct)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,s]of o)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[S("elementProperties")]=new Map,k[S("finalized")]=new Map,q==null||q({ReactiveElement:k}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,I=T.trustedTypes,et=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,pt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,dt="?"+y,_t=`<${dt}>`,$=document,P=()=>$.createComment(""),O=i=>i===null||typeof i!="object"&&typeof i!="function",J=Array.isArray,Et=i=>J(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",j=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,x=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,at=/"/g,mt=/^(?:script|style|textarea|title)$/i,St=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),h=St(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,w=$.createTreeWalker($,129);function ht(i,t){if(!J(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const Tt=(i,t)=>{const e=i.length-1,r=[];let o,a=t===2?"<svg>":t===3?"<math>":"",s=E;for(let c=0;c<e;c++){const n=i[c];let p,m,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,m=s.exec(n),m!==null);)u=s.lastIndex,s===E?m[1]==="!--"?s=rt:m[1]!==void 0?s=ot:m[2]!==void 0?(mt.test(m[2])&&(o=RegExp("</"+m[2],"g")),s=x):m[3]!==void 0&&(s=x):s===x?m[0]===">"?(s=o??E,l=-1):m[1]===void 0?l=-2:(l=s.lastIndex-m[2].length,p=m[1],s=m[3]===void 0?x:m[3]==='"'?at:it):s===at||s===it?s=x:s===rt||s===ot?s=E:(s=x,o=void 0);const g=s===x&&i[c+1].startsWith("/>")?" ":"";a+=s===E?n+_t:l>=0?(r.push(p),n.slice(0,l)+pt+n.slice(l)+y+g):n+y+(l===-2?c:g)}return[ht(i,a+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class C{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let a=0,s=0;const c=t.length-1,n=this.parts,[p,m]=Tt(t,e);if(this.el=C.createElement(p,r),w.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(o=w.nextNode())!==null&&n.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const l of o.getAttributeNames())if(l.endsWith(pt)){const u=m[s++],g=o.getAttribute(l).split(y),z=/([.?@])?(.*)/.exec(u);n.push({type:1,index:a,name:z[2],strings:g,ctor:z[1]==="."?Ot:z[1]==="?"?Ct:z[1]==="@"?Mt:N}),o.removeAttribute(l)}else l.startsWith(y)&&(n.push({type:6,index:a}),o.removeAttribute(l));if(mt.test(o.tagName)){const l=o.textContent.split(y),u=l.length-1;if(u>0){o.textContent=I?I.emptyScript:"";for(let g=0;g<u;g++)o.append(l[g],P()),w.nextNode(),n.push({type:2,index:++a});o.append(l[u],P())}}}else if(o.nodeType===8)if(o.data===dt)n.push({type:2,index:a});else{let l=-1;for(;(l=o.data.indexOf(y,l+1))!==-1;)n.push({type:7,index:a}),l+=y.length-1}a++}}static createElement(t,e){const r=$.createElement("template");return r.innerHTML=t,r}}function _(i,t,e=i,r){var s,c;if(t===A)return t;let o=r!==void 0?(s=e._$Co)==null?void 0:s[r]:e._$Cl;const a=O(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=o:e._$Cl=o),o!==void 0&&(t=_(i,o._$AS(i,t.values),o,r)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??$).importNode(e,!0);w.currentNode=o;let a=w.nextNode(),s=0,c=0,n=r[0];for(;n!==void 0;){if(s===n.index){let p;n.type===2?p=new U(a,a.nextSibling,this,t):n.type===1?p=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(p=new Ut(a,this,t)),this._$AV.push(p),n=r[++c]}s!==(n==null?void 0:n.index)&&(a=w.nextNode(),s++)}return w.currentNode=$,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=C.createElement(ht(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(e);else{const s=new Pt(o,this),c=s.u(this.options);s.p(e),this.T(c),this._$AH=s}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new C(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const a of t)o===e.length?e.push(r=new U(this.O(P()),this.O(P()),this,this.options)):r=e[o],r._$AI(a),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,a){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,o){const a=this.strings;let s=!1;if(a===void 0)t=_(this,t,e,0),s=!O(t)||t!==this._$AH&&t!==A,s&&(this._$AH=t);else{const c=t;let n,p;for(t=a[0],n=0;n<a.length-1;n++)p=_(this,c[r+n],e,n),p===A&&(p=this._$AH[n]),s||(s=!O(p)||p!==this._$AH[n]),p===d?t=d:t!==d&&(t+=(p??"")+a[n+1]),this._$AH[n]=p}s&&!o&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ct extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Mt extends N{constructor(t,e,r,o,a){super(t,e,r,o,a),this.type=5}_$AI(t,e=this){if((t=_(this,t,e,0)??d)===A)return;const r=this._$AH,o=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==d&&(r===d||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const D=T.litHtmlPolyfillSupport;D==null||D(C,U),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.2.1");const zt=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const a=(e==null?void 0:e.renderBefore)??null;r._$litPart$=o=new U(t.insertBefore(P(),a),a,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}}var nt;v._$litElement$=!0,v.finalized=!0,(nt=globalThis.litElementHydrateSupport)==null||nt.call(globalThis,{LitElement:v});const F=globalThis.litElementPolyfillSupport;F==null||F({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const L='*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%;margin-right:auto;margin-left:auto;padding-right:2rem;padding-left:2rem}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.static{position:static!important}.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.inset-0{top:0!important;right:0!important;bottom:0!important;left:0!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.mb-12{margin-bottom:3rem!important}.mb-4{margin-bottom:1rem!important}.mb-8{margin-bottom:2rem!important}.block{display:block!important}.inline-block{display:inline-block!important}.inline{display:inline!important}.flex{display:flex!important}.grid{display:grid!important}.aspect-square{aspect-ratio:1 / 1!important}.h-24{height:6rem!important}.h-\\[350px\\]{height:350px!important}.h-full{height:100%!important}.h-screen{height:100vh!important}.min-h-screen{min-height:100vh!important}.w-full{width:100%!important}.max-w-2xl{max-width:42rem!important}.max-w-xl{max-width:36rem!important}.cursor-pointer{cursor:pointer!important}.resize{resize:both!important}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))!important}.items-center{align-items:center!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.gap-8{gap:2rem!important}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0 !important;margin-right:calc(1rem * var(--tw-space-x-reverse))!important;margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))!important}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(.75rem * var(--tw-space-y-reverse))!important}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1rem * var(--tw-space-y-reverse))!important}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))!important}.overflow-hidden{overflow:hidden!important}.rounded-full{border-radius:9999px!important}.border{border-width:1px!important}.object-cover{-o-object-fit:cover!important;object-fit:cover!important}.p-2{padding:.5rem!important}.p-3{padding:.75rem!important}.px-3{padding-left:.75rem!important;padding-right:.75rem!important}.px-4{padding-left:1rem!important;padding-right:1rem!important}.px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-8{padding-left:2rem!important;padding-right:2rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-16{padding-top:4rem!important;padding-bottom:4rem!important}.py-3{padding-top:.75rem!important;padding-bottom:.75rem!important}.py-4{padding-top:1rem!important;padding-bottom:1rem!important}.py-6{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-8{padding-top:2rem!important;padding-bottom:2rem!important}.pb-16{padding-bottom:4rem!important}.pt-32{padding-top:8rem!important}.text-center{text-align:center!important}.font-space{font-family:Space Grotesk,sans-serif!important}.font-syncopate{font-family:Syncopate,sans-serif!important}.text-2xl{font-size:1.5rem!important;line-height:2rem!important}.text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.text-6xl{font-size:3.75rem!important;line-height:1!important}.text-base{font-size:1rem!important;line-height:1.5rem!important}.text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.text-sm{font-size:.875rem!important;line-height:1.25rem!important}.text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.text-xs{font-size:.75rem!important;line-height:1rem!important}.leading-relaxed{line-height:1.625!important}.tracking-\\[0\\.05em\\]{letter-spacing:.05em!important}.tracking-\\[0\\.15em\\]{letter-spacing:.15em!important}.tracking-\\[0\\.1em\\]{letter-spacing:.1em!important}.tracking-\\[0\\.2em\\]{letter-spacing:.2em!important}.tracking-wide{letter-spacing:.025em!important}.tracking-wider{letter-spacing:.05em!important}.tracking-widest{letter-spacing:.1em!important}.opacity-60{opacity:.6!important}.blur{--tw-blur: blur(8px) !important;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)!important}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important;backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.transition-all{transition-property:all!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.transition-opacity{transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-duration:.15s!important}.duration-500{transition-duration:.5s!important}html{scroll-behavior:smooth}.chromatic-text{position:relative;color:var(--text-primary)}.chromatic-text:before,.chromatic-text:after{content:attr(data-text);position:absolute;left:0;top:0;width:100%;height:100%;mix-blend-mode:screen}.chromatic-text:before{color:#f0f;transform:translate(-1px)}.chromatic-text:after{color:#0ff;transform:translate(1px)}.font-syncopate{font-family:Syncopate,sans-serif}.font-space{font-family:Space Grotesk,sans-serif}:root{--bg-primary: #000000;--bg-secondary: #18181B;--text-primary: #FFFFFF;--text-secondary: #D1D5DB;--border-color: #27272A}:root[data-theme=light]{--bg-primary: #FFFFFF;--bg-secondary: #F4F4F5;--text-primary: #000000;--text-secondary: #4B5563;--border-color: #E5E7EB}.hover\\:opacity-70:hover{opacity:.7!important}.focus\\:outline-none:focus{outline:2px solid transparent!important;outline-offset:2px!important}@media (min-width: 768px){.md\\:mb-12{margin-bottom:3rem!important}.md\\:mb-16{margin-bottom:4rem!important}.md\\:mb-8{margin-bottom:2rem!important}.md\\:h-32{height:8rem!important}.md\\:h-\\[600px\\]{height:600px!important}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:gap-16{gap:4rem!important}.md\\:space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0 !important;margin-right:calc(2rem * var(--tw-space-x-reverse))!important;margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)))!important}.md\\:space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1rem * var(--tw-space-y-reverse))!important}.md\\:space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))!important}.md\\:space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(2rem * var(--tw-space-y-reverse))!important}.md\\:p-4{padding:1rem!important}.md\\:px-12{padding-left:3rem!important;padding-right:3rem!important}.md\\:px-4{padding-left:1rem!important;padding-right:1rem!important}.md\\:px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.md\\:py-12{padding-top:3rem!important;padding-bottom:3rem!important}.md\\:py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.md\\:py-32{padding-top:8rem!important;padding-bottom:8rem!important}.md\\:py-4{padding-top:1rem!important;padding-bottom:1rem!important}.md\\:pb-24{padding-bottom:6rem!important}.md\\:text-2xl{font-size:1.5rem!important;line-height:2rem!important}.md\\:text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.md\\:text-4xl{font-size:2.25rem!important;line-height:2.5rem!important}.md\\:text-5xl{font-size:3rem!important;line-height:1!important}.md\\:text-8xl{font-size:6rem!important;line-height:1!important}.md\\:text-base{font-size:1rem!important;line-height:1.5rem!important}.md\\:text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.md\\:text-sm{font-size:.875rem!important;line-height:1.25rem!important}.md\\:text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.md\\:tracking-\\[0\\.15em\\]{letter-spacing:.15em!important}.md\\:tracking-\\[0\\.1em\\]{letter-spacing:.1em!important}.md\\:tracking-\\[0\\.2em\\]{letter-spacing:.2em!important}}@media (min-width: 1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}.lg\\:text-6xl{font-size:3.75rem!important;line-height:1!important}}';class W extends v{constructor(){super(),this.theme="dark",this.page="home",this.mobileMenuOpen=!1,this.navItems=[{href:"#story",label:"Story",type:"hash"},{href:"#product",label:"Product",type:"hash"},{href:"#contact",label:"Contact",type:"hash"},{href:"/tools",label:"Tools",type:"path"}]}firstUpdated(){window.addEventListener("resize",()=>{window.innerWidth>768&&this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())})}toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",document.documentElement.setAttribute("data-theme",this.theme),this.dispatchEvent(new CustomEvent("theme-toggle",{detail:this.theme})),this.requestUpdate()}toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen,this.requestUpdate()}handleNavigation(t,e){if(t.type==="path")e.preventDefault(),this.dispatchEvent(new CustomEvent("navigate",{detail:t.href}));else if(t.type==="hash"){e.preventDefault();const r=t.href.slice(1);this.dispatchEvent(new CustomEvent("scroll-to",{detail:r}))}this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())}render(){return h`
      <nav class="py-6" style="background-color: var(--bg-primary); backdrop-filter: blur(8px);">
        <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="/" class="text-xl md:text-2xl font-syncopate tracking-[0.2em]" data-text="MADE WITH">MADE WITH</a>
          <div class="flex items-center">
            <!-- Desktop Menu -->
            <div class="desktop-menu-container items-center space-x-4 md:space-x-8">
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
            <div class="mobile-menu-container items-center space-x-4">
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
    `}}f(W,"styles",[M(L),R`
      :host {
        display: block;
        width: 100%;
        position: fixed;
        z-index: 50;
      }

      .mobile-menu-container {
        display: none;
      }

      .desktop-menu-container {
        display: flex;
      }

      @media (max-width: 768px) {
        .desktop-menu-container {
          display: none;
        }
        
        .mobile-menu-container {
          display: flex;
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
    `]),f(W,"properties",{theme:{type:String},page:{type:String},mobileMenuOpen:{type:Boolean},navItems:{type:Array}});customElements.define("nav-bar",W);class V extends v{constructor(){super(),this.theme=document.documentElement.getAttribute("data-theme")||"dark",this.navItems=[{href:"/",label:"Home",type:"path"}]}handleThemeToggle(t){this.theme=t.detail,this.requestUpdate()}navigate(t){window.history.pushState({},"",t),window.location.href=t}render(){return h`
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
    `}}f(V,"styles",[M(L),R`
      :host {
        display: block;
      }
    `]),f(V,"properties",{theme:{type:String}});customElements.define("tools-page",V);class G extends v{constructor(){super(),this.theme=document.documentElement.getAttribute("data-theme")||"dark",this.navItems=[{href:"/",label:"Home",type:"path"}]}handleThemeToggle(t){this.theme=t.detail,this.requestUpdate()}navigate(t){window.history.pushState({},"",t),window.location.href=t}render(){return h`
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
    `}}f(G,"styles",[M(L),R`
      :host {
        display: block;
      }
    `]),f(G,"properties",{theme:{type:String}});customElements.define("not-found",G);class ut extends v{constructor(){super(),this.theme="dark",this.page=this.getPageFromPath(window.location.pathname),this.currentProduct=0,this.mobileMenuOpen=!1,this.navItems=[{href:"#story",label:"Story",type:"hash"},{href:"#product",label:"Product",type:"hash"},{href:"#contact",label:"Contact",type:"hash"},{href:"/tools",label:"Tools",type:"path"}],this.products=[{name:"YAK & CAMEL",description:"A masterpiece of natural luxury, our signature scarf combines the softness of yak wool with the lightweight warmth of camel fiber. Each piece is uniquely textured and naturally hypoallergenic.",price:"$895",image:"https://images.unsplash.com/photo-1601244005535-a48d21d951ac?auto=format&fit=crop&q=80"},{name:"OLD SWEATER",description:"Crafted from carefully selected vintage wool garments, our Old Sweater collection gives new life to timeless materials. Each piece tells a story of heritage and sustainable luxury.",price:"$695",image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80"},{name:"BRITISH SHEEP",description:"Sourced from heritage breeds across the British Isles, this collection celebrates traditional shepherding. The natural lanolin content creates a water-resistant finish that improves with age.",price:"$795",image:"https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?auto=format&fit=crop&q=80"}]}getPageFromPath(t){const e="/jenny-artist";let r=t;return t.startsWith(e)&&(r=t.substring(e.length)),r===""||r==="/"?"home":r==="/tools"?"tools":"404"}firstUpdated(){document.documentElement.setAttribute("data-theme",this.theme),this.setupScrollBehavior(),window.addEventListener("popstate",()=>{this.page=this.getPageFromPath(window.location.pathname),this.requestUpdate()}),window.addEventListener("resize",()=>{window.innerWidth>768&&this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())})}setupScrollBehavior(){this.shadowRoot.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const o=e.getAttribute("href").slice(1),a=this.shadowRoot.getElementById(o);if(a){const c=a.offsetTop-96;window.scrollTo({top:c,behavior:"smooth"})}this.mobileMenuOpen&&(this.mobileMenuOpen=!1,this.requestUpdate())})})}handleThemeToggle(t){this.theme=t.detail,document.documentElement.setAttribute("data-theme",this.theme),this.requestUpdate()}toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen,this.requestUpdate()}scrollToSection(t){const e=this.shadowRoot.getElementById(t);if(e){const o=e.offsetTop-96;window.scrollTo({top:o,behavior:"smooth"})}}navigate(t){window.history.pushState({},"",t),this.page=this.getPageFromPath(t),window.scrollTo(0,0),this.mobileMenuOpen&&(this.mobileMenuOpen=!1),this.requestUpdate()}nextProduct(){this.currentProduct=(this.currentProduct+1)%this.products.length,this.requestUpdate()}prevProduct(){this.currentProduct=(this.currentProduct-1+this.products.length)%this.products.length,this.requestUpdate()}renderHome(){return h`
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
    `}render(){switch(this.page){case"tools":return h`<tools-page .theme=${this.theme}></tools-page>`;case"404":return h`<not-found .theme=${this.theme}></not-found>`;default:return this.renderHome()}}}f(ut,"styles",[M(L),R`
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
    `]);customElements.define("app-root",ut);
