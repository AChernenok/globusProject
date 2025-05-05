import{dB as e0,r as c,dA as U1,dC as t0,ds as se,j as a,du as oe,dr as Q,dt as xe,dp as n0,dK as o0,al as We,dz as ke,dG as q1,dL as G1,dJ as Ne,dM as a0,dD as r0,dv as Kt,dw as Yt,dE as Vt,dq as Zt,dx as s0,dy as i0,dF as Hn,dn as c0,dH as K1,dI as Y1,dN as g,J as x,e9 as Z1,dO as L,dZ as ie,ea as X1,eb as Q1,ec as J1,ed as P1,ef as eo,eg as to,ee as no,eh as oo,ei as ao,dP as l0,dQ as d0,el as ro,dR as h0,em as so,en as io,dU as u0,eo as co,ep as g0,eq as lo,er as ho,es as uo,et as go,eu as fo,ev as mo,ej as xo,ek as wo,d_ as vo,e1 as bo,e7 as po,e8 as $o,d$ as Co,e0 as jo,e2 as yo,e3 as So,y as Ro,ew as Lt,ex as Xt,ey as Et,ez as Ht,eA as Mo,eB as Io,eC as Ao,eD as To,eE as Vo,eF as Lo,eG as Eo,eH as f0,eI as Ho,eJ as m0,eK as Do,eL as Bo,eM as ko,eN as No,eO as zo,eP as x0,eQ as w0,eR as Oo,eS as Fo,eT as _o,eU as Wo,dV as Uo,dX as qo,e4 as Go,e5 as Ko,dY as Yo,dW as Zo,eV as Xo,eW as Qo,eX as Jo,eY as Po,eZ as ea,e_ as ta,e$ as na,f0 as oa,f1 as aa,f2 as ra,f3 as sa,f4 as ia,f5 as ca,f6 as la,f7 as da,f8 as ha,e6 as v0,f9 as ua,fa as ga,bP as fa,bR as ma,bS as Dn,P as lt,hv as xa,s as wa,an as va,u as ba,fe as pa,ff as $a,aQ as Bn,hw as Ca}from"./strapi-D_yz_Lh-.js";function ja(e){const t=`${e}CollectionProvider`,[o,r]=e0(t),[n,s]=o(t,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),i=m=>{const{scope:b,children:v}=m,C=c.useRef(null),$=c.useRef(new Map).current,p=c.useRef(new Set).current;return a.jsx(n,{scope:b,itemMap:$,collectionRef:C,listeners:p,children:v})};i.displayName=t;const l=`${e}CollectionSlot`,d=c.forwardRef((m,b)=>{const{scope:v,children:C}=m,$=s(l,v),p=se(b,$.collectionRef);return a.jsx(Vt,{ref:p,children:C})});d.displayName=l;const f=`${e}CollectionItemSlot`,h="data-radix-collection-item",w=c.forwardRef((m,b)=>{const{scope:v,children:C,...$}=m,p=c.useRef(null),j=se(b,p),y=s(f,v);return c.useEffect(()=>{const S=Array.from(y.itemMap.values());return y.itemMap.set(p,{ref:p,...$}),y.listeners.forEach(M=>M(Array.from(y.itemMap.values()),S)),()=>{const M=Array.from(y.itemMap.values());y.itemMap.delete(p),y.listeners.forEach(R=>R(Array.from(y.itemMap.values()),M))}}),a.jsx(Vt,{[h]:"",ref:j,children:C})});w.displayName=f;function u(m){const b=s(`${e}CollectionConsumer`,m),v=c.useCallback(()=>{const $=b.collectionRef.current;if(!$)return[];const p=Array.from($.querySelectorAll(`[${h}]`));return Array.from(b.itemMap.values()).sort((S,M)=>p.indexOf(S.ref.current)-p.indexOf(M.ref.current))},[b.collectionRef,b.itemMap]),C=c.useCallback($=>(b.listeners.add($),()=>b.listeners.delete($)),[b.listeners]);return{getItems:v,subscribe:C}}return[{Provider:i,Slot:d,ItemSlot:w},u,r]}const It=new Map;function ya(e,t){const o=e+(t?Object.entries(t).sort((n,s)=>n[0]<s[0]?-1:1).join():"");if(It.has(o))return It.get(o);const r=new Intl.Collator(e,t);return It.set(o,r),r}function Qt(e,t){const o=ya(e,{usage:"search",...t});return{startsWith(r,n){return n.length===0?!0:(r=r.normalize("NFC"),n=n.normalize("NFC"),o.compare(r.slice(0,n.length),n)===0)},endsWith(r,n){return n.length===0?!0:(r=r.normalize("NFC"),n=n.normalize("NFC"),o.compare(r.slice(-n.length),n)===0)},contains(r,n){if(n.length===0)return!0;r=r.normalize("NFC"),n=n.normalize("NFC");let s=0;const i=n.length;for(;s+i<=r.length;s++){const l=r.slice(s,s+i);if(o.compare(n,l)===0)return!0}return!1}}}const Sa=e=>{const t=c.useRef();return c.useEffect(()=>{t.current=e}),t.current},Ra=[" ","Enter","ArrowUp","ArrowDown"],Ma=["Enter"],Ia=e=>!!(e.length===1&&e.match(/\S| /)),b0="Combobox",[ze,et]=ja(b0),[Aa,je]=c0(b0),Ta=({children:e})=>a.jsx(a0,{children:a.jsx(ze.Provider,{scope:void 0,children:e})}),Va=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,La=e=>{const{allowCustomValue:t=!1,autocomplete:o="none",children:r,open:n,defaultOpen:s,onOpenChange:i,value:l,defaultValue:d,onValueChange:f,disabled:h,required:w=!1,locale:u="en-EN",onTextValueChange:m,textValue:b,defaultTextValue:v,filterValue:C,defaultFilterValue:$,onFilterValueChange:p,isPrintableCharacter:j=Ia,visible:y=!1}=e,[S,M]=c.useState(null),[R,N]=c.useState(null),[E,z]=c.useState(null),[O,H]=c.useState(null),[V=!1,k]=Ne({prop:n,defaultProp:s,onChange:i}),[U,K]=Ne({prop:l,defaultProp:d,onChange:f}),[q,J]=Ne({prop:b,defaultProp:t&&!v?l:v,onChange:m}),[Y,ne]=Ne({prop:C,defaultProp:$,onChange:p}),Z=ke(),ae=c.useCallback((ee,re)=>{const fe=re.map(D=>D.ref.current),[T,...W]=fe,[X]=W.slice(-1),F=O??re.find(D=>D.value===U)?.ref.current;for(const D of ee){if(D===F)return;if(D?.scrollIntoView({block:"nearest"}),D===T&&R&&(R.scrollTop=0),D===X&&R&&(R.scrollTop=R.scrollHeight),H(D),o==="both"){const G=re.find(le=>le.ref.current===D);G&&J(G.textValue)}if(D!==F)return}},[o,J,R,O,U]),_=Va(o);return c.useEffect(()=>{o!=="both"&&H(null)},[q,o]),c.useEffect(()=>{if(E&&S)return r0([E,S])},[E,S]),a.jsx(Ta,{children:a.jsx(Aa,{allowCustomValue:t,autocomplete:_,required:w,trigger:S,onTriggerChange:M,contentId:Z,value:U,onValueChange:K,open:V,onOpenChange:k,disabled:h,locale:u,focusFirst:ae,textValue:q,onTextValueChange:J,onViewportChange:N,onContentChange:z,visuallyFocussedItem:O,filterValue:Y,onFilterValueChange:ne,onVisuallyFocussedItemChange:H,isPrintableCharacter:j,visible:y,children:r})})},p0="ComboboxTrigger",$0=c.forwardRef((e,t)=>{const{...o}=e,r=je(p0),n=()=>{r.disabled||r.onOpenChange(!0)};return a.jsx(n0,{asChild:!0,children:a.jsx(Zt,{asChild:!0,trapped:r.open,onMountAutoFocus:s=>{s.preventDefault()},onUnmountAutoFocus:s=>{r.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),s.preventDefault()},children:a.jsx("div",{ref:t,"data-disabled":r.disabled?"":void 0,...o,onClick:Q(o.onClick,s=>{if(r.disabled){s.preventDefault();return}r.trigger?.focus()}),onPointerDown:Q(o.onPointerDown,s=>{if(r.disabled){s.preventDefault();return}const i=s.target;i.hasPointerCapture(s.pointerId)&&i.releasePointerCapture(s.pointerId),(i.closest("button")??i.closest("div"))===s.currentTarget&&s.button===0&&s.ctrlKey===!1&&(n(),r.trigger?.focus())})})})})});$0.displayName=p0;const C0="ComboboxInput",j0=c.forwardRef((e,t)=>{const o=je(C0),r=c.useRef(null),{getItems:n}=et(void 0),{startsWith:s}=Qt(o.locale,{sensitivity:"base"}),i=o.disabled,l=se(r,t,o.onTriggerChange),d=()=>{i||o.onOpenChange(!0)},f=Sa(o.filterValue);return xe(()=>{const h=setTimeout(()=>{if(o.textValue===""||o.textValue===void 0||o.filterValue===""||o.filterValue===void 0)return;const w=n().find(m=>m.type==="option"&&s(m.textValue,o.textValue)),u=Ka(f??"",o.filterValue);w&&!o.visuallyFocussedItem&&u===o.filterValue.length&&r.current?.setSelectionRange(o.filterValue.length,o.textValue.length)});return()=>clearTimeout(h)},[o.textValue,o.filterValue,s,o.visuallyFocussedItem,n,f]),a.jsx("input",{type:"text",role:"combobox","aria-controls":o.contentId,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":o.autocomplete.type,"data-state":o.open?"open":"closed","aria-disabled":i,"aria-activedescendant":o.visuallyFocussedItem?.id,disabled:i,"data-disabled":i?"":void 0,"data-placeholder":o.textValue===void 0?"":void 0,value:o.textValue??"",...e,ref:l,onKeyDown:Q(e.onKeyDown,h=>{if(["ArrowUp","ArrowDown","Home","End"].includes(h.key))o.open||d(),setTimeout(()=>{let u=n().filter(m=>!m.disabled&&m.isVisible).map(m=>m.ref.current);if(["ArrowUp","End"].includes(h.key)&&(u=u.slice().reverse()),["ArrowUp","ArrowDown"].includes(h.key)){const m=o.visuallyFocussedItem??n().find(b=>b.value===o.value)?.ref.current;if(m){let b=u.indexOf(m);b===u.length-1&&(b=-1),u=u.slice(b+1)}}if(["ArrowDown"].includes(h.key)&&o.autocomplete.type==="both"&&u.length>1){const[m,...b]=u,v=n().find(C=>C.ref.current===m).textValue;o.textValue===v&&(u=b)}o.focusFirst(u,n())}),h.preventDefault();else if(["Tab"].includes(h.key)&&o.open)h.preventDefault();else if(["Escape"].includes(h.key))o.open?o.onOpenChange(!1):(o.onValueChange(void 0),o.onTextValueChange("")),h.preventDefault();else if(Ma.includes(h.key)){if(o.visuallyFocussedItem){const w=n().find(u=>u.ref.current===o.visuallyFocussedItem);w&&(o.onValueChange(w.value),o.onTextValueChange(w.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(w.textValue),w.ref.current?.click())}else{const w=n().find(u=>u.type==="option"&&!u.disabled&&u.textValue===o.textValue);w&&(o.onValueChange(w.value),o.onTextValueChange(w.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(w.textValue),w.ref.current?.click())}o.onOpenChange(!1),h.preventDefault()}else o.onVisuallyFocussedItemChange(null)}),onChange:Q(e.onChange,h=>{o.onTextValueChange(h.currentTarget.value),o.autocomplete.type==="both"&&o.onFilterValueChange(h.currentTarget.value)}),onKeyUp:Q(e.onKeyUp,h=>{if(!o.open&&(o.isPrintableCharacter(h.key)||["Backspace"].includes(h.key))&&d(),setTimeout(()=>{if(o.autocomplete.type==="both"&&o.isPrintableCharacter(h.key)&&o.filterValue!==void 0){const w=o.filterValue,u=n().find(m=>s(m.textValue,w));u&&o.onTextValueChange(u.textValue)}}),o.autocomplete.type==="none"&&o.isPrintableCharacter(h.key)){const w=o.textValue??"",u=n().find(m=>s(m.textValue,w));u&&(o.onVisuallyFocussedItemChange(u.ref.current),u.ref.current?.scrollIntoView())}}),onBlur:Q(e.onBlur,()=>{if(o.open)return;o.onVisuallyFocussedItemChange(null);const[h]=n().filter(u=>u.textValue===o.textValue&&u.type==="option");if(h){o.onValueChange(h.value),o.autocomplete.type==="both"&&o.onFilterValueChange(h.textValue);return}if(o.allowCustomValue){o.onValueChange(o.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(o.textValue);return}const[w]=n().filter(u=>u.value===o.value&&u.type==="option");w&&o.textValue!==""?(o.onTextValueChange(w.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(w.textValue)):(o.onValueChange(void 0),o.onTextValueChange(""))})})});j0.displayName="ComboboxTextInput";const y0=c.forwardRef((e,t)=>{const{children:o,...r}=e,n=je(C0),s=n.disabled,i=()=>{s||(n.onOpenChange(!0),n.trigger?.focus())};return a.jsx(oe.button,{"aria-hidden":!0,type:"button","aria-disabled":s,"aria-controls":n.contentId,"aria-expanded":n.open,disabled:s,"data-disabled":s?"":void 0,...r,tabIndex:-1,ref:t,onClick:Q(r.onClick,()=>{n.trigger?.focus()}),onPointerDown:Q(r.onPointerDown,l=>{l.button===0&&l.ctrlKey===!1&&(i(),l.preventDefault())}),onKeyDown:Q(r.onKeyDown,l=>{Ra.includes(l.key)&&(i(),l.preventDefault())}),children:o||"▼"})});y0.displayName="ComboboxIcon";const Ea="ComboboxPortal",S0=e=>a.jsx(o0,{asChild:!0,...e});S0.displayName=Ea;const Jt="ComboboxContent",R0=c.forwardRef((e,t)=>{const o=je(Jt),{getItems:r}=et(void 0),[n,s]=c.useState();if(xe(()=>{s(new DocumentFragment)},[]),xe(()=>{o.open&&o.autocomplete.type==="none"&&setTimeout(()=>{r().find(l=>l.value===o.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[r,o.autocomplete,o.value,o.open]),!o.open){const i=n;return i?We.createPortal(a.jsx(ze.Slot,{scope:void 0,children:a.jsx("div",{children:e.children})}),i):null}return a.jsx(M0,{...e,ref:t})});R0.displayName=Jt;const Ha=10,M0=c.forwardRef((e,t)=>{const{onEscapeKeyDown:o,onPointerDownOutside:r,...n}=e,s=je(Jt),i=se(t,d=>s.onContentChange(d)),{onOpenChange:l}=s;return Kt(),c.useEffect(()=>{const d=()=>{l(!1)};return window.addEventListener("blur",d),window.addEventListener("resize",d),()=>{window.removeEventListener("blur",d),window.removeEventListener("resize",d)}},[l]),a.jsx(Yt,{allowPinchZoom:!0,children:a.jsx(s0,{asChild:!0,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:d=>{d.preventDefault()},onDismiss:()=>{s.onOpenChange(!1),s.trigger?.focus({preventScroll:!0})},children:a.jsx(I0,{role:"listbox",id:s.contentId,"data-state":s.open?"open":"closed",onContextMenu:d=>d.preventDefault(),...n,ref:i,style:{display:"flex",flexDirection:"column",outline:"none",...n.style}})})})});M0.displayName="ComboboxContentImpl";const I0=c.forwardRef((e,t)=>{const{align:o="start",collisionPadding:r=Ha,...n}=e;return a.jsx(i0,{...n,ref:t,align:o,collisionPadding:r,style:{boxSizing:"border-box",...n.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});I0.displayName="ComboboxPopperPosition";const A0="ComboboxViewport",T0=c.forwardRef((e,t)=>{const o=je(A0),r=se(t,o.onViewportChange);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),a.jsx(ze.Slot,{scope:void 0,children:a.jsx(oe.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:r,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});T0.displayName=A0;const mt="ComboboxItem",[kn,Pt]=c0(mt),en=c.forwardRef((e,t)=>{const{value:o,disabled:r=!1,textValue:n,...s}=e,[i,l]=c.useState();xe(()=>{l(new DocumentFragment)},[]);const{onTextValueChange:d,textValue:f,...h}=je(mt),w=ke(),[u,m]=c.useState(n??""),b=h.value===o,{startsWith:v,contains:C}=Qt(h.locale,{sensitivity:"base"}),$=c.useCallback(p=>{m(j=>j||(p?.textContent??"").trim())},[]);return c.useEffect(()=>{b&&f===void 0&&u!==""&&d(u)},[u,b,f,d]),h.autocomplete.type==="both"&&u&&h.filterValue&&!v(u,h.filterValue)||h.autocomplete.type==="list"&&h.autocomplete.filter==="startsWith"&&u&&f&&!v(u,f)||h.autocomplete.type==="list"&&h.autocomplete.filter==="contains"&&u&&f&&!C(u,f)?i?We.createPortal(a.jsx(kn,{textId:w,onTextValueChange:$,isSelected:b,textValue:u,children:a.jsx(ze.ItemSlot,{scope:void 0,value:o,textValue:u,disabled:r,type:"option",isVisible:!1,children:a.jsx(Dt,{ref:t,value:o,disabled:r,...s})})}),i):null:a.jsx(kn,{textId:w,onTextValueChange:$,isSelected:b,textValue:u,children:a.jsx(ze.ItemSlot,{scope:void 0,value:o,textValue:u,disabled:r,type:"option",isVisible:!0,children:a.jsx(Dt,{ref:t,value:o,disabled:r,...s})})})});en.displayName=mt;const V0="ComboboxItemImpl",Dt=c.forwardRef((e,t)=>{const{value:o,disabled:r=!1,...n}=e,s=c.useRef(null),i=se(t,s),{getItems:l}=et(void 0),{onTextValueChange:d,visuallyFocussedItem:f,...h}=je(mt),{isSelected:w,textValue:u,textId:m}=Pt(V0),b=()=>{r||(h.onValueChange(o),d(u),h.onOpenChange(!1),h.autocomplete.type==="both"&&h.onFilterValueChange(u),h.trigger?.focus({preventScroll:!0}))},v=c.useMemo(()=>f===l().find($=>$.ref.current===s.current)?.ref.current,[l,f]),C=ke();return a.jsx(oe.div,{role:"option","aria-labelledby":m,"data-highlighted":v?"":void 0,"aria-selected":w&&v,"data-state":w?"checked":"unchecked","aria-disabled":r||void 0,"data-disabled":r?"":void 0,tabIndex:r?void 0:-1,...n,id:C,ref:i,onPointerUp:Q(n.onPointerUp,b)})});Dt.displayName=V0;const L0="ComboboxItemText",E0=c.forwardRef((e,t)=>{const{className:o,style:r,...n}=e,s=Pt(L0),i=se(t,s.onTextValueChange);return a.jsx(oe.span,{id:s.textId,...n,ref:i})});E0.displayName=L0;const H0="ComboboxItemIndicator",D0=c.forwardRef((e,t)=>{const{isSelected:o}=Pt(H0);return o?a.jsx(oe.span,{"aria-hidden":!0,...e,ref:t}):null});D0.displayName=H0;const tn="ComboboxNoValueFound",B0=c.forwardRef((e,t)=>{const{textValue:o="",filterValue:r="",visible:n=!1,locale:s,autocomplete:i}=je(tn),[l,d]=c.useState([]),{subscribe:f}=et(void 0),{startsWith:h,contains:w}=Qt(s,{sensitivity:"base"});return c.useEffect(()=>{const u=f(m=>{if(n){const b=m.filter(v=>v.type!=="create");d(b)}else d(m)});return()=>{u()}},[n,f]),i.type==="none"&&l.length>0||i.type==="list"&&i.filter==="startsWith"&&l.some(u=>h(u.textValue,o))||i.type==="both"&&l.some(u=>h(u.textValue,r))||i.type==="list"&&i.filter==="contains"&&l.some(u=>w(u.textValue,o))?null:a.jsx(oe.div,{...e,ref:t})});B0.displayName=tn;const k0=c.forwardRef((e,t)=>{const{disabled:o=!1,...r}=e,n=je(tn),{textValue:s,visuallyFocussedItem:i}=n,{getItems:l,subscribe:d}=et(void 0),f=c.useRef(null),[h,w]=c.useState(!1),u=se(t,f),m=c.useMemo(()=>i===l().find(C=>C.ref.current===f.current)?.ref.current,[l,i]),b=ke(),v=()=>{!o&&s&&(n.onValueChange(s),n.onTextValueChange(s),n.onOpenChange(!1),n.autocomplete.type==="both"&&n.onFilterValueChange(s),n.trigger?.focus({preventScroll:!0}))};return xe(()=>{const C=d($=>{w(!$.some(p=>p.textValue===s&&p.type!=="create"))});return l().length===0&&w(!0),()=>{C()}},[s,d,l]),(!s||!h)&&!n.visible?null:a.jsx(ze.ItemSlot,{scope:void 0,value:s??"",textValue:s??"",disabled:o,isVisible:!0,type:"create",children:a.jsx(oe.div,{role:"option",tabIndex:o?void 0:-1,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,"data-highlighted":m?"":void 0,...r,id:b,ref:u,onPointerUp:Q(r.onPointerUp,v)})})});k0.displayName="ComboboxCreateItem";const Da=La,Ba=$0,ka=j0,Na=y0,za=S0,Oa=R0,Fa=T0,_a=en,Wa=E0,Ua=D0,qa=B0,Ga=k0;function Ka(e,t){const o=Math.min(e.length,t.length);for(let r=0;r<o;r++)if(e[r]!==t[r])return r;return o}const ve=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:en,Content:Oa,CreateItem:Ga,Icon:Na,Item:_a,ItemIndicator:Ua,ItemText:Wa,NoValueFound:qa,Portal:za,Root:Da,TextInput:ka,Trigger:Ba,Viewport:Fa},Symbol.toStringTag,{value:"Module"}));function nn(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...o)=>t.current?.(...o),[])}const Ya=[" ","Enter","ArrowUp","ArrowDown"],Za=[" ","Enter"],tt="Select",[xt,nt,Xa]=U1(tt),[Ue,Qa]=e0(tt,[Xa,t0]),wt=t0(),[Ja,Me]=Ue(tt),[Pa,er]=Ue(tt),on=e=>{const{__scopeSelect:t,children:o,open:r,defaultOpen:n,onOpenChange:s,value:i,defaultValue:l,onValueChange:d,dir:f,disabled:h,required:w,multi:u=!1}=e,m=wt(t),[b,v]=c.useState(null),[C,$]=c.useState(null),[p,j]=c.useState(!1),y=G1(f),[S=!1,M]=Ne({prop:r,defaultProp:n,onChange:s}),[R,N]=Ne({prop:i,defaultProp:l,onChange(H){d&&(Array.isArray(H),d(H))}}),E=c.useRef(null),[z,O]=c.useState(new Set);return a.jsx(a0,{...m,children:a.jsx(Ja,{required:w,scope:t,trigger:b,onTriggerChange:v,valueNode:C,onValueNodeChange:$,valueNodeHasChildren:p,onValueNodeHasChildrenChange:j,contentId:ke(),value:R,onValueChange:N,open:S,onOpenChange:M,dir:y,triggerPointerDownPosRef:E,disabled:h,multi:u,children:a.jsx(xt.Provider,{scope:t,children:a.jsx(Pa,{scope:e.__scopeSelect,onNativeOptionAdd:c.useCallback(H=>{O(V=>new Set(V).add(H))},[]),onNativeOptionRemove:c.useCallback(H=>{O(V=>{const k=new Set(V);return k.delete(H),k})},[]),children:o})})})})};on.displayName=tt;const N0="SelectTrigger",an=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=wt(o),s=Me(N0,o),i=s.disabled,l=se(t,s.onTriggerChange),d=nt(o),[f,h,w]=K0(m=>{const b=d().filter($=>!$.disabled),v=b.find($=>$.value===s.value),C=Y0(b,m,v);if(C!==void 0&&!Array.isArray(C.value)){const $=s.multi?[C.value]:C.value;s.onValueChange($)}}),u=()=>{i||(s.onOpenChange(!0),w())};return a.jsx(n0,{asChild:!0,...n,children:a.jsx(oe.div,{role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed","data-disabled":i?"":void 0,"data-placeholder":s.value===void 0?"":void 0,tabIndex:i?void 0:0,...r,ref:l,onClick:Q(r.onClick,m=>{m.currentTarget.focus()}),onPointerDown:Q(r.onPointerDown,m=>{const b=m.target;b.hasPointerCapture(m.pointerId)&&b.releasePointerCapture(m.pointerId),(b.closest("button")??b.closest("div"))===m.currentTarget&&m.button===0&&m.ctrlKey===!1&&(u(),s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)},m.preventDefault())}),onKeyDown:Q(r.onKeyDown,m=>{const b=f.current!=="",v=m.ctrlKey||m.altKey||m.metaKey,C=m.target;(C.closest("button")??C.closest("div"))===m.currentTarget&&(!v&&m.key.length===1&&h(m.key),!(b&&m.key===" ")&&Ya.includes(m.key)&&(u(),m.preventDefault()))})})})});an.displayName=N0;const z0="SelectValue",rn=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,placeholder:n,...s}=e,i=Me(z0,o),{onValueNodeHasChildrenChange:l}=i,d=r!==void 0,f=se(t,i.onValueNodeChange),[h,w]=c.useState([]),u=nt(o);xe(()=>{l(d)},[l,d]),c.useLayoutEffect(()=>{if(Array.isArray(i.value)&&h.length!==i.value.length){const b=setTimeout(()=>{const v=u().filter(C=>Array.isArray(C.value)?!1:i.value?.includes(C.value));w(v)});return()=>{clearTimeout(b)}}},[i.value,u,h]);let m;if((i.value===void 0||i.value.length===0)&&n!==void 0)m=a.jsx("span",{children:n});else if(typeof r=="function")if(Array.isArray(i.value)){const b=i.value.map(v=>{const C=h.find($=>$.value===v);return C?r({value:v,textValue:C?.textValue}):null});m=b.every(v=>v===null)?n:b}else m=r(i.value);else m=r;return a.jsx(oe.span,{...s,ref:f,children:m||null})});rn.displayName=z0;const tr="SelectIcon",sn=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...n}=e;return a.jsx(oe.span,{"aria-hidden":!0,...n,ref:t,children:r||"▼"})});sn.displayName=tr;const nr="SelectPortal",cn=e=>a.jsx(o0,{asChild:!0,...e});cn.displayName=nr;const He="SelectContent",ln=c.forwardRef((e,t)=>{const o=Me(He,e.__scopeSelect),[r,n]=c.useState();if(xe(()=>{n(new DocumentFragment)},[]),!o.open){const s=r;return s?We.createPortal(a.jsx(O0,{scope:e.__scopeSelect,children:a.jsx(xt.Slot,{scope:e.__scopeSelect,children:a.jsx("div",{children:e.children})})}),s):null}return a.jsx(F0,{...e,ref:t})});ln.displayName=He;const Se=10,[O0,Ae]=Ue(He),or="SelectContentImpl",F0=c.forwardRef((e,t)=>{const{__scopeSelect:o,position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:s,onPointerDownOutside:i,side:l,sideOffset:d,align:f,alignOffset:h,arrowPadding:w,collisionBoundary:u,collisionPadding:m,sticky:b,hideWhenDetached:v,avoidCollisions:C,...$}=e,p=Me(He,o),[j,y]=c.useState(null),[S,M]=c.useState(null),R=se(t,T=>y(T)),[N,E]=c.useState(null),[z,O]=c.useState(null),H=nt(o),[V,k]=c.useState(!1),U=c.useRef(!1);c.useEffect(()=>{if(j)return r0(j)},[j]),Kt();const K=c.useCallback(T=>{const[W,...X]=H().map(G=>G.ref.current),[F]=X.slice(-1),D=document.activeElement;for(const G of T)if(G===D||(G?.scrollIntoView({block:"nearest"}),G===W&&S&&(S.scrollTop=0),G===F&&S&&(S.scrollTop=S.scrollHeight),G?.focus(),document.activeElement!==D))return},[H,S]),q=c.useCallback(()=>K([N,j]),[K,N,j]);c.useEffect(()=>{V&&q()},[V,q]);const{onOpenChange:J,triggerPointerDownPosRef:Y}=p;c.useEffect(()=>{if(j){let T={x:0,y:0};const W=F=>{T={x:Math.abs(Math.round(F.pageX)-(Y.current?.x??0)),y:Math.abs(Math.round(F.pageY)-(Y.current?.y??0))}},X=F=>{T.x<=10&&T.y<=10?F.preventDefault():j.contains(F.target)||J(!1),document.removeEventListener("pointermove",W),Y.current=null};return Y.current!==null&&(document.addEventListener("pointermove",W),document.addEventListener("pointerup",X,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",W),document.removeEventListener("pointerup",X,{capture:!0})}}},[j,J,Y]),c.useEffect(()=>{const T=()=>J(!1);return window.addEventListener("blur",T),window.addEventListener("resize",T),()=>{window.removeEventListener("blur",T),window.removeEventListener("resize",T)}},[J]);const[ne,Z]=K0(T=>{const W=H().filter(D=>!D.disabled),X=W.find(D=>D.ref.current===document.activeElement),F=Y0(W,T,X);F&&setTimeout(()=>F.ref.current.focus())}),ae=c.useCallback((T,W,X)=>{const F=!U.current&&!X;(p.value!==void 0&&p.value===W||F)&&(E(T),F&&(U.current=!0))},[p.value]),_=c.useCallback(()=>j?.focus(),[j]),ee=c.useCallback((T,W,X)=>{const F=!U.current&&!X;(p.value!==void 0&&(Array.isArray(W)?W.every(G=>p.value?.includes(G)):p.value===W)||F)&&O(T)},[p.value]),re=r==="popper"?Bt:_0,fe=re===Bt?{side:l,sideOffset:d,align:f,alignOffset:h,arrowPadding:w,collisionBoundary:u,collisionPadding:m,sticky:b,hideWhenDetached:v,avoidCollisions:C}:{};return a.jsx(O0,{scope:o,content:j,viewport:S,onViewportChange:M,itemRefCallback:ae,selectedItem:N,onItemLeave:_,itemTextRefCallback:ee,focusSelectedItem:q,selectedItemText:z,position:r,isPositioned:V,searchRef:ne,children:a.jsx(Yt,{as:Vt,allowPinchZoom:!0,children:a.jsx(Zt,{asChild:!0,trapped:p.open,onMountAutoFocus:T=>{T.preventDefault()},onUnmountAutoFocus:Q(n,T=>{p.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),T.preventDefault()}),children:a.jsx(s0,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:T=>T.preventDefault(),onDismiss:()=>p.onOpenChange(!1),children:a.jsx(re,{role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed","aria-multiselectable":p.multi?"true":void 0,dir:p.dir,onContextMenu:T=>T.preventDefault(),...$,...fe,onPlaced:()=>k(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...$.style},onKeyDown:Q($.onKeyDown,T=>{const W=T.ctrlKey||T.altKey||T.metaKey;if(T.key==="Tab"&&T.preventDefault(),!W&&T.key.length===1&&Z(T.key),["ArrowUp","ArrowDown","Home","End"].includes(T.key)){let F=H().filter(D=>!D.disabled).map(D=>D.ref.current);if(["ArrowUp","End"].includes(T.key)&&(F=F.slice().reverse()),["ArrowUp","ArrowDown"].includes(T.key)){const D=T.target,G=F.indexOf(D);F=F.slice(G+1)}setTimeout(()=>K(F)),T.preventDefault()}})})})})})})});F0.displayName=or;const ar="SelectItemAlignedPosition",_0=c.forwardRef((e,t)=>{const{__scopeSelect:o,onPlaced:r,...n}=e,s=Me(He,o),i=Ae(He,o),[l,d]=c.useState(null),[f,h]=c.useState(null),w=se(t,R=>h(R)),u=nt(o),m=c.useRef(!1),b=c.useRef(!0),{viewport:v,selectedItem:C,selectedItemText:$,focusSelectedItem:p}=i,j=c.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&f&&v&&C&&$){const R=s.trigger.getBoundingClientRect(),N=f.getBoundingClientRect(),E=s.valueNode.getBoundingClientRect(),z=$.getBoundingClientRect();if(s.dir!=="rtl"){const D=z.left-N.left,G=E.left-D,le=R.left-G,de=R.width+le,P=Math.max(de,N.width),$e=window.innerWidth-Se,ye=Hn(G,[Se,$e-P]);l.style.minWidth=`${de}px`,l.style.left=`${ye}px`}else{const D=N.right-z.right,G=window.innerWidth-E.right-D,le=window.innerWidth-R.right-G,de=R.width+le,P=Math.max(de,N.width),$e=window.innerWidth-Se,ye=Hn(G,[Se,$e-P]);l.style.minWidth=`${de}px`,l.style.right=`${ye}px`}const O=u(),H=window.innerHeight-Se*2,V=v.scrollHeight,k=window.getComputedStyle(f),U=parseInt(k.borderTopWidth,10),K=parseInt(k.paddingTop,10),q=parseInt(k.borderBottomWidth,10),J=parseInt(k.paddingBottom,10),Y=U+K+V+J+q,ne=Math.min(C.offsetHeight*5,Y),Z=window.getComputedStyle(v),ae=parseInt(Z.paddingTop,10),_=parseInt(Z.paddingBottom,10),ee=R.top+R.height/2-Se,re=H-ee,fe=C.offsetHeight/2,T=C.offsetTop+fe,W=U+K+T,X=Y-W;if(W<=ee){const D=C===O[O.length-1].ref.current;l.style.bottom="0px";const G=f.clientHeight-v.offsetTop-v.offsetHeight,le=Math.max(re,fe+(D?_:0)+G+q),de=W+le;l.style.height=`${de}px`}else{const D=C===O[0].ref.current;l.style.top="0px";const le=Math.max(ee,U+v.offsetTop+(D?ae:0)+fe)+X;l.style.height=`${le}px`,v.scrollTop=W-ee+v.offsetTop}l.style.margin=`${Se}px 0`,l.style.minHeight=`${ne}px`,l.style.maxHeight=`${H}px`,r?.(),requestAnimationFrame(()=>m.current=!0)}},[u,s.trigger,s.valueNode,l,f,v,C,$,s.dir,r]);xe(()=>j(),[j]);const[y,S]=c.useState();xe(()=>{f&&S(window.getComputedStyle(f).zIndex)},[f]);const M=c.useCallback(R=>{R&&b.current===!0&&(j(),p?.(),b.current=!1)},[j,p]);return a.jsx(sr,{scope:o,contentWrapper:l,shouldExpandOnScrollRef:m,onScrollButtonChange:M,children:a.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y},children:a.jsx(oe.div,{...n,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})});_0.displayName=ar;const rr="SelectPopperPosition",Bt=c.forwardRef((e,t)=>{const{__scopeSelect:o,align:r="start",collisionPadding:n=Se,...s}=e,i=wt(o);return a.jsx(i0,{...i,...s,ref:t,align:r,collisionPadding:n,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Bt.displayName=rr;const[sr,dn]=Ue(He,{}),kt="SelectViewport",hn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=Ae(kt,o),s=dn(kt,o),i=se(t,n.onViewportChange),l=c.useRef(0);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),a.jsx(xt.Slot,{scope:o,children:a.jsx(oe.div,{"data-radix-select-viewport":"",role:"presentation",...r,ref:i,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:Q(r.onScroll,d=>{const f=d.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:w}=s;if(w?.current&&h){const u=Math.abs(l.current-f.scrollTop);if(u>0){const m=window.innerHeight-Se*2,b=parseFloat(h.style.minHeight),v=parseFloat(h.style.height),C=Math.max(b,v);if(C<m){const $=C+u,p=Math.min(m,$),j=$-p;h.style.height=`${p}px`,h.style.bottom==="0px"&&(f.scrollTop=j>0?j:0,h.style.justifyContent="flex-end")}}}l.current=f.scrollTop})})})]})});hn.displayName=kt;const W0="SelectGroup",[ir,cr]=Ue(W0),un=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=ke();return a.jsx(ir,{scope:o,id:n,children:a.jsx(oe.div,{role:"group","aria-labelledby":n,...r,ref:t})})});un.displayName=W0;const U0="SelectLabel",gn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=cr(U0,o);return a.jsx(oe.div,{id:n.id,...r,ref:t})});gn.displayName=U0;const ut="SelectItem",[lr,q0]=Ue(ut),fn=c.forwardRef((e,t)=>{const{__scopeSelect:o,value:r,disabled:n=!1,textValue:s,...i}=e,l=Me(ut,o),d=Ae(ut,o),f=typeof r=="string"?Array.isArray(l.value)?l.value.includes(r):l.value===r:r.every(p=>l.value?.includes(p)),h=Array.isArray(l.value)&&Array.isArray(r)&&r.some(p=>l.value?.includes(p)),[w,u]=c.useState(s??""),[m,b]=c.useState(!1),v=se(t,p=>d.itemRefCallback?.(p,r,n)),C=ke(),$=()=>{if(!n){let p=l.multi&&typeof r=="string"?[r]:r;h&&!f?l.onValueChange(p):Array.isArray(l.value)&&(p=Z0(r,l.value)),l.onValueChange(p),l.multi||l.onOpenChange(!1)}};if(!l.multi&&Array.isArray(r))throw new Error("You can only pass an array of values in multi selects");return a.jsx(lr,{scope:o,value:r,disabled:n,textId:C,isSelected:f,isIntermediate:h,onItemTextChange:c.useCallback(p=>{u(j=>j||(p?.textContent??"").trim())},[]),children:a.jsx(xt.ItemSlot,{scope:o,value:r,disabled:n,textValue:w,children:a.jsx(oe.div,{role:"option","aria-labelledby":C,"data-highlighted":m?"":void 0,"aria-selected":l.multi?void 0:f&&m,"aria-checked":l.multi?f:void 0,"data-state":f?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...i,ref:v,onFocus:Q(i.onFocus,()=>b(!0)),onBlur:Q(i.onBlur,()=>b(!1)),onPointerUp:Q(i.onPointerUp,$),onPointerMove:Q(i.onPointerMove,p=>{n?d.onItemLeave?.():p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Q(i.onPointerLeave,p=>{p.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:Q(i.onKeyDown,p=>{d.searchRef?.current!==""&&p.key===" "||(Za.includes(p.key)&&$(),p.key===" "&&p.preventDefault())})})})})});fn.displayName=ut;const Xe="SelectItemText",mn=c.forwardRef((e,t)=>{const{__scopeSelect:o,className:r,style:n,...s}=e,i=Me(Xe,o),l=Ae(Xe,o),d=q0(Xe,o),f=er(Xe,o),[h,w]=c.useState(null),u=se(t,$=>w($),d.onItemTextChange,$=>l.itemTextRefCallback?.($,d.value,d.disabled)),m=h?.textContent,b=c.useMemo(()=>a.jsx("option",{value:d.value,disabled:d.disabled,children:m},Array.isArray(d.value)?d.value.join(";"):d.value),[d.disabled,d.value,m]),{onNativeOptionAdd:v,onNativeOptionRemove:C}=f;return xe(()=>(v(b),()=>C(b)),[v,C,b]),a.jsxs(a.Fragment,{children:[a.jsx(oe.span,{id:d.textId,...s,ref:u}),d.isSelected&&i.valueNode&&!i.valueNodeHasChildren?We.createPortal(s.children,i.valueNode):null]})});mn.displayName=Xe;const G0="SelectItemIndicator",xn=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:r,...n}=e,s=q0(G0,o);return typeof r=="function"?a.jsx(oe.span,{"aria-hidden":!0,...n,ref:t,children:r({isSelected:s.isSelected,isIntermediate:s.isIntermediate})}):s.isSelected?a.jsx(oe.span,{"aria-hidden":!0,...n,ref:t,children:r}):null});xn.displayName=G0;const Nt="SelectScrollUpButton",wn=c.forwardRef((e,t)=>{const o=Ae(Nt,e.__scopeSelect),r=dn(Nt,e.__scopeSelect),[n,s]=c.useState(!1),i=se(t,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const f=l.scrollTop>0;s(f)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?a.jsx(bn,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop-=d.offsetHeight)}}):null});wn.displayName=Nt;const zt="SelectScrollDownButton",vn=c.forwardRef((e,t)=>{const o=Ae(zt,e.__scopeSelect),r=dn(zt,e.__scopeSelect),[n,s]=c.useState(!1),i=se(t,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const f=l.scrollHeight-l.clientHeight,h=Math.ceil(l.scrollTop)<f;s(h)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?a.jsx(bn,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop+=d.offsetHeight)}}):null});vn.displayName=zt;const bn=c.forwardRef((e,t)=>{const{__scopeSelect:o,onAutoScroll:r,...n}=e,s=Ae("SelectScrollButton",o),i=c.useRef(null),l=nt(o),d=c.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return c.useEffect(()=>()=>d(),[d]),xe(()=>{l().find(h=>h.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[l]),a.jsx(oe.div,{"aria-hidden":!0,...n,ref:t,style:{flexShrink:0,...n.style},onPointerMove:Q(n.onPointerMove,()=>{s.onItemLeave?.(),i.current===null&&(i.current=window.setInterval(r,50))}),onPointerLeave:Q(n.onPointerLeave,()=>{d()})})});bn.displayName="SelectScrollButtonImpl";const dr="SelectSeparator",pn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e;return a.jsx(oe.div,{"aria-hidden":!0,...r,ref:t})});pn.displayName=dr;const Ot="SelectArrow",$n=c.forwardRef((e,t)=>{const{__scopeSelect:o,...r}=e,n=wt(o),s=Me(Ot,o),i=Ae(Ot,o);return s.open&&i.position==="popper"?a.jsx(q1,{...n,...r,ref:t}):null});$n.displayName=Ot;const hr="BubbleSelect",ur=c.forwardRef((e,t)=>{const{value:o,...r}=e,n=c.useRef(null),s=se(t,n),i=K1(o),l=Me(hr,void 0);c.useEffect(()=>{const f=n.current,h=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(h,"value").set;if(i!==o&&u){const m=new Event("change",{bubbles:!0});u.call(f,o),f.dispatchEvent(m)}},[i,o]);let d=o;return l.multi&&!Array.isArray(o)&&(d=[]),a.jsx(Y1,{asChild:!0,children:a.jsx("select",{...r,multiple:l.multi?!0:void 0,ref:s,defaultValue:d})})});ur.displayName="BubbleSelect";function K0(e){const t=nn(e),o=c.useRef(""),r=c.useRef(0),n=c.useCallback(i=>{const l=o.current+i;t(l),function d(f){o.current=f,window.clearTimeout(r.current),f!==""&&(r.current=window.setTimeout(()=>d(""),1e3))}(l)},[t]),s=c.useCallback(()=>{o.current="",window.clearTimeout(r.current)},[]);return c.useEffect(()=>()=>window.clearTimeout(r.current),[]),[o,n,s]}function Y0(e,t,o){const n=t.length>1&&Array.from(t).every(f=>f===t[0])?t[0]:t,s=o?e.indexOf(o):-1;let i=gr(e,Math.max(s,0));n.length===1&&(i=i.filter(f=>f!==o));const d=i.find(f=>f.textValue.toLowerCase().startsWith(n.toLowerCase()));return d!==o?d:void 0}function gr(e,t){return e.map((o,r)=>e[(t+r)%e.length])}const Z0=(e,t=[])=>{if(Array.isArray(e))return e.reduce((r,n)=>Z0(n,r),t);const o=t.indexOf(e);return o===-1?[...t,e]:[...t.slice(0,o),...t.slice(o+1)]},fr=on,mr=an,xr=rn,wr=sn,vr=cn,br=ln,pr=hn,$r=un,Cr=gn,jr=fn,yr=mn,Sr=xn,Rr=wn,Mr=vn,Ir=pn,Ar=$n,be=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Ar,Content:br,Group:$r,Icon:wr,Item:jr,ItemIndicator:Sr,ItemText:yr,Label:Cr,Portal:vr,Root:fr,ScrollDownButton:Mr,ScrollUpButton:Rr,Select:on,SelectArrow:$n,SelectContent:ln,SelectGroup:un,SelectIcon:sn,SelectItem:fn,SelectItemIndicator:xn,SelectItemText:mn,SelectLabel:gn,SelectPortal:cn,SelectScrollDownButton:vn,SelectScrollUpButton:wn,SelectSeparator:pn,SelectTrigger:an,SelectValue:rn,SelectViewport:hn,Separator:Ir,Trigger:mr,Value:xr,Viewport:pr,createSelectScope:Qa},Symbol.toStringTag,{value:"Module"}));function Ee(e,t,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e?.(n),o===!1||!n.defaultPrevented)return t?.(n)}}const Tr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 2A12.014 12.014 0 0 0 4 14c0 3 1.57 6.883 4.201 10.375C10.85 27.894 13.764 30 16 30s5.151-2.101 7.799-5.625C26.43 20.875 28 17 28 14A12.014 12.014 0 0 0 16 2M8 14.5A1.5 1.5 0 0 1 9.5 13a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-1.5 1.5A4.5 4.5 0 0 1 8 14.5M18 25h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m1.5-6a1.5 1.5 0 0 1-1.5-1.5 4.5 4.5 0 0 1 4.5-4.5 1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5"})})};c.forwardRef(Tr);const Vr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m9-7H4V8h24z"})})};c.forwardRef(Vr);const Lr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.137l-2.375-2.173-.047-.046a9.5 9.5 0 1 0-6.84 16.219H16a9.44 9.44 0 0 0 6.519-2.59 1.5 1.5 0 1 1 2.061 2.181A12.43 12.43 0 0 1 16 28.5h-.171a12.5 12.5 0 1 1 8.985-21.368L27.5 9.59V7a1.5 1.5 0 0 1 3 0"})})};c.forwardRef(Lr);const Er=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.061 19.061-9 9a1.503 1.503 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 1 1 3 0v18.375l6.439-6.44a1.502 1.502 0 1 1 2.125 2.125z"})})};c.forwardRef(Er);const Hr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.502 1.502 0 1 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.503 1.503 0 0 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};c.forwardRef(Hr);const Dr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:s,viewBox:"0 0 16 16",stroke:i,ref:r,...o,children:a.jsx("path",{d:"M14.75 8a.75.75 0 0 1-.75.75H6.813l3.22 3.22a.751.751 0 1 1-1.063 1.062l-4.5-4.5a.75.75 0 0 1 0-1.063l4.5-4.5a.751.751 0 0 1 1.063 1.063L6.813 7.25H14a.75.75 0 0 1 .75.75M2.5 1.75a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};c.forwardRef(Dr);const Br=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:s,viewBox:"0 0 16 16",stroke:i,ref:r,...o,children:a.jsx("path",{d:"M11.53 7.47a.75.75 0 0 1 0 1.062l-4.5 4.5a.751.751 0 1 1-1.062-1.063l3.22-3.219H2a.75.75 0 1 1 0-1.5h7.188L5.969 4.03a.751.751 0 1 1 1.063-1.062zm1.97-5.72a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};c.forwardRef(Br);const kr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m28.061 17.061-9 9a1.503 1.503 0 1 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 1 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"})})};c.forwardRef(kr);const Nr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625l-6.439 6.436a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"})})};c.forwardRef(Nr);const zr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M11 13.5H5A1.5 1.5 0 0 1 3.5 12V6a1.5 1.5 0 0 1 3 0v1.733C8.581 5.683 11.786 3.5 16 3.5c5.558 0 8.92 3.299 9.061 3.439a1.5 1.5 0 0 1-2.117 2.125C22.889 9.01 20.25 6.5 16 6.5c-3.625 0-6.367 2.21-8 4h3a1.5 1.5 0 1 1 0 3m16 5h-6a1.5 1.5 0 1 0 0 3h3c-1.625 1.79-4.375 4-8 4-4.25 0-6.889-2.511-6.944-2.565A1.5 1.5 0 0 0 6.94 25.06c.141.141 3.504 3.44 9.061 3.44 4.214 0 7.419-2.183 9.5-4.233V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5"})})};c.forwardRef(zr);const Or=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M220 48v48a12 12 0 0 1-24 0V77l-39.51 39.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M99.51 139.51 60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l39.52-39.51a12 12 0 0 0-17-17Z"})})};c.forwardRef(Or);const Fr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.725 21.993C27.031 20.798 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.993A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.656A3 3 0 0 1 16 27"})})};c.forwardRef(Fr);const _r=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"})})};c.forwardRef(_r);const Wr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"})})};c.forwardRef(Wr);const Ur=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19 14a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m10-5v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h5a2 2 0 0 1 2 2M12 7h8V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm15 7.201V9H5v5.201A23 23 0 0 0 16 17a23 23 0 0 0 11-2.799"})})};c.forwardRef(Ur);const qr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M9.5 8A1.5 1.5 0 0 1 11 6.5h16a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 8M27 14.5H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3m0 8H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3M5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(qr);const Gr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"})})},Kr=c.forwardRef(Gr),Yr=Kr,Zr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 14h-1.35l-3.472-7.812A2 2 0 0 0 23.35 5H8.65a2 2 0 0 0-1.828 1.188L3.35 14H2a1 1 0 0 0 0 2h1v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2h12v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V16h1a1 1 0 0 0 0-2m-20 6H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"})})};c.forwardRef(Zr);const Xr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .707 1.707"})})},Qr=c.forwardRef(Xr),De=Qr,Jr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.924 20.383A1 1 0 0 1 26 21H6a1 1 0 0 1-.708-1.707l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .217 1.09"})})};c.forwardRef(Jr);const Pr=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M7 26a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3m-3-7a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 1 0 2 0 7.01 7.01 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9.01 9.01 0 0 1 9 9 1 1 0 0 0 2 0A11.01 11.01 0 0 0 4 15M27 5H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1 13.014 13.014 0 0 1 13 13 1 1 0 0 0 1 1h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"})})};c.forwardRef(Pr);const es=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25 3h-1a2 2 0 0 0-2 2v2h-3.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2H10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.586A1.98 1.98 0 0 0 5.586 12L7 13.414V27a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13.414L26.414 12A1.98 1.98 0 0 0 27 10.586V5a2 2 0 0 0-2-2m-6 24h-6v-8a3 3 0 0 1 6 0z"})})};c.forwardRef(es);const ts=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M25 24H7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v13h17a1 1 0 0 1 0 2"})})};c.forwardRef(ts);const ns=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M3.094 14.443a12.8 12.8 0 0 1 2.914-6.72 2 2 0 0 1 2.953-.138l3.459 3.533a1.98 1.98 0 0 1 .211 2.56 3.2 3.2 0 0 0-.462.968.5.5 0 0 1-.478.354h-8.1a.5.5 0 0 1-.497-.557m14.08-11.435A2 2 0 0 0 15 5v5.084a1.98 1.98 0 0 0 1.656 1.97 4 4 0 0 1 .677 7.72.51.51 0 0 0-.333.476v8.154a.5.5 0 0 0 .558.5A13.04 13.04 0 0 0 29 16.185C29.094 9.4 23.899 3.61 17.174 3.008M14.656 19.77a4 4 0 0 1-2.425-2.427.51.51 0 0 0-.475-.343H3.59a.5.5 0 0 0-.5.556A13.01 13.01 0 0 0 14.443 28.91a.5.5 0 0 0 .556-.5V20.25a.51.51 0 0 0-.343-.48"})})};c.forwardRef(ns);const os=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 2a11 11 0 0 1 8.984 4.659L16 14.845zm0 22a11 11 0 0 1-8.984-4.659l18.97-10.951A11 11 0 0 1 16 27"})})};c.forwardRef(os);const as=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.504 1.504 0 0 1 2.125-2.125L12 22.875 26.939 7.939a1.502 1.502 0 1 1 2.125 2.125z"})})};c.forwardRef(as);const rs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5.708 10.708-7 7a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.586l6.293-6.293a1 1 0 0 1 1.415 1.415"})})};c.forwardRef(rs);const ss=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84"})})};c.forwardRef(ss);const is=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m27.061 13.061-10 10a1.503 1.503 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.502 1.502 0 1 1 2.125 2.125z"})})};c.forwardRef(is);const cs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"})})},ls=c.forwardRef(cs),X0=ls,ds=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16l-8.936-8.939a1.502 1.502 0 1 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"})})},hs=c.forwardRef(ds),Cn=hs,us=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.061 21.061a1.503 1.503 0 0 1-2.125 0L16 12.125l-8.939 8.936a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"})})};c.forwardRef(us);const gs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2"})})},fs=c.forwardRef(gs),ms=fs,xs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 16a12 12 0 0 1-20.236 8.728 1.002 1.002 0 0 1 1.375-1.456 10 10 0 1 0-.21-14.343c-.441.446-.857.885-1.26 1.321l2.039 2.043A1 1 0 0 1 9 14H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1.707-.707L6.25 8.838c.402-.437.817-.875 1.258-1.32A12 12 0 0 1 28 16M16 9a1 1 0 0 0-1 1v6a1 1 0 0 0 .485.858l5 3a.999.999 0 0 0 1.486-1.1 1 1 0 0 0-.456-.616L17 15.434V10a1 1 0 0 0-1-1"})})};c.forwardRef(xs);const ws=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435C30.764 9.693 25.884 5 20.008 5"})})};c.forwardRef(ws);const vs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435m-7.283 3.143a1 1 0 0 1-1.415 0L20 16.414V24a1 1 0 0 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1 0 1.415"})})};c.forwardRef(vs);const bs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M8.96 12.153 4.342 16l4.618 3.848a1.5 1.5 0 1 1-1.92 2.305l-6-5a1.5 1.5 0 0 1 0-2.305l6-5a1.5 1.5 0 0 1 1.92 2.304m22 2.694-6-5a1.5 1.5 0 1 0-1.92 2.306L27.658 16l-4.618 3.848a1.5 1.5 0 1 0 1.92 2.305l6-5a1.5 1.5 0 0 0 0-2.305M20.512 3.59a1.5 1.5 0 0 0-1.922.898l-8 22a1.5 1.5 0 0 0 2.82 1.024l8-22a1.5 1.5 0 0 0-.898-1.922"})})};c.forwardRef(bs);const ps=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"})})};c.forwardRef(ps);const $s=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 10H4a1 1 0 0 0-1 1v6a12.04 12.04 0 0 0 4.068 9H4a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2h-3.067a12.1 12.1 0 0 0 3.375-5.011A5 5 0 0 0 31 16v-1a5 5 0 0 0-5-5m3 6a3 3 0 0 1-2.15 2.875Q27 17.944 27 17v-4.828A3 3 0 0 1 29 15zM14 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m4 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-8 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"})})};c.forwardRef($s);const Cs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.743 13.401a1 1 0 0 0-.487-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.758L6.47 10.61 2.74 12.734a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.204a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.583 1 1 0 0 0 .808-.073L16 26.768l3.765 2.107a1.013 1.013 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.759l.018-4.206 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};c.forwardRef(Cs);const js=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M18.5 12V6a1.5 1.5 0 1 1 3 0v4.5H26a1.5 1.5 0 1 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5M12 18.5H6a1.5 1.5 0 1 0 0 3h4.5V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m14 0h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-4.5H26a1.5 1.5 0 1 0 0-3m-14-14A1.5 1.5 0 0 0 10.5 6v4.5H6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 12 4.5"})})};c.forwardRef(js);const ys=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M22.5 17.5h-2v-3h2a5 5 0 1 0-5-5v2h-3v-2a5 5 0 1 0-5 5h2v3h-2a5 5 0 1 0 5 5v-2h3v2a5 5 0 1 0 5-5m-2-8a2 2 0 1 1 2 2h-2zm-13 0a2 2 0 0 1 4 0v2h-2a2 2 0 0 1-2-2m4 13a2 2 0 1 1-2-2h2zm3-8h3v3h-3zm8 10a2 2 0 0 1-2-2v-2h2a2 2 0 0 1 0 4"})})};c.forwardRef(ys);const Ss=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"})})};c.forwardRef(Ss);const Rs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.061 23.939a1.503 1.503 0 0 1-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 1 1-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 1 1 2.125-2.125L16 13.875l7.939-7.94a1.502 1.502 0 1 1 2.125 2.125L18.125 16z"})})},Ms=c.forwardRef(Rs),qe=Ms,Is=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 16.293a1 1 0 0 1-1.415 1.415L16 17.414l-3.293 3.293a1 1 0 0 1-1.415-1.415L14.587 16l-3.293-3.293a1 1 0 1 1 1.415-1.415L16 14.587l3.293-3.293a1 1 0 0 1 1.415 1.415L17.414 16z"})})};c.forwardRef(Is);const As=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.48 9.524a1.51 1.51 0 0 0-1.668-.213l-6.276 3.125-5.24-8.704a1.514 1.514 0 0 0-2.592 0l-5.24 8.708L3.19 9.315a1.514 1.514 0 0 0-2.113 1.825l4.625 14.17a1 1 0 0 0 1.46.55C7.194 25.841 10.39 24 16 24s8.806 1.841 8.835 1.859a1 1 0 0 0 1.464-.549l4.625-14.166a1.51 1.51 0 0 0-.444-1.62M21.98 19.6a1 1 0 0 1-1.159.811 28.5 28.5 0 0 0-9.652 0 1 1 0 0 1-.348-1.97 30.6 30.6 0 0 1 10.348 0 1 1 0 0 1 .816 1.159z"})})};c.forwardRef(As);const Ts=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.414 24a2 2 0 0 1 0 2.829l-.585.585a2 2 0 0 1-2.829 0l-6.906-6.905-2.735 6.292A1.98 1.98 0 0 1 12.533 28h-.098a1.98 1.98 0 0 1-1.801-1.375L4.1 6.615A1.994 1.994 0 0 1 6.615 4.1l20.01 6.534a2 2 0 0 1 .176 3.725l-6.292 2.735z"})})};c.forwardRef(Ts);const Vs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3C9.271 3 4 6.075 4 10v12c0 3.925 5.271 7 12 7s12-3.075 12-7V10c0-3.925-5.271-7-12-7m10 13c0 1.203-.985 2.429-2.701 3.365C21.366 20.419 18.774 21 16 21s-5.366-.581-7.299-1.635C6.985 18.429 6 17.203 6 16v-2.08C8.133 15.795 11.779 17 16 17s7.868-1.21 10-3.08zm-2.701 9.365C21.366 26.419 18.774 27 16 27s-5.366-.581-7.299-1.635C6.985 24.429 6 23.203 6 22v-2.08C8.133 21.795 11.779 23 16 23s7.868-1.21 10-3.08V22c0 1.203-.985 2.429-2.701 3.365"})})};c.forwardRef(Vs);const Ls=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 12a2 2 0 0 0-2-2h-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a1 1 0 0 0 1.625.777L9 19.25V23a2 2 0 0 0 2 2h11.699l4.676 3.778A1 1 0 0 0 29 28zm-5.319 11.223a1 1 0 0 0-.625-.223H11v-4h10a2 2 0 0 0 2-2v-5h4v13.906z"})})};c.forwardRef(Ls);const Es=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"})})};c.forwardRef(Es);const Hs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M13.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(Hs);const Ds=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"})})};c.forwardRef(Ds);const Bs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m11 13c.001 1.411-.27 2.81-.8 4.118l-5.587-3.437a2 2 0 0 0-.78-.279l-2.853-.385a2.01 2.01 0 0 0-2 .983h-1.09l-.475-.983a1.99 1.99 0 0 0-1.375-1.083l-1-.216.978-1.718h2.088c.338 0 .67-.087.966-.25l1.532-.845q.202-.113.375-.268l3.364-3.042a1.99 1.99 0 0 0 .407-2.458l-.045-.08A11.01 11.01 0 0 1 27 16M5 16a10.94 10.94 0 0 1 1.068-4.725l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99a2.01 2.01 0 0 0 1.8 1.125h.186l-.904 2.029a2 2 0 0 0 .357 2.171l.018.018L16 25.742l-.242 1.25A11.014 11.014 0 0 1 5 16"})})};c.forwardRef(Bs);const ks=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:[a.jsx("path",{d:"M20.689 3.88A13 13 0 0 0 16 3a13 13 0 0 0-8.155 23.124l1.02-1.765A11 11 0 0 1 5 16a10.94 10.94 0 0 1 1.068-4.724l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99q.113.226.275.418l1.169-2.025-.121-.25a1.99 1.99 0 0 0-1.375-1.084l-1-.217.978-1.717h2.088c.338 0 .67-.087.966-.25l.726-.4z"}),a.jsx("path",{fillRule:"evenodd",d:"m24 2.144 1.732 1-1.58 2.736q.54.435 1.036.932A13.01 13.01 0 0 1 29 16a13 13 0 0 1-17.69 12.124l-1.578 2.732-1.732-1zm-.86 5.49-4.936 8.549 1.628.22c.277.037.543.132.78.278l5.588 3.436c.53-1.308.801-2.706.8-4.117a11.01 11.01 0 0 0-3.86-8.367M13.92 23.6l-1.593 2.76a11 11 0 0 0 3.43.631l.242-1.25z",clipRule:"evenodd"})]})};c.forwardRef(ks);const Ns=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.365 7.5C20.579 21.724 18.441 23 16 23s-4.579-1.275-5.865-3.5a1.001 1.001 0 0 1 1.477-1.31q.157.129.253.31C12.799 20.114 14.266 21 16 21s3.201-.887 4.135-2.5a1 1 0 1 1 1.73 1M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(Ns);const zs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 10.865a1 1 0 0 1-1.365-.365C19.201 20.886 17.734 20 16 20s-3.201.887-4.135 2.5a1.001 1.001 0 1 1-1.73-1C11.421 19.276 13.559 18 16 18s4.579 1.275 5.865 3.5a1 1 0 0 1-.365 1.365M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(zs);const Os=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27.5 6v5a1.5 1.5 0 1 1-3 0V7.5H21a1.5 1.5 0 0 1 0-3h5A1.5 1.5 0 0 1 27.5 6M11 24.5H7.5V21a1.5 1.5 0 0 0-3 0v5A1.5 1.5 0 0 0 6 27.5h5a1.5 1.5 0 1 0 0-3m15-5a1.5 1.5 0 0 0-1.5 1.5v3.5H21a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-15-15H6A1.5 1.5 0 0 0 4.5 6v5a1.5 1.5 0 0 0 3 0V7.5H11a1.5 1.5 0 0 0 0-3"})})};c.forwardRef(Os);const Fs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 13a1.5 1.5 0 1 1-3 0V8.625l-7.439 7.439a1.503 1.503 0 1 1-2.125-2.125L23.375 6.5H19a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 28.5 5zM23 16a1.5 1.5 0 0 0-1.5 1.5v8h-15v-15h8a1.5 1.5 0 1 0 0-3H6A2.5 2.5 0 0 0 3.5 10v16A2.5 2.5 0 0 0 6 28.5h16a2.5 2.5 0 0 0 2.5-2.5v-8.5A1.5 1.5 0 0 0 23 16"})})},_s=c.forwardRef(Fs),Ws=_s,Us=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.344 11.64 26 16 26s8.321-1.657 11.458-4.792c2.353-2.354 3.412-4.702 3.456-4.8a1 1 0 0 0 0-.813M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};c.forwardRef(Us);const qs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M6.74 4.328a1 1 0 1 0-1.48 1.345l2.405 2.646c-4.54 2.786-6.493 7.081-6.579 7.276a1 1 0 0 0 0 .813c.044.098 1.103 2.446 3.456 4.8C7.68 24.343 11.64 26 16 26c2.24.013 4.459-.448 6.509-1.354l2.75 3.027a1 1 0 1 0 1.48-1.345zm11.125 15.21a4 4 0 0 1-5.209-5.73zm13.049-3.13c-.053.117-1.319 2.92-4.17 5.475a1 1 0 0 1-1.408-.072L12.675 7.884a1 1 0 0 1 .575-1.66A17 17 0 0 1 16 6c4.36 0 8.321 1.658 11.458 4.794 2.353 2.354 3.412 4.702 3.456 4.801a1 1 0 0 1 0 .813"})})};c.forwardRef(qs);const Gs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M17 15v12a1 1 0 0 1-2 0V15a1 1 0 0 1 2 0m8 9a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m3-6h-2V5a1 1 0 0 0-2 0v13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m3-6H8V5a1 1 0 0 0-2 0v9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9-6h-2V5a1 1 0 0 0-2 0v3h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"})})};c.forwardRef(Gs);const Ks=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.48 16.851-7.474 7.559a1.97 1.97 0 0 1-1.4.585H9.415l-3.707 3.712a1.001 1.001 0 0 1-1.415-1.415l2.823-2.822L15.588 16h10.537a.5.5 0 0 1 .355.851m.607-13.03a8 8 0 0 0-10.737.518l-1.2 1.185a.5.5 0 0 0-.15.351v7.875l6.875-6.875a1 1 0 0 1 1.414 1.414L17.589 14h11.047a.5.5 0 0 0 .445-.27 8.01 8.01 0 0 0-1.994-9.909M7.854 20.904 13 15.758V8.845a.5.5 0 0 0-.851-.355L7.586 13A1.99 1.99 0 0 0 7 14.414v6.136a.5.5 0 0 0 .854.354"})})};c.forwardRef(Ks);const Ys=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"})})};c.forwardRef(Ys);const Zs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5 8.21 8.21 0 0 1 10.9-.91 8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19 8.26 8.26 0 0 1 .73 11.09 8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61.1 61.1 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45 8 8 0 0 1 10.45 4.76l12.47 34.9 12.47-34.9a8 8 0 0 1 10.45-4.76 8.23 8.23 0 0 1 4.5 10.45"})})};c.forwardRef(Zs);const Xs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707m-7 11a1 1 0 0 1-1.415 1.415L16 20.414l-2.293 2.293a1 1 0 0 1-1.415-1.415L14.587 19l-2.293-2.293a1 1 0 1 1 1.415-1.415L16 17.587l2.293-2.293a1 1 0 0 1 1.415 1.415L17.414 19zM19 11V5.5l5.5 5.5z"})})};c.forwardRef(Xs);const Qs=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M6 15h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1m13-9.5 5.5 5.5H19zM28 19a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1M8 18H6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h1a3.5 3.5 0 1 0 0-7m0 5H7v-3h1a1.5 1.5 0 1 1 0 3m8-5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a4.5 4.5 0 1 0 0-9m0 7h-1v-5h1a2.5 2.5 0 0 1 0 5"})})};c.forwardRef(Qs);const Js=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76 44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46 8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2 8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35.89-.6 1.84-1.52 2.15-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.87 2.82 26.39 7.65 24.18 24.96"})})};c.forwardRef(Js);const Ps=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5 8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"})})};c.forwardRef(Ps);const ei=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(ei);const ti=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"})})};c.forwardRef(ti);const ni=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 9h-4.385q.075-.06.146-.125A3.7 3.7 0 0 0 24 6.196 4.08 4.08 0 0 0 19.805 2a3.7 3.7 0 0 0-2.68 1.239A6.9 6.9 0 0 0 16 5.049a6.9 6.9 0 0 0-1.125-1.81A3.7 3.7 0 0 0 12.195 2 4.08 4.08 0 0 0 8 6.196a3.7 3.7 0 0 0 1.239 2.679q.072.06.146.125H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V15H5v-4h10v4h2v-4h10v4H17v11.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M10.564 7.375A1.7 1.7 0 0 1 10 6.125 2.076 2.076 0 0 1 12.074 4h.061a1.71 1.71 0 0 1 1.25.563c1.049 1.185 1.419 3.15 1.549 4.365-1.22-.13-3.184-.5-4.37-1.553m10.875 0c-1.186 1.05-3.155 1.42-4.375 1.55.148-1.314.561-3.237 1.561-4.361A1.7 1.7 0 0 1 19.875 4h.061A2.077 2.077 0 0 1 22 6.135a1.7 1.7 0 0 1-.564 1.24z"})})};c.forwardRef(ni);const oi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m9.796 8h-4.428a17.8 17.8 0 0 0-2.533-5.625A11.05 11.05 0 0 1 25.796 11M16 5.014c1.5 1.625 2.625 3.693 3.296 5.986h-6.592C13.375 8.707 14.5 6.641 16 5.014M12 16c0-1.005.084-2.009.25-3h7.5a18.2 18.2 0 0 1 0 6h-7.5a18 18 0 0 1-.25-3m.704 5h6.592c-.671 2.293-1.796 4.359-3.296 5.986-1.5-1.627-2.625-3.693-3.296-5.986m6.131 5.625A17.8 17.8 0 0 0 21.367 21h4.43a11.05 11.05 0 0 1-6.962 5.625M21.776 19a20.2 20.2 0 0 0 0-6h4.808a11 11 0 0 1 0 6z"})})};c.forwardRef(oi);const ai=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M13.29 28.226 6.765 24.46a2.822 2.822 0 1 1-2.708-4.693v-7.532a2.824 2.824 0 1 1 2.708-4.693l6.525-3.767a2.824 2.824 0 1 1 5.42 0l6.524 3.766a2.822 2.822 0 1 1 2.71 4.693v7.533a2.824 2.824 0 1 1-2.71 4.694l-6.524 3.766A2.825 2.825 0 0 1 16 31.84a2.822 2.822 0 0 1-2.71-3.614M16 5.806q.413-.002.791-.113l8.531 14.776a2.8 2.8 0 0 0-.791 1.37H7.467a2.8 2.8 0 0 0-.79-1.369L15.21 5.693q.377.11.791.112M7.468 23.178l-.033.12 6.526 3.767A2.81 2.81 0 0 1 16 26.195c.802 0 1.526.334 2.04.871l6.523-3.766-.032-.121zM5.397 12.233a2.824 2.824 0 0 0 2.038-3.532l6.526-3.767q.043.045.088.088L5.517 19.8l-.12-.032zM26.482 19.8q.06-.018.121-.033v-7.532a2.824 2.824 0 0 1-2.04-3.534L18.04 4.934q-.045.045-.089.088z",clipRule:"evenodd"})})};c.forwardRef(ai);const ri=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"})})};c.forwardRef(ri);const si=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M10.5 6.5v5h-7A.5.5 0 0 1 3 11V8a2 2 0 0 1 2-2h5a.5.5 0 0 1 .5.5m2 19a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-5h-7zM3 21v3a2 2 0 0 0 2 2h5a.5.5 0 0 0 .5-.5v-5h-7a.5.5 0 0 0-.5.5m0-7v4a.5.5 0 0 0 .5.5h7v-5h-7a.5.5 0 0 0-.5.5m16-8h-6a.5.5 0 0 0-.5.5v5h7v-5A.5.5 0 0 0 19 6m9.5 7.5h-7v5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-16 5h7v-5h-7zM27 6h-5a.5.5 0 0 0-.5.5v5h7a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2m1.5 14.5h-7v5a.5.5 0 0 0 .5.5h5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5"})})};c.forwardRef(si);const ii=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.791 17.633a3.04 3.04 0 0 0-2.326-.597C28.813 14.666 30 12.31 30 10c0-3.309-2.661-6-5.933-6A5.95 5.95 0 0 0 19.5 6.094 5.95 5.95 0 0 0 14.932 4C11.663 4 9 6.691 9 10c0 1.375.405 2.711 1.258 4.125a4 4 0 0 0-1.844 1.05L5.586 18H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13q.123 0 .242-.03l8-2a1 1 0 0 0 .15-.05l4.858-2.067.055-.025a3.074 3.074 0 0 0 .491-5.195zm-1.362 3.393-4.75 2.023L14.875 25H7v-5.586l2.829-2.828A1.98 1.98 0 0 1 11.242 16H17.5a1.5 1.5 0 0 1 0 3H14a1 1 0 0 0 0 2h4q.113 0 .224-.025l8.375-1.926.038-.01a1.075 1.075 0 0 1 .788 1.987z"})})};c.forwardRef(ii);const ci=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 10.5h-5.475l.951-5.231a1.5 1.5 0 1 0-2.952-.538L19.475 10.5h-4.95l.951-5.231a1.5 1.5 0 1 0-2.952-.538L11.475 10.5H6a1.5 1.5 0 0 0 0 3h4.93l-.909 5H4a1.5 1.5 0 0 0 0 3h5.475l-.951 5.231a1.5 1.5 0 0 0 1.207 1.75q.134.022.269.019a1.5 1.5 0 0 0 1.475-1.233l1.05-5.767h4.95l-.951 5.231a1.5 1.5 0 1 0 2.952.543l1.049-5.774H26a1.5 1.5 0 1 0 0-3h-4.93l.909-5H28a1.5 1.5 0 1 0 0-3m-9.979 8H13.07l.909-5h4.951z"})})};c.forwardRef(ci);const li=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-5 5 4.94 4.94 0 0 1-3.571-1.45 1.5 1.5 0 0 1 2.142-2.1 1.94 1.94 0 0 0 1.429.55 2 2 0 0 0 0-4 1.94 1.94 0 0 0-1.429.55 1.5 1.5 0 0 1-2.551-1.3l1-6A1.5 1.5 0 0 1 25 12.5h5a1.5 1.5 0 1 1 0 3h-3.729l-.338 2.029q.283-.03.567-.029a5 5 0 0 1 5 5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(li);const di=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M32 22a1.5 1.5 0 0 1-1.5 1.5V26a1.5 1.5 0 1 1-3 0v-2.5H23a1.5 1.5 0 0 1-1.422-1.974l3-9a1.5 1.5 0 0 1 2.845.948L25.08 20.5H27.5V18a1.5 1.5 0 1 1 3 0v2.5A1.5 1.5 0 0 1 32 22M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(di);const hi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(hi);const ui=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m27.133 17.541 1.655-2.772a1.5 1.5 0 1 0-2.576-1.538l-4.03 6.75q-.018.029-.032.059a5 5 0 1 0 4.983-2.5zM26.5 24.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0"})})};c.forwardRef(ui);const gi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-8.571 3.5 1.5 1.5 0 1 1 2.142-2.099A2 2 0 1 0 26.5 20.5a1.5 1.5 0 0 1-1.229-2.36l1.854-2.64H24a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.229 2.36l-2.293 3.275A5 5 0 0 1 31.5 22.5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(gi);const fi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0M30 24.5h-3l3.593-4.791a4.499 4.499 0 1 0-7.837-4.209 1.5 1.5 0 1 0 2.829 1q.076-.218.216-.402a1.5 1.5 0 1 1 2.394 1.807L22.8 25.1a1.5 1.5 0 0 0 1.2 2.4h6a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(fi);const mi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 17v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2.956A10.964 10.964 0 0 0 16.081 6H16A11 11 0 0 0 5.045 16H8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a13.014 13.014 0 0 1 22.236-9.167A12.93 12.93 0 0 1 29 17"})})};c.forwardRef(mi);const xi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 11.75c0 8.75-12.974 15.833-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.76 7.76 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.76 7.76 0 0 1 30 11.75"})})};c.forwardRef(xi);const wi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 14.444V26a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.444a2 2 0 0 1 .646-1.473l10-9.435.014-.013a2 2 0 0 1 2.705.013l10 9.435A2 2 0 0 1 28 14.444"})})};c.forwardRef(wi);const vi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-7.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 25v-3.5l6.5-6.5 10 10zm22 0h-2.671l-4.5-4.5 2.5-2.5L27 22.672z"})})};c.forwardRef(vi);const bi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 25H5V11h2v10a2 2 0 0 0 2 2h14zm4-4H9v-4.5l4.5-4.5 6.208 6.208a1 1 0 0 0 1.413 0L24.33 15 27 17.672z"})})};c.forwardRef(bi);const pi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 0 0 0-3m-18-4a1.5 1.5 0 0 0 1.061-2.561L6.125 12l3.936-3.94a1.503 1.503 0 1 0-2.125-2.125l-5 5a1.5 1.5 0 0 0 0 2.125l5 5A1.5 1.5 0 0 0 9 18.5"})})};c.forwardRef(pi);const $i=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 1 0 0-3M3.939 18.06a1.5 1.5 0 0 0 2.125 0l5-5a1.5 1.5 0 0 0 0-2.125l-5-5a1.503 1.503 0 0 0-2.125 2.125L7.875 12l-3.936 3.939a1.5 1.5 0 0 0 0 2.122"})})};c.forwardRef($i);const Ci=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 23a2 2 0 0 1-2-2v-5a1 1 0 0 1 0-2 2 2 0 0 1 2 2v5a1 1 0 0 1 0 2"})})};c.forwardRef(Ci);const ji=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"})})};c.forwardRef(ji);const yi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M20 2a10.01 10.01 0 0 0-9.511 13.098l-7.196 7.195A1 1 0 0 0 3 23v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l1.195-1.196A10 10 0 1 0 20 2m2.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"})})};c.forwardRef(yi);const Si=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"})})};c.forwardRef(Si);const Ri=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M22 29a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m5-16a10.94 10.94 0 0 1-4.205 8.651A2.03 2.03 0 0 0 22 23.25V24a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.75a2 2 0 0 0-.779-1.582A10.95 10.95 0 0 1 5 13.06C4.967 7.104 9.782 2.143 15.735 2A11 11 0 0 1 27 13m-4.014-1.168a7.2 7.2 0 0 0-5.82-5.818 1 1 0 1 0-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 0 0 1.972-.335"})})};c.forwardRef(Ri);const Mi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62z"})})};c.forwardRef(Mi);const Ii=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M17.046 23.441a1.5 1.5 0 0 1 0 2.125l-.742.743a7.502 7.502 0 1 1-10.61-10.61l3.015-3.014A7.5 7.5 0 0 1 19 12.375a1.506 1.506 0 0 1-2 2.25 4.5 4.5 0 0 0-6.171.184l-3.013 3.01a4.5 4.5 0 0 0 6.365 6.365l.743-.743a1.5 1.5 0 0 1 2.122 0m9.26-17.75a7.51 7.51 0 0 0-10.61 0l-.742.743a1.503 1.503 0 1 0 2.125 2.125l.742-.743a4.5 4.5 0 0 1 6.365 6.365l-3.014 3.015a4.5 4.5 0 0 1-6.172.179 1.506 1.506 0 1 0-2 2.25 7.5 7.5 0 0 0 10.288-.304l3.014-3.014a7.51 7.51 0 0 0 .004-10.613z"})})};c.forwardRef(Ii);const Ai=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(Ai);const Ti=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(Ti);const Vi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h64a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m80 40H40a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24m120.49 20.49a12 12 0 0 1-17 0l-18.08-18.08a44 44 0 1 1 17-17l18.08 18.07a12 12 0 0 1 0 17.01M184 164a20 20 0 1 0-20-20 20 20 0 0 0 20 20"})})};c.forwardRef(Vi);const Li=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M17.5 4v4a1.5 1.5 0 1 1-3 0V4a1.5 1.5 0 1 1 3 0m4.156 7.844a1.5 1.5 0 0 0 1.062-.44l2.828-2.829a1.503 1.503 0 1 0-2.125-2.125l-2.825 2.833a1.5 1.5 0 0 0 1.06 2.56M28 14.5h-4a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 1 0 0-3m-5.282 6.096a1.501 1.501 0 0 0-2.451 1.638c.075.182.186.348.326.487l2.828 2.829a1.503 1.503 0 0 0 2.125-2.125zM16 22.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 1 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m-6.717-1.904-2.83 2.829A1.503 1.503 0 0 0 8.58 25.55l2.829-2.829a1.503 1.503 0 0 0-2.125-2.125M9.5 16A1.5 1.5 0 0 0 8 14.5H4a1.5 1.5 0 1 0 0 3h4A1.5 1.5 0 0 0 9.5 16m-.925-9.546A1.503 1.503 0 0 0 6.45 8.579l2.833 2.825a1.503 1.503 0 0 0 2.125-2.125z"})})},Ei=c.forwardRef(Li),Q0=Ei,Hi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M16 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 10h-8V7a4 4 0 1 1 8 0z"})})};c.forwardRef(Hi);const Di=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31 19a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1M7 9h2v2a1 1 0 1 0 2 0V9h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2m16 15h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2m4.414-14L10 27.414a2 2 0 0 1-2.828 0l-2.587-2.585a2 2 0 0 1 0-2.829L22 4.586a2 2 0 0 1 2.829 0l2.585 2.585a2 2 0 0 1 0 2.829M26 8.586 23.414 6l-4 4L22 12.586z"})})};c.forwardRef(Di);const Bi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"})})},ki=c.forwardRef(Bi),Ni=ki,zi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M11 7q0 .432-.088.838L16 10.382l5.088-2.544a4 4 0 1 1 .895 1.789L18.236 11.5l3.747 1.873a4 4 0 1 1 0 5.253L18.236 20.5l3.747 1.874a4 4 0 1 1-.895 1.788L16 21.618l-5.088 2.544Q11 24.567 11 25a4 4 0 1 1-.983-2.626l3.747-1.874-3.747-1.873a4 4 0 1 1 0-5.253l3.747-1.874-3.747-1.874A4 4 0 1 1 11 7M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.236 8h9.528L16 12.618zM9 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M27 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-11a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 3.382L20.764 17h-9.528z",clipRule:"evenodd"})})};c.forwardRef(zi);const Oi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M14.8 8.254a4 4 0 1 0-1.082 1.682l7.483 4.81a4 4 0 0 0-.075.254H10.874A4.002 4.002 0 0 0 3 16a4 4 0 0 0 7.874 1h10.252q.033.128.075.254l-7.484 4.81a4 4 0 1 0 1.082 1.682l7.484-4.81a4 4 0 1 0 0-5.871zM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(Oi);const Fi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M18.842 3.227a1 1 0 1 0-.445 1.95l1.747.399L9.6 12.959a4 4 0 1 0 0 6.081l10.546 7.385-1.748.399a1 1 0 1 0 .445 1.95l3.945-.9a1 1 0 0 0 .77-1.1l-.503-4.014a1 1 0 0 0-1.985.248l.223 1.779-10.545-7.384a4 4 0 0 0 .127-.403h14.712l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L25.586 15H10.874a4 4 0 0 0-.127-.403l10.544-7.383-.222 1.778a1 1 0 0 0 1.984.249l.503-4.015a1 1 0 0 0-.77-1.099zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0",clipRule:"evenodd"})})};c.forwardRef(Fi);const _i=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 6H5a2 2 0 0 0-2 2v20a1.98 1.98 0 0 0 1.156 1.813 1.986 1.986 0 0 0 2.141-.299L10.312 26H27a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(_i);const Wi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M10 16V8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0m16 0a1 1 0 0 0-2 0 8 8 0 0 1-16 0 1 1 0 1 0-2 0 10.014 10.014 0 0 0 9 9.95V29a1 1 0 0 0 2 0v-3.05A10.014 10.014 0 0 0 26 16"})})};c.forwardRef(Wi);const Ui=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"})})},qi=c.forwardRef(Ui),Gi=qi,Ki=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 14H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"})})};c.forwardRef(Ki);const Yi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"})})};c.forwardRef(Yi);const Zi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.443 18.776a13.1 13.1 0 0 1-4.626 6.614A13 13 0 0 1 4 15a12.9 12.9 0 0 1 2.61-7.815 13.1 13.1 0 0 1 6.614-4.625 1 1 0 0 1 1.25 1.25 11.01 11.01 0 0 0 13.725 13.725 1 1 0 0 1 1.25 1.25z"})})};c.forwardRef(Zi);const Xi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(Xi);const Qi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M10.939 8.061a1.5 1.5 0 0 1 0-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625V12a1.5 1.5 0 1 1-3 0V6.625l-1.439 1.436a1.5 1.5 0 0 1-2.122 0m8 15.875L17.5 25.375V20a1.5 1.5 0 1 0-3 0v5.375l-1.439-1.44a1.504 1.504 0 0 0-2.125 2.125l4 4a1.5 1.5 0 0 0 2.125 0l4-4a1.502 1.502 0 1 0-2.125-2.125zm11.125-9-4-4a1.503 1.503 0 0 0-2.125 2.125l1.436 1.439H20a1.5 1.5 0 0 0 0 3h5.375l-1.44 1.439a1.503 1.503 0 0 0 2.125 2.125l4-4a1.5 1.5 0 0 0 .001-2.125zM6.625 17.5H12a1.5 1.5 0 1 0 0-3H6.625l1.44-1.439a1.503 1.503 0 1 0-2.125-2.125l-4 4a1.5 1.5 0 0 0 0 2.125l4 4a1.503 1.503 0 0 0 2.125-2.125z"})})};c.forwardRef(Qi);const Ji=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26.615 3.214a.99.99 0 0 0-.857-.183l-16 4a1 1 0 0 0-.758.97v13.762a4.5 4.5 0 1 0 2 3.737V13.781l14-3.5v7.482a4.5 4.5 0 1 0 2 3.737V4a1 1 0 0 0-.385-.786"})})};c.forwardRef(Ji);const Pi=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H14.5a1.5 1.5 0 1 1 0-3H27a1.5 1.5 0 0 1 1.5 1.5m-14-6.5H27a1.5 1.5 0 0 0 0-3H14.5a1.5 1.5 0 0 0 0 3m12.5 13H14.5a1.5 1.5 0 1 0 0 3H27a1.5 1.5 0 1 0 0-3M5.5 7.414V13a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-2.17-1.341l-2 1a1.5 1.5 0 0 0 1.17 2.75zm4.966 12.107a3.46 3.46 0 0 0-1.4-2.329 3.61 3.61 0 0 0-4.954.683 3.5 3.5 0 0 0-.52.942 1.5 1.5 0 0 0 2.818 1.027.5.5 0 0 1 .072-.125.6.6 0 0 1 .813-.103.48.48 0 0 1 .201.325.45.45 0 0 1-.096.347l-.016.02-3.585 4.794A1.5 1.5 0 0 0 5 27.5h4a1.5 1.5 0 1 0 0-3H8l1.785-2.389a3.43 3.43 0 0 0 .681-2.59"})})};c.forwardRef(Pi);const ec=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M17.2 8.254a4 4 0 1 1 1.082 1.682l-7.482 4.81q.04.125.074.254h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1H10.874q-.033.128-.075.254l7.484 4.81a4 4 0 1 1-1.082 1.682l-7.484-4.81a4 4 0 1 1 0-5.871zM21 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4",clipRule:"evenodd"})})};c.forwardRef(ec);const tc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M10.874 17A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(tc);const nc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{fillRule:"evenodd",d:"M28.924 16.384c-.05.12-.124.231-.217.324l-4 4a1 1 0 0 1-1.632-.324 1 1 0 0 1 .217-1.09L25.585 17H10.875A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h14.712l-2.294-2.293a1 1 0 0 1 1.415-1.415l4 4a1 1 0 0 1 .217 1.09M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(nc);const oc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 4a1 1 0 0 0-1-1c-5.51 0-11.164 6.214-14.304 10.329A7.5 7.5 0 0 0 4 20.5c0 3.86-2.443 5.591-2.559 5.671A1 1 0 0 0 2 28h9.5a7.5 7.5 0 0 0 7.171-9.696C22.788 15.164 29 9.51 29 4M15.553 14.194a48 48 0 0 1 1.26-1.569 9.5 9.5 0 0 1 2.562 2.561q-.738.618-1.569 1.262a7.6 7.6 0 0 0-2.254-2.254m5.337-.335a11.6 11.6 0 0 0-2.75-2.75c3.973-4.316 6.969-5.625 8.738-5.989-.357 1.77-1.672 4.766-5.988 8.739"})})};c.forwardRef(oc);const ac=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M31 13v6.25a2.01 2.01 0 0 1-1.45 1.922L17 24.75V29a1 1 0 0 1-2 0v-4.25a2.01 2.01 0 0 1 1.45-1.922L29 19.25V13h-2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3H2a1 1 0 0 1 0-2h2V8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2"})})};c.forwardRef(ac);const rc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.096 6.736A12.9 12.9 0 0 0 16 3h-.134A13 13 0 0 0 3 16c0 5.375 3.323 9.883 8.67 11.771A4 4 0 0 0 17 24a2 2 0 0 1 2-2h5.776a3.976 3.976 0 0 0 3.9-3.11c.224-.984.332-1.99.324-3a12.9 12.9 0 0 0-3.904-9.154M10.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(rc);const sc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.925 5.543v.018L21.65 29.554A1.985 1.985 0 0 1 19.728 31a1.98 1.98 0 0 1-1.803-1.144l-4.464-9.423a.5.5 0 0 1 .099-.568l7.158-7.159a1 1 0 0 0-1.414-1.413l-7.169 7.157a.5.5 0 0 1-.567.099l-9.376-4.441A2.05 2.05 0 0 1 1 12.17a1.99 1.99 0 0 1 1.446-1.815L26.44 3.08h.018a2 2 0 0 1 2.468 2.463"})})};c.forwardRef(sc);const ic=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m26.56 17.061-10.257 10.25a7.501 7.501 0 0 1-10.607-10.61l12.27-12.236a5 5 0 0 1 7.07 7.074l-.021.02L13.04 23.086a1.503 1.503 0 0 1-2.121-.041 1.5 1.5 0 0 1 .041-2.121L22.924 9.409a2 2 0 1 0-2.838-2.82L7.816 18.82a4.5 4.5 0 1 0 6.366 6.364l10.258-10.25a1.503 1.503 0 0 1 2.125 2.125z"})})};c.forwardRef(ic);const cc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 14.5h16a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m22 2H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-6 5H5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(cc);const lc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m28.414 9.171-5.585-5.586a2 2 0 0 0-2.829 0L4.586 19A1.98 1.98 0 0 0 4 20.414V26a2 2 0 0 0 2 2h5.586A1.98 1.98 0 0 0 13 27.414L28.414 12a2 2 0 0 0 0-2.829M24 13.585 18.414 8l3-3L27 10.585z"})})};c.forwardRef(lc);const dc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.985 21.885A7.03 7.03 0 0 1 22 28c-9.925 0-18-8.075-18-18a7.03 7.03 0 0 1 6.115-6.985 2 2 0 0 1 2.078 1.19l2.64 5.894v.015a2 2 0 0 1-.16 1.886 1 1 0 0 1-.07.096L12 15.181c.936 1.903 2.926 3.875 4.854 4.814l3.042-2.589q.045-.037.094-.07a2 2 0 0 1 1.896-.175l.017.008 5.888 2.639a2 2 0 0 1 1.194 2.077"})})};c.forwardRef(dc);const hc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.416 13-6.683 6.706c.57 1.584.806 4.236-1.65 7.5a2 2 0 0 1-1.458.794h-.141a2 2 0 0 1-1.415-.586l-6.033-6.04-5.328 5.333a1 1 0 1 1-1.415-1.415l5.332-5.328-6.037-6.038a2 2 0 0 1 .162-2.972c3.178-2.564 6.219-2.06 7.55-1.643L19 2.587a2 2 0 0 1 2.829 0l7.586 7.585A2 2 0 0 1 29.416 13"})})};c.forwardRef(hc);const uc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8"})})};c.forwardRef(uc);const gc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 17v4a1 1 0 0 1-1.196.98L19.5 20.125v2.966l2.207 2.206A1 1 0 0 1 22 26v3a1 1 0 0 1-1.375.929L16 28.078l-4.625 1.85A1 1 0 0 1 10 29v-3a1 1 0 0 1 .293-.707l2.207-2.207v-2.961L3.196 21.98A1 1 0 0 1 2 21v-4a1 1 0 0 1 .553-.895l9.947-4.972V5.5a3.5 3.5 0 1 1 7 0v5.633l9.948 4.972A1 1 0 0 1 30 17"})})};c.forwardRef(gc);const fc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.676 18.884a7.6 7.6 0 0 1-3.978 1.107 9 9 0 0 1-3.42-.707A6.94 6.94 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.6 6.6 0 0 1 7.93 21a5.73 5.73 0 0 1-2.99-.834C2.216 18.511.75 14.702 1.034 9.974a1 1 0 0 1 .94-.94c4.728-.28 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.5.5 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.415 1.414l6.736 6.906q.01-.146.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 0 0-1.413-1.415l-6.125 6.477a.5.5 0 0 1-.848-.217c-.592-2.185-.331-4.36.8-6.228 2.233-3.685 7.428-5.657 13.898-5.277a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899"})})};c.forwardRef(fc);const mc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30 16a1.97 1.97 0 0 1-.95 1.689L11.04 28.706a2 2 0 0 1-2.767-.688A2 2 0 0 1 8 27.016V4.984a1.98 1.98 0 0 1 1.015-1.728 2 2 0 0 1 2.025.038L29.05 14.31A1.97 1.97 0 0 1 30 16"})})};c.forwardRef(mc);const xc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-9.5V27a1.5 1.5 0 1 1-3 0v-9.5H5a1.5 1.5 0 1 1 0-3h9.5V5a1.5 1.5 0 1 1 3 0v9.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};c.forwardRef(xc);const wc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m5 14h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"})})};c.forwardRef(wc);const vc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5H17V3a1 1 0 0 0-2 0v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4.92l-2.701 3.375a1 1 0 0 0 1.562 1.25L12.48 24h7.04l3.699 4.625a1 1 0 1 0 1.562-1.25L22.08 24H27a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 18a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0z"})})};c.forwardRef(vc);const bc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829M10.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(bc);const pc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M20.723 28H26a2 2 0 0 0 2-2v-4.706a1 1 0 0 0-1.383-.919 2.9 2.9 0 0 1-1.117.221c-1.654 0-3-1.387-3-3.091s1.346-3.091 3-3.091c.383 0 .763.075 1.117.221A1 1 0 0 0 28 13.706V9a2 2 0 0 0-2-2h-4.527a4.5 4.5 0 1 0-8.945 0H8a2 2 0 0 0-2 2v4.028a4.5 4.5 0 1 0 0 8.945V26a2 2 0 0 0 2 2h5.278"})})};c.forwardRef(pc);const $c=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M18 22.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16M16 8c-3.033 0-5.5 2.242-5.5 5v.5a1.5 1.5 0 1 0 3 0V13c0-1.102 1.125-2 2.5-2s2.5.898 2.5 2-1.125 2-2.5 2a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 2.966.32C19.79 17.235 21.5 15.296 21.5 13c0-2.758-2.468-5-5.5-5"})})};c.forwardRef($c);const Cc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M14.5 9v11a6.006 6.006 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4v-1H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2M27 7h-7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H27v1a4 4 0 0 1-4 4 1 1 0 0 0 0 2 6.006 6.006 0 0 0 6-6V9a2 2 0 0 0-2-2"})})};c.forwardRef(Cc);const jc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 5v23a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92m-12.014-.164a.999.999 0 1 0-1.972.33L13.986 11H11V5a1 1 0 0 0-2 0v6H6.014l.972-5.835a1 1 0 1 0-1.972-.329l-1 6A1 1 0 0 0 4 11a6.01 6.01 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.01 6.01 0 0 0 16 11q0-.083-.014-.164z"})})};c.forwardRef(jc);const yc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19 28a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m8.953-8.521-1.546 6.954a2 2 0 0 1-3.188 1.138l-3.405-2.57h-7.625L8.78 27.57a2 2 0 0 1-3.189-1.138l-1.545-6.954a2.01 2.01 0 0 1 .415-1.714l3.57-4.282c.12-1.574.482-3.12 1.072-4.584 1.612-4.043 4.5-6.579 5.671-7.481a2 2 0 0 1 2.45 0c1.167.902 4.059 3.438 5.671 7.48.59 1.465.952 3.01 1.072 4.585l3.57 4.282a2.01 2.01 0 0 1 .415 1.714m-17.404 4.25q-2.014-3.666-2.445-7.209L6 19.045 7.545 26l.022-.016zM17.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8.5 6.545-2.104-2.525q-.428 3.535-2.445 7.211l2.982 2.25.022.017z"})})};c.forwardRef(yc);const Sc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.716 14.141a1 1 0 0 1 .261-1.391l8.458-5.788a1 1 0 0 1 1.125 1.652L21.101 14.4a1 1 0 0 1-1.39-.261zm10.109 10.634a1 1 0 0 1-1.39.261L17 17.211l-5.315 3.636a4.5 4.5 0 1 1-1.125-1.65L15.229 16l-4.673-3.198a4.5 4.5 0 1 1 1.125-1.65l17.875 12.233a1 1 0 0 1 .269 1.39M9 22.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0-13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})})};c.forwardRef(Sc);const Rc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14-3.25 1.36-8.69 1.44-13.94 1.52-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57 1.36 3.27 1.44 8.69 1.52 13.94.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52 3.56 1.47 7.63 5.37 11.57 9.14 6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14 3.27-1.36 8.69-1.44 13.94-1.52 9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94 1.47-3.56 5.37-7.63 9.14-11.57 6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-52.2 6.84-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"})})};c.forwardRef(Rc);const Mc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.061 26.939 23.125 21A11.515 11.515 0 1 0 21 23.125l5.941 5.942a1.503 1.503 0 0 0 2.125-2.125zM5.5 14a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"})})},Ic=c.forwardRef(Mc),Ac=Ic,Tc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M26 17H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(Tc);const Vc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28 7v7.346c0 11.202-9.477 14.918-11.375 15.549a1.94 1.94 0 0 1-1.25 0C13.475 29.264 4 25.548 4 14.346V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2"})})};c.forwardRef(Vc);const Lc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m30.949 7.653-6.47-3.528A1 1 0 0 0 24 4h-4a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H8a1 1 0 0 0-.48.125L1.051 7.653a1.97 1.97 0 0 0-.824 2.657l2.41 4.601A2.05 2.05 0 0 0 4.458 16H7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16h2.543a2.05 2.05 0 0 0 1.822-1.089l2.409-4.601a1.97 1.97 0 0 0-.825-2.658M4.459 14a.08.08 0 0 1-.051-.016L2.01 9.408 7 6.685V14zm23.134-.018a.07.07 0 0 1-.052.018H25V6.685l4.99 2.723z"})})};c.forwardRef(Lc);const Ec=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M12 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0m11-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.805-16.594A1 1 0 0 0 28 8H6.04L5.026 4.45A2.01 2.01 0 0 0 3.103 3H1a1 1 0 0 0 0 2h2.103l4.522 15.824A3.01 3.01 0 0 0 10.509 23h12.014a2.99 2.99 0 0 0 2.867-2.117l3.566-11.59a1 1 0 0 0-.151-.887"})})};c.forwardRef(Ec);const Hc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"})})};c.forwardRef(Hc);const Dc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M4 10a1 1 0 0 1 1-1h4.646a3.5 3.5 0 0 1 6.708 0H27a1 1 0 1 1 0 2H16.354a3.5 3.5 0 0 1-6.708 0H5a1 1 0 0 1-1-1m23 11h-2.646a3.5 3.5 0 0 0-6.708 0H5a1 1 0 0 0 0 2h12.646a3.5 3.5 0 0 0 6.708 0H27a1 1 0 1 0 0-2"})})};c.forwardRef(Dc);const Bc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M26 18a1.97 1.97 0 0 1-1.302 1.867l-6.457 2.375-2.375 6.452a1.99 1.99 0 0 1-3.735 0L9.75 22.25l-6.452-2.375a1.99 1.99 0 0 1 0-3.735l6.456-2.375 2.375-6.451a1.99 1.99 0 0 1 3.735 0l2.375 6.456 6.451 2.375A1.97 1.97 0 0 1 26 18M19 6h2v2a1 1 0 0 0 2 0V6h2a1 1 0 1 0 0-2h-2V2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2m11 4h-1V9a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"})})};c.forwardRef(Bc);const kc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M15 7v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m10-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m12 0h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"})})};c.forwardRef(kc);const Nc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:[a.jsx("path",{d:"M27.5 21.136 16 27.843 4.5 21.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),a.jsx("path",{d:"M27.5 15.136 16 21.843 4.5 15.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),a.jsx("path",{d:"m3.5 10.864 12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7a1 1 0 0 0 0 1.728"})]})};c.forwardRef(Nc);const zc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.168l1.686-7.317-5.638-4.928a2 2 0 0 1 1.138-3.507l7.433-.644 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.644a2 2 0 0 1 1.139 3.508z"})})};c.forwardRef(zc);const Oc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 19a4 4 0 1 0-4.991 3.875A1 1 0 0 0 24 23a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-5.065c3.934-.5 7-3.934 7-8.039V5a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2v4.896c0 3.323-2.656 6.061-5.92 6.104A6 6 0 0 1 6 10V5h2a1 1 0 0 0 0-2H6a2 2 0 0 0-2 2v5a8 8 0 0 0 7 7.936V23a6.006 6.006 0 0 0 6 6h3a6.006 6.006 0 0 0 6-6 1 1 0 0 0-.009-.125A4 4 0 0 0 29 19m-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})})};c.forwardRef(Oc);const Fc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"})})};c.forwardRef(Fc);const _c=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29 12a1 1 0 0 0-.038-.275L27.17 5.45A2.01 2.01 0 0 0 25.25 4H6.75a2.01 2.01 0 0 0-1.919 1.45L3.04 11.725A1 1 0 0 0 3 12v2a5 5 0 0 0 2 4v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a5 5 0 0 0 2-4zm-18 2a3 3 0 0 1-4.39 2.657 1 1 0 0 0-.228-.132A3 3 0 0 1 5 14v-1h6zm8 0a3 3 0 0 1-6 0v-1h6zm8 0a3 3 0 0 1-1.384 2.525q-.12.051-.225.131A3 3 0 0 1 21 14v-1h6z"})})};c.forwardRef(_c);const Wc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.767A5.19 5.19 0 0 1 24.5 21c0 1.806-.976 3.54-2.679 4.756C20.25 26.881 18.18 27.5 16 27.5s-4.25-.619-5.821-1.744C8.476 24.54 7.5 22.806 7.5 21a1.5 1.5 0 0 1 3 0c0 1.898 2.519 3.5 5.5 3.5s5.5-1.602 5.5-3.5c0-1.595-1.163-2.523-4.419-3.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M9.389 12.5a1.5 1.5 0 0 0 1.5-1.5c0-2 2.197-3.5 5.111-3.5 2.17 0 3.921.831 4.685 2.223a1.5 1.5 0 0 0 2.625-1.446C22.016 5.914 19.281 4.5 16 4.5c-4.625 0-8.111 2.794-8.111 6.5a1.5 1.5 0 0 0 1.5 1.5"})})};c.forwardRef(Wc);const Uc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M15 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m1 3a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m-8.707.707a1 1 0 1 0 1.414-1.415l-2-2a1 1 0 1 0-1.414 1.415zm0 14.586-2 2a1 1 0 1 0 1.414 1.415l2-2a1 1 0 1 0-1.415-1.415M24 9a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0-1.415-1.414l-2 2A1 1 0 0 0 24 9m.707 14.293a1 1 0 1 0-1.415 1.415l2 2a1 1 0 0 0 1.415-1.415zM6 16a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m10 10a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m14-11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"})})};c.forwardRef(Uc);const qc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.292-5.293a1 1 0 1 0-1.415 1.415L13.586 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 17h-7V10h7zm-2-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"})})};c.forwardRef(qc);const Gc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m29.978 19.625-1.5-12A3 3 0 0 0 25.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5.383l4.722 9.448A1 1 0 0 0 15 30a5 5 0 0 0 5-5v-2h7a3 3 0 0 0 2.977-3.375M9 18H4V7h5z"})})};c.forwardRef(Gc);const Kc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M29.25 10.015A3 3 0 0 0 27 9h-7V7a5 5 0 0 0-5-5 1 1 0 0 0-.895.553L9.383 12H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h21.5a3 3 0 0 0 2.977-2.625l1.5-12a3 3 0 0 0-.727-2.36M4 14h5v11H4z"})})};c.forwardRef(Kc);const Yc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M23 3H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h1l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.7-3.6h7l2.7 3.6a1 1 0 0 0 1.6-1.2L22 27h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5-8H7v-5h8zm6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5-8h-8v-5h8z"})})};c.forwardRef(Yc);const Zc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M14 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0-15h-8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})})};c.forwardRef(Zc);const Xc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m23.54 2.267-3.711 3.377c1.7.52 3.298 1.397 4.653 2.631 4.684 4.266 4.684 11.184 0 15.45q-5.184 4.72-16.021 6.008l3.71-3.377a12.2 12.2 0 0 1-4.653-2.63c-4.684-4.267-4.712-11.16 0-15.45q5.184-4.721 16.021-6.01m-7.54 8.4c-3.314 0-6 2.388-6 5.333s2.686 5.333 6 5.333 6-2.387 6-5.333c0-2.945-2.686-5.333-6-5.333"})})};c.forwardRef(Xc);const Qc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"})})};c.forwardRef(Qc);const Jc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-16.439-7.939L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"})})};c.forwardRef(Jc);const Pc=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M28.866 27.5A1 1 0 0 1 28 28H4a1 1 0 0 1-.865-1.5c1.904-3.291 4.838-5.651 8.261-6.77a9 9 0 1 1 9.208 0c3.424 1.119 6.357 3.479 8.261 6.77a1 1 0 0 1 .001 1"})})};c.forwardRef(Pc);const e2=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.44 3.101a1 1 0 0 0-1.054.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1 1 0 0 0 20 28V4a1 1 0 0 0-.56-.899M28.414 16l2.293-2.292a1.001 1.001 0 0 0-1.415-1.415L27 14.586l-2.293-2.293a1 1 0 1 0-1.415 1.415L25.587 16l-2.293 2.293a1 1 0 0 0 1.415 1.415L27 17.414l2.293 2.294a1 1 0 0 0 1.415-1.415z"})})};c.forwardRef(e2);const t2=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M9 20H4v-8h5zm15.75-7.305a5 5 0 0 1 0 6.61 1 1 0 0 1-1.5-1.322 3 3 0 0 0 0-3.966 1 1 0 0 1 1.5-1.322M31 16a10 10 0 0 1-2.546 6.668 1 1 0 0 1-1.49-1.334 8 8 0 0 0 0-10.666.998.998 0 0 1 .407-1.624 1 1 0 0 1 1.083.29A9.98 9.98 0 0 1 31 16"})})};c.forwardRef(t2);const n2=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M15 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m11 11c-3.58 0-5.226-1.662-6.969-3.421a25 25 0 0 0-1.375-1.323C13.031 8.24 5.63 15.098 5.316 15.391a1 1 0 0 0 1.369 1.458 20.5 20.5 0 0 1 3.815-2.724c1.723-.922 3.174-1.279 4.338-1.072L8.082 28.6a1 1 0 0 0 1.835.798l4.2-9.659L18 22.515V29a1 1 0 1 0 2 0v-7a1 1 0 0 0-.419-.814l-4.65-3.321L16.61 14c.33.305.657.634 1 .98C19.381 16.774 21.586 19 26 19a1 1 0 0 0 0-2"})})};c.forwardRef(n2);const o2=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(o2);const a2=({fill:e="currentColor",stroke:t,...o},r)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:r,...o,children:a.jsx("path",{d:"m31.316 24.949-3 1a1 1 0 0 1-1.211-.5l-3.724-7.45H13a1 1 0 0 1-1-1v-3.707A7 7 0 0 0 14 27c3.239 0 6.261-2.256 7.031-5.25a1 1 0 1 1 1.938.5C21.96 26.162 18.19 29 14 29a9 9 0 0 1-2-17.774V8.851a3.5 3.5 0 1 1 2 0V11h7a1 1 0 0 1 0 2h-7v3h10a1 1 0 0 1 .894.552l3.612 7.225 2.178-.726a1 1 0 1 1 .632 1.898"})})};c.forwardRef(a2);const ot=(e,t)=>{const o=c.createContext(t),r=s=>{const{children:i,...l}=s,d=c.useMemo(()=>l,Object.values(l));return a.jsx(o.Provider,{value:d,children:i})};function n(s){const i=c.useContext(o);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return r.displayName=`${e}Provider`,[r,n]};function r2(e,t){return typeof e=="string"?!1:t in e}function dt(e,t,o){return e&&t&&r2(e,t)?e[t]:o}const Nn={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},s2=e=>{const[t,o,r,n]=e,s=o??t;return[t,s,r??t,n??s]};function i2(e,t){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return t.spaces;case"color":case"background":case"borderColor":return t.colors;case"fontSize":return t.fontSizes;case"fontWeight":return t.fontWeights;case"lineHeight":return t.lineHeights;case"zIndex":return t.zIndices;case"boxShadow":return t.shadows;default:return null}}const vt=(e,t)=>{const o=Object.entries(e).reduce((r,n)=>{const[s,i]=n,l=i2(s,t),d=Object.prototype.hasOwnProperty.call(Nn,s)?Nn[s]:s;return d&&(i||i===0)&&(typeof i=="object"&&!Array.isArray(i)?Object.entries(i).forEach(([f,h])=>{r[f]={...r[f],...zn(d,h,l)}}):r.initial={...r.initial,...zn(d,i,l)}),r},{initial:{},small:{},medium:{},large:{}});return Object.entries(o).reduce((r,[n,s])=>{if(s&&Object.keys(s).length>0){const i=Object.entries(s).reduce((l,[d,f])=>(l.push(`${d}: ${f};`),l),[]).join(`
`);n==="initial"?r.push(i):r.push(`${t.breakpoints[n]}{ ${i} }`)}return r},[]).join(`
`)},zn=(e,t,o)=>{if(Array.isArray(e)&&Array.isArray(t)){const r=s2(t);return e.reduce((n,s,i)=>(n[s]=dt(o,r[i],r[i]),n),{})}else return Array.isArray(e)&&!Array.isArray(t)?e.reduce((r,n)=>(r[n]=dt(o,t,t),r),{}):!Array.isArray(e)&&!Array.isArray(t)?{[e]:dt(o,t,t)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},he=c.forwardRef,A=he((e,t)=>{const{background:o,basis:r,borderColor:n,color:s,flex:i,fontSize:l,grow:d,hasRadius:f,padding:h,paddingBottom:w,paddingLeft:u,paddingRight:m,paddingTop:b,margin:v,marginLeft:C,marginBottom:$,marginRight:p,marginTop:j,shadow:y,shrink:S,lineHeight:M,fontWeight:R,width:N,minWidth:E,maxWidth:z,height:O,minHeight:H,maxHeight:V,top:k,left:U,bottom:K,right:q,borderRadius:J,borderStyle:Y,borderWidth:ne,tag:Z,pointerEvents:ae,display:_,position:ee,zIndex:re,overflow:fe,cursor:T,transition:W,transform:X,animation:F,textAlign:D,textTransform:G,...le}=e,de=Z||"div",P={$background:o,$basis:r,$borderColor:n,$color:s,$flex:i,$fontSize:l,$grow:d,$hasRadius:f,$padding:h,$paddingBottom:w,$paddingLeft:u,$paddingRight:m,$paddingTop:b,$margin:v,$marginLeft:C,$marginBottom:$,$marginRight:p,$marginTop:j,$shadow:y,$shrink:S,$lineHeight:M,$fontWeight:R,$width:N,$minWidth:E,$maxWidth:z,$height:O,$minHeight:H,$maxHeight:V,$top:k,$left:U,$bottom:K,$right:q,$borderRadius:J,$borderStyle:Y,$borderWidth:ne,$pointerEvents:ae,$display:_,$position:ee,$zIndex:re,$overflow:fe,$cursor:T,$transition:W,$transform:X,$animation:F,$textAlign:D,$textTransform:G};return a.jsx(c2,{as:de,ref:t,...P,...le})}),c2=x.div`
  ${({theme:e,...t})=>vt({padding:t.$padding,paddingTop:t.$paddingTop,paddingBottom:t.$paddingBottom,paddingLeft:t.$paddingLeft,paddingRight:t.$paddingRight,margin:t.$margin,marginTop:t.$marginTop,marginBottom:t.$marginBottom,marginLeft:t.$marginLeft,marginRight:t.$marginRight,top:t.$top,left:t.$left,bottom:t.$bottom,right:t.$right,width:t.$width,minWidth:t.$minWidth,maxWidth:t.$maxWidth,height:t.$height,minHeight:t.$minHeight,maxHeight:t.$maxHeight,color:t.$color,background:t.$background,fontSize:t.$fontSize,fontWeight:t.$fontWeight,lineHeight:t.$lineHeight,borderRadius:t.$hasRadius?e.borderRadius:t.$borderRadius,borderStyle:t.$borderColor&&!t.$borderStyle?"solid":t.$borderStyle,borderWidth:t.$borderColor&&!t.$borderWidth?"1px":t.$borderWidth,borderColor:t.$borderColor,zIndex:t.$zIndex,boxShadow:t.$shadow,display:t.$display,pointerEvents:t.$pointerEvents,cursor:t.$cursor,textAlign:t.$textAlign,textTransform:t.$textTransform,transition:t.$transition,transform:t.$transform,animation:t.$animation,position:t.$position,overflow:t.$overflow,flex:t.$flex,flexShrink:t.$shrink,flexGrow:t.$grow,flexBasis:t.$basis},e)};
