(function(e){function t(t){for(var r,i,s=t[0],o=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f4f":function(e,t,n){"use strict";n("4e8d")},"4e8d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,i){var s=Object(r["h"])("app-header"),o=Object(r["h"])("app-content"),l=Object(r["h"])("app-footer");return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["f"])(s),Object(r["f"])(o),Object(r["f"])(l)],64)}var c={class:"has-background-primary p-4"},i=Object(r["d"])("h1",{class:"title has-text-white"},"Medibill",-1),s=[i];function o(e,t){return Object(r["g"])(),Object(r["c"])("header",c,s)}var l=n("6b0d"),u=n.n(l);const d={},p=u()(d,[["render",o]]);var b=p,f=n("b8a4"),h=n.n(f),m=n("89c5"),v=n.n(m),g={id:"content",class:"columns is-mobile is-vcentered",style:{"min-height":"80vh"}},O=Object(r["e"])('<h1 class="title is-1" style="position:absolute;text-align:center;margin-left:5%;margin-top:-20%;max-width:30%;"> Negotiate your medical bills with transparent pricing data.</h1><h1 class="subtitle is-3" style="position:absolute;text-align:center;margin-left:50%;margin-top:30%;max-width:30%;"> You do not need to be a medical expert to understand your bill. </h1><div class="column"><img src="'+h.a+'" style="position:absolute;bottom:-12rem;left:-20rem;z-index:-1;scale:40%;"></div><div class="column"><img src="'+v.a+'" style="position:absolute;bottom:0rem;right:-5rem;z-index:-1;scale:80%;"></div>',4),j={class:"columns is-hcentered",style:{width:"58%"}},y={id:"file-select",class:"levels mt-4"},w={class:"file has-name is-boxed mb-2 level-item"},x={class:"file-label"},S=Object(r["e"])('<span class="file-cta"><span class="file-icon"><i class="fas fa-upload"></i></span><span class="file-label"> Upload Medical Bill </span></span><span class="file-name"></span>',2);function k(e,t,n,a,c,i){var s=Object(r["h"])("app-table");return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",g,[O,Object(r["d"])("div",j,[Object(r["d"])("div",y,[Object(r["d"])("div",w,[Object(r["d"])("label",x,[Object(r["d"])("input",{class:"file-input",type:"file",name:"resume",accept:".pdf",onChange:t[0]||(t[0]=function(e){return i.setFile()})},null,32),S])]),Object(r["d"])("button",{id:"file-submit",class:"button is-primary is-large ml-2",disabled:"true",onClick:t[1]||(t[1]=function(e){return i.fileButtonPress()})},"Analyze Medical Bill")])])]),Object(r["f"])(s)],64)}var _=n("1da1"),A=(n("96cf"),n("b0c0"),n("d3b7"),n("159b"),n("ddb0"),{id:"table-container",class:"containter is-hidden"}),P=Object(r["d"])("table",{width:"100%",class:"table is-fullwidth",style:{"font-size":"150%"},id:"dataTable"},[Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[Object(r["d"])("th",null,"CPT Code"),Object(r["d"])("th",null,"Service Received"),Object(r["d"])("th",null,"Amount Billed"),Object(r["d"])("th",null,"Average Cost")])]),Object(r["d"])("tbody",{id:"tableBody"})],-1),T={id:"saved-value",class:"box mt-6 has-background-success is-hidden"},L={class:"title has-text-white"},R={id:"lost-value",class:"box mt-6 has-background-success is-hidden"},q={class:"title has-text-white"},B=Object(r["d"])("div",{id:"loading-bar",class:"is-hidden",style:{"max-width":"40%",margin:"auto"}},[Object(r["d"])("progress",{class:"progress is-large is-info",max:"100"},"5%"),Object(r["d"])("p",{class:"title has-text-black"}," We are scanning your pdf and comparing prices in your area. ")],-1);function C(e,t){return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",A,[P,Object(r["d"])("div",T,[Object(r["d"])("p",L,"Your cost was "+Object(r["i"])(e.TOTAL_SAVINGS)+" less than the average in your area.",1)]),Object(r["d"])("div",R,[Object(r["d"])("p",q,"Your cost was "+Object(r["i"])(e.TOTAL_LOSS)+" more than the average in your area.",1)])]),B],64)}const z={},F=u()(z,[["render",C]]);var M=F,E=n("bc3a"),$=n.n(E),I=function(){return document.querySelector(".file-input").files.item(0)},N=function(){var e=I(),t=document.querySelector(".file-name");t.textContent=e.name,document.getElementById("file-submit").disabled=!1};function Y(e){var t="https://us-central1-cruzhacks2022-338309.cloudfunctions.net/cpt_decription?code="+e;return new Promise((function(e,n){$.a.get(t).then((function(t){var n=t.data;e(n)}),(function(e){n(e)}))}))}function G(e){return H.apply(this,arguments)}function H(){return H=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://us-central1-cruzhacks2022-338309.cloudfunctions.net/parsePDF",e.abrupt("return",new Promise((function(e,r){$.a.post(n,{"pdf-data":t}).then((function(t){var n=t.data;e(n)}),(function(e){r(e)}))})));case 2:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function J(e){return V.apply(this,arguments)}function V(){return V=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n=new FileReader;n.onload=function(){var t=btoa(n.result);e(t)},n.readAsBinaryString(t)})));case 1:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function D(e){return U.apply(this,arguments)}function U(){return U=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://us-central1-cruzhacks2022-338309.cloudfunctions.net/get_price?code="+t,e.abrupt("return",new Promise((function(e,t){$.a.get(n).then((function(t){var n=t.data;e(n)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function W(){return K.apply(this,arguments)}function K(){return K=Object(_["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,c,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.querySelector("#content").classList.add("is-hidden"),document.querySelector("#loading-bar").classList.remove("is-hidden"),console.log(I()),e.next=5,J(I());case 5:return t=e.sent,console.log(t),e.next=9,G(t);case 9:n=e.sent,console.log(n),r=[],a=0,c=0,e.t0=regeneratorRuntime.keys(n);case 15:if((e.t1=e.t0()).done){e.next=34;break}return i=e.t1.value,e.next=19,D(i);case 19:return s=e.sent,console.log(i),e.t2=r,e.t3=i,e.next=25,Y(i);case 25:e.t4=e.sent,e.t5="$"+n[i],e.t6="$"+s,e.t7=[e.t3,e.t4,e.t5,e.t6],e.t2.push.call(e.t2,e.t7),c+=parseFloat(s),a+=parseFloat(n[i]),e.next=15;break;case 34:console.log(c),console.log(a),Q(r),document.querySelector("#loading-bar").classList.add("is-hidden"),document.querySelector("#table-container").classList.remove("is-hidden"),c>a?document.querySelector("#saved-value").classList.remove("is-hidden"):document.querySelector("#lost-value").classList.remove("is-hidden");case 40:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function Q(e){var t=document.querySelector("#tableBody");e.forEach((function(e){for(var n=document.createElement("tr"),r=0;r<4;r++){var a=document.createElement("td");a.textContent=e[r],n.append(a)}t.append(n)}))}var X={components:{AppTable:M},methods:{getFile:I,setFile:N,fileButtonPress:W,generateTableRows:Q}};const Z=u()(X,[["render",k]]);var ee=Z,te={class:"has-background-primary p-4"},ne=Object(r["d"])("p",{class:"label has-text-white"},"Made for CruzHacks 2022",-1),re=[ne];function ae(e,t){return Object(r["g"])(),Object(r["c"])("footer",te,re)}n("fc03");const ce={},ie=u()(ce,[["render",ae]]);var se=ie,oe={name:"App",components:{AppHeader:b,AppContent:ee,AppFooter:se},data:function(){return{TOTAL_SAVINGS:"$0",TOTAL_LOSS:"$0"}}};n("2f4f");const le=u()(oe,[["render",a]]);var ue=le;n("92c6");Object(r["b"])(ue).mount("#app")},"6e0d":function(e,t,n){},"89c5":function(e,t,n){e.exports=n.p+"img/undraw_receipt_re_fre3.dce48aa6.svg"},b8a4:function(e,t,n){e.exports=n.p+"img/undraw_doctor_kw-5-l.874a5919.svg"},fc03:function(e,t,n){"use strict";n("6e0d")}});
//# sourceMappingURL=app.4bba6865.js.map