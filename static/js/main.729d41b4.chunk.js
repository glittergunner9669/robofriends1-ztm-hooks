(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(4),o=n.n(s),a=(n(14),n(2)),i=function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})},h=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(i,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},b=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},l=n(5),u=n(6),d=n(8),O=n(7),f=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Oooops. That is not good!"}):this.props.children}}]),n}(r.Component);n(15);var p=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),i=Object(a.a)(o,2),l=i[0],u=i[1],d=Object(r.useState)(0),O=Object(a.a)(d,2),p=O[0],x=O[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)})),console.log(p)}),[p]);var m=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(c.jsx)("button",{onClick:function(){return x(p+1)},children:"Click Me"}),Object(c.jsx)(j,{searchChange:function(e){u(e.target.value)}}),Object(c.jsx)(b,{children:Object(c.jsx)(f,{children:Object(c.jsx)(h,{robots:m})})})]}):Object(c.jsx)("h1",{children:"Loading..."})};n(16);o.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.729d41b4.chunk.js.map