`,I=he((e,t)=>{const{className:o,alignItems:r,direction:n,inline:s,gap:i,justifyContent:l,wrap:d,...f}=e,h={$alignItems:r,$direction:n,$gap:i,$justifyContent:l,$wrap:d,$inline:s};return a.jsx(l2,{className:o,ref:t,...h,...f})}),l2=x(A)`
  ${({theme:e,$display:t="flex",$alignItems:o="center",$direction:r="row",...n})=>vt({gap:n.$gap,alignItems:o,justifyContent:n.$justifyContent,flexWrap:n.$wrap,flexDirection:r,display:n.$inline?"inline-flex":t},e)};
`,d2="alpha",h2="beta",u2="delta",g2="epsilon",On="omega",f2="pi",m2="sigma",J0=L`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,x2=({$variant:e=On,theme:t})=>{switch(e){case d2:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case h2:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case u2:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case g2:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case On:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case f2:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case m2:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},B=he((e,t)=>{const{ellipsis:o,textColor:r="currentcolor",textDecoration:n,textTransform:s,variant:i,lineHeight:l,fontWeight:d,fontSize:f,...h}=e,w={$ellipsis:o,$textColor:r,$textDecoration:n,$textTransform:s,$variant:i,$lineHeight:l,$fontWeight:d,$fontSize:f};return a.jsx(w2,{ref:t,tag:"span",...w,...h})}),w2=x(A)`
  ${x2}
  ${({$ellipsis:e})=>e?J0:""}

  ${({theme:e,...t})=>vt({color:t.$textColor,textDecoration:t.$textDecoration,textTransform:t.$textTransform,lineHeight:t.$lineHeight,fontWeight:t.$fontWeight,fontSize:t.$fontSize},e)}
`,[v2,jn]=ot("Accordion");c.forwardRef(({children:e,size:t="S",...o},r)=>a.jsx(b2,{ref:r,$size:t,collapsible:!0,...o,type:"single",children:a.jsx(v2,{size:t,children:e})}));const b2=x(eo)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?L`
        border-radius: ${t=>t.theme.borderRadius};
        border: solid 1px ${t=>t.theme.colors.neutral200};
      `:L``}
