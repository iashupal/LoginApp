(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(75)},30:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},44:function(e,a,t){},51:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(22),s=t.n(i),r=(t(30),t(33),t(35),t(37),t(79)),m=t(77),c=t(78),o=(t(15),t(40),t(6)),u=t(7),d=t(11),h=t(8),p=t(12),E=(t(44),t(9)),v=t.n(E),b=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(h.a)(a).call(this))).state={email:"",pwd:"",users:[]},e}return Object(p.a)(a,e),Object(u.a)(a,[{key:"handleUsernameChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({pwd:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),v.a.post("/signin").send({email:this.state.email,pwd:this.state.pwd}).set("Accept","application/json").then(function(e){console.log(e),console.log("...---\x3e",e.text.msg)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"signIn"},l.a.createElement("form",{action:"#",className:"formFields",onSubmit:this.handleSubmit.bind(this),noValidate:!0},l.a.createElement("div",{className:"formField"},l.a.createElement("label",{htmlFor:"username",className:"label"},"Full Name"),l.a.createElement("input",{type:"text",id:"username",className:"input",placeholder:"Enter your email",name:"username",onChange:this.handleUsernameChange.bind(this),value:this.state.email,required:!0})),l.a.createElement("div",{className:"formField"},l.a.createElement("label",{htmlFor:"pwd",className:"label"},"Password"),l.a.createElement("input",{type:"password",id:"pwd",className:"input",placeholder:"Enter your password",name:"pwd",onChange:this.handlePasswordChange.bind(this),value:this.state.pwd,required:!0})),l.a.createElement("div",{className:"formField"},l.a.createElement("button",{id:"btn",className:"btn",name:"Submit"},"SignIn"))))}}]),a}(l.a.Component),g=(t(51),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(h.a)(a).call(this))).state={username:"",pwd:"",email:"",users:[]},e}return Object(p.a)(a,e),Object(u.a)(a,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({pwd:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),v.a.post("/signup").send({name:this.state.username,pwd:this.state.pwd,email:this.state.email}).set("Accept","application/json").then(function(e){console.log(e),console.log("...---\x3e",e.text.msg)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"signIn"},l.a.createElement("form",{action:"#",className:"formFields",onSubmit:this.handleSubmit.bind(this),noValidate:!0},l.a.createElement("div",{className:"formField"},l.a.createElement("label",{htmlFor:"username",className:"label"},"Full Name"),l.a.createElement("input",{type:"text",id:"username",className:"input",placeholder:"Enter your name",name:"username",onChange:this.handleUsernameChange.bind(this),value:this.state.username,required:!0})),l.a.createElement("div",{className:"formField"},l.a.createElement("label",{htmlFor:"email",className:"label"},"Email"),l.a.createElement("input",{type:"email",id:"email",className:"input",placeholder:"Enter your email",name:"email",onChange:this.handleEmailChange.bind(this),value:this.state.email,required:!0})),l.a.createElement("div",{className:"formField"},l.a.createElement("label",{htmlFor:"pwd",className:"label"},"Password"),l.a.createElement("input",{type:"password",id:"pwd",className:"input",placeholder:"Enter your password",name:"pwd",onChange:this.handlePasswordChange.bind(this),value:this.state.pwd,required:!0})),l.a.createElement("div",{className:"formField"},l.a.createElement("button",{id:"btn",className:"btn",name:"Submit"},"SignUp"))))}}]),a}(l.a.Component)),w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"inner-container"},l.a.createElement(r.a,null,l.a.createElement("div",{className:"router-div"},l.a.createElement("div",{className:"tab-view"},l.a.createElement("ul",null,l.a.createElement("li",{className:"signup-li active"},l.a.createElement(m.a,{to:"/"},"SignUp")),l.a.createElement("li",{className:"signin-li"},l.a.createElement(m.a,{to:"/signin"},"SignIn"))),l.a.createElement(c.a,{exact:!0,path:"/",component:g}),l.a.createElement(c.a,{exact:!0,path:"/signin",component:b}))))))},f=function(){return l.a.createElement("div",{className:"main-page"},l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(24),y=t.n(N);window.axios=y.a,s.a.render(l.a.createElement(function(){return l.a.createElement(f,null)},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.4f2aca23.chunk.js.map