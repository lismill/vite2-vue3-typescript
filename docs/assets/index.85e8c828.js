import{X,d as va,Y as ba,P as y,n as ya,Z as ga,q as c,b as a,V as g,U as s,$ as _a,a0 as pa,a1 as W,a2 as ha,a3 as Ca}from"./index.cd88a099.js";var xa=X.TabPane,Ta=function(){return{prefixCls:String,title:y.any,extra:y.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:y.any,tabList:{type:Array},tabBarExtraContent:y.any,activeTabKey:String,defaultActiveTabKey:String,cover:y.any,onTabChange:{type:Function}}},Sa=va({name:"ACard",mixins:[ba],props:Ta(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,Z){var r=Z.slots,h=ya("card",e),H=h.prefixCls,J=h.direction,E=h.size,Q=function(o){var i=o.map(function(d,f){return W(d)&&!ha(d)||!W(d)?a("li",{style:{width:"".concat(100/o.length,"%")},key:"action-".concat(f)},[a("span",null,[d])]):null});return i},aa=function(o){var i;(i=e.onTabChange)===null||i===void 0||i.call(e,o)},ta=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i;return o.forEach(function(d){d&&Ca(d.type)&&d.type.__ANT_CARD_GRID&&(i=!0)}),i};return function(){var l,o,i,d,f,C,x,T,$=e.headStyle,ea=$===void 0?{}:$,K=e.bodyStyle,S=K===void 0?{}:K,k=e.loading,j=e.bordered,na=j===void 0?!0:j,L=e.type,v=e.tabList,ra=e.hoverable,z=e.activeTabKey,la=e.defaultActiveTabKey,D=e.tabBarExtraContent,G=D===void 0?(i=r.tabBarExtraContent)===null||i===void 0?void 0:i.call(r):D,I=e.title,m=I===void 0?(d=r.title)===null||d===void 0?void 0:d.call(r):I,N=e.extra,B=N===void 0?(f=r.extra)===null||f===void 0?void 0:f.call(r):N,O=e.actions,A=O===void 0?(C=r.actions)===null||C===void 0?void 0:C.call(r):O,R=e.cover,V=R===void 0?(x=r.cover)===null||x===void 0?void 0:x.call(r):R,_=ga((T=r.default)===null||T===void 0?void 0:T.call(r)),t=H.value,oa=(l={},c(l,"".concat(t),!0),c(l,"".concat(t,"-loading"),k),c(l,"".concat(t,"-bordered"),na),c(l,"".concat(t,"-hoverable"),!!ra),c(l,"".concat(t,"-contain-grid"),ta(_)),c(l,"".concat(t,"-contain-tabs"),v&&v.length),c(l,"".concat(t,"-").concat(E.value),E.value),c(l,"".concat(t,"-type-").concat(L),!!L),c(l,"".concat(t,"-rtl"),J.value==="rtl"),l),ia=S.padding===0||S.padding==="0px"?{padding:"24px"}:void 0,u=a("div",{class:"".concat(t,"-loading-block")},null),da=a("div",{class:"".concat(t,"-loading-content"),style:ia},[a(g,{gutter:8},{default:function(){return[a(s,{span:22},{default:function(){return[u]}})]}}),a(g,{gutter:8},{default:function(){return[a(s,{span:8},{default:function(){return[u]}}),a(s,{span:15},{default:function(){return[u]}})]}}),a(g,{gutter:8},{default:function(){return[a(s,{span:6},{default:function(){return[u]}}),a(s,{span:18},{default:function(){return[u]}})]}}),a(g,{gutter:8},{default:function(){return[a(s,{span:13},{default:function(){return[u]}}),a(s,{span:9},{default:function(){return[u]}})]}}),a(g,{gutter:8},{default:function(){return[a(s,{span:4},{default:function(){return[u]}}),a(s,{span:3},{default:function(){return[u]}}),a(s,{span:16},{default:function(){return[u]}})]}})]),w=z!==void 0,ca=(o={size:"large"},c(o,w?"activeKey":"defaultActiveKey",w?z:la),c(o,"onChange",aa),c(o,"class","".concat(t,"-head-tabs")),o),q,F=v&&v.length?a(X,ca,{default:function(){return[v.map(function(n){var M=n.tab,p=n.slots,U=p==null?void 0:p.tab;_a(!p,"Card","tabList slots is deprecated, Please use `customTab` instead.");var P=M!==void 0?M:r[U]?r[U](n):null;return P=pa(r,"customTab",n,function(){return[P]}),a(xa,{tab:P,key:n.key,disabled:n.disabled},null)})]},rightExtra:G?function(){return G}:null}):null;(m||B||F)&&(q=a("div",{class:"".concat(t,"-head"),style:ea},[a("div",{class:"".concat(t,"-head-wrapper")},[m&&a("div",{class:"".concat(t,"-head-title")},[m]),B&&a("div",{class:"".concat(t,"-extra")},[B])]),F]));var ua=V?a("div",{class:"".concat(t,"-cover")},[V]):null,sa=a("div",{class:"".concat(t,"-body"),style:S},[k?da:_]),fa=A&&A.length?a("ul",{class:"".concat(t,"-actions")},[Q(A)]):null;return a("div",{class:oa,ref:"cardContainerRef"},[q,ua,_&&_.length?sa:null,fa])}}}),Ba=Sa;export{Ba as C};
