(this["webpackJsonpproduct-catalog"]=this["webpackJsonpproduct-catalog"]||[]).push([[0],{253:function(e,t,r){},263:function(e,t,r){},264:function(e,t,r){},265:function(e,t,r){},266:function(e,t,r){},267:function(e,t,r){},268:function(e,t,r){"use strict";r.r(t);var c=r(3),n=r(0),a=r.n(n),s=r(36),i=r.n(s),o=r(29),u=(r(65),r(10)),d=r.n(u),l=r(12),j=r(13),p=r(22),b=r(8),h=(r(253),r(11)),m=r(18),O=r(57),f=(r(254),r(256),r(269),O.a.initializeApp({apiKey:"AIzaSyBxb0xYXk2ZbLcz_3FymDkVuYjhq0eTeVU",authDomain:"auth-test-dc179.firebaseapp.com",databaseURL:"https://auth-test-dc179-default-rtdb.firebaseio.com",projectId:"auth-test-dc179",storageBucket:"auth-test-dc179.appspot.com",messagingSenderId:"238220952507",appId:"1:238220952507:web:ee260232234f8bac0e7a9e"})),x=f.auth(),v=f.storage(),g=f.database(),y=r(19),w="SET_CURRENT_USER",F="SET_PRODUCTS",_="SET_ID_SELECTED_PRODUCT";function S(){return x.signOut()}function U(e,t){return x.createUserWithEmailAndPassword(e,t)}function N(e,t){return x.signInWithEmailAndPassword(e,t)}var C="products";var k={setCurrentUser:function(e){return{type:w,payload:e}}},D=Object(y.b)(null,k)((function(e){var t=e.isSignUp,r=Object(n.useState)({email:"a2@gmail.com",password:"123456"}),a=Object(p.a)(r,2),s=a[0],i=a[1],o=Object(h.g)();function u(){return(u=Object(j.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,!t){e.next=7;break}return e.next=5,U(s.email,s.password);case 5:e.next=9;break;case 7:return e.next=9,N(s.email,s.password);case 9:o.push("/".concat(C)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Failed an operation");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){x.onAuthStateChanged((function(t){e.setCurrentUser(t)}))}),[]),Object(c.jsx)("div",{className:"Auth",children:Object(c.jsx)(b.Card,{children:Object(c.jsxs)(b.Card.Body,{children:[Object(c.jsx)(b.Card.Title,{children:t?"Sign Up":"Sign In"}),Object(c.jsxs)(b.Form,{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"email-input",children:"Email address"}),Object(c.jsx)(b.Form.Input,{type:"email",id:"email-input",placeholder:"Enter email",value:s.email,required:!0,onChange:function(e){return i((function(t){return Object(l.a)(Object(l.a)({},t),{},{email:e.target.value})}))}})]}),Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"password-imput",children:"Password"}),Object(c.jsx)(b.Form.Input,{type:"password",id:"password-imput",placeholder:"Password",value:s.password,required:!0,onChange:function(e){return i((function(t){return Object(l.a)(Object(l.a)({},t),{},{password:e.target.value})}))}})]}),Object(c.jsx)(b.Form.Group,{}),Object(c.jsx)(b.Button,{primary:!0,type:"submit",children:"Submit"})]}),Object(c.jsx)("div",{className:"signin-link",children:t?Object(c.jsx)(m.b,{to:"/",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}):Object(c.jsx)(m.b,{to:"/signUp",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})})})})),L=(r(263),r(48));function P(e){return g.ref(e)}function I(e){return A.apply(this,arguments)}function A(){return(A=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.ref("products/".concat(t.name)).put(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.ref("products").child(t.name).getDownloadURL());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,r,c){return e=Math.abs(e),(e%=100)>=5&&e<=20?c:1===(e%=10)?t:e>=2&&e<=4?r:c}function G(e){var t=e;if(t.file=e.file[0],e.date){var r=Date.parse(e.date);t.date=r+864e5}return t}function R(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,c=e.getDate();return r=r>10?r:"0".concat(r),c=c>10?c:"0".concat(c),"".concat(t,"-").concat(r,"-").concat(c)}r(264);function q(e){var t=e.error;return Object(c.jsx)(c.Fragment,{children:t&&Object(c.jsx)(b.Alert,{className:"alert",danger:!0,children:t.message})})}var V=Object(y.b)((function(e){var t=e.products,r=t.idSelectedProduct,c=t.productsList;return{idSelectedProduct:r,selectedProduct:c.find((function(e){return e.productId===r}))}}))((function(e){var t=e.isDefaultForm,r=e.selectedProduct,a=Object(n.useState)(!1),s=Object(p.a)(a,2),i=s[0],o=s[1],u=Object(n.useState)(!1),l=Object(p.a)(u,2),m=l[0],O=l[1],f=Object(L.b)(),x=f.register,v=f.handleSubmit,g=f.errors,y=f.watch,w=f.control,F=y("discount",!(!r||!r.discount)),_=y("file",!1),S=Object(h.g)();function U(){return(U=Object(j.a)(d.a.mark((function e(t){var r,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return r=G(t),o(!0),c=N(),e.prev=5,e.next=8,I(r.file);case 8:return e.next=10,E(r.file);case 10:n=e.sent,r.file=n,k(c,r),S.push("/".concat(C)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.error("Data is not uloaded");case 19:o(!1);case 20:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}function N(){return P(r?"".concat(C,"/").concat(r.productId):C)}function k(e,t){r?e.set(t):e.push(t)}return Object(c.jsx)("div",{className:"ProductForm",children:Object(c.jsx)(b.Card,{children:Object(c.jsx)(b.Card.Body,{children:Object(c.jsxs)(b.Form,{onSubmit:v((function(e){return U.apply(this,arguments)})),children:[Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"title",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a*"}),Object(c.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",className:"form-control",defaultValue:r&&r.title,ref:x({required:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0443\u0441\u0442.",minLength:{value:20,message:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043c\u0435\u043d\u0435\u0435 20-\u0442\u0438 \u0441\u0438\u043c\u043e\u0432\u043e\u043b\u043e\u0432."},maxLength:{value:60,message:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u0431\u043e\u043b\u0435\u0435 60-\u0442\u0438 \u0441\u0438\u043c\u043e\u0432\u043e\u043b\u043e\u0432."}})}),Object(c.jsx)(q,{error:g.title})]}),Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"file",children:"\u0424\u043e\u0442\u043e*"}),Object(c.jsx)(L.a,{control:w,name:"file",rules:{required:"\u0424\u043e\u0442\u043e \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e."},render:function(e){var t=e.onChange;return Object(c.jsx)("input",{type:"file",id:"file",className:"input-block",onChange:function(e){var r=e.target.files[0],c=e.target.files;t(c),function(e){var t=new FileReader,r=new Image;t.onloadend=function(){r.onload=function(){var e=r.width<200||r.height<200||r.width>4e3||r.height>4e3;O(!e)},r.onerror=function(){return O(!1)},r.src=t.result},t.readAsDataURL(e)}(r)}})}}),Object(c.jsx)(q,{error:g.file}),_&&!m&&Object(c.jsx)(q,{error:{message:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430."}})]}),Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"description",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(c.jsx)("textarea",{type:"text",id:"description",name:"description",defaultValue:r&&r.description,rows:"3",className:"form-control",ref:x({maxLength:{value:200,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - 200"}})}),Object(c.jsx)(q,{error:g.description})]}),Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"price",children:"\u0426\u0435\u043d\u0430*"}),Object(c.jsx)("input",{type:"text",name:"price",id:"price",defaultValue:r&&r.price,className:"form-control",placeholder:"99999999.99$",ref:x({required:"\u0426\u0435\u043d\u0430 \u043d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u0430.",maxLength:{value:"11",message:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0430 \u0446\u0435\u043d\u0430."},pattern:{value:/^(\d{1,8}|\d{1,8}\.{1}\d{1,2})$/,message:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0430 \u0446\u0435\u043d\u0430."}})}),Object(c.jsx)(q,{error:g.price})]}),Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"discount",children:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043a\u0438\u0434\u043a\u0438"}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"10-90%",id:"discount",defaultValue:r&&r.discount,name:"discount",ref:x({min:{value:10,message:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 10."},max:{value:90,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 90."},maxLength:{value:2,message:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."},pattern:{value:/^\d{1,2}$/,message:"\u0412\u0432\u043e\u0434\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u0430."}})}),Object(c.jsx)(q,{error:g.discount})]}),F&&Object(c.jsxs)(b.Form.Group,{children:[Object(c.jsx)("label",{htmlFor:"discount-end-date",children:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0441\u043a\u0438\u0434\u043a\u0438*"}),Object(c.jsx)("input",{type:"date",id:"discount-end-date",className:"input-block",name:"date",min:R(),defaultValue:R(),ref:x({required:!0})})]}),Object(c.jsx)(b.Button,{primary:!0,type:"submit",disabled:i,children:t?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})})})})}));r(265);var M={setIdSelectedProduct:function(e){return{type:_,payload:e}}},z=Object(y.b)(null,M)((function(e){var t=e.productId,r=e.title,n=e.price,a=e.description,s=e.file,i=e.date,o=e.discount,u=e.setIdSelectedProduct,d=Object(h.g)(),l=i>Date.now();return Object(c.jsx)("div",{className:"product",children:Object(c.jsxs)(b.Card,{children:[Object(c.jsx)("div",{className:"product__image",children:Object(c.jsx)("img",{src:s,alt:""})}),Object(c.jsxs)(b.Card.Body,{children:[Object(c.jsx)(b.Card.Title,{children:r}),Object(c.jsx)(b.Card.Text,{children:a})]}),Object(c.jsxs)("div",{className:"product__price",children:[l&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"product__discount-days",children:function(){var e=Math.floor((i-Date.now())/36e5),t=Math.floor(e/24);return t?"\u0414\u043e \u043a\u043e\u043d\u0446\u0430 \u0430\u043a\u0446\u0438\u0438 ".concat(t," ").concat(T(t,"\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439")):"\u0414\u043e \u043a\u043e\u043d\u0446\u0430 \u0430\u043a\u0446\u0438\u0438 ".concat(e," ").concat(T(e,"\u0447\u0430\u0441","\u0447\u0430\u0441\u0430","\u0447\u0430\u0441\u043e\u0432"))}()}),Object(c.jsxs)("div",{className:"product__discount-persent",children:[o,"% \u0441\u043a\u0438\u0434\u043a\u0430"]}),Object(c.jsxs)("span",{className:"product__discount-price",children:[(n-n*o/100).toFixed(2)," \u0433\u0440\u043d."]})]}),Object(c.jsxs)("span",{className:"product__current-price ".concat(l&&"product__discount-active"),children:[n," \u0433\u0440\u043d."]})]}),Object(c.jsxs)(b.Card.Footer,{children:[Object(c.jsx)(b.Button,{className:"product__delete-button",primary:!0,onClick:function(){return e="".concat(C,"/").concat(t),void g.ref(e).remove();var e},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(c.jsx)(b.Button,{primary:!0,onClick:function(){u(t),d.push("/change-form")},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})})}));r(266);var Y={setProductsList:function(e){return{type:F,payload:e}}},$=Object(y.b)((function(e){return{productsList:e.products.productsList}}),Y)((function(e){var t=e.setProductsList,r=e.productsList;return Object(n.useEffect)((function(){P(C).on("value",(function(e){var r=e.val(),c=[];for(var n in r)c.push(Object(l.a)({productId:n},r[n]));t(c)}))}),[]),Object(c.jsx)("div",{className:"Products",children:r.length?r.map((function(e,t){return Object(c.jsx)(z,Object(l.a)({},e),t)})):Object(c.jsx)(q,{error:{message:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u0444\u043e\u0440\u043c\u043e\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430."}})})})),J=r(59);function W(e){var t=e.component,r=e.isUserAuth,n=Object(J.a)(e,["component","isUserAuth"]);return Object(c.jsx)(h.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return r?Object(c.jsx)(t,Object(l.a)(Object(l.a)({},e),{},{isDefaultForm:n.isDefaultForm})):Object(c.jsx)(h.a,{to:"/"})}}))}var K=r(33);r(267);function X(){var e=Object(h.h)().pathname,t="/".concat(C),r="/form";return Object(c.jsxs)("nav",{className:"menu",children:[e!==t&&Object(c.jsx)(m.c,{to:t,className:"menu__link",children:Object(c.jsx)(K.Button,{primary:!0,children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})}),e!==r&&Object(c.jsx)(m.c,{to:r,className:"menu__link",children:Object(c.jsx)(K.Button,{primary:!0,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),Object(c.jsx)(m.c,{to:"/",className:"menu__link",children:Object(c.jsx)(K.Button,{primary:!0,onClick:S,children:"\u0412\u044b\u0439\u0442\u0438"})})]})}var Z=Object(y.b)((function(e){return{isUserAuth:e.auth.currentUser}}))((function(e){var t=e.isUserAuth;return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(m.a,{children:[t&&Object(c.jsx)(X,{}),Object(c.jsxs)(h.d,{children:[Object(c.jsx)(W,{path:"/".concat(C),isUserAuth:t,component:$}),Object(c.jsx)(W,{path:"/form",isDefaultForm:!0,isUserAuth:t,component:V}),Object(c.jsx)(W,{path:"/change-form",isDefaultForm:!1,isUserAuth:t,component:V}),t&&Object(c.jsx)(h.a,{exact:!0,from:"/",to:"/".concat(C)}),Object(c.jsx)(h.b,{path:"/signUp",render:function(){return Object(c.jsx)(D,{isSignUp:!0})}}),Object(c.jsx)(h.b,{path:"/",render:function(){return Object(c.jsx)(D,{isSignUp:!1})}})]})]})})})),H={currentUser:""},Q={productsList:[],idSelectedProduct:""},ee=Object(o.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(l.a)(Object(l.a)({},e),{},{productsList:t.payload});case _:return Object(l.a)(Object(l.a)({},e),{},{idSelectedProduct:t.payload});default:return e}}}),te=Object(o.c)(ee);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y.a,{store:te,children:Object(c.jsx)(Z,{})})}),document.getElementById("root"))},65:function(e,t,r){}},[[268,1,2]]]);
//# sourceMappingURL=main.8a09e1d9.chunk.js.map