(window.webpackJsonpstopwatch=window.webpackJsonpstopwatch||[]).push([[0],{10:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(3),m=a.n(c),l=a(1);var r=function(t){return s.a.createElement("div",null,0===t.time.h?"":s.a.createElement("span",null,t.time.h>=10?t.time.h:"0"+t.time.h),"\xa0\xa0",s.a.createElement("span",null,t.time.m>=10?t.time.m:"0"+t.time.m),"\xa0:\xa0",s.a.createElement("span",null,t.time.s>=10?t.time.s:"0"+t.time.s),"\xa0:\xa0",s.a.createElement("span",null,t.time.ms>=10?t.time.ms:"0"+t.time.ms))};var o=function(t){return s.a.createElement("div",null,0===t.status?s.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.start},"Start"):"",1===t.status?s.a.createElement("div",null,s.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-red",onClick:t.stop},"Stop"),s.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:t.reset},"Reset")):"",2===t.status?s.a.createElement("div",null,s.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.resume},"Resume"),s.a.createElement("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:t.reset},"Reset")):"")};a(9);var u=function(){var t=Object(n.useState)({ms:0,s:0,m:0,h:0}),e=Object(l.a)(t,2),a=e[0],c=e[1],m=Object(n.useState)(),u=Object(l.a)(m,2),i=u[0],p=u[1],b=Object(n.useState)(0),h=Object(l.a)(b,2),E=h[0],w=h[1],v=function(){j(),w(1),p(setInterval(j,10))},d=a.ms,f=a.s,k=a.m,N=a.h,j=function(){return 60===k&&(N++,k=0),60===f&&(k++,f=0),100===d&&(f++,d=0),d++,c({ms:d,s:f,m:k,h:N})};return s.a.createElement("div",{className:"main-section"},s.a.createElement("div",{className:"clock-holder"},s.a.createElement("div",{className:"stopwatch"},s.a.createElement(r,{time:a}),s.a.createElement(o,{status:E,resume:function(){return v()},reset:function(){clearInterval(i),w(0),c({ms:0,s:0,m:0,h:0})},stop:function(){clearInterval(i),w(2)},start:v}))))};m.a.render(s.a.createElement(u,null),document.getElementById("root"))},4:function(t,e,a){t.exports=a(10)},9:function(t,e,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.6c10b32b.chunk.js.map