`;c.forwardRef((e,t)=>{const{size:o}=jn("Item");return a.jsx(p2,{$size:o,"data-size":o,ref:t,...e})});const p2=x(to)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;c.forwardRef(({caretPosition:e="left",description:t,icon:o,iconProps:r,children:n,...s},i)=>{const{size:l}=jn("Trigger");return a.jsxs(e1,{$caretPosition:e,$size:l,ref:i,...s,children:[e==="left"?a.jsx(gt,{$size:l,children:a.jsx(De,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null,a.jsxs(I,{tag:"span",gap:2,overflow:"hidden",children:[o&&l==="S"?a.jsx(P0,{children:a.jsx(o,{...r})}):null,a.jsxs(I,{alignItems:"flex-start",direction:"column",tag:"span",ref:i,overflow:"hidden",children:[a.jsx(B,{fontWeight:l==="S"?"bold":void 0,ellipsis:!0,variant:l==="M"?"delta":void 0,textAlign:"left",width:"100%",children:n}),t&&l==="M"?a.jsx(B,{textAlign:"left",children:t}):null]})]}),e==="right"?a.jsx(gt,{$size:l,children:a.jsx(De,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null]})});const P0=x(A)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,gt=x(I).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,e1=x(no)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${gt} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`;c.forwardRef((e,t)=>{const{size:o}=jn("Trigger");return a.jsx(t1,{$size:o,...e,ref:t})});const t1=x(I).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`;c.forwardRef(({variant:e="primary",...t},o)=>a.jsx($2,{$variant:e,ref:o,...t}));const $2=x(oo)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${e1} {
        color: ${e=>e.theme.colors.primary600};

        & ${P0} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${gt} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${t1} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`;c.forwardRef((e,t)=>a.jsx(y2,{ref:t,...e}));const C2=ie`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,j2=ie`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,y2=x(ao)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${C2} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${j2} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,bt=L`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e=>e.theme.colors.primary600};
    }
  }
`,Ge=({tag:e,...t})=>{const o=e||"span";return a.jsx(S2,{...t,as:o})},S2=x.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Je=({children:e,label:t})=>{const o=c.Children.only(e);return a.jsxs(a.Fragment,{children:[c.cloneElement(o,{"aria-hidden":"true",focusable:"false"}),a.jsx(Ge,{children:t})]})};Je.displayName="AccessibleIcon";const Ft=({theme:e,$variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:t==="warning"?e.colors.warning700:e.colors.primary700;x(A)`
  ${bt};
`;x(I)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${Ft};
    }
  }
