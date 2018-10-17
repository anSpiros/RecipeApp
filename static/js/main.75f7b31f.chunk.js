(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"ROOT",function(){return w}),a.d(n,"REGISTER",function(){return S}),a.d(n,"LOGIN",function(){return k}),a.d(n,"LANDING",function(){return y}),a.d(n,"DASHBOARD",function(){return C}),a.d(n,"ACCOUNT",function(){return A}),a.d(n,"PASSWORD_FORGET",function(){return P});var r={};a.r(r),a.d(r,"auth",function(){return L});var c={};a.r(c),a.d(c,"doCreateUserWithEmailAndPassword",function(){return U}),a.d(c,"doSignInWithEmailAndPassword",function(){return I}),a.d(c,"doSignOut",function(){return W}),a.d(c,"doPasswordReset",function(){return D}),a.d(c,"doPasswordUpdate",function(){return M});var o=a(0),l=a.n(o),i=a(29),s=a.n(i),u=(a(59),a(6)),m=a(7),p=a(9),d=a(8),h=a(10),f=a(53),v=(a(61),a(166)),E=a(168),b=a(167),g=a(23),O=a(165),j=a(72),N=a(164),w="/RecipeApp/",S="/RecipeApp/register",k="/RecipeApp/login",y="/RecipeApp/home",C="/RecipeApp/dashboard",A="/RecipeApp/account",P="/RecipeApp/pw-forget",x=a(32),R=a.n(x);a(70);R.a.apps.length||R.a.initializeApp({apiKey:"AIzaSyA701yk9dnepvJW7ttEHXH3PH_nOk0PBG4",authDomain:"recipe-app-482c9.firebaseapp.com",databaseURL:"https://recipe-app-482c9.firebaseio.com",projectId:"recipe-app-482c9",storageBucket:"",messagingSenderId:"621777142063"});var L=R.a.auth(),U=function(e,t){return L.createUserWithEmailAndPassword(e,t)},I=function(e,t){return L.signInWithEmailAndPassword(e,t)},W=function(){return L.signOut()},D=function(e){return L.sendPasswordResetEmail(e)},M=function(e){return L.currentUser.updatePassword(e)},F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).logout=function(){var e=a.props.history;c.doSignOut().then(function(){e.push(k)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("a",{href:"#",onClick:this.logout},"Sign Out")}}]),t}(o.Component),T=Object(N.a)(F),B=(a(76),a(52)),G=a.n(B),H=a(50),J=a.n(H);function z(e){var t=e.open,a=e.onClickMenu;return t?l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{onClick:a})):l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{className:"pointer",onClick:a}))}var _=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){s.a.findDOMNode(Object(g.a)(Object(g.a)(a))).contains(e.target),a.setState({isOpen:!1})},a.handleOpen=function(e,t){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick,!1)}},{key:"render",value:function(){var e=this.props,t=e.authUser,a=(e.onClickMenu,this.state.isOpen);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(a?"dark":"")}),l.a.createElement("div",{className:"side-menu ".concat(a?"active-side-menu":""," ")},l.a.createElement("ul",null,l.a.createElement("li",null,"About"))),l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement(z,{open:a,onClickMenu:this.handleOpen}),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},t?l.a.createElement(K,{Email:t.email,routePath:this.props.location.pathname}):l.a.createElement(X,{routePath:this.props.location.pathname}))))}}]),t}(l.a.Component),K=function(e){e.Email;var t=e.routePath;return l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{className:"navbar-link ".concat(t==C?"activeLink":""),to:C},"Dashboard")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{className:"navbar-link ".concat(t==A?"activeLink":""),to:A},"Account")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(T,null)))},X=function(e){var t=e.routePath;return l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{className:"navbar-link ".concat(t==y?"activeLink":""),to:y},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{className:"navbar-link ".concat(t==k?"activeLink":""),to:k},"Log in")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{className:"navbar-link ".concat(t==S?"activeLink":""),to:S},"Register")))},$=Object(j.a)(_),q=a(21),Q=a(20),V={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},Y=function(e,t){return function(){return Object(Q.a)({},e,t)}},Z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=(t.username,t.email),r=t.passwordOne,o=a.props.history;c.doCreateUserWithEmailAndPassword(n,r).then(function(e){a.setState(Object(q.a)({},V)),o.push(C)}).catch(function(e){a.setState(Y("error",e))}),e.preventDefault()},a.state=Object(q.a)({},V),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,r=t.passwordOne,c=t.passwordTwo,o=t.error,i=r!==c||""===r||""===n||""===a;return l.a.createElement("form",{onSubmit:this.onSubmit,className:"col-12 my-form m-auto"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:a,onChange:function(t){return e.setState(Y("username",t.target.value))},type:"text",placeholder:"Full Name",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:n,onChange:function(t){return e.setState(Y("email",t.target.value))},type:"text",placeholder:"Email Address",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:r,onChange:function(t){return e.setState(Y("passwordOne",t.target.value))},type:"password",placeholder:"Password",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:c,onChange:function(t){return e.setState(Y("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm Password",className:"form-control"})),l.a.createElement("button",{disabled:i,type:"submit",className:"btn submit-btn"},"Sign Up"),o&&l.a.createElement("p",null,o.message))}}]),t}(o.Component),ee=function(){return l.a.createElement("p",null,"Don't have an account?"," ",l.a.createElement(O.a,{to:S},"Register"))},te=Object(N.a)(function(e){var t=e.history;return l.a.createElement("div",{className:"text-center content-to-middle"},l.a.createElement("h1",null,"Register"),l.a.createElement(Z,{history:t}))}),ae=function(e,t){return function(){return Object(Q.a)({},e,t)}},ne={email:"",password:"",error:null},re=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password,o=a.props.history;c.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(q.a)({},ne)),o.push(C)}).catch(function(e){a.setState(ae("error",e))}),e.preventDefault()},a.state=Object(q.a)({},ne),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,c=""===n||""===a;return l.a.createElement("form",{onSubmit:this.onSubmit,className:"col-12 my-form m-auto"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:a,onChange:function(t){return e.setState(ae("email",t.target.value))},type:"text",placeholder:"Email Address",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:n,onChange:function(t){return e.setState(ae("password",t.target.value))},type:"password",placeholder:"Password",className:"form-control"})),l.a.createElement("button",{disabled:c,type:"submit",className:"btn submit-btn"},"Sign In"),r&&l.a.createElement("p",null,r.message))}}]),t}(o.Component),ce=Object(N.a)(function(e){var t=e.history;return l.a.createElement("div",{className:"text-center content-to-middle"},l.a.createElement("h1",null,"Log in"),l.a.createElement(re,{history:t}),l.a.createElement(ee,null))}),oe=function(e){function t(e){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("h2",null,"Dashboard"))}}]),t}(o.Component),le=function(e){function t(e){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("h2",null,"My Account"))}}]),t}(o.Component),ie=Object(N.a)(le),se=function(){return l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",null,"Welcome to our site!"))};console.log(n);var ue=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return l.a.createElement(v.a,Object.assign({},a,{render:function(e){return!0===a.logStatus?l.a.createElement(t,e):l.a.createElement(E.a,{to:"/login"})}}))};function me(e){var t;e.authUser;return e.logStatus&&(t=l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{exact:!0,path:"/login",render:function(){return l.a.createElement(E.a,{to:"/dashboard"})}}),l.a.createElement(v.a,{exact:!0,path:"/register",render:function(){return l.a.createElement(E.a,{to:"/dashboard"})}}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(ue,{exact:!0,path:C,component:oe,logStatus:e.logStatus}),l.a.createElement(ue,{exact:!0,path:A,component:ie,logStatus:e.logStatus}),t,l.a.createElement(v.a,{exact:!0,path:k,component:ce}),l.a.createElement(v.a,{exact:!0,path:S,component:te}))}var pe=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).toggleOpen=function(){e.setState({isOpen:!e.state.isOpen})},e.state={speed:10,authUser:null,isOpen:!1,isLoggedIn:!1,loading:!0},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),r.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t,isLoggedIn:!0,loading:!1}):e.setState({authUser:null,isLoggedIn:!1,loading:!1})})}},{key:"render",value:function(){var e=this.state.authUser;return this.state.loading?l.a.createElement("div",{style:{textAlign:"center",position:"absolute",top:"25%",left:"50%"}},l.a.createElement("h3",null,"Loading")):l.a.createElement(b.a,null,l.a.createElement("div",{className:"container-fluid my-pad"},l.a.createElement($,{authUser:e,onClickMenu:this.toggleOpen}),l.a.createElement(me,{logStatus:this.state.isLoggedIn}),l.a.createElement(v.a,{exact:!0,path:w,render:function(){return l.a.createElement(E.a,{to:y})}}),l.a.createElement(v.a,{exact:!0,path:y,component:se})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(158),a(49),a(160),a(161);s.a.render(l.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){e.exports=a(162)},59:function(e,t,a){},61:function(e,t,a){},76:function(e,t,a){}},[[54,2,1]]]);
//# sourceMappingURL=main.75f7b31f.chunk.js.map