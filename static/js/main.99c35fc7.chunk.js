(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"auth",function(){return U});var r={};a.r(r),a.d(r,"doCreateUserWithEmailAndPassword",function(){return A}),a.d(r,"doSignInWithEmailAndPassword",function(){return P}),a.d(r,"doSignOut",function(){return x}),a.d(r,"doPasswordReset",function(){return W}),a.d(r,"doPasswordUpdate",function(){return I});var c=a(0),o=a.n(c),i=a(29),l=a.n(i),s=(a(59),a(6)),u=a(7),m=a(9),p=a(8),h=a(10),d=a(53),v=(a(61),a(166)),f=a(168),E=a(167),b=a(23),O=a(165),g=a(72),j=a(164),w="/RecipeApp/signup",k="/RecipeApp/signin",S="/RecipeApp/dashboard",y="/RecipeApp/account",N=a(32),C=a.n(N);a(70);C.a.apps.length||C.a.initializeApp({apiKey:"AIzaSyA701yk9dnepvJW7ttEHXH3PH_nOk0PBG4",authDomain:"recipe-app-482c9.firebaseapp.com",databaseURL:"https://recipe-app-482c9.firebaseio.com",projectId:"recipe-app-482c9",storageBucket:"",messagingSenderId:"621777142063"});var U=C.a.auth(),A=function(e,t){return U.createUserWithEmailAndPassword(e,t)},P=function(e,t){return U.signInWithEmailAndPassword(e,t)},x=function(){return U.signOut()},W=function(e){return U.sendPasswordResetEmail(e)},I=function(e){return U.currentUser.updatePassword(e)},L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).logout=function(){var e=a.props.history;r.doSignOut().then(function(){e.push(k)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("a",{href:"#",onClick:this.logout},"Sign Out")}}]),t}(c.Component),R=Object(j.a)(L),D=(a(76),a(52)),M=a.n(D),F=a(50),B=a.n(F);function H(e){var t=e.open,a=e.onClickMenu;return t?o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{onClick:a})):o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,{className:"pointer",onClick:a}))}var J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){l.a.findDOMNode(Object(b.a)(Object(b.a)(a))).contains(e.target),a.setState({isOpen:!1})},a.handleOpen=function(e,t){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick,!1)}},{key:"render",value:function(){var e=this.props,t=e.authUser,a=(e.onClickMenu,this.state.isOpen);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"".concat(a?"dark":"")}),o.a.createElement("div",{className:"side-menu ".concat(a?"active-side-menu":""," ")},o.a.createElement("ul",null,o.a.createElement("li",null,"About"))),o.a.createElement("nav",{className:"navbar navbar-expand-lg"},o.a.createElement(H,{open:a,onClickMenu:this.handleOpen}),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},t?o.a.createElement(T,{Email:t.email,routePath:this.props.location.pathname}):o.a.createElement(z,{routePath:this.props.location.pathname}))))}}]),t}(o.a.Component),T=function(e){e.Email;var t=e.routePath;return o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(O.a,{className:"navbar-link ".concat("/dashboard"==t?"activeLink":""),to:S},"Dashboard")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(O.a,{className:"navbar-link ".concat("/account"==t?"activeLink":""),to:y},"Account")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(R,null)))},z=function(e){var t=e.routePath;return o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(O.a,{className:"navbar-link ".concat("/home"==t?"activeLink":""),to:"/RecipeApp/home"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(O.a,{className:"navbar-link ".concat("/signin"==t?"activeLink":""),to:k},"Sign In")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(O.a,{className:"navbar-link ".concat("/signup"==t?"activeLink":""),to:w},"Sign Up")))},G=Object(g.a)(J),K=a(20),X=a(19),$={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},_=function(e,t){return function(){return Object(X.a)({},e,t)}},q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=(t.username,t.email),c=t.passwordOne,o=a.props.history;r.doCreateUserWithEmailAndPassword(n,c).then(function(e){a.setState(Object(K.a)({},$)),o.push(k)}).catch(function(e){a.setState(_("error",e))}),e.preventDefault()},a.state=Object(K.a)({},$),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,r=t.passwordOne,c=t.passwordTwo,i=t.error,l=r!==c||""===r||""===n||""===a;return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{value:a,onChange:function(t){return e.setState(_("username",t.target.value))},type:"text",placeholder:"Full Name"}),o.a.createElement("input",{value:n,onChange:function(t){return e.setState(_("email",t.target.value))},type:"text",placeholder:"Email Address"}),o.a.createElement("input",{value:r,onChange:function(t){return e.setState(_("passwordOne",t.target.value))},type:"password",placeholder:"Password"}),o.a.createElement("input",{value:c,onChange:function(t){return e.setState(_("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm Password"}),o.a.createElement("button",{disabled:l,type:"submit"},"Sign Up"),i&&o.a.createElement("p",null,i.message))}}]),t}(c.Component),Q=function(){return o.a.createElement("p",null,"Don't have an account?"," ",o.a.createElement(O.a,{to:w},"Sign Up"))},V=Object(j.a)(function(e){var t=e.history;return o.a.createElement("div",null,o.a.createElement("h1",null,"SignUp"),o.a.createElement(q,{history:t}))}),Y=function(e,t){return function(){return Object(X.a)({},e,t)}},Z={email:"",password:"",error:null},ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,c=t.password,o=a.props.history;r.doSignInWithEmailAndPassword(n,c).then(function(){a.setState(Object(K.a)({},Z)),o.push(S)}).catch(function(e){a.setState(Y("error",e))}),e.preventDefault()},a.state=Object(K.a)({},Z),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,c=""===n||""===a;return o.a.createElement("form",{onSubmit:this.onSubmit,className:"col-12 my-LogIn-form m-auto"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{value:a,onChange:function(t){return e.setState(Y("email",t.target.value))},type:"text",placeholder:"Email Address",className:"form-control"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{value:n,onChange:function(t){return e.setState(Y("password",t.target.value))},type:"password",placeholder:"Password",className:"form-control"})),o.a.createElement("button",{disabled:c,type:"submit",className:"btn submit-btn"},"Sign In"),r&&o.a.createElement("p",null,r.message))}}]),t}(c.Component),te=Object(j.a)(function(e){var t=e.history;return o.a.createElement("div",{className:"text-center content-to-middle"},o.a.createElement("h1",null,"Sign In"),o.a.createElement(ee,{history:t}),o.a.createElement(Q,null))}),ae=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"text-center"},o.a.createElement("h2",null,"Dashboard"))}}]),t}(c.Component),ne=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"text-center"},o.a.createElement("h2",null,"My Account"))}}]),t}(c.Component),re=Object(j.a)(ne),ce=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to our site!"))},oe=function(e){var t=e.component,a=Object(d.a)(e,["component"]);return o.a.createElement(v.a,Object.assign({},a,{render:function(e){return e.authUser?o.a.createElement(t,e):o.a.createElement(f.a,{to:"/signin"})}}))};function ie(e){var t=e.authUser;return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,{exact:!0,path:S,component:ae,authUser:t}),o.a.createElement(oe,{exact:!0,path:y,component:re,authUser:t}),o.a.createElement(v.a,{exact:!0,path:k,component:te,authUser:t}),o.a.createElement(v.a,{exact:!0,path:w,component:V,authUser:t}))}var le=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).toggleOpen=function(){e.setState({isOpen:!e.state.isOpen})},e.state={speed:10,authUser:null,isOpen:!1},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;n.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"render",value:function(){var e=this.state.authUser;return o.a.createElement(E.a,null,o.a.createElement("div",{className:"container-fluid my-pad"},o.a.createElement(G,{authUser:e,onClickMenu:this.toggleOpen}),o.a.createElement(ie,{authUser:e}),o.a.createElement(v.a,{exact:!0,path:"/",render:function(){return o.a.createElement(f.a,{to:"/home"})}}),o.a.createElement(v.a,{exact:!0,path:"/RecipeApp/home",component:ce})))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(158),a(49),a(160),a(161);l.a.render(o.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){e.exports=a(162)},59:function(e,t,a){},61:function(e,t,a){},76:function(e,t,a){}},[[54,2,1]]]);
//# sourceMappingURL=main.99c35fc7.chunk.js.map