`;x(A)`
  & a > span {
    color: ${Ft};
  }

  svg path {
    fill: ${Ft};
  }
`;function Ce({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,n]=n1({defaultProp:t,onChange:o}),s=e!==void 0,i=s?e:r,l=v0(o),d=c.useCallback(f=>{if(s){const w=typeof f=="function"?f(e):f;w!==e&&l(w)}else n(f)},[s,e,n,l]);return[i,d]}function n1({defaultProp:e,onChange:t}){const o=c.useState(e),[r]=o,n=c.useRef(r),s=v0(t);return c.useEffect(()=>{n.current!==r&&(s(r),n.current=r)},[r,n,s]),o}const Fn={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},_n={120:"120ms"};`${_n[120]}${Fn.easeOutQuad}`,`${_n[120]}${Fn.easeOutQuad}`;const te={overlayFadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:ie`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:ie`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:ie`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:ie`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:ie`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:ie`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:ie`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},Pe=32,Wn=2;c.forwardRef(({onLoadingStatusChange:e,delayMs:t=600,src:o,alt:r,fallback:n,preview:s=!1,...i},l)=>{const[d,f]=Ce({onChange:e}),[h,w]=c.useState(!1),u=s&&d==="loaded",m=b=>{u&&w(b)};return a.jsxs(l0,{onOpenChange:m,children:[a.jsx(d0,{asChild:!0,children:a.jsxs(_t,{ref:l,...i,children:[u?a.jsx(R2,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:h?.4:0}}):null,a.jsx(M2,{src:o,alt:r,onLoadingStatusChange:f}),a.jsx(ro,{delayMs:t,children:a.jsx(B,{fontWeight:"bold",textTransform:"uppercase",children:n})})]})}),u?a.jsx(h0,{children:a.jsx(I2,{side:"top",sideOffset:4,children:a.jsx(A2,{src:o,alt:r})})}):null]})});const o1=L`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,a1=L`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,_t=x(so)`
  position: relative;
  z-index: 0;
  ${o1}
  width: ${Pe/10}rem;
  height: ${Pe/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,R2=x(A)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,M2=x(io)`
  ${a1}
