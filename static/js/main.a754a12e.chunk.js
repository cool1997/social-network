(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(40),r=a(4),o={usersData:[{id:1,name:"Andrey"},{id:2,name:"Sveta"},{id:3,name:"Sasha"},{id:4,name:"Anya"}],messagesData:[{id:1,text:"hi!!",myMessage:!0},{id:2,text:"hi! how are you?",myMessage:!1}]},c={addMessage:function(e){return{type:"ADD_MESSAGE",payload:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var a={id:e.messagesData[e.messagesData.length-1].id+1,text:t.payload,myMessage:!0};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(n.a)(e.messagesData),[a])});default:return e}}},11:function(e,t,a){e.exports={input:"Logo_input__3XxKM",logo__wrap:"Logo_logo__wrap__CfVzm",logo:"Logo_logo__3IG6m",logo__paper:"Logo_logo__paper__zK80L",theme_white:"Logo_theme_white__3_59e",theme_grey:"Logo_theme_grey__I4PMQ",theme_black:"Logo_theme_black__85HaP",logo__square:"Logo_logo__square__vsvDG",logo__square_front:"Logo_logo__square_front__32BWR",logo__square_back:"Logo_logo__square_back__20hL7"}},128:function(e,t,a){e.exports=a.p+"static/media/preloader.7869e84b.svg"},129:function(e,t,a){e.exports={preloader:"Preloader_preloader__Kjxcy"}},134:function(e,t,a){},14:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(131),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0",timeout:5e3,withCredentials:!0,headers:{"API-KEY":"251be3f3-4e87-4c36-a25c-333f51a55e3d"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},deleteUser:function(e){return r.delete("/follow/".concat(e))},postUser:function(e){return r.post("/follow/".concat(e))}},c={getProfile:function(e){return r.get("/profile/".concat(e))},getStatus:function(e){return r.get("/profile/status/".concat(e))},putStatus:function(e){return r.put("profile/status",{status:e})},putPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"Multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},i={getMe:function(){return r.get("/auth/me")},postLogin:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("/auth/login",{email:e,password:t,rememberMe:a})},deleteLogin:function(){return r.delete("/auth/login")}}},15:function(e,t,a){e.exports={SiteNav:"SiteNav_SiteNav__1rwdY",link:"SiteNav_link__3TEOE",active:"SiteNav_active__3nHdB"}},163:function(e,t,a){e.exports=a(287)},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return p}));var n=a(4),r=a(14),o=a(37),c={id:null,email:null,login:null,isAuth:!1},i={updateUserData:function(e,t,a,n){return{type:"UPDATE_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}}},s=i.updateUserData,u=r.a.getMe,l=r.a.postLogin,m=r.a.deleteLogin,p={getUserData:function(){return function(e){return u().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.email,o=a.login;e(s(n,r,o,!0))}}))}},login:function(e,t,a){return function(n){l(e,t,a).then((function(e){0===e.data.resultCode?n(p.getUserData()):n(Object(o.a)("login",{_error:e.data.messages[0]||"some error"}))}))}},logout:function(){return function(e){m().then((function(t){0===t.data.resultCode&&e(s(null,null,null,!1))}))}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER_DATA":return Object(n.a)(Object(n.a)({},e),t.payload);default:return e}}},25:function(e,t,a){e.exports={UserNav:"UserNav_UserNav__307DZ",link:"UserNav_link__3KKg_",active:"UserNav_active__nycyT",text:"UserNav_text__1fnIT",wrapper:"UserNav_wrapper__15tjl",logout:"UserNav_logout__jDFS6"}},287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(55),c=a.n(o),i=(a(167),a(168),a(169),a(32)),s=a.n(i),u=a(22),l=a(31),m=a(56),p=function(e,t){return function(a){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement(e,Object.assign({addProps:t},a)))}},f=a(9),d=a(6),_=a(86),g=a(127),h=a(45),b=h.c.getAlert,E=["spam","php"],v=function(e){var t=e.dispatch;return function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:""};if(a.type===h.a){var n=E.filter((function(e){return a.payload.includes(e)}));if(n.length)return t(b("you are a spammer"))}return e(a)}}},O=a(4),y=a(23),S=y.c.getUserData,j={initialized:!1},N=function(){return{type:"INITIALIZED_SUCCESS"}},w=function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e(N())}))}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},T=a(105),L=a(93),C=Object(d.c)({app:A,profile:h.d,dialogs:T.b,users:L.a,auth:y.b,form:g.a}),k=v,P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,U=Object(d.e)(C,P(Object(d.a)(_.a,k)));window.__store__=U;var x=U,D=a(11),I=a.n(D),F=function(e){var t=e.onChangeTheme;return r.a.createElement("section",{className:I.a.logo__wrap},r.a.createElement("div",{className:I.a.logo},r.a.createElement("span",{className:"".concat(I.a.logo__square_front," ").concat(I.a.logo__square)}),r.a.createElement("span",{className:"".concat(I.a.logo__square_back," ").concat(I.a.logo__square)})),r.a.createElement("form",null,r.a.createElement("input",{className:I.a.input,onClick:t,type:"radio",name:"theme",value:"theme_white",id:"theme_white"}),r.a.createElement("label",{htmlFor:"theme_white",className:I.a.logo__paper+" "+I.a.theme_white}),r.a.createElement("input",{className:I.a.input,onClick:t,type:"radio",name:"theme",value:"theme_grey",id:"theme_grey"}),r.a.createElement("label",{htmlFor:"theme_grey",className:I.a.logo__paper+" "+I.a.theme_grey}),r.a.createElement("input",{className:I.a.input,onClick:t,type:"radio",name:"theme",value:"theme_black",id:"theme_black"}),r.a.createElement("label",{htmlFor:"theme_black",className:I.a.logo__paper+" "+I.a.theme_black})))},R=Object(d.d)(Object(f.b)((function(e){return{}}),{onChangeTheme:function(e){var t=document.querySelector("#App");switch(e.target.value){case"theme_white":t.classList.remove("theme_grey"),t.classList.remove("theme_black");break;case"theme_grey":t.classList.add("theme_grey"),t.classList.remove("theme_black");break;case"theme_black":t.classList.add("theme_black"),t.classList.remove("theme_grey")}}}))(F),G=a(25),M=a.n(G),q=function(e){var t=e.isAuth,a=e.login,n=e.logout;return r.a.createElement("section",{className:"".concat(M.a.UserNav," ").concat(e.className)},t?r.a.createElement("div",{className:M.a.wrapper},r.a.createElement("button",{className:M.a.logout,onClick:n},"log\xa0out"),r.a.createElement(u.b,{to:"/profile",className:M.a.link},r.a.createElement("span",{className:M.a.text},a))):r.a.createElement(u.b,{to:"/login",activeClassName:M.a.active,className:M.a.link},r.a.createElement("span",{className:M.a.text},"login")))},z=y.c.logout,W=Object(d.d)(Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:z}))((function(e){return r.a.createElement(q,e)})),H=a(15),K=a.n(H),V=function(){return r.a.createElement("ul",{className:K.a.SiteNav},r.a.createElement("li",{className:K.a.item},r.a.createElement(u.b,{className:K.a.link,activeClassName:K.a.active,to:"/profile"},r.a.createElement("span",{className:K.a.linkText},"profile"))),r.a.createElement("li",{className:K.a.item},r.a.createElement(u.b,{className:K.a.link,activeClassName:K.a.active,to:"/dialogs"},r.a.createElement("span",{className:K.a.linkText},"messages"))),r.a.createElement("li",{className:K.a.item},r.a.createElement(u.b,{className:K.a.link,activeClassName:K.a.active,to:"/users"},r.a.createElement("span",{className:K.a.linkText},"users"))))},B=Object(d.d)(Object(f.b)((function(e){return{}}),{}))(V),X=a(26),J=a(134),Z=a.n(J),Y=a(90),Q=a.n(Y),$=a(87),ee=a(65),te=a(66),ae=Object(te.a)(20),ne=function(e){var t=e.onSubmit,a=e.error,n=Object(X.a)(e,["onSubmit","error"]);return r.a.createElement("form",{className:Q.a.LoginForm,onSubmit:n.handleSubmit(t)},r.a.createElement($.a,{validate:[te.b,ae],name:"email",component:ee.a.input,type:"text",placeholder:"login"}),r.a.createElement($.a,{validate:[te.b,ae],name:"password",component:ee.a.input,type:"password",placeholder:"password"}),a&&r.a.createElement("span",{className:Q.a.error},a),r.a.createElement($.a,{name:"rememberMe",component:ee.a.input,type:"checkbox",placeholder:"remember me"}),r.a.createElement("button",null,"login"))},re=a(126),oe=y.b.login,ce=Object(d.d)(Object(re.a)({form:"login"}),Object(f.b)((function(e){return{}}),{login:oe}))((function(e){var t=e.login;Object(X.a)(e,["login"]);return r.a.createElement(ne,{onSubmit:function(e){var a=e.email,n=e.password,r=e.rememberMe;t(a,n,r)}})})),ie=function(e){Object.assign({},e);return r.a.createElement("section",{className:Z.a.Login},r.a.createElement("h2",null,"Login"),r.a.createElement(ce,null))},se=y.c.login,ue=Object(d.d)(Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:se}))((function(e){e.login;var t=e.isAuth,a=Object(X.a)(e,["login","isAuth"]);return t?r.a.createElement(l.a,{to:"/profile"}):r.a.createElement(ie,a)})),le=Object(n.lazy)((function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,664))})),me=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,665))})),pe=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,666))})),fe=function(e){return r.a.createElement(u.a,{basename:"https://github.com/cool1997/social-network"},r.a.createElement(f.a,{store:x},r.a.createElement("div",{className:"".concat(s.a.App),id:"App"},r.a.createElement("header",{className:s.a.header},r.a.createElement(R,null),r.a.createElement(W,{className:s.a.userNav})),r.a.createElement("div",{className:s.a.content},r.a.createElement("nav",{className:s.a.nav},r.a.createElement(B,null)),r.a.createElement("main",{className:s.a.main},r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/Profile/:userId?",render:p(le,e.store)}),r.a.createElement(l.b,{path:"/Dialogs",render:p(me,e.store)}),r.a.createElement(l.b,{path:"/Users",render:p(pe)}),r.a.createElement(l.b,{path:"/login",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(l.b,{exact:!0,path:"/",render:p(le,e.store)}),r.a.createElement(l.b,{render:function(){return r.a.createElement("h1",null,"404")}})))),r.a.createElement("footer",{className:s.a.footer}))))},de=w,_e=Object(d.d)(Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:de}))((function(e){var t=e.initializeApp,a=e.initialized;return Object(n.useEffect)((function(){t()}),[]),a?r.a.createElement(fe,e):r.a.createElement(m.a,null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_e,{store:x}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports={App:"App_App__2mBMi",header:"App_header__3MgOT",content:"App_content__11LHs",nav:"App_nav__3zlaj",main:"App_main__aDOxM",footer:"App_footer__10-3F"}},44:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1k-Ht",error:"FormsControls_error__bauyl"}},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p}));var n=a(18),r=a.n(n),o=a(36),c=a(40),i=a(4),s=a(14),u="ADD_POST",l={postsData:[{id:1,text:"hi",likesCount:2},{id:2,text:"my second post",likesCount:1}],userProfile:null,newPostText:"hello",status:"",alert:null},m={addPost:function(e){return{type:"ADD_POST",payload:e}},setProfile:function(e){return{type:"SET_PROFILE",payload:e}},setStatus:function(e){return{type:"SET_STATUS",payload:e}},getAlert:function(e){return{type:"GET_ALERT",payload:e}},savePhotoSuccess:function(e){return{type:"SAVE_PHOTO_SUCCESS",payload:e}},saveProfileSuccess:function(e){return{type:"SAVE_PROFILE_SUCCESS",payload:e}}},p={getProfile:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:n=t.sent,a(m.setProfile(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:n=t.sent,a(m.setStatus(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},putStatus:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.putStatus(e);case 2:0===t.sent.data.resultCode&&a(m.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAlert:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(m.getAlert(e)),setTimeout((function(){a(m.getAlert(null))}),3e3);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.putPhoto(e);case 2:0===(n=t.sent).data.resultCode&&a(m.savePhotoSuccess(n.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.saveProfile(e);case 2:0===(n=t.sent).data.resultCode&&a(m.saveProfileSuccess(n.data.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var a={id:e.postsData[e.postsData.length-1].id+1,text:t.payload,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[a])});case"SET_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{userProfile:t.payload});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.payload});case"GET_ALERT":return Object(i.a)(Object(i.a)({},e),{},{alert:t.payload});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{userProfile:Object(i.a)(Object(i.a)({},e.userProfile),{},{photos:t.payload})});case"SAVE_PROFILE_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{userProfile:Object(i.a)({},t.payload)});default:return e}}},56:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(128),c=a.n(o),i=a(129),s=a.n(i);t.a=function(){return r.a.createElement("section",{className:s.a.preloader},r.a.createElement("img",{src:c.a,alt:"loading"}))}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(26),r=a(0),o=a.n(r),c=a(44),i=a.n(c),s=a(87),u=function(e){var t=e.input,a=e.meta,r=e.children,c=e.required,s=(Object(n.a)(e,["input","meta","children","required"]),c&&a.touched&&a.error||t.value.length>0&&a.error);return o.a.createElement("span",{error:s||void 0,className:"".concat(i.a.formControl," ").concat(s?i.a.error:"")},r,s&&o.a.createElement("span",{className:i.a.textError},a.error))},l={textarea:function(e){var t=Object.assign({},e);return o.a.createElement(u,t,o.a.createElement("textarea",Object.assign({className:i.a.text},t.input,t)))},input:function(e){var t=Object.assign({},e);return o.a.createElement(u,Object.assign({required:"true"},t),o.a.createElement("input",Object.assign({className:i.a.text},t.input,t)))}},m=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("p",null,o.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:a,component:l[n]},r)),c)}},66:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){return e?void 0:"Field is required"},r=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}},90:function(e,t,a){e.exports={error:"LoginForm_error__3X8qJ"}},93:function(e,t,a){"use strict";a.d(t,"b",(function(){return h}));var n=a(40),r=a(4),o=a(14),c={usersData:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},i=function(e){return{type:"FOLLOW",payload:!0,id:e}},s=function(e){return{type:"UNFOLLOW",payload:!1,id:e}},u=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",payload:e,id:t}},l=function(e){return{type:"TOGGLE_IS_FETCHING",payload:e}},m=function(e){return{type:"SET_USERS",users:e}},p=function(e){return{type:"SET_TOTAL_USERS_COUNT",payload:e}},f=function(e){return{type:"SET_CURRENT_PAGE",payload:e}},d=o.c.getUsers,_=o.c.deleteUser,g=o.c.postUser,h={getUsers:function(e,t){return function(a){a(l(!0)),d(e,t).then((function(e){a(l(!1)),a(m(e.items)),a(p(e.totalCount))}))}},updateUsers:function(e,t){return function(a){a(l(!0)),d(e,t).then((function(t){a(f(e)),a(l(!1)),a(m(t.items)),a(p(t.totalCount))}))}},deleteUser:function(e){return function(t){t(u(!0,e)),_(e).then((function(a){t(u(!1,e)),0===a.data.resultCode&&t(s(e))}))}},postUser:function(e){return function(t){t(u(!0,e)),g(e).then((function(a){t(u(!1,e)),0===a.data.resultCode&&t(i(e))}))}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":case"UNFOLLOW":return Object(r.a)(Object(r.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),{},{followed:t.payload}):e}))});case"SET_USERS":return Object(r.a)(Object(r.a)({},e),{},{usersData:t.users});case"SET_CURRENT_PAGE":return Object(r.a)(Object(r.a)({},e),{},{currentPage:t.payload});case"SET_TOTAL_USERS_COUNT":return Object(r.a)(Object(r.a)({},e),{},{totalUsersCount:t.payload});case"TOGGLE_IS_FETCHING":return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.payload});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(r.a)(Object(r.a)({},e),{},{followingInProgress:t.payload?[].concat(Object(n.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!=t.id}))});default:return e}}}},[[163,1,3]]]);
//# sourceMappingURL=main.a754a12e.chunk.js.map