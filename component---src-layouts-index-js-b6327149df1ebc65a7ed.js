webpackJsonp([0x67ef26645b2a,60335399758886],{140:function(e,t){e.exports={data:{site:{siteMetadata:{title:"北京青色麦田科技有限公司"}}},layoutContext:{}}},279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),a=r(o),i=n(301),u=r(i),c=n(140),l=r(c);t.default=function(e){return a.default.createElement(u.default,A({},e,l.default))},e.exports=t.default},421:function(e,t){},397:function(e,t,n){function r(e){return null===e||void 0===e}function A(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(A(e)){if(!A(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var f=i(e),s=i(t)}catch(e){return!1}if(f.length!=s.length)return!1;for(f.sort(),s.sort(),o=f.length-1;o>=0;o--)if(f[o]!=s[o])return!1;for(o=f.length-1;o>=0;o--)if(l=f[o],!c(e[l],t[l],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,i=n(399),u=n(398),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},398:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var A="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=A?n:r,t.supported=n,t.unsupported=r},399:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},419:function(e,t,n){var r;!function(){"use strict";var A=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:A,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:A&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:A&&!!window.screen};r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},610:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function A(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=r(l),s=n(2),T=r(s),E=n(643),p=r(E),d=n(397),w=r(d),y=n(611),h=n(257),S=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),a(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,w.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case h.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,A=e.newChildProps,o=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},A,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,A=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.TAG_NAMES.TITLE:return u({},A,(t={},t[r.type]=a,t.titleAttributes=u({},o),t));case h.TAG_NAMES.BODY:return u({},A,{bodyAttributes:u({},o)});case h.TAG_NAMES.HTML:return u({},A,{htmlAttributes:u({},o)})}return u({},A,(n={},n[r.type]=u({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,a=o.children,i=A(o,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case h.TAG_NAMES.LINK:case h.TAG_NAMES.META:case h.TAG_NAMES.NOSCRIPT:case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=A(t,["children"]),o=u({},r);return n&&(o=this.mapChildrenToProps(n,o)),f.default.createElement(e,o)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},m=function(){return null},b=(0,p.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(m),v=S(b);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},257:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},611:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(14),c=r(u),l=n(257),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=w(e,l.TAG_NAMES.TITLE),n=w(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=w(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return w(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},p=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),A=0;A<r.length;A++){var o=r[A],a=o.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},d=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+A(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var A={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var i=o[a],u=i.toLowerCase();t.indexOf(u)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(i)===-1||i!==l.TAG_PROPERTIES.INNER_HTML&&i!==l.TAG_PROPERTIES.CSS_TEXT&&i!==l.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),A[n]||(A[n]={}),!r[n][c]&&(A[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(A),a=0;a<o.length;a++){var i=o[a],u=(0,c.default)({},r[i],A[i]);r[i]=u}return e},[]).reverse()},w=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:E(l.ATTRIBUTE_NAMES.BODY,e),defer:w(e,l.HELMET_PROPS.DEFER),encode:w(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(l.ATTRIBUTE_NAMES.HTML,e),linkTags:d(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:d(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:E(l.ATTRIBUTE_NAMES.TITLE,e)}},h=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){h(t)},0)}}(),S=function(e){return clearTimeout(e)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},P=null,O=function(e){P&&b(P),e.defer?P=m(function(){C(e,function(){P=null})}):(C(e),P=null)},C=function(e,t){var n=e.baseTag,r=e.bodyAttributes,A=e.htmlAttributes,o=e.linkTags,a=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,s=e.title,T=e.titleAttributes;g(l.TAG_NAMES.BODY,r),g(l.TAG_NAMES.HTML,A),M(s,T);var E={baseTag:_(l.TAG_NAMES.BASE,n),linkTags:_(l.TAG_NAMES.LINK,o),metaTags:_(l.TAG_NAMES.META,a),noscriptTags:_(l.TAG_NAMES.NOSCRIPT,i),scriptTags:_(l.TAG_NAMES.SCRIPT,c),styleTags:_(l.TAG_NAMES.STYLE,f)},p={},d={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=E[e].oldTags)}),t&&t(),u(e,p,d)},R=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),g(l.TAG_NAMES.TITLE,t)},g=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),A=r?r.split(","):[],o=[].concat(A),a=Object.keys(t),i=0;i<a.length;i++){var u=a[i],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),A.indexOf(u)===-1&&A.push(u);var f=o.indexOf(u);f!==-1&&o.splice(f,1)}for(var s=o.length-1;s>=0;s--)n.removeAttribute(o[s]);A.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},_=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),A=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),A.some(function(e,t){return a=t,n.isEqualNode(e)})?A.splice(a,1):o.push(n)}),A.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:A,newTags:o}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var A=N(n),o=R(t);return A?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+A+">"+f(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+f(o,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var A=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var A="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+A:A},""),o=r.innerHTML||r.cssText||"",a=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+A+(a?"/>":">"+o+"</"+e+">")},"")},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,A=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),o=H(n,A);return[i.default.createElement(l.TAG_NAMES.TITLE,o,t)]},k=function(e,t){return t.map(function(t,n){var r,A=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;A.dangerouslySetInnerHTML={__html:r}}else A[n]=t[e]}),i.default.createElement(e,A)})},U=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return H(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return L(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,A=e.htmlAttributes,o=e.linkTags,a=e.metaTags,i=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,s=void 0===f?"":f,T=e.titleAttributes;return{base:U(l.TAG_NAMES.BASE,t,r),bodyAttributes:U(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:U(l.ATTRIBUTE_NAMES.HTML,A,r),link:U(l.TAG_NAMES.LINK,o,r),meta:U(l.TAG_NAMES.META,a,r),noscript:U(l.TAG_NAMES.NOSCRIPT,i,r),script:U(l.TAG_NAMES.SCRIPT,u,r),style:U(l.TAG_NAMES.STYLE,c,r),title:U(l.TAG_NAMES.TITLE,{title:s,titleAttributes:T},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=O,t.mapStateOnServer=B,t.reducePropsToState=y,t.requestAnimationFrame=m,t.warn=v}).call(t,function(){return this}())},643:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){function s(){E=e(T.map(function(e){return e.props})),p.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var T=[],E=void 0,p=function(e){function t(){return A(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,T=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){T.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),s()},t.prototype.render=function(){return c.createElement(i,this.props)},t}(u.Component);return p.displayName="SideEffect("+r(i)+")",p.canUseDOM=l.canUseDOM,p}}var u=n(1),c=r(u),l=r(n(419)),f=r(n(664));e.exports=i},664:function(e,t){e.exports=function(e,t,n,r){var A=n?n.call(r,e,t):void 0;if(void 0!==A)return!!A;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!i(c))return!1;var l=e[c],f=t[c];if(A=n?n.call(r,l,f,c):void 0,A===!1||void 0===A&&l!==f)return!1}return!0}},289:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var A=n(1),o=r(A),a=n(138),i=r(a),u=n(56),c=n(166);t.default=function(e){e.siteTitle;return o.default.createElement(u.Navbar,{inverse:!0,collapseOnSelect:!0},o.default.createElement(u.Navbar.Header,null,o.default.createElement(u.Navbar.Brand,{style:{color:"#0f0"}},o.default.createElement(i.default,{to:"/"},o.default.createElement("span",null,o.default.createElement("img",{style:{height:"100%"},src:n(691),alt:""})),"青色麦田")),o.default.createElement(u.Navbar.Toggle,null)),o.default.createElement(u.Navbar.Collapse,null,o.default.createElement(u.Nav,{pullRight:!0},o.default.createElement(c.LinkContainer,{to:"/",exact:!0},o.default.createElement(u.NavItem,{eventKey:1},"首页")),o.default.createElement(c.LinkContainer,{to:"/about"},o.default.createElement(u.NavItem,{eventKey:2,href:"#"},"关于我们")),o.default.createElement(c.LinkContainer,{to:"/Portfolio"},o.default.createElement(u.NavItem,{eventKey:3,href:"#"},"成功案例")),o.default.createElement(c.LinkContainer,{to:"/Solutions"},o.default.createElement(u.NavItem,{eventKey:4,href:"#"},"解决方案")),o.default.createElement(c.LinkContainer,{to:"/Partners"},o.default.createElement(u.NavItem,{eventKey:5,href:"#"},"伙伴计划")),o.default.createElement(c.LinkContainer,{to:"/Career"},o.default.createElement(u.NavItem,{eventKey:6,href:"#"},"加入我们")))))},e.exports=t.default},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var A=n(1),o=r(A),a=n(2),i=r(a),u=n(610),c=r(u),l=(n(56),n(289)),f=r(l);n(421),n(424);var s=function(e){var t=e.children,n=e.data;return o.default.createElement("div",null,o.default.createElement(c.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),o.default.createElement(f.default,{siteTitle:n.site.siteMetadata.title}),t())};s.propTypes={children:i.default.func},t.default=s;t.query="** extracted graphql fragment **"},424:function(e,t){},691:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=component---src-layouts-index-js-b6327149df1ebc65a7ed.js.map