import{d as c,o as l,a4 as d,a5 as o,af as p,ak as u,al as m,a7 as a}from"./index.8545e76b.js";import{g as F}from"./index.b8139e13.js";var E={request:F,search:{data:{status:"1"},forms:[{type:"input",label:"\u59D3\u540D\u59D3\u540D",name:"name",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"date",label:"\u65E5\u671F",name:"date",others:{}},{type:"select",label:"\u57CE\u5E02",name:"city",options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],others:{a:111}}]},toolbar:{statusProp:"status",status:[{name:"\u672A\u5F00\u59CB",value:"1"},{name:"\u8FDB\u884C\u4E2D",value:"2"},{name:"\u5DF2\u5B8C\u6210",value:"3",total:999}],operates:[{name:"\u65B0\u589E\u6570\u636E",others:{type:"primary"}},{name:"\u5BFC\u51FA\u6570\u636E",others:{type:"info"}},{name:"\u67E5\u770B\u914D\u7F6E",others:{}}]},table:{data:[],selectedRows:[],columns:[{title:"#",width:55,align:"center",fixed:"left"},{type:"slot",title:"\u56FE\u7247",dataIndex:"image",width:190},{title:"\u59D3\u540D",width:460,dataIndex:"name",ellipsis:!0},{title:"\u5E74\u9F84",width:300,dataIndex:"age"},{title:"\u65E5\u671F",dataIndex:"date",width:160},{title:"\u57CE\u5E02",dataIndex:"custom",width:300},{type:"slot",title:"\u64CD\u4F5C",dataIndex:"operate",width:200,align:"center",fixed:"right"}],others:{scroll:{x:"100%"}}},footer:{fixed:!0,checked:!1,operates:[{name:"\u6279\u91CF\u5F00\u59CB",others:{type:"primary"}},{name:"\u6279\u91CF\u5173\u95ED",others:{type:"primary",danger:!0}}],pagination:{total:0,currentPage:1,pageSize:10,pageSizes:[10,20,30,50,100]}}};const h=["onClick"],g=["onClick"],C=a("img",{style:{width:"32px",height:"32px","border-radius":"50%"},src:"https://i.postimg.cc/Lsw8GQv5/icon.jpg"},null,-1),B=a("span",{class:"m-l6"},"Lean",-1),k=c({setup(b){const t=(e,s)=>{switch(console.log("data:::",s),e.name){case"\u7F16\u8F91":u.success({message:`${e.name}`,description:"\u5904\u7406\u7F16\u8F91\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u5220\u9664":u.success({message:`${e.name}`,description:"\u5904\u7406\u5220\u9664\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u65B0\u589E\u6570\u636E":u.success({message:`${e.name}`,description:"\u5904\u7406\u65B0\u589E\u6570\u636E\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u5BFC\u51FA\u6570\u636E":u.success({message:`${e.name}`,description:"\u5904\u7406\u5BFC\u51FA\u6570\u636E\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u67E5\u770B\u914D\u7F6E":u.success({message:`${e.name}`,description:"\u5904\u7406\u67E5\u770B\u914D\u7F6E\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u6279\u91CF\u5F00\u59CB":u.success({message:`${e.name}`,description:"\u5904\u7406\u6279\u91CF\u5F00\u59CB\u4E1A\u52A1\u903B\u8F91",duration:2.5});break;case"\u6279\u91CF\u5173\u95ED":u.success({message:`${e.name}`,description:"\u5904\u7406\u6279\u91CF\u5173\u95ED\u4E1A\u52A1\u903B\u8F91",duration:2.5});break}};return(e,s)=>{const i=m;return l(),d(i,{config:p(E),"onClick:operate":t},{operate:o(n=>[a("a",{class:"link",onClick:r=>t({name:"\u7F16\u8F91"},n.rows)},"\u7F16\u8F91",8,h),a("a",{class:"link",onClick:r=>t({name:"\u5220\u9664"},n.rows)},"\u5220\u9664",8,g)]),image:o(()=>[C,B]),_:1},8,["config"])}}});export{k as default};