`,I2=x(u0)`
  ${o1}
  width: ${Pe*Wn/10}rem;
  height: ${Pe*Wn/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,A2=x.img`
  ${a1}
`;c.forwardRef((e,t)=>a.jsx(T2,{...e,ref:t,tag:"div"}));const T2=x(I)`
  & > ${_t} + ${_t} {
    margin-left: -${Pe/10/2}rem;
  }
`,V2=({active:e=!1,size:t="M",textColor:o="neutral600",backgroundColor:r="neutral150",children:n,minWidth:s=5,...i})=>{const l=t==="S"?1:2;return a.jsx(L2,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:s,paddingLeft:l,paddingRight:l,background:e?"primary200":r,$size:t,...i,children:a.jsx(B,{variant:"sigma",textColor:e?"primary600":o,lineHeight:"1rem",children:n})})},L2=x(I)`
  border-radius: ${({theme:e,$size:t})=>t==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:t})=>e==="S"?L`
        padding-block: 0.3rem;
        padding-inline ${t.spaces[1]}
      `:L`
      padding-block: 0.7rem;
      padding-inline ${t.spaces[2]}
    `};
`,at=he(({href:e,disabled:t=!1,isExternal:o=!1,...r},n)=>a.jsx(E2,{tag:"a",ref:n,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0,href:e,tabIndex:t?-1:void 0,"aria-disabled":t,pointerEvents:t?"none":void 0,cursor:t?void 0:"pointer",...r})),E2=x(A)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,r1=()=>a.jsx(A,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:a.jsx(B,{variant:"pi",textColor:"neutral500",children:"/"})});r1.displayName="Divider";const H2=x(I)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,D2=c.forwardRef(({label:e,children:t,...o},r)=>{const n=c.Children.toArray(t);return a.jsx(A,{"aria-label":e,tag:"nav",...o,ref:r,children:a.jsx(H2,{tag:"ol",children:c.Children.map(n,(s,i)=>{const l=n.length>1&&i+1<n.length;return a.jsxs(I,{inline:!0,tag:"li",children:[s,l&&a.jsx(r1,{})]})})})})});D2.displayName="Breadcrumbs";const B2=c.forwardRef(({children:e,isCurrent:t=!1,...o},r)=>a.jsx(A,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:r,children:a.jsx(B,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"regular","aria-current":t,...o,children:e})}));B2.displayName="Crumb";const k2=x(at)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,N2=c.forwardRef(({children:e,...t},o)=>a.jsx(k2,{ref:o,...t,children:e}));N2.displayName="CrumbLink";const Oe=e=>e.replaceAll(":","");function z2(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function s1(...e){return t=>e.forEach(o=>z2(o,t))}function ue(...e){return c.useCallback(s1(...e),e)}const O2=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Fe=O2()?c.useEffect:c.useLayoutEffect,F2=Z1.useId||(()=>{});let _2=0;const pe=e=>{const[t,o]=c.useState(F2());return Fe(()=>{e||o(r=>r??String(_2++))},[e]),e?.toString()??(t||"")},rt=(e,t,{selectorToWatch:o,skipWhen:r=!1})=>{const n=nn(t);c.useEffect(()=>{if(r||!e.current)return;const s={root:e.current,rootMargin:"0px"},i=f=>{f.forEach(h=>{h.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&n(h)})},l=new IntersectionObserver(i,s),d=e.current.querySelector(o);return d&&l.observe(d),()=>{l.disconnect()}},[r,n,o,e])},yn="success-light",Sn="danger-light",pt="default",st="tertiary",it="secondary",i1="danger",c1="success",$t="ghost",Rn=[yn,Sn],W2=[pt,st,it,i1,c1,$t,...Rn],U2=["XS","S","M","L"],we=e=>e===yn||e===Sn?`${e.substring(0,e.lastIndexOf("-"))}`:e===st?"neutral":e===pt||e===it||W2.every(t=>t!==e)?"primary":`${e}`,l1=({theme:e})=>L`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,d1=({theme:e,$variant:t})=>[...Rn,it].includes(t)?L`
      background-color: ${e.colors.neutral0};
    `:t===st?L`
      background-color: ${e.colors.neutral100};
    `:t===$t?L`
      background-color: ${e.colors.neutral100};
    `:t===pt?L`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:L`
    border: 1px solid ${e.colors[`${we(t)}500`]};
    background: ${e.colors[`${we(t)}500`]};
  `,h1=({theme:e,$variant:t})=>[...Rn,it].includes(t)?L`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${we(t)}600`]};
      color: ${e.colors[`${we(t)}600`]};
    `:t===st||t===$t?L`
      background-color: ${e.colors.neutral150};
    `:L`
    border: 1px solid ${e.colors[`${we(t)}600`]};
    background: ${e.colors[`${we(t)}600`]};
  `,u1=({theme:e,$variant:t})=>{switch(t){case Sn:case yn:case it:return L`
        border: 1px solid ${e.colors[`${we(t)}200`]};
        background: ${e.colors[`${we(t)}100`]};
        color: ${e.colors[`${we(t)}700`]};
      `;case st:return L`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case $t:return L`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case c1:case i1:return L`
        border: 1px solid ${e.colors[`${we(t)}600`]};
        background: ${e.colors[`${we(t)}600`]};
        color: ${e.colors.neutral0};
      `;default:return L`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},ft=he(({variant:e=pt,startIcon:t,endIcon:o,disabled:r=!1,children:n,onClick:s,size:i=U2[1],loading:l=!1,fullWidth:d=!1,...f},h)=>{const w=r||l,u=m=>{!w&&s&&s(m)};return a.jsxs(K2,{ref:h,"aria-disabled":w,disabled:w,$size:i,$variant:e,tag:"button",onClick:u,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:d?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...f,children:[(t||l)&&a.jsx(I,{tag:"span","aria-hidden":!0,children:l?a.jsx(G2,{}):t}),a.jsx(B,{variant:i==="S"?"pi":void 0,fontWeight:"bold",children:n}),o&&a.jsx(I,{tag:"span","aria-hidden":!0,children:o})]})}),q2=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,G2=x(Q0)`
  animation: ${q2} 2s infinite linear;
  will-change: transform;
`,K2=x(I)`
  height: ${({theme:e,$size:t})=>e.sizes.button[t]};
  text-decoration: none;
  ${u1}

  &:hover {
    ${d1}
  }

  &:active {
    ${h1}
  }

  &[aria-disabled='true'] {
    ${l1}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,g1=c.forwardRef(({children:e,description:t,label:o,defaultOpen:r,open:n,onOpenChange:s,delayDuration:i=500,disableHoverableContent:l,...d},f)=>!o&&!t?e:a.jsxs(l0,{defaultOpen:r,open:n,onOpenChange:s,delayDuration:i,disableHoverableContent:l,children:[a.jsx(d0,{asChild:!0,children:e}),a.jsx(h0,{children:a.jsx(Y2,{ref:f,sideOffset:8,...d,children:a.jsx(B,{variant:"pi",fontWeight:"bold",children:o||t})})})]})),Y2=x(u0)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,_e=he(({label:e,background:t,children:o,disabled:r=!1,onClick:n,size:s="S",variant:i="tertiary",withTooltip:l=!0,...d},f)=>{const h=u=>{!r&&n&&n(u)},w=a.jsx(Qe,{"aria-disabled":r,background:r?"neutral150":t,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...d,ref:f,$size:s,onClick:h,$variant:i,children:a.jsx(Je,{label:e,children:o})});return l?a.jsx(g1,{label:e,children:w}):w}),Qe=x(I)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return L`
          padding-block: 0.25rem;
          padding-inline: 0.25rem;
        `;case"S":return L`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return L`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return L`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${u1}
  ${e=>e.$variant==="tertiary"?L`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${d1}
    ${e=>e.$variant==="tertiary"?L`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${h1}
  }

  &[aria-disabled='true'] {
    ${l1}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;x(I)`
  & ${Qe}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Qe}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Qe} {
    border-radius: 0;

    & + ${Qe} {
      border-left: none;
    }
  }
`;const Z2=he(({children:e,href:t,disabled:o=!1,startIcon:r,endIcon:n,isExternal:s=!1,...i},l)=>a.jsxs(X2,{ref:l,href:t,disabled:o,isExternal:s,...i,children:[r,a.jsx(B,{textColor:o?"neutral600":"primary600",children:e}),n,t&&!n&&s&&a.jsx(Ws,{})]})),X2=x(at)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:e})=>e.colors.primary500};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.primary500};
    }
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${bt};
`,Q2=mo,J2=c.forwardRef(({label:e,endIcon:t=a.jsx(De,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:o=ft,icon:r,...n},s)=>{const i={...n,ref:s,type:"button"};return a.jsx(co,{asChild:!0,disabled:i.disabled,children:o===_e?a.jsx(_e,{label:e,variant:"tertiary",...i,children:r}):a.jsx(ft,{endIcon:t,variant:"ghost",...i})})}),P2=c.forwardRef(({children:e,intersectionId:t,onCloseAutoFocus:o,popoverPlacement:r="bottom-start",...n},s)=>{const[i,l]=r.split("-");return a.jsx(g0,{children:a.jsx(el,{align:l,side:i,loop:!0,onCloseAutoFocus:o,asChild:!0,children:a.jsxs(f1,{ref:s,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...n,children:[e,a.jsx(A,{id:t,width:"100%",height:"1px"})]})})})}),f1=x(I)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${e=>e.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,el=x(lo)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,m1=({theme:e})=>L`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${e.colors.neutral500};
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,tl=x(I)`
  ${m1}
`;x(Z2)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>dt(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${m1}
`;const nl=x(A)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;c.forwardRef((e,t)=>a.jsx(ho,{...e,asChild:!0,children:a.jsx(nl,{height:"1px",shrink:0,background:"neutral150",ref:t})}));c.forwardRef((e,t)=>a.jsx(uo,{asChild:!0,children:a.jsx(ol,{ref:t,variant:"sigma",textColor:"neutral600",...e})}));const ol=x(B)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;c.forwardRef(({disabled:e=!1,...t},o)=>a.jsx(go,{asChild:!0,disabled:e,children:a.jsxs(al,{ref:o,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[a.jsx(B,{children:t.children}),a.jsx(Cn,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const al=x(tl)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;c.forwardRef((e,t)=>a.jsx(g0,{children:a.jsx(fo,{sideOffset:8,asChild:!0,children:a.jsx(f1,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const rl=Q2,sl=J2,il=P2,cl=c.forwardRef(({children:e,onOpen:t,onClose:o,popoverPlacement:r,onReachEnd:n,...s},i)=>{const l=c.useRef(null),d=ue(i,l),f=c.useRef(null),[h,w]=c.useState(!1),u=C=>{n&&n(C)},m=C=>{C&&typeof t=="function"?t():!C&&typeof o=="function"&&o(),w(C)},b=pe(),v=`intersection-${Oe(b)}`;return rt(f,u,{selectorToWatch:`#${v}`,skipWhen:!h}),a.jsxs(rl,{onOpenChange:m,children:[a.jsx(sl,{ref:d,...s,children:s.label}),a.jsx(il,{ref:f,intersectionId:v,popoverPlacement:r,children:e})]})}),ll=x(cl)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,dl=c.forwardRef(({children:e,...t},o)=>a.jsx(ll,{ref:o,endIcon:null,size:"S",...t,children:e}));dl.displayName="CrumbSimpleMenu";const x1=c.createContext({id:""}),hl=()=>c.useContext(x1);c.forwardRef(({id:e,...t},o)=>{const r=pe(e),n=c.useMemo(()=>({id:r}),[r]);return a.jsx(x1.Provider,{value:n,children:a.jsx(A,{ref:o,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${r}-title`,...t})})});const ul=c.forwardRef(({position:e,...t},o)=>a.jsx(gl,{ref:o,$position:e,...t,direction:"row",gap:2})),gl=x(I)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:t})=>{if(e==="end")return t.spaces[3]}};
  left: ${({$position:e,theme:t})=>{if(e==="start")return t.spaces[3]}};
`;x.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;x.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;x.div`
  margin-left: auto;
  flex-shrink: 0;
`;x(V2)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const fl=({fill:e,...t})=>{const{colors:o}=g();return a.jsx(A,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?o[e]:void 0,...t,children:a.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},Un=c.forwardRef(({defaultChecked:e,checked:t,onCheckedChange:o,...r},n)=>{const s=c.useRef(null),[i,l]=Ce({defaultProp:e,prop:t,onChange:o}),d=ue(s,n);return a.jsx(ml,{ref:d,checked:i,onCheckedChange:l,...r,children:a.jsxs(xl,{forceMount:!0,children:[i===!0?a.jsx(fl,{width:"1.6rem",fill:"neutral0"}):null,i==="indeterminate"?a.jsx(Gi,{fill:"neutral0"}):null]})})}),ml=x(xo)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked'],
  &[data-state='indeterminate'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,xl=x(wo)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Mn=c.forwardRef(({children:e,...t},o)=>{const r=pe(t.id);return e?a.jsxs(I,{gap:2,children:[a.jsx(Un,{id:r,...t}),a.jsx(B,{tag:"label",textColor:"neutral800",htmlFor:r,children:e})]}):a.jsx(Un,{ref:o,...t})});c.forwardRef((e,t)=>{const{id:o}=hl();return a.jsx(ul,{position:"start",children:a.jsx(Mn,{"aria-labelledby":`${o}-title`,...e,ref:t})})});x(A)`
  word-break: break-all;
`;x(I)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const ce={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},wl=x(A)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,vl=x(I)`
  grid-area: slides;
`,qn=x(A)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,bl=c.forwardRef(({actions:e,children:t,label:o,nextLabel:r,onNext:n,onPrevious:s,previousLabel:i,secondaryLabel:l,selectedSlide:d,...f},h)=>{const w=c.useRef(null),u=c.useRef(null),m=c.Children.map(t,(v,C)=>c.cloneElement(v,{selected:C===d})),b=v=>{switch(v.key){case ce.RIGHT:{v.preventDefault(),u?.current&&u.current.focus(),n&&n();break}case ce.LEFT:{v.preventDefault(),w?.current&&w.current.focus(),s&&s();break}}};return a.jsx(A,{ref:h,...f,onKeyDown:b,children:a.jsxs(A,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[a.jsxs(wl,{tag:"section","aria-roledescription":"carousel","aria-label":o,display:"grid",position:"relative",children:[m&&m.length>1&&a.jsxs(a.Fragment,{children:[a.jsx(qn,{tag:"button",onClick:s,$area:"startAction",ref:w,type:"button",children:a.jsx(Je,{label:i,children:a.jsx(X0,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),a.jsx(qn,{tag:"button",onClick:n,$area:"endAction",ref:u,type:"button",children:a.jsx(Je,{label:r,children:a.jsx(Cn,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),a.jsx(vl,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:m}),e]}),l&&a.jsx(A,{paddingTop:2,paddingLeft:4,paddingRight:4,children:a.jsx(g1,{label:l,children:a.jsx(I,{justifyContent:"center",children:a.jsx(B,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:l})})})})]})})}),Te=(e="&")=>({theme:t,$hasError:o=!1})=>L`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${o?t.colors.danger600:t.colors.primary600};
      box-shadow: ${o?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,[pl,ge]=ot("Field",{}),Be=c.forwardRef(({children:e,name:t,error:o=!1,hint:r,id:n,required:s=!1,...i},l)=>{const d=pe(n),[f,h]=c.useState();return a.jsx(pl,{name:t,id:d,error:o,hint:r,required:s,labelNode:f,setLabelNode:h,children:a.jsx(I,{direction:"column",alignItems:"stretch",gap:1,ref:l,...i,children:e})})}),In=c.forwardRef(({children:e,action:t,...o},r)=>{const{id:n,required:s,setLabelNode:i}=ge("Label"),l=ue(r,i);return e?a.jsxs($l,{ref:l,variant:"pi",textColor:"neutral800",fontWeight:"bold",...o,id:`${n}-label`,htmlFor:n,tag:"label",ellipsis:!0,children:[e,s&&a.jsx(B,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),t&&a.jsx(Cl,{marginLeft:1,children:t})]}):null}),$l=x(B)`
  display: flex;
`,Cl=x(I)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Ct=c.forwardRef(({endAction:e,startAction:t,disabled:o=!1,onChange:r,hasError:n,required:s,className:i,size:l="M",...d},f)=>{const{id:h,error:w,hint:u,name:m,required:b}=ge("Input");let v;w?v=`${h}-error`:u&&(v=`${h}-hint`);const C=!!w,$=c.useRef(null),p=c.useRef(null),j=ue(p,f),y=S=>{!o&&r&&r(S)};return c.useLayoutEffect(()=>{if($.current&&p.current){const S=$.current.offsetWidth,M=p.current;if(M){const R=S+8+16;M.style.paddingRight=`${R}px`}}},[e]),a.jsxs(Sl,{gap:2,justifyContent:"space-between",$hasError:C||n,$disabled:o,$size:l,$hasLeftAction:!!t,$hasRightAction:!!e,className:i,children:[t,a.jsx(jl,{id:h,name:m,ref:j,$size:l,"aria-describedby":v,"aria-invalid":C||n,"aria-disabled":o,disabled:o,"data-disabled":o?"":void 0,onChange:y,"aria-required":b||s,$hasLeftAction:!!t,$hasRightAction:!!e,...d}),e&&a.jsx(yl,{ref:$,children:e})]})}),jl=x.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return L`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return L`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,yl=x(I)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,Sl=x(I)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:t})=>e?t.spaces[4]:0};
  position: relative;

  ${Te()}
  ${({theme:e,$disabled:t})=>t?L`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,w1=()=>{const{id:e,hint:t,error:o}=ge("Hint");return!t||o?null:a.jsx(B,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:t})},v1=()=>{const{id:e,error:t}=ge("Error");return!t||typeof t!="string"?null:a.jsx(B,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:t})},Rl=c.forwardRef(({label:e,children:t,...o},r)=>a.jsx(Ml,{justifyContent:"unset",background:"transparent",borderStyle:"none",...o,type:"button",tag:"button",ref:r,children:a.jsx(Je,{label:e,children:t})})),Ml=x(I)`
  font-size: 1.6rem;
  padding: 0;
`,Ie=Object.freeze(Object.defineProperty({__proto__:null,Action:Rl,Error:v1,Hint:w1,Input:Ct,Label:In,Root:Be,useField:ge},Symbol.toStringTag,{value:"Module"}));c.forwardRef(({actions:e,children:t,error:o,hint:r,label:n,labelAction:s,nextLabel:i,onNext:l,onPrevious:d,previousLabel:f,required:h,secondaryLabel:w,selectedSlide:u,id:m,...b},v)=>{const C=pe(m);return a.jsx(Be,{hint:r,error:o,id:C,required:h,children:a.jsxs(I,{direction:"column",alignItems:"stretch",gap:1,children:[n&&a.jsx(In,{action:s,children:n}),a.jsx(bl,{ref:v,actions:e,label:n,nextLabel:i,onNext:l,onPrevious:d,previousLabel:f,secondaryLabel:w,selectedSlide:u,id:C,...b,children:t}),a.jsx(w1,{}),a.jsx(v1,{})]})})});x(A)`
  ${J0}
`;const jt=c.forwardRef(({children:e,viewportRef:t,...o},r)=>a.jsxs(Il,{ref:r,...o,children:[a.jsx(Al,{ref:t,children:e}),a.jsx(Gn,{orientation:"vertical",children:a.jsx(Kn,{})}),a.jsx(Gn,{orientation:"horizontal",children:a.jsx(Kn,{})})]})),Il=x(X1)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,Al=x(Q1)`
  min-width: 100%;
`,Gn=x(J1)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
    margin: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
    margin: 0.4rem;
  }
`,Kn=x(P1)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: 0.4rem;

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,Tl="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",Vl=c.forwardRef(({children:e,small:t=!1,...o},r)=>a.jsxs("div",{role:"alert","aria-live":"assertive",ref:r,...o,children:[a.jsx(Ge,{children:e}),a.jsx(El,{src:Tl,"aria-hidden":!0,$small:t})]})),Ll=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,El=x.img`
  animation: ${Ll} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,Hl=c.forwardRef(({allowCustomValue:e,autocomplete:t,children:o,className:r,clearLabel:n="Clear",creatable:s=!1,creatableStartIcon:i,createMessage:l=ae=>`Create "${ae}"`,defaultFilterValue:d,defaultTextValue:f,defaultOpen:h=!1,open:w,onOpenChange:u,disabled:m=!1,hasError:b,id:v,filterValue:C,hasMoreItems:$=!1,isPrintableCharacter:p,loading:j=!1,loadingMessage:y="Loading content...",name:S,noOptionsMessage:M=()=>"No results found",onChange:R,onClear:N,onCreateOption:E,onFilterValueChange:z,onInputChange:O,onTextValueChange:H,onLoadMore:V,placeholder:k="Select or enter a value",required:U=!1,size:K="M",startIcon:q,textValue:J,value:Y,...ne},Z)=>{const[ae,_]=Ce({prop:w,defaultProp:h,onChange:u}),[ee,re]=Ce({prop:J,defaultProp:e&&!f?Y:f,onChange:H}),[fe,T]=Ce({prop:C,defaultProp:d,onChange:z}),W=c.useRef(null),X=c.useRef(null),F=ue(X,Z),D=c.useRef(null),G=me=>{N&&!m&&(re(""),T(""),N(me),X.current.focus())},le=me=>{_(me)},de=me=>{re(me)},P=me=>{T(me)},$e=me=>{O&&O(me)},ye=me=>{R&&R(me)},z1=me=>{V&&$&&!j&&V(me)},Ln=()=>{E&&ee&&s!=="visible"?E(ee):E&&s==="visible"&&(E(),_(!1))},O1=pe(),En=`intersection-${Oe(O1)}`;rt(W,z1,{selectorToWatch:`#${En}`,skipWhen:!ae});const{error:St,...ct}=ge("Combobox"),F1=!!St||b,Rt=ct.id??v,_1=ct.name??S,W1=ct.required||U;let Mt;return St?Mt=`${Rt}-error`:ct.hint&&(Mt=`${Rt}-hint`),a.jsxs(ve.Root,{autocomplete:t||(s===!0?"list":"both"),onOpenChange:le,open:ae,onTextValueChange:de,textValue:ee,allowCustomValue:!!s||e,disabled:m,required:W1,value:Y,onValueChange:ye,filterValue:fe,onFilterValueChange:P,isPrintableCharacter:p,visible:s==="visible",children:[a.jsxs(Dl,{$hasError:F1,$size:K,className:r,children:[a.jsxs(I,{flex:"1",tag:"span",gap:3,children:[q?a.jsx(I,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:q}):null,a.jsx(Bl,{placeholder:k,id:Rt,"aria-invalid":!!St,onChange:$e,ref:F,name:_1,"aria-describedby":Mt,...ne})]}),a.jsxs(I,{tag:"span",gap:3,children:[ee&&N?a.jsx(_e,{size:"XS",variant:"ghost",onClick:G,"aria-disabled":m,"aria-label":n,label:n,ref:D,children:a.jsx(qe,{})}):null,a.jsx(kl,{children:a.jsx(De,{fill:"neutral500"})})]})]}),a.jsx(ve.Portal,{children:a.jsx(Nl,{sideOffset:4,children:a.jsxs(ve.Viewport,{ref:W,children:[a.jsxs(Ol,{children:[o,s!==!0&&!j?a.jsx(ve.NoValueFound,{asChild:!0,children:a.jsx(Wt,{$hasHover:!1,children:a.jsx(B,{children:M(ee??"")})})}):null,j?a.jsx(I,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:a.jsx(Vl,{small:!0,children:y})}):null,a.jsx(A,{id:En,width:"100%",height:"1px"})]}),s?a.jsx(zl,{onPointerUp:Ln,onClick:Ln,asChild:!0,children:a.jsx(Wt,{children:a.jsxs(I,{gap:2,children:[i&&a.jsx(A,{tag:"span","aria-hidden":!0,display:"inline-flex",children:i}),a.jsx(B,{children:l(ee??"")})]})})}):null]})})})]})}),Dl=x(ve.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return L`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[1]};
        `;default:return L`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Te()({theme:e,$hasError:t})};
