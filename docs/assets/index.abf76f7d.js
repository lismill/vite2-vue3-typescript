import{w as M,q as O,P as I,I as P,y as U,ax as q,v as c,u as h,$ as L,j as Q,p as z,f as m,J as R,h as n,M as T,D as W,o as H,c as K,Q as j,N as S,ay as X,az as Y,k,ap as Z,aA as ee}from"./index.96714328.js";import{t as ae}from"./config.7eed5305.js";var te={small:8,middle:16,large:24},ne=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:I.oneOf(P("horizontal","vertical")).def("horizontal"),align:I.oneOf(P("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function le(s){return typeof s=="string"?te[s]:s||0}var re=O({name:"ASpace",props:ne(),slots:["split"],setup:function(a,g){var o=g.slots,l=U("space",a),r=l.prefixCls,y=l.space,v=l.direction,p=q(),i=c(function(){var e,t,u;return(u=(e=a.size)!==null&&e!==void 0?e:(t=y.value)===null||t===void 0?void 0:t.size)!==null&&u!==void 0?u:"small"}),b=h(),d=h();L(i,function(){var e=(Array.isArray(i.value)?i.value:[i.value,i.value]).map(function(u){return le(u)}),t=W(e,2);b.value=t[0],d.value=t[1]},{immediate:!0});var B=c(function(){return a.align===void 0&&a.direction==="horizontal"?"center":a.align}),D=c(function(){var e;return Q(r.value,"".concat(r.value,"-").concat(a.direction),(e={},z(e,"".concat(r.value,"-rtl"),v.value==="rtl"),z(e,"".concat(r.value,"-align-").concat(B.value),B.value),e))}),G=c(function(){return v.value==="rtl"?"marginLeft":"marginRight"}),V=c(function(){var e={};return p.value&&(e.columnGap="".concat(b.value,"px"),e.rowGap="".concat(d.value,"px")),m(m({},e),a.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-d.value,"px")})});return function(){var e,t,u=a.wrap,w=a.direction,$=w===void 0?"horizontal":w,A=R((e=o.default)===null||e===void 0?void 0:e.call(o)),N=A.length;if(N===0)return null;var f=(t=o.split)===null||t===void 0?void 0:t.call(o),E="".concat(r.value,"-item"),F=b.value,x=N-1;return n("div",{class:D.value,style:V.value},[A.map(function(J,C){var _={};return p.value||($==="vertical"?C<x&&(_={marginBottom:"".concat(F/(f?2:1),"px")}):_=m(m({},C<x&&z({},G.value,"".concat(F/(f?2:1),"px"))),u&&{paddingBottom:"".concat(d.value,"px")})),n(T,null,[n("div",{class:E,style:_},[J]),C<x&&f&&n("span",{class:"".concat(E,"-split"),style:_},[f])])})])}}}),oe=M(re);const ie={class:"bg-ffffff p-16 m-b16"},ue=k("\u663E\u793A/\u9690\u85CF\u8FB9\u6846"),se=k("\u786E\u5B9A"),ce={class:"bg-ffffff p-16"},ve=O({setup(s){const a=h(ae),g=o=>{X.success({message:"\u64CD\u4F5C\u63D0\u793A",description:`${JSON.stringify(o)}`})};return(o,l)=>{const r=Z,y=ee,v=oe,p=Y;return H(),K(T,null,[j("div",ie,[n(v,null,{default:S(()=>[n(r,{onClick:l[0]||(l[0]=()=>a.value.border=!a.value.border)},{default:S(()=>[ue]),_:1}),n(y,{value:a.value.borderColor,"onUpdate:value":l[1]||(l[1]=i=>a.value.borderColor=i),placeholder:"\u8BBE\u7F6E\u8FB9\u6846\u989C\u8272"},null,8,["value"]),n(r,{type:"primary"},{default:S(()=>[se]),_:1})]),_:1})]),j("div",ce,[n(p,{config:a.value,"onUpdate:table:edit":g},null,8,["config"])])],64)}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));export{oe as _,ve as a,fe as i};