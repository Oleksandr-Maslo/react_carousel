(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n.n(a),s=n(2),r=n(8),c=n(3),l=n(4),o=n(6),m=n(5),u=n(1),j=n.n(u),b=(n(14),n(15),n(0)),p=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={pointer:0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.images,a=t.step,i=t.frameSize,s=t.itemWidth,r=t.animationDuration,c=t.infinite,l=this.state.pointer,o=n.length-a,m=-l*s;return Object(b.jsxs)("div",{className:"Carousel",children:[Object(b.jsx)("div",{className:"container",style:{width:i*s},children:Object(b.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(m,"px)"),transition:"transform ".concat(r,"ms ease")},children:n.map((function(e){return Object(b.jsx)("li",{className:"item",children:Object(b.jsx)("img",{src:e,alt:"",style:{width:"".concat(s,"px")}})},e)}))})}),Object(b.jsx)("button",{type:"button",onClick:function(){l-1<0?e.setState({pointer:0}):e.setState({pointer:l-a}),0===l&&"true"===c&&e.setState({pointer:o})},children:"Prev"}),Object(b.jsx)("button",{type:"button","data-cy":"next",onClick:function(){l+a>o?e.setState({pointer:o}):e.setState({pointer:l+a}),l===o&&"true"===c&&e.setState({pointer:0})},children:"Next"})]})}}]),n}(u.Component),d=p,h=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],f=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:"false"},e.stateUpdate=function(t,n){e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t,n))}))},e.removeNegatives=function(e){"-"===e.key&&e.preventDefault()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.step,a=t.frameSize,i=t.itemWidth,s=t.animationDuration,r=t.infinite;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(h.length," images")}),Object(b.jsx)(d,{images:h,step:n,frameSize:a,itemWidth:i,animationDuration:s,infinite:r},i)]}),Object(b.jsxs)("form",{action:"#",className:"form",children:[Object(b.jsxs)("label",{className:"form-labels",children:[Object(b.jsx)("div",{children:"Step"}),Object(b.jsx)("input",{type:"number",name:"step",defaultValue:n,min:0,className:"form-item",onKeyDown:this.removeNegatives,onChange:function(t){return e.stateUpdate(t.target.name,t.target.value)}})]}),Object(b.jsxs)("label",{className:"form-labels",children:[Object(b.jsx)("div",{children:"Frame size"}),Object(b.jsx)("input",{type:"number",name:"frameSize",defaultValue:a,min:0,className:"form-item",onKeyDown:this.removeNegatives,onChange:function(t){return e.stateUpdate(t.target.name,t.target.value)}})]}),Object(b.jsxs)("label",{className:"form-labels",children:[Object(b.jsx)("div",{children:"Item width"}),Object(b.jsx)("input",{type:"number",name:"itemWidth",defaultValue:i,min:0,className:"form-item",onKeyDown:this.removeNegatives,onChange:function(t){return e.stateUpdate(t.target.name,t.target.value)}})]}),Object(b.jsxs)("label",{className:"form-labels",children:[Object(b.jsx)("div",{children:"Animation duration"}),Object(b.jsx)("input",{type:"number",name:"animationDuration",defaultValue:s,min:0,className:"form-item",onKeyDown:this.removeNegatives,onChange:function(t){return e.stateUpdate(t.target.name,t.target.value)}})]}),Object(b.jsxs)("label",{className:"form-labels",children:[Object(b.jsx)("div",{children:"Infinite animation"}),Object(b.jsxs)("select",{name:"infinite",defaultValue:"false",className:"form-item",onChange:function(t){return e.stateUpdate(t.target.name,t.target.value)},children:[Object(b.jsx)("option",{value:"true",children:" true "}),Object(b.jsx)("option",{value:"false",children:" false "})]})]})]})]})}}]),n}(j.a.Component),g=f;i.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4e0e83fa.chunk.js.map