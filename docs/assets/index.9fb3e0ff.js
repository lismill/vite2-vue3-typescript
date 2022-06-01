var x=Object.defineProperty,T=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(a,u,e)=>u in a?x(a,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[u]=e,r=(a,u)=>{for(var e in u||(u={}))w.call(u,e)&&f(a,e,u[e]);if(C)for(var e of C(u))q.call(u,e)&&f(a,e,u[e]);return a},i=(a,u)=>T(a,k(u));import{d as N,H as b,o as h,c as A,b as o,w as c,a as F,a8 as p,g as m,aI as V,ay as _,az as z,B as J,aE as O,aJ as S}from"./index.73fa4593.js";import{t as H}from"./config.35a420d4.js";import{t as M}from"./config.82fccb6f.js";import"./index.c7f10f0d.js";var R={form:{operates:{header:[{name:"\u9884\u89C8\u6570\u636E",others:{type:"primary"}}],footer:[{name:"\u68C0\u6D4B\u6570\u636E",others:{type:"primary",class:"warning"}},{name:"\u6682\u5B58\u6570\u636E",others:{type:"primary",class:"success"}},{name:"\u5220\u9664\u6570\u636E",others:{type:"primary",danger:!0}}]},data:{}},sections:[{title:"\u533A\u5757\u4E00",items:[{type:"text",label:"\u6587\u672C",name:"text",others:{}},{type:"switch",label:"\u5F00\u5173",name:"switch",others:{}},{type:"input",label:"\u59D3\u540D",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}],info:"\u8FD9\u662F\u4E00\u6BB5\u81EA\u5B9A\u4E49\u6587\u6848",tooltip:"\u5F53\u67D0\u4E2A\u9875\u9762<br />\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6<br />\u5F53\u67D0\u4E2A\u9875\u9762\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6",others:{}},{type:"number",label:"\u6570\u5B57",name:"number",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u5B57"}],info:"\u8FD9\u662F\u4E00\u6BB5\u81EA\u5B9A\u4E49\u6587\u6848",tooltip:"\u5F53\u67D0\u4E2A\u9875\u9762<br />\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6<br />\u5F53\u67D0\u4E2A\u9875\u9762\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6",others:{}},{type:"select",label:"\u57CE\u5E02",name:"city",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u57CE\u5E02"}],options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],others:{a:111}},{type:"cascader",label:"\u7EA7\u8054\u83DC\u5355",name:"cascader",options:[{value:"\u6D59\u6C5F\u7701",label:"\u6D59\u6C5F\u7701",children:[{value:"\u676D\u5DDE\u5E02",label:"\u676D\u5DDE\u5E02",children:[{value:"\u897F\u6E56\u533A",label:"\u897F\u6E56\u533A"}]}]},{value:"\u6C5F\u82CF\u7701",label:"\u6C5F\u82CF\u7701",children:[{value:"\u5357\u4EAC\u5E02",label:"\u5357\u4EAC\u5E02",children:[{value:"\u9F13\u697C\u533A",label:"\u9F13\u697C\u533A"}]}]}],others:{}},{type:"textarea",label:"\u591A\u884C\u6587\u672C",name:"textarea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u591A\u884C\u6587\u672C"}],others:{}},{type:"upload",label:"\u6587\u4EF6\u4E0A\u4F20",name:"upload",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u6587\u4EF6"}],others:{maxCount:2}},{type:"slot",label:"\u53EF\u7F16\u8F91\u8868\u683C",name:"tableEdit"},{type:"slot",label:"\u53EF\u9009\u62E9\u8868\u683C",name:"tableChoose"}]},{title:"\u533A\u5757\u4E8C",items:[{type:"radio",label:"\u6027\u522B",name:"radio",options:[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"},{label:"\u672A\u77E5",value:"0"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{type:"checkbox",label:"\u57CE\u5E02",name:"checkbox",options:[{label:"\u5317\u4EAC",value:"beijing"},{label:"\u4E0A\u6D77",value:"shanghai"},{label:"\u5E7F\u5DDE",value:"guangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"}]},{type:"time",label:"\u65F6\u95F4",name:"time",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{picker:"year"}},{type:"daterange",label:"\u6D3B\u52A8\u65F6\u95F4",name:"daterange",others:{}},{type:"daterange",label:"\u6D3B\u52A8\u65F6\u95F4\u8303\u56F4",name:"rangeTime",others:{showTime:!0}},{type:"editor",label:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",name:"editor",others:{}}]}]};const U={class:"bg-ffffff p-16"},j={class:"m-b8"},I={class:"m-b8"},L={key:0,class:"bg-ffffff"},$=m("\u5355\u9009\u6570\u636E"),G=m("\u591A\u9009\u6570\u636E"),K=F("p",{class:"m-tb16"},"\u5DF2\u9009\u6570\u636E\uFF1A",-1),Z=N({setup(a){const u=b(R);u.value.form.data={text:"\u5C55\u793A\u6587\u672C\u4FE1\u606F\uFF0C\u652F\u6301 <b style='color: #ff4d4f;'>HTML</b>",slot:1,switch:!1,upload:[{name:"xx.png",status:"done",response:{status:!0}}],tableChoose:[{a:1}]};const e=b(H),t=b(M);Math.random()*2>1&&(u.value=i(r({},u.value),{form:i(r({},u.value.form),{disabled:!0})}));const y=l=>{_.success({message:"\u64CD\u4F5C\u63D0\u793A",description:JSON.stringify(l)})},g=l=>{t.value=l,_.success({message:"\u64CD\u4F5C\u63D0\u793A",description:JSON.stringify(l.table.selectedRows)})};return(l,n)=>{const D=z,E=J,v=O,B=S;return h(),A("div",U,[o(B,{config:u.value},{tableEdit:c(({form:s,item:d})=>[F("p",j,"\u6211\u662F\u81EA\u5B9A\u4E49\u63D2\u69FD - \u7F16\u8F91\u8868\u683C - "+p(s.data[d.name]),1),o(D,{config:i(r({},e.value),{readOnly:s.disabled}),"onUpdate:table:edit":y},null,8,["config"])]),tableChoose:c(({form:s,item:d})=>[F("p",I,"\u6211\u662F\u81EA\u5B9A\u4E49\u63D2\u69FD - \u9009\u62E9\u8868\u683C - "+p(s.data[d.name]),1),s.disabled?V("",!0):(h(),A("div",L,[o(E,{type:"primary",onClick:n[0]||(n[0]=()=>{t.value.table.selectedType="radio",t.value.visible=!0})},{default:c(()=>[$]),_:1}),o(E,{class:"success m-l8",type:"primary",onClick:n[1]||(n[1]=()=>{t.value.table.selectedType="checkbox",t.value.visible=!0})},{default:c(()=>[G]),_:1}),K,m(" "+p(t.value.table.selectedRows),1)])),o(v,{config:t.value,"onUpdate:table:choose":g},null,8,["config"])]),_:1},8,["config"])])}}});export{Z as default};