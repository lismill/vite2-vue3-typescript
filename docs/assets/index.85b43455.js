import{_ as F,o as u,c as i,b as t,aL as f,d as m,H as _,w as l,g as C,B as v,a as p,J as b}from"./index.6bf4fbce.js";import{C as x}from"./index.a9732bb8.js";const E={},y={class:"bg-ffffff p-16"};function $(d,o){const s=f;return u(),i("div",y,[t(s,{height:500,marker:[[121.472773,31.233082],[121.479167,31.227284]]},null,8,["marker"])])}var V=F(E,[["render",$]]);const N={class:"bg-ffffff p-16"},z=C("\u6DFB\u52A0\u5750\u6807\u70B9\u5230\u4E1C\u65B9\u660E\u73E0"),D=m({setup(d){const o=_(),s=_(),r=()=>{const n=new s.value.Marker({position:[121.49969,31.239571]});o.value.add(n),o.value.setFitView()},g=(n,e)=>{o.value=n,s.value=e;const a=new e.Marker({position:[121.482834,31.236943]});n.add(a);const c=new e.Polyline({path:[new e.LngLat(121.431283,31.266573),new e.LngLat(121.431798,31.2257),new e.LngLat(121.487502,31.223938),new e.LngLat(121.483897,31.266133),new e.LngLat(121.431283,31.266573)],strokeColor:"red",lineJoin:"round"});n.add(c);const L=new e.Polygon({path:[new e.LngLat(121.441153,31.254393),new e.LngLat(121.449436,31.247973),new e.LngLat(121.438364,31.240965),new e.LngLat(121.441153,31.254393)],strokeWeight:2,fillColor:"red"});n.add(L);const w=new e.Circle({center:new e.LngLat(121.45789,31.249624),radius:500,fillColor:"red",strokeWeight:2});n.add(w);const h=new e.Rectangle({bounds:new e.Bounds(new e.LngLat(121.483511,31.271781),new e.LngLat(121.507157,31.252632)),fillColor:"red"});n.add(h);const k=new e.Ellipse({center:[121.499861,31.238396],radius:[1100,800],fillColor:"red"});n.add(k),n.on("click",B=>console.log("\u60A8\u70B9\u51FB\u4E86\u5730\u56FE:::",B))};return(n,e)=>{const a=v,c=f;return u(),i("div",N,[t(a,{type:"primary",class:"m-b16",onClick:r},{default:l(()=>[z]),_:1}),t(c,{height:500,marker:[[121.472773,31.233082],[121.479167,31.227284]],"custom-map":g},null,8,["marker"])])}}}),J={class:"m-t16"},W=m({setup(d){return(o,s)=>{const r=x;return u(),i(b,null,[t(r,{title:"\u7B80\u5355\u65B9\u5F0F\u4F7F\u7528",size:"small",hoverable:""},{default:l(()=>[t(V)]),_:1}),p("div",J,[t(r,{class:"m-t16",title:"\u590D\u6742\u65B9\u5F0F\u4F7F\u7528",size:"small",hoverable:""},{default:l(()=>[t(D)]),_:1})])],64)}}});export{W as default};