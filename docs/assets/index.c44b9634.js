import{d as A,H as r,o as _,c as g,b as a,w as l,a as s,aa as i,g as c,aj as b,ak as y,B as D,al as B,ar as v}from"./index.cd88a099.js";import{t as x}from"./config.5b43717a.js";import{t as T}from"./config.09612dd9.js";import"./index.8e9b891a.js";var k={form:{operates:{header:[{name:"\u9884\u89C8\u6570\u636E",others:{type:"primary"}}],footer:[{name:"\u68C0\u6D4B\u6570\u636E",others:{type:"primary",class:"warning"}},{name:"\u6682\u5B58\u6570\u636E",others:{type:"primary",class:"success"}},{name:"\u5220\u9664\u6570\u636E",others:{type:"primary",danger:!0}}]},data:{}},sections:[{title:"\u533A\u5757\u4E00",items:[{type:"text",label:"\u6587\u672C",name:"text",others:{}},{type:"switch",label:"\u5F00\u5173",name:"switch",others:{}},{type:"input",label:"\u59D3\u540D",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}],info:"\u8FD9\u662F\u4E00\u6BB5\u81EA\u5B9A\u4E49\u6587\u6848",tooltip:"\u5F53\u67D0\u4E2A\u9875\u9762<br />\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6<br />\u5F53\u67D0\u4E2A\u9875\u9762\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6",others:{}},{type:"number",label:"\u6570\u5B57",name:"number",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u5B57"}],info:"\u8FD9\u662F\u4E00\u6BB5\u81EA\u5B9A\u4E49\u6587\u6848",tooltip:"\u5F53\u67D0\u4E2A\u9875\u9762<br />\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6<br />\u5F53\u67D0\u4E2A\u9875\u9762\u9700\u8981\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6",others:{}},{type:"select",label:"\u57CE\u5E02",name:"city",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u57CE\u5E02"}],options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],others:{a:111}},{type:"cascader",label:"\u7EA7\u8054\u83DC\u5355",name:"cascader",options:[{value:"\u6D59\u6C5F\u7701",label:"\u6D59\u6C5F\u7701",children:[{value:"\u676D\u5DDE\u5E02",label:"\u676D\u5DDE\u5E02",children:[{value:"\u897F\u6E56\u533A",label:"\u897F\u6E56\u533A"}]}]},{value:"\u6C5F\u82CF\u7701",label:"\u6C5F\u82CF\u7701",children:[{value:"\u5357\u4EAC\u5E02",label:"\u5357\u4EAC\u5E02",children:[{value:"\u9F13\u697C\u533A",label:"\u9F13\u697C\u533A"}]}]}],others:{}},{type:"textarea",label:"\u591A\u884C\u6587\u672C",name:"textarea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u591A\u884C\u6587\u672C"}],others:{}},{type:"upload",label:"\u6587\u4EF6\u4E0A\u4F20",name:"upload",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u6587\u4EF6"}],others:{maxCount:2}},{type:"slot",label:"\u53EF\u7F16\u8F91\u8868\u683C",name:"tableEdit"},{type:"slot",label:"\u53EF\u9009\u62E9\u8868\u683C",name:"tableChoose"}]},{title:"\u533A\u5757\u4E8C",items:[{type:"radio",label:"\u6027\u522B",name:"radio",options:[{label:"\u7537",value:"1"},{label:"\u5973",value:"2"},{label:"\u672A\u77E5",value:"0"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]},{type:"checkbox",label:"\u57CE\u5E02",name:"checkbox",options:[{label:"\u5317\u4EAC",value:"beijing"},{label:"\u4E0A\u6D77",value:"shanghai"},{label:"\u5E7F\u5DDE",value:"guangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"}]},{type:"time",label:"\u65F6\u95F4",name:"time",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{picker:"year"}},{type:"daterange",label:"\u6D3B\u52A8\u65F6\u95F4",name:"daterange",others:{}},{type:"daterange",label:"\u6D3B\u52A8\u65F6\u95F4\u8303\u56F4",name:"rangeTime",others:{showTime:!0}}]}]};const w={class:"bg-ffffff p-16"},q={class:"m-b8"},N={class:"m-b8"},S={class:"bg-ffffff"},V=c("\u5355\u9009\u6570\u636E"),j=c("\u591A\u9009\u6570\u636E"),z=s("p",{class:"m-tb16"},"\u5DF2\u9009\u6570\u636E\uFF1A",-1),L=A({setup(H){const p=r(k);p.value.form.data={text:"\u5C55\u793A\u6587\u672C\u4FE1\u606F\uFF0C\u652F\u6301 <b style='color: #ff4d4f;'>HTML</b>",slot:1,switch:!1,upload:[{name:"xx.png",status:"done",response:{status:!0}}]};const m=r(x),u=r(T),E=e=>{b.success({message:"\u64CD\u4F5C\u63D0\u793A",description:JSON.stringify(e)})},d=e=>{u.value=e,b.success({message:"\u64CD\u4F5C\u63D0\u793A",description:JSON.stringify(e.table.selectedRows)})};return(e,t)=>{const C=y,F=D,f=B,h=v;return _(),g("div",w,[a(h,{config:p.value},{tableEdit:l(({data:o,item:n})=>[s("p",q,"\u6211\u662F\u81EA\u5B9A\u4E49\u63D2\u69FD - \u7F16\u8F91\u8868\u683C - "+i(o[n.name]),1),a(C,{config:m.value,"onUpdate:table:edit":E},null,8,["config"])]),tableChoose:l(({data:o,item:n})=>[s("p",N,"\u6211\u662F\u81EA\u5B9A\u4E49\u63D2\u69FD - \u9009\u62E9\u8868\u683C - "+i(o[n.name]),1),s("div",S,[a(F,{type:"primary",onClick:t[0]||(t[0]=()=>{u.value.table.selectedType="radio",u.value.visible=!0})},{default:l(()=>[V]),_:1}),a(F,{class:"success m-l8",type:"primary",onClick:t[1]||(t[1]=()=>{u.value.table.selectedType="checkbox",u.value.visible=!0})},{default:l(()=>[j]),_:1}),z,c(" "+i(u.value.table.selectedRows),1)]),a(f,{config:u.value,"onUpdate:table:choose":d},null,8,["config"])]),_:1},8,["config"])])}}});export{L as default};
