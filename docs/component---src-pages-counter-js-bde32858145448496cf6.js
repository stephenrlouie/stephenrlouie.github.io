webpackJsonp([96596616492619],{182:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var a=n(4),l=o(a),i=n(57),s=o(i),f=function(t){function e(){u(this,e);var n=r(this,t.call(this));return n.state={count:0},n}return c(e,t),e.prototype.render=function(){var t=this;return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("h1",null,"This is my counter"),l.default.createElement("p",null,"current count: ",this.state.count),l.default.createElement("button",{onClick:function(){return t.add()}},"plus "),l.default.createElement("button",{onClick:function(){return t.minus()}},"minus ")),l.default.createElement("div",null,l.default.createElement("button",{onClick:function(){return t.reset()}},"reset ")),l.default.createElement(s.default,{to:"/"},"Go back to the homepage"))},e.prototype.add=function(){this.setState({count:this.state.count+1})},e.prototype.minus=function(){this.setState({count:this.state.count-1})},e.prototype.reset=function(){this.setState({count:0})},e}(l.default.Component);e.default=f,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-counter-js-bde32858145448496cf6.js.map