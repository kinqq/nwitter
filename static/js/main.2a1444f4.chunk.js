(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{33:function(e,t,a){e.exports=a(51)},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),i=a(4),u=a(11),o=a(3),s=a(5),m=a.n(s),p=a(9),f=a(7),d=a(16),E=a(17);a(43),a(45),a(52);E.initializeApp({apiKey:"AIzaSyCDPs8R3ZOdlD2QL1tVW1s_I4xhWYPKCyE",authDomain:"nwitter-abf39.firebaseapp.com",databaseURL:"https://nwitter-abf39.firebaseio.com",projectId:"nwitter-abf39",storageBucket:"nwitter-abf39.appspot.com",messagingSenderId:"758817218242",appId:"1:758817218242:web:f8d9228ea81441c780655b"});var b=E,h=E.auth(),v=E.firestore(),g=E.storage(),y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),o=u[0],s=u[1],f=Object(n.useState)(!0),d=Object(i.a)(f,2),E=d[0],b=d[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),y=g[0],j=g[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},O=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),j(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:w,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,className:"authInput",onChange:w}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:E?"Create Account":"Sign In"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){return b((function(e){return!e}))},className:"authSwitch"},E?"Sign In":"Create Account"))},j=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.name,n="google"===a?new b.auth.GoogleAuthProvider:new b.auth.GithubAuthProvider,e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"5x",style:{marginBottom:30}}),r.a.createElement(y,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},r.a.createElement(f.a,{icon:d.b,size:"2x"})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},r.a.createElement(f.a,{icon:d.a,size:"2x"}))))},w=a(32),O=a(12),x=function(e){var t=e.nweetObj,a=e.editPriority,c=Object(n.useState)(!1),l=Object(i.a)(c,2),u=l[0],o=l[1],s=Object(n.useState)(t.text),d=Object(i.a)(s,2),E=d[0],b=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,v.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return o((function(e){return!e}))},j=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,v.doc("nweets/".concat(t.id)).update({text:E});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},u?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:E,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:y,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("a",{href:t.attachmentUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:t.attachmentUrl,alt:"attachment"})),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:h},r.a.createElement(f.a,{icon:O.d})),r.a.createElement("span",{onClick:y},r.a.createElement(f.a,{icon:O.a})))))},N=a(54),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],u=c[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),d=s[0],E=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==l){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===d){e.next=12;break}return r=g.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(d,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return i={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,v.collection("nweets").add(i);case 15:u(""),E("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(f.a,{icon:O.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;E(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),d&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:d,style:{backgroundImage:d},alt:"attachment"}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return E("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(f.a,{icon:O.c}))))},I=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){v.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));u(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,editPriority:e.creatorId===t.uid||1===t.priority})}))))},C=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),l=Object(n.useState)(a.displayName),u=Object(i.a)(l,2),s=u[0],f=u[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),c.push("/")}},"Log Out"))},S=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(u.c,{to:"/",style:{marginRight:10}},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(f.a,{icon:O.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},F=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(u.b,null,a&&r.a.createElement(S,{userObj:n}),r.a.createElement(o.c,null,r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(I,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(C,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(j,null))))))};var A=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],m=o[1],p=["iZ8twQlEqYfTII6mCbP2sqNmmRE3","yRH74zbkCsYlfQjDzreVbHEa1EC2"];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){if(e){var t=p.includes(e.uid)?1:0;m({displayName:e.displayName,uid:e.uid,priority:t,updateProfile:function(t){return e.updateProfile(t)}})}else m(null);c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(u.a,null,r.a.createElement(F,{refreshUser:function(){var e=h.currentUser,t=p.includes(e.uid)?1:0;m({displayName:e.displayName,uid:e.uid,priority:t,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(s),userObj:s})):"Initializing...")};a(50);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2a1444f4.chunk.js.map