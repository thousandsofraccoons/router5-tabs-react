!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"),require("react-router5"));else if("function"===typeof define&&define.amd)define(["react","react-router5"],t);else{var r="object"===typeof exports?t(require("react"),require("react-router5")):t(e.react,e["react-router5"]);for(var n in r)("object"===typeof exports?exports:e)[n]=r[n]}}(this,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){e.exports=r(3)},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var i=r(0),u=r.n(i);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=r(1);t.default=function(e){var t=e.children,r=e.tabs,n=e.dataCy,o=void 0===n?"tabs":n,f=e.classes,d=(f=void 0===f?{}:f).wrapper,s=void 0===d?"w-full":d,b=f.contentSection,p=f.tab,v=void 0===p?"tab-label flex items-center py-4 px-12 rounded-t-lg":p,y=f.svgIcon,m=void 0===y?"fill-current":y,O=f.buttons,j=void 0===O?"flex relative py-4":O,g=f.tabInactive,x=void 0===g?"hover:bg-gray-600 hover:text-white cursor-pointer transition":g,h=f.tabActive,w=void 0===h?"bg-gray-900 text-white hover:bg-gray-800":h,E=function(e){var t=Object(l.useRoute)()||{route:{name:null,params:{tab:null}},router:{navigate:null}},r=t.route,n=r.name,o=r.params,u=t.router.navigate,f=c(Object(i.useState)((null===o||void 0===o?void 0:o.tab)||e[0].name),2),d=f[0],s=f[1];Object(i.useEffect)((function(){var e=function(e){return s(e.state.params.tab)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),Object(i.useEffect)((function(){if(d!==(null===o||void 0===o?void 0:o.tab)){var e=a({},o)||{tab:null};e.tab=d,u&&u(n,e)}}),[d,o.tab,u,n,o]);var b=e.findIndex((function(e){return d===e.name}));return{handleKeyboard:function(t,r){var n,o,a=null===(n=e[b+1])||void 0===n?void 0:n.name,i=null===(o=e[b-1])||void 0===o?void 0:o.name;13===t.keyCode?s(r):39===t.keyCode&&a?s(a):37===t.keyCode&&i&&s(i)},childrenIndex:b,isCurrent:function(e){return e===d},setCurrentTab:s}}(r),P=E.handleKeyboard,S=E.childrenIndex,C=E.isCurrent,I=E.setCurrentTab;return u.a.createElement("div",{"data-cy":o,className:s},u.a.createElement("nav",{role:"tablist",className:j},u.a.createElement((function(){return u.a.createElement(u.a.Fragment,null,r.map((function(e){var t=C(e.name);return u.a.createElement("button",{className:"".concat(v," ").concat(t?w:x),key:e.name,role:"tab",type:"button",disabled:e.disabled,tabIndex:0,autoFocus:t||!1,onClick:function(){return I(e.name)},onKeyUp:function(t){return P(t,e.name)},"aria-disabled":e.disabled,"aria-selected":t},"string"===typeof(null===e||void 0===e?void 0:e.label)?null===e||void 0===e?void 0:e.label:u.a.cloneElement(null===e||void 0===e?void 0:e.label,{className:m}))})))}),null)),u.a.createElement("section",{"aria-live":"polite",className:b},t.map((function(e,t){return u.a.cloneElement(e,a({role:"tabpanel"},S!==t&&{hidden:!0}))}))))}}])}));
//# sourceMappingURL=index.js.map