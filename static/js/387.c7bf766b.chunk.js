"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{94:function(A,e,n){n.d(e,{Hg:function(){return o},Jh:function(){return m},TP:function(){return s},z1:function(){return i},zv:function(){return p}});var t=n(861),r=n(757),a=n.n(r),c=n(294),u="9ce408291b177c2a2e598968d33c0b4a";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var A=(0,t.Z)(a().mark((function A(){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),i=function(){var A=(0,t.Z)(a().mark((function A(e){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),s=function(){var A=(0,t.Z)(a().mark((function A(e){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),p=function(){var A=(0,t.Z)(a().mark((function A(e){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),m=function(){var A=(0,t.Z)(a().mark((function A(e){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},387:function(A,e,n){n.r(e),n.d(e,{default:function(){return U}});var t,r,a,c,u=n(439),o=n(689),i=n(791),s=n(94),p=n(168),m=n(924),l=m.ZP.ul(t||(t=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0;\n"]))),V=m.ZP.li(r||(r=(0,p.Z)(["\n  width: calc(20% - 16px);\n  margin-bottom: 16px;\n  padding: 2px 8px;\n"]))),g=m.ZP.h3(a||(a=(0,p.Z)(["\n  margin: 8px 0;\n"]))),x=m.ZP.p(c||(c=(0,p.Z)(["\n  margin: 0;\n"]))),B=n(535),f=n(184),U=function(){var A=(0,i.useState)([]),e=(0,u.Z)(A,2),n=e[0],t=e[1],r=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,s.zv)(r).then((function(A){return t(A.cast.slice(0,10))}))}),[r]),(0,f.jsx)(l,{children:n.length>0?n.map((function(A){var e=A.id,n=A.name,t=A.profile_path,r=A.character;return(0,f.jsxs)(V,{children:[(0,f.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w200".concat(t):B,alt:"actor",loading:"lazy",width:120,height:180}),(0,f.jsx)(g,{children:n}),(0,f.jsxs)(x,{children:[" Character: ",r]})]},e)})):"Sorry, there isn't any info :("})}},535:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=387.c7bf766b.chunk.js.map