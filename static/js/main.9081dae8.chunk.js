(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(n,t,e){},48:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),c=e.n(o),i=e(17),a=e.n(i),u=(e(37),e(4)),s=e(2),d=e(3),b=e(10),j=e(5);function f(){var n=Object(s.a)(["\n  font-size: 20px;\n  padding: 10px 25%;\n  text-align: justify;\n"]);return f=function(){return n},n}function l(){var n=Object(s.a)(["\n  font-size: 72px;\n  color: rgba(0, 0, 0, 0.9);\n  background-color: #9bffbc;\n  border-top: 1px solid rgba(0, 0, 0, 0.9);\n  padding: 30px;\n  text-align: center;\n"]);return l=function(){return n},n}function p(){var n=Object(s.a)(["\n  display: block;\n  color: rgba(0, 0, 0, 0.8);\n  width: 50%;\n  border-right: 1px solid rgba(0, 0, 0, 0.9);\n  font-size: 28px;\n  padding: 30px;\n"]);return p=function(){return n},n}function x(){var n=Object(s.a)(["\n  width: 100%;\n  font-size: 72px;\n  padding: 50px 0;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.9);\n  text-decoration: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.9);\n  text-align: center;\n"]);return x=function(){return n},n}function O(){var n=Object(s.a)(["\n  width: 100%;\n  height: 80px;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return O=function(){return n},n}function h(){var n=Object(s.a)(["\n  padding: 20px 70px;\n"]);return h=function(){return n},n}var g=d.a.div(h()),v=d.a.div(O()),m=d.a.div(x()),y=d.a.div(p()),w=d.a.div(l()),k=d.a.div(f());function S(){var n="\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n  ";return Object(r.jsxs)(v,{children:[Object(r.jsx)(m,{children:"Every idea needs a Large medium."}),Object(r.jsxs)(y,{children:[n,Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),n]}),Object(r.jsxs)(w,{children:["A faking network",Object(r.jsx)("br",{}),"of no one.",Object(r.jsx)(k,{children:n})]})]})}function P(){return Object(r.jsx)(g,{children:Object(r.jsx)(S,{})})}var z="token",C=function(n){return localStorage.setItem(z,n)},L=function(){return localStorage.getItem(z)},R="https://student-json-api.lidemy.me",E=function(){var n=L();return fetch("".concat(R,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},N=Object(o.createContext)(null);function D(){var n=Object(s.a)(["\n  color: rgba(225, 0, 0, 0.5);\n  font-weight: 600;\n"]);return D=function(){return n},n}function J(){var n=Object(s.a)(["\n  background-color: #fff;\n  border: 1px solid #ccc;\n  font-size: 18px;\n  margin-top: 40px;\n  padding: 10px 20px;\n  cursor: pointer;\n"]);return J=function(){return n},n}function B(){var n=Object(s.a)(["\n  margin-bottom: 20px;\n"]);return B=function(){return n},n}function T(){var n=Object(s.a)(["\n  margin-bottom: 20px;\n"]);return T=function(){return n},n}function U(){var n=Object(s.a)(["\n  font-size: 24px;\n  margin: 20px 0;\n"]);return U=function(){return n},n}function A(){var n=Object(s.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 500px;\n  height: 400px;\n  margin: 50px;\n"]);return A=function(){return n},n}var I=d.a.form(A()),$=d.a.div(U()),q=d.a.div(T()),_=d.a.div(B()),H=d.a.button(J()),W=d.a.div(D());function G(){var n=Object(o.useContext)(N).setUser,t=Object(o.useState)(""),e=Object(u.a)(t,2),c=e[0],i=e[1],a=Object(o.useState)(""),s=Object(u.a)(a,2),d=s[0],b=s[1],f=Object(o.useState)(),l=Object(u.a)(f,2),p=l[0],x=l[1],O=Object(j.f)();return Object(r.jsxs)(I,{onSubmit:function(){x(null),function(n,t){return fetch("".concat(R,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(c,d).then((function(t){return 0===t.ok?x(t.message):(C(t.token),E().then((function(t){return 1!==t.ok?(C(null),x(t.toString())):(n(t.data),O.push("/"),null)})),null)}))},children:[Object(r.jsx)($,{children:"Welcome Back"}),Object(r.jsxs)(q,{children:["Username:","",Object(r.jsx)("input",{value:c,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)(_,{children:["Password:","",Object(r.jsx)("input",{type:"password",value:d,onChange:function(n){return b(n.target.value)}})]}),p&&Object(r.jsx)(W,{children:p}),Object(r.jsx)(H,{children:"Login"})]})}function M(){var n=Object(s.a)(["\n  color: rgba(225, 0, 0, 0.5);\n  font-weight: 600;\n"]);return M=function(){return n},n}function F(){var n=Object(s.a)(["\n  background-color: #fff;\n  border: 1px solid #ccc;\n  font-size: 18px;\n  margin-top: 40px;\n  padding: 10px 20px;\n  cursor: pointer;\n"]);return F=function(){return n},n}function K(){var n=Object(s.a)(["\n  margin-bottom: 20px;\n"]);return K=function(){return n},n}function Q(){var n=Object(s.a)(["\n  margin-bottom: 20px;\n"]);return Q=function(){return n},n}function V(){var n=Object(s.a)(["\n  margin-bottom: 20px;\n"]);return V=function(){return n},n}function X(){var n=Object(s.a)(["\n  font-size: 24px;\n  margin: 20px 0;\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 500px;\n  height: 400px;\n  margin: 50px;\n"]);return Y=function(){return n},n}var Z=d.a.form(Y()),nn=d.a.div(X()),tn=d.a.div(V()),en=d.a.div(Q()),rn=d.a.div(K()),on=d.a.button(F()),cn=d.a.div(M());function an(){var n=Object(o.useContext)(N).setUser,t=Object(o.useState)(""),e=Object(u.a)(t,2),c=e[0],i=e[1],a=Object(o.useState)(""),s=Object(u.a)(a,2),d=s[0],b=s[1],f=Object(o.useState)(""),l=Object(u.a)(f,2),p=l[0],x=l[1],O=Object(o.useState)(),h=Object(u.a)(O,2),g=h[0],v=h[1],m=Object(j.f)();return Object(r.jsxs)(Z,{onSubmit:function(t){return v(null),function(n,t,e){return fetch("".concat(R,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(c,d,p).then((function(t){return 0===t.ok?v(t.message):(C(t.token),E().then((function(t){return 1!==t.ok?(C(null),v(t.toString())):(n(t.data),m.push("/"),null)})),null)})),null},children:[Object(r.jsx)(nn,{children:"Join Large"}),Object(r.jsxs)(tn,{children:["Nickname:","",Object(r.jsx)("input",{value:c,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)(en,{children:["Username:","",Object(r.jsx)("input",{value:d,onChange:function(n){return b(n.target.value)}})]}),Object(r.jsxs)(rn,{children:["Password:","",Object(r.jsx)("input",{type:"password",value:p,onChange:function(n){return x(n.target.value)}})]}),g&&Object(r.jsx)(cn,{children:g}),Object(r.jsx)(on,{children:"Join"})]})}var un=e(7),sn=e(18),dn=Object(sn.b)({name:"posts",initialState:{isLoadingPost:!1,post:null,posts:[],newPostResponse:null,deleteResponse:null,editPostResponse:null},reducers:{setIsLoadingPost:function(n,t){n.isLoadingPost=t.payload},setPost:function(n,t){n.post=t.payload},setPosts:function(n,t){n.posts=t.payload},setNewPostResponse:function(n,t){n.newPostResponse=t.payload},setDeleteResponse:function(n,t){n.deleteResponse=t.payload},setEditPostResponse:function(n,t){n.editPostResponse=t.payload}}}),bn=dn.actions,jn=bn.setIsLoadingPost,fn=bn.setPost,ln=bn.setPosts,pn=bn.setNewPostResponse,xn=(bn.setIsLoadingNewPost,bn.setDeleteResponse),On=bn.setEditPostResponse,hn=function(n){return function(t){var e;t(jn(!0)),(e=n,fetch("".concat(R,"/posts/").concat(e)).then((function(n){return n.json()}))).then((function(n){t(fn(n)),t(jn(!1))})).catch((function(n){console.log(n)}))}},gn=function(n){return function(t){(function(n){return fetch("".concat(R,"/posts?_page=").concat(n,"&_limit=6&_sort=createdAt&_order=desc")).then((function(n){return n.json()}))})(n).then((function(n){t(ln(n))})).catch((function(n){console.log(n)}))}},vn=function(n,t){return function(e){return function(n,t){var e=L();return fetch("".concat(R,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(n,t).then((function(n){return e(pn(n)),n}))}},mn=function(n){return function(t){return function(n){var t=L();return fetch("".concat(R,"/posts/").concat(n),{method:"DELETE",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t)}}).then((function(n){return n.json()}))}(n).then((function(n){t(xn(n))}))}},yn=function(n,t,e){return function(r){r(jn(!0)),function(n,t,e){var r=L();return fetch("".concat(R,"/posts/").concat(n),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(r)},body:JSON.stringify({title:t,body:e})}).then((function(n){return n.json()}))}(n,t,e).then((function(n){r(On(n)),r(jn(!1))}))}},wn=dn.reducer;function kn(){var n=Object(s.a)(["\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  width: 36px;\n  height: 36px;\n  border: solid 1px #3333332b;\n  color: #333;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  ","\n"]);return kn=function(){return n},n}function Sn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 50px auto;\n"]);return Sn=function(){return n},n}function Pn(){var n=Object(s.a)(["\n  color: color: rgba(0, 0, 0, 0.8);\n  margin-top: 40px;\n  font-size: 20px;\n  width: 40%;\n"]);return Pn=function(){return n},n}function zn(){var n=Object(s.a)(["\n  color: color: rgba(0, 0, 0, 0.8);\n  font-size: 72px;\n  letter-spacing: -1px;\n  line-height: 0.8;\n"]);return zn=function(){return n},n}function Cn(){var n=Object(s.a)(["\n  top: -30px;\n  background-color: #fff;\n  padding: 50px 40px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n  margin-bottom: 40px;\n"]);return Cn=function(){return n},n}function Ln(){var n=Object(s.a)(["\n  display: block;\n  color: rgba(0, 0, 0, 0.3);\n"]);return Ln=function(){return n},n}function Rn(){var n=Object(s.a)(["\n  font-size: 20px;\n  padding: 10px 0;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.8);\n  text-decoration: none;\n"]);return Rn=function(){return n},n}function En(){var n=Object(s.a)(["\n  width: calc((100% - 120px) / 3);\n  height: 100px;\n  align-items: flex-end;\n  margin: 20px;\n  border-bottom: solid 1px rgba(0, 0, 0, 0.3);\n  &:hover {\n    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);\n  }\n"]);return En=function(){return n},n}function Nn(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 auto;\n"]);return Nn=function(){return n},n}function Dn(){var n=Object(s.a)(["\n  margin: 0px;\n  padding: 0 40px;\n  box-sizing: border-box;\n"]);return Dn=function(){return n},n}var Jn=d.a.div(Dn()),Bn=d.a.div(Nn()),Tn=d.a.div(En()),Un=Object(d.a)(b.b)(Rn()),An=d.a.div(Ln()),In=d.a.div(Cn()),$n=d.a.div(zn()),qn=d.a.div(Pn()),_n=d.a.div(Sn()),Hn=d.a.div(kn(),(function(n){return n.prev&&"\n      border-radius: 0px;\n      border: none;\n      transition: 0.5s;\n      cursor: pointer;\n      &:hover {\n        background-color: #fff;\n        color: #333;\n        border-bottom: 1px solid #333;\n      }\n    "}));function Wn(n){var t=n.post;return Object(r.jsxs)(Tn,{children:[Object(r.jsx)(Un,{to:"/posts/".concat(t.id),children:t.title}),Object(r.jsx)(An,{children:new Date(t.createdAt).toLocaleString()})]})}function Gn(){var n=Object(o.useState)(1),t=Object(u.a)(n,2),e=t[0],c=t[1],i=Object(un.b)(),a=Object(un.c)((function(n){return n.posts.posts}));return Object(o.useEffect)((function(){i(gn(e))}),[e,i]),Object(r.jsxs)(Jn,{children:[Object(r.jsxs)(In,{children:[Object(r.jsxs)($n,{children:["Without any",Object(r.jsx)("br",{}),"perspectives"]}),Object(r.jsx)(qn,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(r.jsx)(Bn,{children:a.map((function(n){return Object(r.jsx)(Wn,{post:n},n.id)}))}),Object(r.jsxs)(_n,{children:[1!==e&&Object(r.jsx)(Hn,{prev:!0,onClick:function(){c(e-1)},children:"Prev"}),Object(r.jsx)(Hn,{children:e}),6===a.length&&Object(r.jsx)(Hn,{prev:!0,onClick:function(){c(e+1)},children:"Next"})]})]})}function Mn(){var n=Object(s.a)(["\n  background-color: #DC4525;\n  color: #fff;\n  border: none;\n"]);return Mn=function(){return n},n}function Fn(){var n=Object(s.a)(["\n  font-size: 14px;\n  color: #333;\n  background-color: #fff;\n  margin-top: 10px;\n  padding: 10px 20px;\n  text-shadow: none;\n  border-style: none;\n  border: 1px solid #333;\n  display: inline-block;\n  margin: 10px;\n  cursor: pointer;\n"]);return Fn=function(){return n},n}function Kn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(s.a)(["\n  margin-top: 20px;\n  line-height: 1.5;\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(s.a)(["\n  display: block;\n  color: rgba(0, 0, 0, 0.3);\n"]);return Vn=function(){return n},n}function Xn(){var n=Object(s.a)(["\n  font-size: 24px;\n  padding: 10px 0;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.8);\n  text-decoration: none;\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n  width: 70%;\n  height: 80px;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return Zn=function(){return n},n}function nt(){var n=Object(s.a)(["\n  padding: 70px;\n"]);return nt=function(){return n},n}var tt=d.a.div(nt()),et=d.a.div(Zn()),rt=d.a.div(Yn()),ot=d.a.div(Xn()),ct=d.a.div(Vn()),it=d.a.div(Qn()),at=d.a.div(Kn()),ut=d.a.button(Fn()),st=Object(d.a)(ut)(Mn());function dt(n){var t=n.post,e=n.onDelete,o=n.onEdit;return t?Object(r.jsxs)(et,{children:[Object(r.jsxs)(rt,{children:[Object(r.jsx)(ot,{children:t.title}),Object(r.jsxs)(at,{children:[Object(r.jsx)(ut,{onClick:o,children:"\u7de8\u8f2f"}),Object(r.jsx)(st,{onClick:e,children:"\u522a\u9664"})]})]}),Object(r.jsx)(ct,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)(it,{children:t.body})]}):null}function bt(){var n=Object(j.f)(),t=Object(j.h)().id,e=Object(un.b)(),c=(Object(un.c)((function(n){return n.posts.isLoadingPost})),Object(un.c)((function(n){return n.posts.post}))),i=Object(un.c)((function(n){return n.posts.editPostResponse}));return Object(o.useEffect)((function(){e(hn(t))}),[t,e,i]),Object(r.jsx)(tt,{children:Object(r.jsx)(dt,{post:c,onDelete:function(){e(mn(t)).then((function(){n.push("/")}))},onEdit:function(){n.push("/edit-post/".concat(c.id))}})})}function jt(){var n=Object(s.a)(["\n  color: red;\n"]);return jt=function(){return n},n}function ft(){var n=Object(s.a)(["\n  font-size: 14px;\n  color: #333;\n  background-color: #fff;\n  margin-top: 10px;\n  padding: 10px 20px;\n  text-shadow: none;\n  border-style: none;\n  border: 1px solid #333;\n  display: block;\n  float: right;\n"]);return ft=function(){return n},n}function lt(){var n=Object(s.a)(["\n  width: 100%;\n  height: 260px;\n  margin-top: 10px;\n"]);return lt=function(){return n},n}function pt(){var n=Object(s.a)(["\n  margin-top: 20px;\n"]);return pt=function(){return n},n}function xt(){var n=Object(s.a)(["\n  font-size: 18px;\n  padding: 10px 0;\n  color: rgba(0, 0, 0, 0.8);\n  text-decoration: none;\n  & input {\n    width: 60%;\n    height: 30px;\n  }\n"]);return xt=function(){return n},n}function Ot(){var n=Object(s.a)(["\n  width: 70%;\n  height: 80px;\n"]);return Ot=function(){return n},n}function ht(){var n=Object(s.a)(["\n  padding: 20px 70px;\n"]);return ht=function(){return n},n}var gt=d.a.div(ht()),vt=d.a.form(Ot()),mt=d.a.div(xt()),yt=d.a.div(pt()),wt=d.a.textarea(lt()),kt=d.a.button(ft()),St=d.a.div(jt());function Pt(){var n=Object(o.useState)(""),t=Object(u.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)(""),a=Object(u.a)(i,2),s=a[0],d=a[1],b=Object(o.useState)(),f=Object(u.a)(b,2),l=f[0],p=f[1],x=L(),O=Object(j.f)(),h=Object(un.b)();Object(un.c)((function(n){return n.posts.newPostResponse}));return Object(r.jsxs)(vt,{onSubmit:function(){p(null),x&&(e&&s?h(vn(e,s)).then((function(n){n&&n.id&&O.push("/posts/"+n.id)})):p("Please fill the empty area."))},children:[Object(r.jsxs)(mt,{children:["Title\uff1a","",Object(r.jsx)("input",{value:e,onChange:function(n){return c(n.target.value)}})]}),Object(r.jsx)(yt,{children:"New Post\uff1a "}),Object(r.jsx)(wt,{value:s,onChange:function(n){return d(n.target.value)}}),Object(r.jsx)(kt,{children:"Submit"}),l&&Object(r.jsx)(St,{children:l})]})}function zt(){var n=L(),t=Object(j.f)();return n||t.push("/"),Object(r.jsx)(gt,{children:Object(r.jsx)(Pt,{})})}function Ct(){var n=Object(s.a)(["\n  color: red;\n"]);return Ct=function(){return n},n}function Lt(){var n=Object(s.a)(["\n  font-size: 14px;\n  color: #333;\n  background-color: #fff;\n  margin-top: 10px;\n  padding: 10px 20px;\n  text-shadow: none;\n  border-style: none;\n  border: 1px solid #333;\n  display: block;\n  float: right;\n"]);return Lt=function(){return n},n}function Rt(){var n=Object(s.a)(["\n  width: 100%;\n  height: 260px;\n  margin-top: 10px;\n"]);return Rt=function(){return n},n}function Et(){var n=Object(s.a)(["\n  margin-top: 20px;\n"]);return Et=function(){return n},n}function Nt(){var n=Object(s.a)(["\n  font-size: 18px;\n  padding: 10px 0;\n  color: rgba(0, 0, 0, 0.8);\n  text-decoration: none;\n  & input {\n    width: 60%;\n    height: 30px;\n  }\n"]);return Nt=function(){return n},n}function Dt(){var n=Object(s.a)(["\n  width: 70%;\n  height: 80px;\n"]);return Dt=function(){return n},n}function Jt(){var n=Object(s.a)(["\n  padding: 20px 70px;\n"]);return Jt=function(){return n},n}var Bt=d.a.div(Jt()),Tt=d.a.form(Dt()),Ut=d.a.div(Nt()),At=d.a.div(Et()),It=d.a.textarea(Rt()),$t=d.a.button(Lt()),qt=d.a.div(Ct());function _t(){var n=Object(o.useState)(),t=Object(u.a)(n,2),e=t[0],c=(t[1],L()),i=Object(j.f)(),a=Object(un.b)(),s=Object(j.h)().id,d=Object(un.c)((function(n){return n.posts.post})),b=(Object(un.c)((function(n){return n.posts.editPostResponse})),Object(o.useState)(d.title)),f=Object(u.a)(b,2),l=f[0],p=f[1],x=Object(o.useState)(d.body),O=Object(u.a)(x,2),h=O[0],g=O[1];c||i.push("/"),console.log(l,h);return Object(o.useEffect)((function(){a(hn(s))}),[]),Object(r.jsx)(Bt,{children:Object(r.jsxs)(Tt,{children:[Object(r.jsxs)(Ut,{children:["Title\uff1a",Object(r.jsx)("input",{value:l,type:"text",onChange:function(n){return p(n.target.value)}})]}),Object(r.jsx)(At,{children:"Post\uff1a"}),Object(r.jsx)(It,{onChange:function(n){return g(n.target.value)},children:h}),Object(r.jsx)($t,{onClick:function(){a(yn(s,l,h)),i.push("/posts/".concat(s))},children:"Save"}),e&&Object(r.jsx)(qt,{children:e})]})})}function Ht(){var n=Object(s.a)(["\n  padding: 10px 20px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n\n  ","\n"]);return Ht=function(){return n},n}function Wt(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return Wt=function(){return n},n}function Gt(){var n=Object(s.a)(["\n  color: black;\n  font-size: 32px;\n  text-decoration: none;\n"]);return Gt=function(){return n},n}function Mt(){var n=Object(s.a)(["\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 70px;\n  background-color: #fff;\n  box-sizing: border-box;\n"]);return Mt=function(){return n},n}var Ft=d.a.div(Mt()),Kt=Object(d.a)(b.b)(Gt()),Qt=d.a.div(Wt()),Vt=Object(d.a)(b.b)(Ht(),(function(n){return n.$active&&"\n      text-decoration: underline rgba(0, 0, 0, 0.2);\n    "}),(function(n){return n.register&&"\n      border-radius: 6px;\n      background-color: rgba(84, 131, 215, 1);\n      color: #fff;\n      transition: 0.5s;\n\n      &:hover {\n        background-color: #6C9BED;\n      }\n    "}));function Xt(){var n=Object(j.g)(),t=Object(j.f)(),e=Object(o.useContext)(N),c=e.user,i=e.setUser;return Object(r.jsxs)(Ft,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(Kt,{to:"/",$active:"/"===n.pathname,children:"Large"})}),Object(r.jsxs)(Qt,{children:[Object(r.jsx)(Vt,{to:"/",$active:"/"===n.pathname,children:"Home"}),Object(r.jsx)(Vt,{to:"/about",$active:"/about"===n.pathname,children:"About"}),c&&Object(r.jsx)(Vt,{to:"/new-post",$active:"/new-post"===n.pathname,children:"Post Story"}),c&&Object(r.jsx)(Vt,{onClick:function(){C(""),i(null),"/"!==n.pathname&&t.push("/")},children:"Logout"}),!c&&Object(r.jsx)(Vt,{to:"/login",$active:"/login"===n.pathname,children:"Login"}),!c&&Object(r.jsx)(Vt,{to:"/register",register:!0,children:"Get Started"})]})]})}function Yt(){var n=Object(s.a)(["\n  padding-top: 100px;\n"]);return Yt=function(){return n},n}var Zt=d.a.div(Yt());var ne=function(){var n=Object(o.useState)(null),t=Object(u.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)(!1),a=Object(u.a)(i,2),s=a[0],d=a[1],f=L();return Object(o.useEffect)((function(){f&&(d(!0),E().then((function(n){n.ok&&(c(n.data),d(!1))})))}),[]),Object(r.jsx)(N.Provider,{value:{user:e,setUser:c},children:Object(r.jsx)(Zt,{children:Object(r.jsxs)(b.a,{children:[!s&&Object(r.jsx)(Xt,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(Gn,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/about",children:Object(r.jsx)(P,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/login",children:Object(r.jsx)(G,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/register",children:Object(r.jsx)(an,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/posts/:id",children:Object(r.jsx)(bt,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/new-post",children:Object(r.jsx)(zt,{})}),Object(r.jsx)(j.a,{exact:!0,path:"/edit-post/:id",children:Object(r.jsx)(_t,{})})]})]})})})},te=Object(sn.a)({reducer:{posts:wn}});a.a.render(Object(r.jsx)(un.a,{store:te,children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ne,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9081dae8.chunk.js.map