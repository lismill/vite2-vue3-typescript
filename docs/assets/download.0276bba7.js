const b=(l,t)=>new Promise(i=>{const o=new XMLHttpRequest;o.open("get",l),o.responseType="blob",o.send(),o.onload=function(){if(this.status===200||this.status===304){const e=new FileReader;e.readAsDataURL(this.response),e.onload=function(){const d=document.createElement("a");d.style.display="none",d.href=this.result,d.download=t!=null?t:"undefined",document.body.appendChild(d),d.click(),document.body.removeChild(d),i("")}}}}),p=(l,t)=>{const i=[l],o=new Blob(i,{type:"application/octet-stream"}),n=window.URL.createObjectURL(o),e=document.createElement("a");e.style.display="none",e.href=n,e.setAttribute("download",t!=null?t:"undefined"),typeof e.download=="undefined"&&e.setAttribute("target","_blank"),document.body.appendChild(e),e.click(),document.body.removeChild(e),window.URL.revokeObjectURL(n)},r=(l,t)=>{const i=l.split(","),o=window.atob(i[1]);let n=o.length;const e=new Uint8Array(n);for(;n--;)e[n]=o.charCodeAt(n);const c=[new Blob([e])],d=new Blob(c,{type:`image/${t&&t.split(".").length===2?t.split(".")[1]:"png"}`}),a=window.URL.createObjectURL(d),s=document.createElement("a");s.style.display="none",s.href=a,s.setAttribute("download",t!=null?t:"undefined"),typeof s.download=="undefined"&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(a)},u=(l,t)=>{r(l.toDataURL(),t!=null?t:"undefined")};export{p as a,r as b,u as c,b as d};