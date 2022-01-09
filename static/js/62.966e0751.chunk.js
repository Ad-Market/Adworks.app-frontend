/*! For license information please see 62.966e0751.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[62],{1246:function(e,t){},1248:function(e,t){},1254:function(e,t){},1255:function(e,t){},2518:function(e,t,n){"use strict";n.r(t);var s=n(22),r=n(0),a=n(729),c=n(539),i=n(1068),o=n(540),l=n(541),u=n(521),d=n(86),p=n(6),h=function(e){var t=e.products,n=e.stepper,s=e.deleteCartItem,r=e.dispatch,a=Object(d.c)((function(e){return e.ecommerce}));return Object(p.jsx)("div",{className:"list-view product-checkout",children:Object(p.jsxs)("div",{className:"w-75 m-auto",children:[t.length?a.cart.map((function(e,t){return Object(p.jsxs)(o.a,{className:"ecommerce-card",children:[Object(p.jsxs)(l.a,{children:[Object(p.jsx)("div",{className:"item-name",children:Object(p.jsx)("h6",{className:"mb-0",children:"Task-ID : 023".concat(t)})}),Object(p.jsx)("div",{className:"item-name",children:Object(p.jsx)("h3",{className:"mb-1",children:Object(p.jsx)(c.b,{to:"#",children:e.title})})}),Object(p.jsxs)("span",{className:"text-dark mb-1",children:["User Number : ",e.userNumber]})]}),Object(p.jsxs)("div",{className:"item-options text-center",children:[Object(p.jsx)("div",{className:"item-wrapper",children:Object(p.jsx)("div",{className:"item-cost",children:Object(p.jsxs)("h4",{className:"text-info",children:["$",e.budget]})})}),Object(p.jsxs)(u.a,{className:"mt-1 remove-wishlist",color:"danger",onClick:function(){return function(e){for(var t=[],n=[],c=0;c<a.cart.length;c++)e!==a.cart[c]._id&&t.push(a.cart[c]);for(var i=0;i<a.tasks.length;i++)e===a.tasks[i]._id?(n.push(a.tasks[i]),n[i].isInCart=!1):n.push(a.tasks[i]);r(s(t,n))}(e._id)},children:[Object(p.jsx)(i.a,{size:14,className:"mr-25"}),Object(p.jsx)("span",{children:"Remove"})]})]})]},e._id)})):Object(p.jsx)("h4",{style:{margin:"22% 40% 16%"},children:"Your cart is empty"}),t.length>0&&Object(p.jsx)(u.a.Ripple,{color:"primary",classnames:"btn-next place-order float-right",style:{float:"right"},disabled:!t.length,onClick:function(){return n.next()},children:"Place Order"})]})})},m=n(2),b=n.n(m),f=n(164),j=n(174),v=n(1456),O=n(165),x=n(1241),g=n.n(x),y=n(563),N=n(545),E=n(544),_=n(549),L=n(1066),w=function(e){var t=e.products,n=e.dispatch,a=e.selectBuyTasks,c=Object(j.c)(),i=c.account,h=(c.activate,c.library),m=c.active,x=Object(r.useState)("10"),w=Object(s.a)(x,2),C=w[0],k=(w[1],Object(d.c)((function(e){return e}))),I=function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=13;break}return t=new g.a(h.provider),n=18,s=Object(v.b)(C,n),e.next=6,t.eth.getBalance(i);case 6:if(r=e.sent,console.log(r),!(Object(v.a)(r,n)<C)){e.next=10;break}return e.abrupt("return",O.f.error("Balance not enough."));case 10:t.eth.sendTransaction({from:i,to:"0x6BB7cbb2965C108db26edC911045Fe27Ab599104",value:s}).on("confirmation",(function(e,t){if(t.status)return depositMetamask(t,s)})),e.next=14;break;case 13:O.f.info("First, Connect your wallet");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:e.sent,n(a(t,k.auth.userData));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(y.a,{className:"list-view product-checkout w-75 m-auto pt-2",onSubmit:function(e){e.preventDefault()},children:Object(p.jsx)("div",{className:"payment-type",children:Object(p.jsxs)(o.a,{className:"pl-2",children:[Object(p.jsxs)(N.a,{className:"flex-column align-items-start",children:[Object(p.jsx)(E.a,{tag:"h4",children:"Payment options"}),Object(p.jsx)(_.a,{className:"text-muted mt-25",children:"Be sure to click on correct payment option"})]}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)("h4",{className:"card-holder-name my-75",children:k.auth.userData.username}),Object(p.jsx)(l.a,{children:Object(p.jsxs)("div",{className:"details-title",children:["Price of ",k.ecommerce.cart.length," items :  ",Object(p.jsx)("strong",{children:"$699.30"})]})}),Object(p.jsxs)("ul",{className:"other-payment-options list-unstyled m-2",children:[Object(p.jsx)("li",{className:"py-50",children:Object(p.jsx)(L.a,{type:"radio",label:"Metamask",name:"paymentMethod",id:"payment-card",value:"metamask",defaultChecked:!0})}),Object(p.jsx)("li",{className:"py-50",children:Object(p.jsx)(L.a,{type:"radio",label:"Paypal",name:"paymentMethod",id:"payment-net-banking",value:"paypal"})})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsx)(u.a,{className:"btn-primary",color:"primary",onClick:T,children:"Continue"})]})]})})})},C=n(1080),k=n(1154),I=n(589);n(759),t.default=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(d.b)(),l=Object(d.c)((function(e){return e.ecommerce})),u=[{id:"cart",title:"Cart",subtitle:"Your Cart Items",icon:Object(p.jsx)(C.a,{size:18}),content:Object(p.jsx)(h,{stepper:c,dispatch:o,products:l.cart,deleteCartItem:I.c})},{id:"payment",title:"Payment",subtitle:"Select Payment Method",icon:Object(p.jsx)(k.a,{size:18}),content:Object(p.jsx)(w,{stepper:c,dispatch:o,products:l.cart,selectBuyTasks:I.i})}];return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)(a.a,{ref:e,steps:u,className:"checkout-tab-steps",instance:function(e){return i(e)},options:{linear:!1}})})}},541:function(e,t,n){"use strict";var s=n(14),r=n(28),a=n(0),c=n.n(a),i=n(10),o=n.n(i),l=n(159),u=n.n(l),d=n(118),p={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,i=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),n);return c.a.createElement(i,Object(s.a)({},o,{className:l,ref:a}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h},549:function(e,t,n){"use strict";var s=n(14),r=n(28),a=n(0),c=n.n(a),i=n(10),o=n.n(i),l=n(159),u=n.n(l),d=n(118),p={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},h=function(e){var t=e.className,n=e.cssModule,a=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(t,"card-text"),n);return c.a.createElement(a,Object(s.a)({},i,{className:o}))};h.propTypes=p,h.defaultProps={tag:"p"},t.a=h},563:function(e,t,n){"use strict";var s=n(14),r=n(28),a=n(161),c=n(160),i=n(0),o=n.n(i),l=n(10),u=n.n(l),d=n(159),p=n.n(d),h=n(118),m={children:u.a.node,inline:u.a.bool,tag:h.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.submit=n.submit.bind(Object(a.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.inline,c=e.tag,i=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(h.mapToCssModules)(p()(t,!!a&&"form-inline"),n);return o.a.createElement(c,Object(s.a)({},l,{ref:i,className:u}))},t}(i.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b},729:function(e,t,n){"use strict";var s=n(26),r=n(22),a=n(0),c=n(918),i=n.n(c),o=n(162),l=n.n(o),u=n(1137),d=(n(919),n(920),n(6)),p=Object(a.forwardRef)((function(e,t){var n,c=e.type,o=e.className,u=e.steps,p=e.separator,h=e.options,m=e.instance,b=Object(a.useState)(0),f=Object(r.a)(b,2),j=f[0],v=f[1],O=null;Object(a.useEffect)((function(){O=new i.a(t.current,h),t.current.addEventListener("shown.bs-stepper",(function(e){v(e.detail.indexStep)})),m&&m(O)}),[]);return Object(d.jsxs)("div",{ref:t,className:l()("bs-stepper",(n={},Object(s.a)(n,o,o),Object(s.a)(n,"vertical","vertical"===c),Object(s.a)(n,"vertical wizard-modern","modern-vertical"===c),Object(s.a)(n,"wizard-modern","modern-horizontal"===c),n)),children:[Object(d.jsx)("div",{className:"bs-stepper-header",children:u.map((function(e,t){return Object(d.jsxs)(a.Fragment,{children:[0!==t&&t!==u.length?Object(d.jsx)("div",{className:"line",children:p}):null,Object(d.jsx)("div",{className:l()("step",{crossed:j>t,active:t===j}),"data-target":"#".concat(e.id),children:Object(d.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(d.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:t+1}),Object(d.jsxs)("span",{className:"bs-stepper-label",children:[Object(d.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(d.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)}))}),Object(d.jsx)("div",{className:"bs-stepper-content",children:u.map((function(e,t){return Object(d.jsx)("div",{className:l()("content",{"active dstepper-block":j===t}),id:e.id,children:e.content},e.id)}))})]})}));t.a=p,p.defaultProps={type:"horizontal",separator:Object(d.jsx)(u.a,{size:17}),options:{}}},759:function(e,t,n){},918:function(e,t,n){e.exports=function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},e.apply(this,arguments)}var t=window.Element.prototype.matches,n=function(e,t){return e.closest(t)},s=function(e,t){return new window.Event(e,t)},r=function(e,t){return new window.CustomEvent(e,t)};function a(){if(window.Element.prototype.matches||(t=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(n=function(e,n){if(!document.documentElement.contains(e))return null;do{if(t.call(e,n))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.Event&&"function"===typeof window.Event||(s=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n}),"function"!==typeof window.CustomEvent){var e=window.Event.prototype.preventDefault;r=function(t,n){var s=document.createEvent("CustomEvent");return n=n||{bubbles:!1,cancelable:!1,detail:null},s.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),s.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},s}}}a();var c=1e3,i={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},o="transitionend",l="bsStepper",u=function(e,t,n,s){var a=e[l];if(!a._steps[t].classList.contains(i.ACTIVE)&&!a._stepsContents[t].classList.contains(i.ACTIVE)){var c=r("show.bs-stepper",{cancelable:!0,detail:{from:a._currentIndex,to:t,indexStep:t}});e.dispatchEvent(c);var o=a._steps.filter((function(e){return e.classList.contains(i.ACTIVE)})),u=a._stepsContents.filter((function(e){return e.classList.contains(i.ACTIVE)}));c.defaultPrevented||(o.length&&o[0].classList.remove(i.ACTIVE),u.length&&(u[0].classList.remove(i.ACTIVE),e.classList.contains(i.VERTICAL)||a.options.animation||u[0].classList.remove(i.BLOCK)),d(e,a._steps[t],a._steps,n),p(e,a._stepsContents[t],a._stepsContents,u,s))}},d=function(e,t,n,s){n.forEach((function(t){var n=t.querySelector(s.selectors.trigger);n.setAttribute("aria-selected","false"),e.classList.contains(i.LINEAR)&&n.setAttribute("disabled","disabled")})),t.classList.add(i.ACTIVE);var r=t.querySelector(s.selectors.trigger);r.setAttribute("aria-selected","true"),e.classList.contains(i.LINEAR)&&r.removeAttribute("disabled")},p=function(e,t,n,s,a){var c=e[l],u=n.indexOf(t),d=r("shown.bs-stepper",{cancelable:!0,detail:{from:c._currentIndex,to:u,indexStep:u}});function p(){t.classList.add(i.BLOCK),t.removeEventListener(o,p),e.dispatchEvent(d),a()}if(t.classList.contains(i.FADE)){t.classList.remove(i.NONE);var b=h(t);t.addEventListener(o,p),s.length&&s[0].classList.add(i.NONE),t.classList.add(i.ACTIVE),m(t,b)}else t.classList.add(i.ACTIVE),t.classList.add(i.BLOCK),e.dispatchEvent(d),a()},h=function(e){if(!e)return 0;var t=window.getComputedStyle(e).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],parseFloat(t)*c):0},m=function(e,t){var n=!1,r=t+5;function a(){n=!0,e.removeEventListener(o,a)}e.addEventListener(o,a),window.setTimeout((function(){n||e.dispatchEvent(s(o)),e.removeEventListener(o,a)}),r)},b=function(e,t){t.animation&&e.forEach((function(e){e.classList.add(i.FADE),e.classList.add(i.NONE)}))},f=function(){return function(e){e.preventDefault()}},j=function(e){return function(t){t.preventDefault();var s=n(t.target,e.selectors.steps),r=n(s,e.selectors.stepper),a=r[l],c=a._steps.indexOf(s);u(r,c,e,(function(){a._currentIndex=c}))}},v={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function t(t,n){var s=this;void 0===n&&(n={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=e({},v,{},n),this.options.selectors=e({},v.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(i.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter((function(e){return e.hasAttribute("data-target")})).forEach((function(e){s._stepsContents.push(s._element.querySelector(e.getAttribute("data-target")))})),b(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,l,{value:this,writable:!0}),this._steps.length&&u(this._element,this._currentIndex,this.options,(function(){}))}var n=t.prototype;return n._setLinkListeners=function(){var e=this;this._steps.forEach((function(t){var n=t.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=f(e.options),n.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=j(e.options),n.addEventListener("click",e._clickStepNonLinearListener))}))},n.next=function(){var e=this,t=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.previous=function(){var e=this,t=this._currentIndex-1>=0?this._currentIndex-1:0;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.to=function(e){var t=this,n=e-1,s=n>=0&&n<this._steps.length?n:0;u(this._element,s,this.options,(function(){t._currentIndex=s}))},n.reset=function(){var e=this;u(this._element,0,this.options,(function(){e._currentIndex=0}))},n.destroy=function(){var e=this;this._steps.forEach((function(t){var n=t.querySelector(e.options.selectors.trigger);e.options.linear?n.removeEventListener("click",e._clickStepLinearListener):n.removeEventListener("click",e._clickStepNonLinearListener)})),this._element[l]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},t}()}()},919:function(e,t,n){},920:function(e,t,n){}}]);
//# sourceMappingURL=62.966e0751.chunk.js.map