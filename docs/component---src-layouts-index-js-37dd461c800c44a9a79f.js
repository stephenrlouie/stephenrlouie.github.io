webpackJsonp([0x67ef26645b2a,60335399758886],{106:function(e,t){e.exports={layoutContext:{}}},230:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=n(5),l=i(o),a=n(234),s=i(a),c=n(106),u=i(c);t.default=function(e){return l.default.createElement(s.default,r({},e,u.default))},e.exports=t.default},461:function(e,t,n){(function(t){(function(){var n,i,r,o,l,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-l)/1e6},i=t.hrtime,n=function(){var e;return e=i(),1e9*e[0]+e[1]},o=n(),a=1e9*t.uptime(),l=o-a):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n(74))},465:function(e,t,n){(function(t){for(var i=n(461),r="undefined"==typeof window?t:window,o=["moz","webkit"],l="AnimationFrame",a=r["request"+l],s=r["cancel"+l]||r["cancelRequest"+l],c=0;!a&&c<o.length;c++)a=r[o[c]+"Request"+l],s=r[o[c]+"Cancel"+l]||r[o[c]+"CancelRequest"+l];if(!a||!s){var u=0,d=0,f=[],p=1e3/60;a=function(e){if(0===f.length){var t=i(),n=Math.max(0,p-(t-u));u=n+t,setTimeout(function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},s=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return a.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=a,e.cancelAnimationFrame=s}}).call(t,function(){return this}())},529:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(5),d=i(u),f=n(7),p=i(f),h=n(562),m=i(h),g=n(465),v=i(g),y=n(530),b=i(y),w=function(){},x=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner.offsetHeight}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,i=n.getScrollerPhysicalHeight(),r=n.getScrollerHeight(),o=e+i>r;return t||o},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,v.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,v.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned"},function(){setTimeout(function(){n.setState({state:"unpinned"})},0)})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed",state:"unfixed"})},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,b.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state),t=e.action;"pin"===t?n.pin():"unpin"===t?n.unpin():"unfix"===t&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"componentWillReceiveProps",value:function(e){e.disable&&!this.props.disable?(this.unfix(),this.props.parent().removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)):!e.disable&&this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,m.default)(this.props,e)||!(0,m.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setHeightOffset()}},{key:"componentWillUnmount",value:function(){this.props.parent().removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=r(e,["className"]);delete n.onUnpin,delete n.onPin,delete n.onUnfix,delete n.disableInlineStyles,delete n.disable,delete n.parent,delete n.children,delete n.upTolerance,delete n.downTolerance,delete n.pinStart,delete n.calcHeightOnResize;var i=n.style,o=n.wrapperStyle,l=r(n,["style","wrapperStyle"]),a={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translateY("+this.state.translateY+")",MsTransform:"translateY("+this.state.translateY+")",transform:"translateY("+this.state.translateY+")"},c=this.state.className;"unfixed"!==this.state.state&&(a=s({},a,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),c+=" headroom--scrolled"),a=this.props.disableInlineStyles?i:s({},a,i);var u=s({},o,{height:this.state.height?this.state.height:null}),f=t?t+" headroom-wrapper":"headroom-wrapper";return d.default.createElement("div",{style:u,className:f},d.default.createElement("div",s({ref:this.setRef},l,{style:a,className:c}),this.props.children))}}]),t}(u.Component);x.propTypes={className:p.default.string,parent:p.default.func,children:p.default.any.isRequired,disableInlineStyles:p.default.bool,disable:p.default.bool,upTolerance:p.default.number,downTolerance:p.default.number,onPin:p.default.func,onUnpin:p.default.func,onUnfix:p.default.func,wrapperStyle:p.default.object,pinStart:p.default.number,style:p.default.object,calcHeightOnResize:p.default.bool},x.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,upTolerance:5,downTolerance:0,onPin:w,onUnpin:w,onUnfix:w,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0},t.default=x},530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=t>=e?"down":"up",o=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:r,distanceScrolled:o}:t<=n.pinStart&&"unfixed"!==i.state?{action:"unfix",scrollDirection:r,distanceScrolled:o}:t<=i.height&&"down"===r&&"unfixed"===i.state?{action:"none",scrollDirection:r,distanceScrolled:o}:"down"===r&&["pinned","unfixed"].indexOf(i.state)>=0&&t>i.height+n.pinStart&&o>n.downTolerance?{action:"unpin",scrollDirection:r,distanceScrolled:o}:"up"===r&&o>n.upTolerance&&["pinned","unfixed"].indexOf(i.state)<0?{action:"pin",scrollDirection:r,distanceScrolled:o}:"up"===r&&t<=i.height&&["pinned","unfixed"].indexOf(i.state)<0?{action:"pin",scrollDirection:r,distanceScrolled:o}:{action:"none",scrollDirection:r,distanceScrolled:o}}},562:function(e,t){e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!a(c))return!1;var u=e[c],d=t[c];if(r=n?n.call(i,u,d,c):void 0,r===!1||void 0===r&&u!==d)return!1}return!0}},234:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(5),o=i(r),l=n(167),a=(i(l),n(529)),s=i(a),c=function(e){return o.default.createElement("li",{style:{display:"inline-block",marginRight:"1rem",padding:"5px 0px 5px 0px"}},o.default.createElement("a",{href:e.url},o.default.createElement("img",{alt:e.alt,src:e.img,height:"30px"})))};t.default=function(e){var t=e.children;return o.default.createElement("div",null,o.default.createElement(s.default,null,o.default.createElement("div",{style:{background:"rgb(168, 182, 191)",boxShadow:"1px 1px 1px rgba(0,0,0,0.25)"}},o.default.createElement("div",{style:{maxWidth:600,margin:"0 auto"}},o.default.createElement("h1",{style:{display:"inline"}},"Steve Louie"),o.default.createElement("ul",{style:{listStyle:"none",float:"right"}},o.default.createElement(c,{url:"https://www.linkedin.com/in/stlouie/",alt:"LinkedIn",img:"https://image.flaticon.com/icons/png/512/174/174857.png"}),o.default.createElement(c,{url:"https://github.com/stephenrlouie",alt:"GitHub",img:"https://image.flaticon.com/icons/svg/25/25231.svg"}),o.default.createElement(c,{url:"mailto:stephen.r.louie@gmail.com",alt:"Mail",img:"https://image.flaticon.com/icons/png/512/281/281769.png"}))))),o.default.createElement("div",{style:{margin:"3rem auto",maxWidth:600}},t()))},e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-37dd461c800c44a9a79f.js.map