`,Bl=x(ve.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,kl=x(ve.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Nl=x(ve.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:e})=>`2px solid ${e.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,zl=x(ve.CreateItem)`
  && {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
    background: ${({theme:e})=>e.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background-color: transparent;
  }
  && > div {
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,Ol=x(jt)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Fl=c.forwardRef(({children:e,value:t,disabled:o,textValue:r,...n},s)=>a.jsx(ve.ComboboxItem,{asChild:!0,value:t,disabled:o,textValue:r,children:a.jsx(Wt,{ref:s,...n,children:a.jsx(ve.ItemText,{asChild:!0,children:a.jsx(B,{children:e})})})})),Wt=x.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:t=!0})=>t?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`;c.forwardRef((e,t)=>a.jsx(vo,{...e,asChild:!0,ref:t}));c.forwardRef((e,t)=>a.jsxs(bo,{children:[a.jsx(_l,{}),a.jsx(Wl,{ref:t,...e})]}));const _l=x(po)`
  background-color: ${e=>e.theme.colors.neutral800};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  opacity: 0.2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Wl=x($o)`
  max-width: 42rem;
  height: min-content;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${te.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${te.modalPopOut};
    }
  }
`;c.forwardRef(({children:e,...t},o)=>a.jsx(Co,{asChild:!0,children:a.jsx(Ul,{tag:"h2",variant:"beta",ref:o,padding:6,fontWeight:"bold",...t,children:e})}));const Ul=x(B)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;c.forwardRef(({children:e,icon:t,...o},r)=>a.jsx(I,{ref:r,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...o,children:typeof e=="string"?a.jsxs(a.Fragment,{children:[t?c.cloneElement(t,{width:24,height:24}):null,a.jsx(ql,{children:e})]}):e}));const ql=c.forwardRef((e,t)=>a.jsx(jo,{asChild:!0,children:a.jsx(B,{ref:t,variant:"omega",...e,tag:"p"})}));c.forwardRef((e,t)=>a.jsx(Gl,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"}));const Gl=x(I)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`;c.forwardRef((e,t)=>a.jsx(yo,{...e,asChild:!0,ref:t}));c.forwardRef((e,t)=>a.jsx(So,{...e,asChild:!0,ref:t}));function Re(e,t){const o=c.useRef(null);return t&&o.current&&Kl(t,o.current)&&(t=o.current),o.current=t??null,c.useMemo(()=>new ua(e,t),[e,t])}function Kl(e,t){if(e===t)return!0;const o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(const n of o)if(t[n]!==e[n])return!1;return!0}Ro`
${L`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  *:has(> :disabled:not(button)) {
    cursor: not-allowed !important;
  }

  [aria-disabled='true']:not(button) {
    cursor: not-allowed !important;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const Yn="en-EN",Yl=()=>typeof navigator>"u"?Yn:navigator.language?navigator.language:Yn,[P5,yt]=ot("StrapiDesignSystem",{locale:Yl()}),Zl=Lo,b1=c.forwardRef(({container:e=globalThis?.document?.body,...t},o)=>e?We.createPortal(a.jsx(A,{ref:o,...t}),e):null);b1.displayName="Portal";const Xl=c.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:o,disabled:r,hasError:n,children:s,id:i,size:l="M",withTags:d,...f},h)=>{const w=c.useRef(null),u=v=>{e&&!r&&(e(v),w.current.focus())},{labelNode:m}=ge("SelectTrigger"),b=ue(w,h);return a.jsx(be.Trigger,{asChild:!0,children:a.jsxs(Jl,{"aria-disabled":r,$hasError:n,ref:b,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:r?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":m?`${i}-label`:void 0,$size:l,$withTags:d,...f,children:[a.jsxs(I,{flex:"1",tag:"span",gap:3,children:[o&&a.jsx(I,{tag:"span","aria-hidden":!0,children:o}),s]}),a.jsxs(I,{tag:"span",gap:3,children:[e?a.jsx(Ql,{tag:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:u,"aria-disabled":r,"aria-label":t,title:t,cursor:"pointer",children:a.jsx(qe,{})}):null,a.jsx(Pl,{children:a.jsx(De,{})})]})]})})}),Ql=x(A)`
  border: none;
  display: flex;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Jl=x(I)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return L`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return L`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Te()({theme:e,$hasError:t})};
`,Pl=x(be.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,ed=c.forwardRef(({children:e,placeholder:t,...o},r)=>a.jsx(td,{ref:r,ellipsis:!0,...o,children:a.jsx(nd,{placeholder:t,children:e})})),td=x(B)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
`,nd=x(be.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,od=c.forwardRef((e,t)=>a.jsx(ad,{ref:t,...e,children:a.jsx(jt,{children:e.children})})),ad=x(be.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,rd=x(be.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,sd=c.forwardRef((e,t)=>a.jsx(cd,{ref:t,...e})),id=L`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,cd=x(be.Item)`
  ${id}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }

  &[data-state='checked'] {
    font-weight: bold;
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,p1=be.Root,$1=Xl,C1=ed,j1=be.Portal,y1=od,S1=rd,An=sd,R1=be.ItemIndicator,M1=be.ItemText,ld=be.Group,Ut=c.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:n,id:s,name:i,onChange:l,onClear:d,onCloseAutoFocus:f,onReachEnd:h,placeholder:w,required:u,size:m,startIcon:b,value:v,...C},$)=>{const[p,j]=c.useState(),[y,S]=c.useState(!1),M=Z=>{S(Z)},R=Z=>{d&&d(Z),l||j("")},N=Z=>{l?l(typeof v=="number"?Number(Z):Z):j(Z)},E=c.useRef(null),z=pe(),O=`intersection-${Oe(z)}`;rt(E,Z=>{h&&h(Z)},{selectorToWatch:`#${O}`,skipWhen:!y});const{error:V,required:k,...U}=ge("SingleSelect"),K=!!V||n,q=U.id??s,J=U.name??i;let Y;V?Y=`${q}-error`:U.hint&&(Y=`${q}-hint`);const ne=(typeof v<"u"&&v!==null?v.toString():p)??"";return a.jsxs(p1,{onOpenChange:M,disabled:r,required:k??u,onValueChange:N,value:ne,...C,children:[a.jsx($1,{ref:$,id:q,name:J,startIcon:b,hasError:K,disabled:r,clearLabel:t,onClear:ne&&d?R:void 0,"aria-label":C["aria-label"],"aria-describedby":Y??C["aria-describedby"],size:m,children:a.jsx(C1,{placeholder:w,textColor:ne?"neutral800":"neutral600",children:ne&&o?o(ne):void 0})}),a.jsx(j1,{children:a.jsx(y1,{position:"popper",sideOffset:4,onCloseAutoFocus:f,children:a.jsxs(S1,{ref:E,children:[e,a.jsx(A,{id:O,width:"100%",height:"1px"})]})})})]})}),qt=c.forwardRef(({value:e,startIcon:t,children:o,...r},n)=>a.jsxs(An,{ref:n,value:e.toString(),...r,children:[t&&a.jsx(I,{tag:"span","aria-hidden":!0,children:t}),a.jsx(B,{lineHeight:"20px",width:"100%",children:a.jsx(M1,{children:o})})]})),dd=200,Zn=15,[hd,Ke]=ot("DatePicker"),ud=c.forwardRef(({calendarLabel:e,className:t,initialDate:o,locale:r,maxDate:n,minDate:s,monthSelectLabel:i="Month",onChange:l,value:d,yearSelectLabel:f="Year",hasError:h,id:w,name:u,disabled:m=!1,required:b=!1,onClear:v,clearLabel:C="Clear",size:$="M",...p},j)=>{const y=Lt(),S=yt("DatePicker"),M=r??S.locale,R=Re(M,{day:"2-digit",month:"2-digit",year:"numeric"}),[N,E]=c.useState(!1),[z,O]=c.useState(null),[H,V]=c.useState(null),[k,U]=c.useState(null),[K,q]=c.useState(),[J,Y]=Ce({defaultProp:o?Ve(o):void 0,prop:d?Ve(d):void 0,onChange(P){l&&l(P?.toDate(y))}}),[ne,Z]=c.useMemo(()=>{const P=o?Ve(o):Xt("UTC"),$e=s?Ve(s):P.set({day:1,month:1,year:P.year-dd});let ye=n?Ve(n):P.set({day:31,month:12,year:P.year+Zn});return ye.compare($e)<0&&(ye=$e.set({day:31,month:12,year:$e.year+Zn})),[$e,ye]},[s,n,o]),[ae,_]=c.useState(gd({currentValue:J,minDate:ne,maxDate:Z})),ee=pe(),re=c.useRef(null),fe=P=>{v&&!m&&(q(""),Y(void 0),v(P),H?.focus())},T=c.useCallback(P=>{P&&J&&_(J),E(P)},[J]);Fe(()=>{if(d){const P=Ve(d);q(R.format(P.toDate(y))),_(P)}else q("")},[d,R,y]),Fe(()=>{if(o&&K===void 0){const P=Ve(o);q(R.format(P.toDate(y)))}},[o,K,R,y]);const{error:W,...X}=ge("Combobox"),F=!!W||h,D=X.id??w,G=X.name??u,le=X.required||b;let de;return W?de=`${D}-error`:X.hint&&(de=`${D}-hint`),a.jsxs(hd,{calendarDate:ae,content:k,contentId:ee,disabled:m,locale:M,minDate:ne,maxDate:Z,open:N,onCalendarDateChange:_,onContentChange:U,onOpenChange:T,onTextInputChange:V,onTextValueChange:q,onTriggerChange:O,onValueChange:Y,required:le,textInput:H,textValue:K,timeZone:y,trigger:z,value:J,children:[a.jsxs(md,{className:t,hasError:F,size:$,children:[a.jsx(Yr,{fill:"neutral500","aria-hidden":!0}),a.jsx(vd,{ref:j,"aria-describedby":de,id:D,name:G,...p}),K&&v?a.jsx(_e,{size:"XS",variant:"ghost",onClick:fe,"aria-disabled":m,"aria-label":C,label:C,ref:re,children:a.jsx(qe,{})}):null]}),a.jsx(b1,{children:a.jsx(Cd,{label:e,children:a.jsx(Md,{monthSelectLabel:i,yearSelectLabel:f})})})]})}),Xn=e=>!!e.match(/^[^a-zA-Z]*$/),gd=({currentValue:e,minDate:t,maxDate:o})=>{const r=Xt("UTC");return e||(Et(t,r)===t&&Ht(o,r)===o?r:Et(t,r)===r?t:Ht(o,r)===r?o:r)},fd="DatePickerTrigger",md=c.forwardRef(({hasError:e,size:t,...o},r)=>{const n=Ke(fd),s=ue(r,l=>n.onTriggerChange(l)),i=()=>{n.disabled||n.onOpenChange(!0)};return a.jsx(Zt,{asChild:!0,trapped:n.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{document.getSelection()?.empty(),l.preventDefault()},children:a.jsx(xd,{ref:s,$hasError:e,$size:t,...o,hasRadius:!0,gap:3,overflow:"hidden",background:n.disabled?"neutral150":"neutral0",onClick:Ee(o.onClick,()=>{n.textInput?.focus()}),onPointerDown:Ee(o.onPointerDown,l=>{const d=l.target;d.hasPointerCapture(l.pointerId)&&d.releasePointerCapture(l.pointerId),(d.closest("button")??d.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(i(),n.textInput?.focus())})})})}),xd=x(I)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return L`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return L`
          padding-block: ${e.theme.spaces[2]};
          padding-inline: ${e.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Te()({theme:e,$hasError:t})};
`,wd="DatePickerTextInput",vd=c.forwardRef(({placeholder:e,...t},o)=>{const r=Ke(wd),{onTextValueChange:n,textValue:s,onTextInputChange:i,onOpenChange:l,disabled:d,locale:f}=r,h=ue(o,$=>i($)),w=()=>{d||l(!0)},u=Re(f,{year:"numeric",month:"2-digit",day:"2-digit"}),[m,b,v]=c.useMemo(()=>{const $=u.formatToParts(new Date),p=$.filter(S=>S.type==="year"||S.type==="month"||S.type==="day"),j=p.map(S=>{switch(S.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),y=$.find(S=>S.type==="literal")?.value??"";return[j,y,p]},[u]),C=m.map($=>`\\d{${$.length}}`).join(`\\${b}`);return a.jsx(pd,{role:"combobox",type:"text",inputMode:"numeric",ref:h,"aria-autocomplete":"none","aria-controls":r.contentId,"aria-disabled":r.disabled,"aria-expanded":r.open,"aria-required":r.required,"aria-haspopup":"dialog","data-state":r.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,pattern:C,placeholder:e??m.join(b),...t,value:s??"",onBlur:Ee(t.onBlur,()=>{if(!r.textValue){r.onValueChange(void 0);return}r.onTextValueChange(u.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate)}),onChange:Ee(t.onChange,$=>{if(Xn($.target.value)){const p=$.target.value.split(b),[j,y,S]=v.map((V,k)=>{const U=p[k];return{...V,value:U}}).sort((V,k)=>V.type==="year"?1:k.type==="year"?-1:V.type==="month"?1:k.type==="month"?-1:0).map(V=>V.value),M=r.calendarDate.year;let R=r.calendarDate.year;if(S){const V=S.length===1?`0${S}`:S;R=S.length<3?Number(`${M}`.slice(0,4-V.length)+V):Number(V)}S&&S.length<3&&R>r.maxDate.year&&(R-=100);const N=r.calendarDate.set({year:R}),E=N.calendar.getMonthsInYear(N),z=N.set({month:y&&Number(y)<=E?Number(y):void 0}),O=z.calendar.getDaysInMonth(z),H=z.set({day:j&&Number(j)<=O?Number(j):void 0});r.onCalendarDateChange(bd(H,r.minDate,r.maxDate)),r.onTextValueChange($.target.value)}}),onKeyDown:Ee(t.onKeyDown,$=>{if(!r.open&&(Xn($.key)||["ArrowDown","Backspace"].includes($.key)))w();else if(["Tab"].includes($.key)&&r.open)$.preventDefault();else if(["Escape"].includes($.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),$.preventDefault();else if(r.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes($.key))switch($.preventDefault(),$.key){case"ArrowDown":{const p=r.calendarDate.add({weeks:1});if(r.maxDate&&p.compare(r.maxDate)>0)return;r.onCalendarDateChange(p);return}case"ArrowRight":{const p=r.calendarDate.add({days:1});if(r.maxDate&&p.compare(r.maxDate)>0)return;r.onCalendarDateChange(p);return}case"ArrowUp":{const p=r.calendarDate.subtract({weeks:1});if(r.minDate&&p.compare(r.minDate)<0)return;r.onCalendarDateChange(p);return}case"ArrowLeft":{const p=r.calendarDate.subtract({days:1});if(r.minDate&&p.compare(r.minDate)<0)return;r.onCalendarDateChange(p)}}else r.open&&["Enter"].includes($.key)&&($.preventDefault(),n(u.format(r.calendarDate.toDate(r.timeZone))),r.onValueChange(r.calendarDate),r.onOpenChange(!1))})})});function bd(e,t,o){return t&&(e=Ht(e,t)),o&&(e=Et(e,o)),e}const pd=x.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,$d="DatePickerContent",Cd=c.forwardRef((e,t)=>{const[o,r]=c.useState(),n=Ke($d);if(Fe(()=>{r(new DocumentFragment)},[]),!n.open){const s=o;return s?We.createPortal(a.jsx("div",{children:e.children}),s):null}return a.jsx(yd,{...e,ref:t})}),jd="DatePickerContent",yd=c.forwardRef((e,t)=>{const{label:o="Choose date",...r}=e,{onOpenChange:n,...s}=Ke(jd),{x:i,y:l,refs:d,strategy:f,placement:h}=Mo({strategy:"fixed",placement:"bottom-start",middleware:[Io({mainAxis:4}),Ao(),To()],elements:{reference:s.trigger},whileElementsMounted:Vo});c.useEffect(()=>{const u=()=>{n(!1)};return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[n]);const w=ue(t,u=>s.onContentChange(u),d.setFloating);return Kt(),a.jsx(Yt,{allowPinchZoom:!0,children:a.jsx(Zl,{asChild:!0,onFocusOutside:u=>{u.preventDefault()},onDismiss:()=>{n(!1)},children:a.jsx(Sd,{ref:w,"data-state":s.open?"open":"closed","data-side":h.includes("top")?"top":"bottom",onContextMenu:u=>u.preventDefault(),id:s.contentId,role:"dialog","aria-modal":"true","aria-label":o,style:{left:i,top:l,position:f},hasRadius:!0,background:"neutral0",padding:1,...r})})})}),Sd=x(A)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }
  }
`,Rd="DatePickerCalendar",Md=c.forwardRef(({monthSelectLabel:e,yearSelectLabel:t,...o},r)=>{const{locale:n,timeZone:s,minDate:i,maxDate:l,calendarDate:d,onCalendarDateChange:f}=Ke(Rd),h=Eo(d),w=c.useMemo(()=>{const j=i.year,y=l.year;return[...Array(y-j+1).keys()].map(S=>(j+S).toString())},[i,l]),u=Re(n,{month:"long"}),m=c.useMemo(()=>[...Array(d.calendar.getMonthsInYear(d)).keys()].map(j=>u.format(d.set({month:j+1}).toDate(s))),[d,u,s]),b=Re(n,{weekday:"short"}),v=c.useMemo(()=>{const j=f0(Xt(s),n);return[...new Array(7).keys()].map(y=>{const M=j.add({days:y}).toDate(s);return b.format(M)})},[s,n,b]),C=j=>{if(typeof j=="number")return;const y=d.set({month:m.indexOf(j)+1});f(y)},$=j=>{if(typeof j=="number")return;const y=d.set({year:parseInt(j,10)});f(y)},p=Id(h,n);return a.jsxs(I,{ref:r,direction:"column",alignItems:"stretch",padding:4,...o,children:[a.jsxs(Ad,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[a.jsx(Be,{children:a.jsx(Ut,{"aria-label":e,value:m[d.month-1],onChange:C,children:m.map(j=>a.jsx(qt,{value:j,children:j},j))})}),a.jsx(Be,{children:a.jsx(Ut,{value:d.year.toString(),"aria-label":t,onChange:$,children:w.map(j=>a.jsx(qt,{value:j,children:j},j))})})]}),a.jsxs("table",{role:"grid",children:[a.jsx("thead",{"aria-hidden":!0,children:a.jsx("tr",{"aria-rowindex":0,children:v.map((j,y)=>a.jsx(Td,{"aria-colindex":y,children:j},j))})}),a.jsx("tbody",{children:[...new Array(6).keys()].map(j=>a.jsx("tr",{"aria-rowindex":j+2,children:p(j).map((y,S)=>y?a.jsx(Ed,{"aria-colindex":S+1,date:y,startDate:h,disabled:i.compare(y)>0||y.compare(l)>0},y.toString()):a.jsx(I1,{"aria-colindex":S+1},S+1))},j))})]})]})}),Id=(e,t)=>o=>{let r=e.add({weeks:o});const n=[];r=f0(r,t);const s=Ho(r,t);for(let i=0;i<s;i++)n.push(null);for(;n.length<7;){n.push(r);const i=r.add({days:1});if(m0(r,i))break;r=i}for(;n.length<7;)n.push(null);return n},Ad=x(I)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    svg {
      fill: ${({theme:e})=>e.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,Td=c.forwardRef(({children:e,...t},o)=>a.jsx(Vd,{tag:"th",role:"gridcell",ref:o,...t,height:"2.4rem",width:"3.2rem",children:a.jsx(B,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),Vd=x(A)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,Ld="DatePickerCalendarCell",Ed=c.forwardRef(({date:e,startDate:t,disabled:o,...r},n)=>{const{timeZone:s,locale:i,calendarDate:l,onValueChange:d,onOpenChange:f,onTextValueChange:h,onCalendarDateChange:w}=Ke(Ld),u=m0(l,e),m=Re(i,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),b=c.useMemo(()=>m.format(e.toDate(s)),[m,e,s]),v=Re(i,{day:"numeric",calendar:e.calendar.identifier}),C=c.useMemo(()=>v.formatToParts(e.toDate(s)).find(S=>S.type==="day").value,[v,e,s]),$=Re(i,{day:"2-digit",month:"2-digit",year:"numeric"}),p=Do(t),j=e.compare(t)<0||e.compare(p)>0;let y="neutral900";return u?y="primary600":j&&(y="neutral600"),a.jsx(I1,{tag:"td",role:"gridcell",ref:n,"aria-selected":u,...r,hasRadius:!0,"aria-label":b,tabIndex:u?0:-1,background:u?"primary100":"neutral0",cursor:"pointer",onPointerDown:Ee(r.onPointerDown,S=>{S.preventDefault(),w(e),d(e),h($.format(e.toDate(s))),f(!1)}),"aria-disabled":o,children:a.jsx(B,{variant:"pi",textColor:y,children:C})})}),I1=x(A)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Ve=e=>{const t=e.toISOString(),o=Bo(t,"UTC");return ko(o)},At=e=>!!e.match(/^[^a-zA-Z]*$/);function Hd(e=""){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Dd=c.forwardRef(({step:e=15,value:t,defaultValue:o,onChange:r,...n},s)=>{const i=yt("TimePicker"),[l,d]=c.useState(""),[f,h]=Ce({prop:t,defaultProp:o,onChange:r}),w=Re(i.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),u=c.useMemo(()=>{const y=w.formatToParts(new Date),{value:S}=y.find(M=>M.type==="literal");return S},[w]),m=c.useMemo(()=>{const y=60/e;return[...Array(24).keys()].flatMap(S=>[...Array(y).keys()].map(M=>w.format(new Date(0,0,0,S,M*e))))},[e,w]),b=y=>{(!y||At(y))&&d(y)},v=y=>{const[S,M]=y.split(u);if(!S&&!M)return;const R=Number(S??"0"),N=Number(M??"0");if(!(R>23||N>59))return w.format(new Date(0,0,0,R,N))},C=y=>{const S=v(y.target.value);S?(d(S),h(S)):d(f)},$=y=>{if(typeof y<"u"){const S=v(y);h(S)}else h(y)};c.useEffect(()=>{const y=typeof t>"u"?"":t;At(y)&&d(y)},[t,d]);const j=`\\d{2}${Hd(u)}\\d{2}`;return a.jsx(Hl,{...n,ref:s,value:f,onChange:$,isPrintableCharacter:At,allowCustomValue:!0,placeholder:`--${u}--`,autocomplete:"none",startIcon:a.jsx(ms,{fill:"neutral500"}),inputMode:"numeric",pattern:j,textValue:l,onTextValueChange:b,onBlur:C,children:m.map(y=>a.jsx(Fl,{value:y,children:y},y))})}),Bd=x(ud)`
  flex: 1 1 70%;
  min-width: 120px;
`,kd=x(Dd)`
  flex: 1 1 30%;
  min-width: 140px;
`;c.forwardRef(({clearLabel:e="clear",dateLabel:t="Choose date",timeLabel:o="Choose time",disabled:r=!1,hasError:n,onChange:s,onClear:i,required:l=!1,step:d,value:f,initialDate:h,size:w,...u},m)=>{const b=c.useRef(null),[v,C]=Ce({defaultProp:h?Ye(h,!1):void 0,prop:f?Ye(f,!1):f??void 0,onChange(V){s&&s(V?.toDate(Lt()))}}),$=yt("DateTimePicker"),p=Re($.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),j=v?p.format(v.toDate(Lt())):"",y=V=>{let k=V?Ye(V):void 0;if(!(k&&v&&k.compare(v)===0)){if(j&&k){const[U,K]=j.split(":");k=k.set({hour:parseInt(U,10),minute:parseInt(K,10)})}C(k)}},S=V=>{if(!V)return;const[k,U]=V.split(":"),K=v?v.set({hour:parseInt(k,10),minute:parseInt(U,10)}):Ye(new Date).set({hour:parseInt(k,10),minute:parseInt(U,10)});C(K)},M=V=>{C(void 0),i&&i(V)},R=()=>{const V=v?v.set({hour:0,minute:0}):Ye(new Date);C(V)},N=ue(b,m),{error:E,id:z,labelNode:O}=ge("DateTimePicker"),H=!!E||n;return a.jsxs(I,{"aria-labelledby":O?`${z}-label`:void 0,role:"group",flex:"1",gap:1,children:[a.jsx(Be,{children:a.jsx(Bd,{...u,size:w,value:v?.toDate("UTC"),onChange:y,required:l,onClear:i?M:void 0,clearLabel:`${e} date`,disabled:r,ref:N,"aria-label":t})}),a.jsx(Be,{children:a.jsx(kd,{size:w,hasError:H,value:j,onChange:S,onClear:i&&j!==void 0&&j!=="00:00"?R:void 0,clearLabel:`${e} time`,required:l,disabled:r,step:d,"aria-label":o})})]})});const Ye=(e,t=!0)=>{const o=e.toISOString();let r=No(o);return t&&(r=r.set({hour:0,minute:0})),zo(r)},Nd=c.forwardRef((e,t)=>a.jsx(zd,{ref:t,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),zd=x(A)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,Od=x(A)`
  svg {
    height: 8.8rem;
  }
`;c.forwardRef(({icon:e,content:t,action:o,hasRadius:r=!0,shadow:n="tableShadow"},s)=>a.jsxs(I,{ref:s,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:r,shadow:n,children:[e?a.jsx(Od,{paddingBottom:6,"aria-hidden":!0,children:e}):null,a.jsx(A,{paddingBottom:4,children:a.jsx(B,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:t})}),o]}));const A1=x0.define(),T1=x0.define(),Fd=w0.mark({attributes:{style:"background-color: yellow; color: black"}}),_d=Oo.define({create(){return w0.none},update(e,t){return e=e.map(t.changes),t.effects.forEach(o=>{o.is(A1)?e=e.update({add:o.value,sort:!0}):o.is(T1)&&(e=e.update({filter:o.value}))}),e},provide:e=>Fo.decorations.from(e)});c.forwardRef(({hasError:e,required:t,id:o,value:r="",disabled:n=!1,onChange:s=()=>null,...i},l)=>{const d=c.useRef(),f=c.useRef(),h=c.useRef(),{error:w,...u}=ge("JsonInput"),m=!!w||e,b=u.id??o,v=u.required||t;let C;w?C=`${b}-error`:u.hint&&(C=`${b}-hint`);const $=E=>{const z=f.current?.doc;if(z){const{text:O,to:H}=z.line(E),V=H-O.trimStart().length;H>V&&h.current?.dispatch({effects:A1.of([Fd.range(V,H)])})}},p=()=>{const E=f.current?.doc;if(E){const z=E.length||0;h.current?.dispatch({effects:T1.of((O,H)=>H<=0||O>=z)})}},j=({state:E,view:z})=>{h.current=z,f.current=E,p();const H=ga()(z);H.length&&$(E.doc.lineAt(H[0].from).number)},y=(E,z)=>{j(z),s(E)},S=(E,z)=>{h.current=E,f.current=z,j({view:E,state:z})},{setContainer:M,view:R}=_o({value:r,onCreateEditor:S,container:d.current,editable:!n,extensions:[Wo(),_d],onChange:y,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),N=ue(d,M);return c.useImperativeHandle(l,()=>({...R?.dom,focus(){R&&R.focus()},scrollIntoView(E){R&&R.dom.scrollIntoView(E)}}),[R]),a.jsx(Wd,{ref:N,$disabled:n,$hasError:m,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":v,id:b,"aria-describedby":C,...i})});const Wd=x(I)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${Te()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`;he(({disabled:e,...t},o)=>a.jsx(ft,{ref:o,tag:at,tabIndex:e?-1:void 0,disabled:e,...t}));x(A)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;x(A)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;c.forwardRef((e,t)=>a.jsx(Uo,{...e,asChild:!0,ref:t}));c.forwardRef((e,t)=>a.jsxs(qo,{children:[a.jsx(Ud,{}),a.jsx(qd,{ref:t,...e})]}));const Ud=x(Go)`
  background-color: ${e=>e.theme.colors.neutral800};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  opacity: 0.2;
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${te.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,qd=x(Ko)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: 60%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${te.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${te.modalPopOut};
    }
  }
`,Gd=c.forwardRef((e,t)=>a.jsx(Yo,{...e,asChild:!0,ref:t}));c.forwardRef(({children:e,closeLabel:t="Close modal",...o},r)=>a.jsxs(Kd,{ref:r,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...o,tag:"header",children:[e,a.jsx(Gd,{children:a.jsx(_e,{withTooltip:!1,label:t,children:a.jsx(qe,{})})})]}));const Kd=x(I)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;c.forwardRef((e,t)=>a.jsx(Zo,{asChild:!0,children:a.jsx(B,{tag:"h2",variant:"omega",fontWeight:"bold",ref:t,...e})}));c.forwardRef(({children:e,...t},o)=>a.jsx(Yd,{ref:o,...t,children:e}));const Yd=x(jt)`
  padding-inline: ${e=>e.theme.spaces[8]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;c.forwardRef((e,t)=>a.jsx(Zd,{ref:t,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"}));const Zd=x(I)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,Xd="";c.forwardRef(({startAction:e,locale:t,onValueChange:o,value:r,step:n=1,disabled:s=!1,...i},l)=>{const d=yt("NumberInput"),f=t||d.locale,h=c.useRef(new Xo(f,{style:"decimal"})),w=c.useRef(new Qo(f,{maximumFractionDigits:20})),[u,m]=Qd({prop(M){const R=String(r);return isNaN(Number(R))||R!==M&&M!==""?M:w.current.format(Number(r))},defaultProp:Xd,onChange(M){const R=h.current.parse(M??"");o(isNaN(R)?void 0:R)}}),b=M=>{m(String(M))},v=({target:{value:M}})=>{h.current.isValidPartialNumber(M)&&b(M)},$=(M=>{const R=M.toString();return R.includes(".")?R.split(".")[1].length:0})(n),p=()=>{if(!u){b(n);return}const M=h.current.parse(u),R=isNaN(M)?n:M+n,N=parseFloat(R.toFixed($));b(w.current.format(N))},j=()=>{if(!u){b(-n);return}const M=h.current.parse(u),R=isNaN(M)?-n:M-n,N=parseFloat(R.toFixed($));b(w.current.format(N))},y=M=>{if(!s)switch(M.key){case ce.DOWN:{M.preventDefault(),j();break}case ce.UP:{M.preventDefault(),p();break}}},S=()=>{if(u){const M=h.current.parse(u),R=isNaN(M)?"":w.current.format(M);b(R)}};return a.jsx(Ct,{ref:l,startAction:e,disabled:s,type:"text",inputMode:"decimal",onChange:v,onKeyDown:y,onBlur:S,value:u,endAction:a.jsxs(I,{direction:"column",children:[a.jsx(Qn,{disabled:s,"aria-hidden":!0,$reverse:!0,onClick:p,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:a.jsx(De,{fill:"neutral500"})}),a.jsx(Qn,{disabled:s,"aria-hidden":!0,onClick:j,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:a.jsx(De,{fill:"neutral500"})})]}),...i})});const Qn=x.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`;function Qd({prop:e,defaultProp:t,onChange:o=()=>{}}){const[r,n]=n1({defaultProp:t,onChange:o}),s=e!==void 0,i=e instanceof Function?e(r):e,l=s?i:r,d=nn(o),f=c.useCallback(h=>{if(s){const u=typeof h=="function"?h(i):h;u!==i&&(d(u),n(h))}else n(h)},[s,i,n,d]);return[l,f]}const Jd=c.createContext({activePage:1,pageCount:1}),Tn=()=>c.useContext(Jd);he(({children:e,...t},o)=>{const{activePage:r}=Tn(),n=r===1;return a.jsxs(L1,{ref:o,"aria-disabled":n,tabIndex:n?-1:void 0,...t,children:[a.jsx(Ge,{children:e}),a.jsx(X0,{"aria-hidden":!0})]})});he(({children:e,...t},o)=>{const{activePage:r,pageCount:n}=Tn(),s=r===n;return a.jsxs(L1,{ref:o,"aria-disabled":s,tabIndex:s?-1:void 0,...t,children:[a.jsx(Ge,{children:e}),a.jsx(Cn,{"aria-hidden":!0})]})});const V1=x(at)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${bt}
`,L1=x(V1)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;he(({number:e,children:t,...o},r)=>{const{activePage:n}=Tn(),s=n===e;return a.jsxs(Pd,{ref:r,...o,"aria-current":s,$active:s,children:[a.jsx(Ge,{children:t}),a.jsx(B,{"aria-hidden":!0,fontWeight:s?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const Pd=x(V1)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;c.forwardRef((e,t)=>a.jsx(Jo,{...e,asChild:!0,ref:t}));c.forwardRef((e,t)=>a.jsx(Po,{children:a.jsx(e5,{sideOffset:4,side:"bottom",align:"start",...e,ref:t})}));const e5=x(ea)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${te.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${te.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${te.slideDownOut};
      }
    }
  }
`;c.forwardRef(({children:e,intersectionId:t,onReachEnd:o,...r},n)=>{const s=c.useRef(null),i=ue(s,n),l=pe();return rt(s,o??(()=>{}),{selectorToWatch:`#${Oe(l)}`,skipWhen:!t||!o}),a.jsxs(t5,{ref:i,...r,children:[e,t&&o&&a.jsx(A,{id:Oe(l),width:"100%",height:"1px"})]})});const t5=x(jt)`
  height: 20rem;
`;c.forwardRef(({size:e="M",value:t,...o},r)=>a.jsx(n5,{ref:r,$size:e,...o,children:a.jsx(o5,{style:{transform:`translate3D(-${100-(t??0)}%, 0, 0)`}})}));const n5=x(ta)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,o5=x(na)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;c.forwardRef((e,t)=>a.jsx(a5,{ref:t,...e}));const a5=x(oa)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;c.forwardRef(({children:e,id:t,...o},r)=>{const n=pe(t);return a.jsxs(I,{gap:2,children:[a.jsx(r5,{id:n,ref:r,...o,children:a.jsx(s5,{})}),a.jsx(B,{tag:"label",htmlFor:n,children:e})]})});const r5=x(aa)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,s5=x(ra)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${te.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`,i5=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},E1=c.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),c5=()=>c.useContext(E1),l5=c.forwardRef(({colCount:e,rowCount:t,jumpStep:o=3,initialCol:r=0,initialRow:n=0,...s},i)=>{const l=c.useRef(null),d=c.useRef(!1),f=ue(l,i),[h,w]=c.useState(n),[u,m]=c.useState(r),b=c.useCallback(({colIndex:$,rowIndex:p})=>{m($),w(p)},[]);c.useEffect(()=>{d.current&&i5(l.current),d.current||(d.current=!0)},[u,h]);const v=$=>{switch($.key){case ce.RIGHT:{$.preventDefault(),m(p=>p<e-1?p+1:p);break}case ce.LEFT:{$.preventDefault(),m(p=>p>0?p-1:p);break}case ce.UP:{$.preventDefault(),w(p=>p>0?p-1:p);break}case ce.DOWN:{$.preventDefault(),w(p=>p<t-1?p+1:p);break}case ce.HOME:{$.preventDefault(),$.ctrlKey&&w(0),m(0);break}case ce.END:{$.preventDefault(),$.ctrlKey&&w(t-1),m(e-1);break}case ce.PAGE_DOWN:{$.preventDefault(),w(p=>p+o<t?p+o:t-1);break}case ce.PAGE_UP:{$.preventDefault(),w(p=>p-o>0?p-o:0);break}}},C=c.useMemo(()=>({rowIndex:h,colIndex:u,setTableValues:b}),[u,h,b]);return a.jsx(E1.Provider,{value:C,children:a.jsx("table",{role:"grid",ref:f,"aria-rowcount":t,"aria-colcount":e,onKeyDown:v,...s})})}),Ze=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(n=>!n.hasAttribute("disabled")),Tt=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),H1=c.forwardRef(({coords:e={col:0,row:0},tag:t="td",...o},r)=>{const n=c.useRef(null),s=ue(r,n),{rowIndex:i,colIndex:l,setTableValues:d}=c5(),[f,h]=c.useState(!1),w=b=>{const v=Ze(n.current);if(v.length===0||v.length===1&&Tt(v).length===0)return;if(v.length>1&&!v.find($=>$.tagName!=="BUTTON")){b.preventDefault();const $=v.findIndex(p=>p===document.activeElement);if(b.key===ce.RIGHT){const p=v[$+1];p&&(b.stopPropagation(),p.focus())}else if(b.key===ce.LEFT){const p=v[$-1];p&&(b.stopPropagation(),p.focus())}return}const C=b.key===ce.ENTER;if(C&&!f)h(!0);else if((b.key===ce.ESCAPE||C)&&f){if(C&&document.activeElement?.tagName==="A")return;h(!1),n.current.focus()}else f&&b.stopPropagation()},u=i===e.row-1&&l===e.col-1;Fe(()=>{const b=Ze(n.current);b.length===0||b.length===1&&Tt(b).length!==0||b.length>1&&b.find(v=>v.tagName!=="BUTTON")?(n.current.setAttribute("tabIndex",!f&&u?"0":"-1"),b.forEach((v,C)=>{v.setAttribute("tabIndex",f?"0":"-1"),f&&C===0&&v.focus()})):b.forEach(v=>{v.setAttribute("tabIndex",u?"0":"-1")})},[f,u]);const m=c.useCallback(()=>{const b=Ze(n.current);b.length>=1&&(Tt(b).length!==0||!b.find(v=>v.tagName!=="BUTTON"))&&h(!0),d({rowIndex:e.row-1,colIndex:e.col-1})},[e,d]);return Fe(()=>{const b=n.current;return Ze(b).forEach(C=>{C.addEventListener("focus",m)}),()=>{Ze(b).forEach($=>{$.removeEventListener("focus",m)})}},[m]),a.jsx(A,{role:"gridcell",tag:t,ref:s,onKeyDown:w,...o})}),d5=e=>a.jsx(H1,{...e,tag:"th"}),h5=({children:e,...t})=>{const o=c.Children.toArray(e).map(r=>c.isValidElement(r)?c.cloneElement(r,{"aria-rowindex":1}):r);return a.jsx("thead",{...t,children:o})},u5=({children:e,...t})=>{const o=c.Children.toArray(e).map((r,n)=>c.isValidElement(r)?c.cloneElement(r,{"aria-rowindex":n+2}):r);return a.jsx("tbody",{...t,children:o})},g5=({children:e,...t})=>{const o=c.Children.toArray(e).map((r,n)=>c.isValidElement(r)?c.cloneElement(r,{"aria-colindex":n+1,coords:{col:n+1,row:t["aria-rowindex"]}}):r);return a.jsx(A,{tag:"tr",...t,children:o})},f5=x(qe)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,D1=x(Ac)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,m5=x.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150}

  &:focus-within {
    ${D1} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,x5=x(Ct)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150}
  height: 16px;
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${Te()}
`;c.forwardRef(({name:e,children:t,value:o="",onClear:r,clearLabel:n="Clear",...s},i)=>{const l=c.useRef(null),d=o.length>0,f=w=>{r(w),l.current.focus()},h=s1(i,l);return a.jsx(m5,{children:a.jsxs(Be,{name:e,children:[a.jsx(Ge,{children:a.jsx(In,{children:t})}),a.jsx(x5,{size:"S",ref:h,value:o,startAction:a.jsx(D1,{"aria-hidden":!0}),endAction:d?a.jsx(_e,{onClick:f,onMouseDown:w=>{w.preventDefault()},label:n,size:"XS",variant:"ghost",type:"button",children:a.jsx(f5,{})}):void 0,...s})]})})});const w5=x(A)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...t})=>t["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,v5=({children:e,icon:t,label:o,disabled:r=!1,onClick:n,...s})=>{const i=l=>{r||!n||n(l)};return a.jsxs(I,{inline:!0,background:r?"neutral200":"primary100",color:r?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:r?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[a.jsx(b5,{$disabled:r,variant:"pi",fontWeight:"bold",children:e}),a.jsx(w5,{tag:"button",disabled:r,"aria-disabled":r,"aria-label":o,padding:2,onClick:i,$iconAction:!!n,children:t})]})},b5=x(B)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;c.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:r,hasError:n,id:s,name:i,onChange:l,onClear:d,onCloseAutoFocus:f,onReachEnd:h,placeholder:w,required:u,size:m,startIcon:b,value:v,withTags:C,...$},p)=>{const j=c.useRef(null),[y,S]=c.useState(),[M,R]=c.useState(!1),N=_=>{l?l(_):S(_)},E=_=>()=>{const ee=Array.isArray(v)?v.filter(re=>re!==_):(y??[]).filter(re=>re!==_);l?l(ee):S(ee)},z=_=>{R(_)},O=pe(),H=`intersection-${Oe(O)}`;rt(j,_=>{h&&h(_)},{selectorToWatch:`#${H}`,skipWhen:!M});const k=typeof v<"u"&&v!==null?v:y,U=_=>_&&typeof _=="object"&&_.value?a.jsx(v5,{tabIndex:-1,disabled:r,icon:a.jsx(qe,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:E(_.value),children:_.textValue},_.value):null,{error:K,...q}=ge("MultiSelect"),J=!!K||n,Y=q.id??s,ne=q.name??i,Z=q.required??u;let ae;return K?ae=`${Y}-error`:q.hint&&(ae=`${Y}-hint`),a.jsxs(p1,{onOpenChange:z,disabled:r,required:Z,onValueChange:N,value:k,...$,multi:!0,children:[a.jsx($1,{ref:p,id:Y,name:ne,"aria-label":$["aria-label"],"aria-describedby":ae??$["aria-describedby"],startIcon:b,hasError:J,disabled:r,clearLabel:t,onClear:k?.length?d:void 0,withTags:!!(C&&(k?.length??!1)),size:m,children:a.jsx(C1,{placeholder:w,textColor:k?.length?"neutral800":"neutral600",children:k?.length?C?U:o?o(k):void 0:void 0})}),a.jsx(j1,{children:a.jsx(y1,{position:"popper",sideOffset:4,onCloseAutoFocus:f,children:a.jsxs(S1,{ref:j,children:[e,a.jsx(A,{id:H,width:"100%",height:"1px"})]})})})]})});const p5=c.forwardRef(({value:e,children:t,startIcon:o,...r},n)=>a.jsxs(An,{ref:n,value:e.toString(),...r,children:[o&&a.jsx(A,{tag:"span","aria-hidden":!0,children:o}),a.jsx(R1,{children:({isSelected:s,isIntermediate:i})=>a.jsx(Mn,{checked:i?"indeterminate":s})}),a.jsx(B,{children:a.jsx(M1,{children:t})})]}));c.forwardRef(({children:e,label:t,startIcon:o,values:r=[],...n},s)=>a.jsxs(ld,{ref:s,children:[a.jsxs(An,{value:r,...n,children:[o&&a.jsx(A,{tag:"span","aria-hidden":!0,children:o}),a.jsx(R1,{children:({isSelected:i,isIntermediate:l})=>a.jsx(Mn,{checked:l?"indeterminate":i})}),a.jsx(B,{children:t})]}),e]}));x(p5)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const $5="23.2rem";c.forwardRef(({...e},t)=>a.jsx(C5,{ref:t,...e,tag:"nav"}));const C5=x(A)`
  width: ${$5};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;x(Nd)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;he(({active:e,children:t,icon:o=null,withBullet:r=!1,isSubSectionChild:n=!1,...s},i)=>a.jsxs(j5,{background:"neutral100",paddingLeft:n?9:7,paddingBottom:2,paddingTop:2,ref:i,...s,children:[a.jsxs(I,{children:[o?a.jsx(y5,{children:o}):a.jsx(Gt,{$active:e}),a.jsx(B,{paddingLeft:2,children:t})]}),r&&a.jsx(I,{paddingRight:4,children:a.jsx(Gt,{$active:!0})})]}));const Gt=x.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,j5=x(at)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>L`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${Gt} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,y5=x.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;x.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;x(A)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;c.forwardRef(({visibleLabels:e,onLabel:t="On",offLabel:o="Off",onCheckedChange:r,checked:n,defaultChecked:s,disabled:i,...l},d)=>{const[f,h]=Ce({prop:n,defaultProp:s}),w=u=>{h(u)};return a.jsxs(I,{gap:3,children:[a.jsx(S5,{ref:d,onCheckedChange:Ee(r,w),checked:f,disabled:i,...l,children:a.jsx(R5,{})}),e?a.jsx(M5,{"aria-hidden":!0,"data-disabled":i,"data-state":f?"checked":"unchecked",children:f?t:o}):null]})});const S5=x(sa)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,R5=x(ia)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,M5=x(B)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[I5,Vn]=ot("Tabs");c.forwardRef(({disabled:e=!1,variant:t="regular",hasError:o,...r},n)=>a.jsx(I5,{disabled:e,hasError:o,variant:t,children:a.jsx(A5,{ref:n,...r})}));const A5=x(ca)`
  width: 100%;
  position: relative;
`;c.forwardRef((e,t)=>{const{variant:o}=Vn("List");return a.jsx(T5,{ref:t,...e,$variant:o})});const T5=x(la)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;c.forwardRef(({children:e,disabled:t,...o},r)=>{const{disabled:n,variant:s,hasError:i}=Vn("Trigger"),l=n===!0||n===o.value||t,d=i===o.value;return a.jsxs(V5,{ref:r,...o,$hasError:d,$variant:s,disabled:l,children:[a.jsx(k1,{fontWeight:"bold",variant:s==="simple"?"sigma":void 0,children:e}),s==="simple"?a.jsx(B1,{}):null]})});const B1=x.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,k1=x(B)``,V5=x(da)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?L`
        padding-block: ${t=>t.theme.spaces[4]};
        padding-inline: ${t=>t.theme.spaces[4]};

        & > ${k1} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${B1} {
            opacity: 1;
          }
        }
      `:L`
        padding-block: ${t=>t.theme.spaces[3]};
        padding-inline: ${t=>t.theme.spaces[3]};
        flex: 1;
        background-color: ${t=>t.theme.colors.neutral100};
        border-bottom: solid 1px ${t=>t.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${t=>t.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${t=>t.theme.spaces[4]};
          padding-inline: ${t=>t.theme.spaces[4]};
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};
          border-top-right-radius: ${t=>t.theme.borderRadius};
          border-top-left-radius: ${t=>t.theme.borderRadius};
          background-color: ${t=>t.theme.colors.neutral0};
          border-bottom: solid 1px ${t=>t.theme.colors.neutral0};
          box-shadow: ${e.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral400};
  }
`;c.forwardRef((e,t)=>{const{variant:o}=Vn("Content");return a.jsx(L5,{$variant:o,ref:t,...e})});const L5=x(ha)`
  ${e=>e.$variant==="simple"?L``:L`
        position: relative;
        z-index: 1;
        background-color: ${t=>t.theme.colors.neutral0};
      `}
`,E5=x(A)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,H5=x(l5)`
  width: 100%;
  white-space: nowrap;
`,D5=x(A)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,B5=x(A)`
  overflow-x: auto;
`;c.forwardRef(({footer:e,...t},o)=>{const r=c.useRef(null),[n,s]=c.useState(),i=l=>{const d=l.target.scrollWidth-l.target.clientWidth;if(l.target.scrollLeft===0){s("right");return}if(l.target.scrollLeft===d){s("left");return}l.target.scrollLeft>0&&s("both")};return c.useEffect(()=>{r.current.scrollWidth>r.current.clientWidth&&s("right")},[]),a.jsxs(E5,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[a.jsx(D5,{$overflowing:n,position:"relative",children:a.jsx(B5,{ref:r,onScroll:i,paddingLeft:6,paddingRight:6,children:a.jsx(H5,{ref:o,...t})})}),e]})});x(u5)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;x(h5)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;x(g5)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`;const N1=x(H1)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;c.forwardRef(({children:e,action:t,...o},r)=>a.jsx(N1,{color:"neutral600",as:d5,ref:r,...o,children:a.jsxs(I,{children:[e,t]})}));c.forwardRef(({children:e,...t},o)=>a.jsx(N1,{color:"neutral800",ref:o,...t,children:e}));x(A)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;x(A)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;he(({children:e,startIcon:t,endIcon:o,disabled:r=!1,loading:n=!1,...s},i)=>{const l=r||n;return a.jsxs(z5,{ref:i,disabled:l,"aria-disabled":l,tag:"button",type:"button",gap:2,...s,children:[n?a.jsx(N5,{"aria-hidden":!0,children:a.jsx(Q0,{})}):t,a.jsx(B,{variant:"pi",children:e}),o]})});const k5=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,N5=x.span`
  display: flex;
  animation: ${k5} 2s infinite linear;
  will-change: transform;
`,z5=x(I)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${bt}
`,ht=c.forwardRef((e,t)=>a.jsx(Ct,{ref:t,...e}));ht.displayName="TextInput";c.forwardRef(({disabled:e,hasError:t,id:o,name:r,required:n,...s},i)=>{const{error:l,...d}=ge("Textarea"),f=!!l||t,h=d.id??o,w=d.name??r,u=d.required||n;let m;return l?m=`${h}-error`:d.hint&&(m=`${h}-hint`),a.jsx(O5,{borderColor:f?"danger600":"neutral200",$hasError:f,hasRadius:!0,children:a.jsx(F5,{"aria-invalid":f,"aria-required":u,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:i,lineHeight:4,padding:4,width:"100%",height:"100%",id:h,name:w,"aria-describedby":m,...s})})});const O5=x(A)`
  height: 10.5rem;
  ${Te()}
`,F5=x(A)`
  border: none;
  resize: none;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;c.forwardRef(({offLabel:e,onLabel:t,disabled:o,hasError:r,required:n,id:s,name:i,checked:l,onChange:d,...f},h)=>{const[w=!1,u]=Ce({prop:l}),m=w!==null&&!w,{error:b,...v}=ge("Toggle"),C=!!b||r,$=v.id??s,p=v.name??i,j=v.required||n;let y;return b?y=`${$}-error`:v.hint&&(y=`${$}-hint`),a.jsxs(_5,{position:"relative",hasRadius:!0,padding:1,background:o?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:o?"not-allowed":"pointer",$hasError:C,children:[a.jsx(Jn,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&m?"neutral200":m?"neutral0":"transparent",borderColor:o&&m?"neutral300":m?"neutral200":o?"neutral150":"neutral100",children:a.jsx(B,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":m?"danger700":"neutral600",children:e})}),a.jsx(Jn,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&w?"neutral200":w?"neutral0":"transparent",borderColor:o&&w?"neutral300":w?"neutral200":o?"neutral150":"neutral100",children:a.jsx(B,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":w?"primary600":"neutral600",children:t})}),a.jsx(W5,{...f,id:$,name:p,ref:h,onChange:S=>{u(S.currentTarget.checked),d?.(S)},type:"checkbox","aria-required":j,disabled:o,"aria-disabled":o,checked:!!w,"aria-describedby":y})]})});const _5=x(I)`
  ${Te()}
`,Jn=x(I)`
  padding-block: 0.6rem;
`,W5=x.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,U5=he((e,t)=>{const{gap:o=0,gridCols:r=12,...n}=e;return a.jsx(q5,{ref:t,$gap:o,$gridCols:r,...n})}),q5=x(A)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:t})=>vt({gap:t},e)}
`,G5=he(({col:e,s:t,xs:o,m:r,...n},s)=>a.jsx(K5,{ref:s,$col:e,$s:t,$xs:o,$m:r,...n})),K5=x(I)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:t})=>e??t??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:t,$xs:o})=>e??t??o??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:t,$s:o,$xs:r})=>e??t??o??r??12};
  }
`,Le=Object.freeze(Object.defineProperty({__proto__:null,Item:G5,Root:U5},Symbol.toStringTag,{value:"Module"})),Y5=(e,t)=>!e||!t?{}:{[e]:t[e]},Z5=e=>(e?.inner||[]).reduce((t,o)=>(o.path&&(t[o.path.split("[").join(".").split("]").join("")]={id:o.message,defaultMessage:o.message,values:Y5(o?.type,o?.params)}),t),{}),Pn=fa().shape({email:ma().email(Dn.email.id).required(Dn.required.id)}),X5=x.a`
  color: ${({theme:e})=>e.colors.primary600};
`,eh=()=>a.jsx(lt.Protect,{permissions:xa.settings,children:a.jsx(Q5,{})}),Q5=()=>{const{toggleNotification:e}=wa(),{formatMessage:t}=va(),{get:o,post:r}=ba(),[n,s]=c.useState(""),[i,l]=c.useState(!1),[d,f]=c.useState({}),{data:h,isLoading:w}=pa(["email","settings"],async()=>{const v=await o("/email/settings"),{data:{config:C}}=v;return C}),u=$a(async v=>{await r("/email/test",v)},{onError(){e({type:"danger",message:t({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:n})})},onSuccess(){e({type:"success",message:t({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:n})})},retry:!1});c.useEffect(()=>{Pn.validate({email:n},{abortEarly:!1}).then(()=>l(!0)).catch(()=>l(!1))},[n]);const m=v=>{s(()=>v.target.value)},b=async v=>{v.preventDefault();try{await Pn.validate({email:n},{abortEarly:!1})}catch(C){C instanceof Ca&&f(Z5(C))}u.mutate({to:n})};return w?a.jsx(lt.Loading,{}):a.jsxs(lt.Main,{labelledBy:"title","aria-busy":w||u.isLoading,children:[a.jsx(lt.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})})}),a.jsx(Bn.Header,{id:"title",title:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:t({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),a.jsx(Bn.Content,{children:h&&a.jsx("form",{onSubmit:b,children:a.jsxs(I,{direction:"column",alignItems:"stretch",gap:7,children:[a.jsx(A,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:a.jsxs(I,{direction:"column",alignItems:"stretch",gap:4,children:[a.jsxs(I,{direction:"column",alignItems:"stretch",gap:1,children:[a.jsx(B,{variant:"delta",tag:"h2",children:t({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),a.jsx(B,{children:t({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:a.jsx(X5,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:t({id:"email.link",defaultMessage:"Link"})})})})]}),a.jsxs(Le.Root,{gap:5,children:[a.jsx(Le.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:a.jsxs(Ie.Root,{name:"shipper-email",children:[a.jsx(Ie.Label,{children:t({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"})}),a.jsx(ht,{placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:h.settings.defaultFrom})]})}),a.jsx(Le.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:a.jsxs(Ie.Root,{name:"response-email",children:[a.jsx(Ie.Label,{children:t({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"})}),a.jsx(ht,{placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:h.settings.defaultReplyTo})]})}),a.jsx(Le.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:a.jsxs(Ie.Root,{name:"email-provider",children:[a.jsx(Ie.Label,{children:t({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"})}),a.jsx(Ut,{disabled:!0,value:h.provider,children:a.jsx(qt,{value:h.provider,children:h.provider})})]})})]})]})}),a.jsxs(I,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[a.jsx(B,{variant:"delta",tag:"h2",children:t({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),a.jsxs(Le.Root,{gap:5,children:[a.jsx(Le.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:a.jsxs(Ie.Root,{name:"test-address",error:d.email?.id&&t({id:`email.${d.email?.id}`,defaultMessage:"This is not a valid email"}),children:[a.jsx(Ie.Label,{children:t({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"})}),a.jsx(ht,{onChange:m,value:n,placeholder:t({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})]})}),a.jsx(Le.Item,{col:7,s:12,direction:"column",alignItems:"start",children:a.jsx(ft,{loading:u.isLoading,disabled:!i,type:"submit",startIcon:a.jsx(Ni,{}),children:t({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})};export{eh as ProtectedSettingsPage};
