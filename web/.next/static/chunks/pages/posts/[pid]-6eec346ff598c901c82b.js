_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"4JlD":function(e,r,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,t,s){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"===typeof e?o(a(e),(function(a){var s=encodeURIComponent(n(a))+t;return i(e[a])?o(e[a],(function(e){return s+encodeURIComponent(n(e))})).join(r):s+encodeURIComponent(n(e[a]))})).join(r):s?encodeURIComponent(n(s))+t+encodeURIComponent(n(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,r){if(e.map)return e.map(r);for(var t=[],n=0;n<e.length;n++)t.push(r(e[n],n));return t}var a=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},CoN9:function(e,r,t){"use strict";var n=t("Qetd"),i=t("RT5d");e.exports=function(e,r){var t=r||{useDashedStyles:!1};function o(r,t){return e(r,null,t.children)}return{defaultSerializers:{types:{block:function(r){var t=r.node.style||"normal";return/^h\d/.test(t)?e(t,null,r.children):e("blockquote"===t?"blockquote":"p",null,r.children)},image:function(r){if(!r.node.asset)return null;var t=e("img",{src:i(r)});return r.isInline?t:e("figure",null,t)}},marks:{strong:o.bind(null,"strong"),em:o.bind(null,"em"),code:o.bind(null,"code"),underline:function(r){var n=t.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return e("span",{style:n},r.children)},"strike-through":function(r){return e("del",null,r.children)},link:function(r){return e("a",{href:r.mark.href},r.children)}},list:function(r){var t="bullet"===r.type?"ul":"ol";return e(t,null,r.children)},listItem:function(r){var t=r.node.style&&"normal"!==r.node.style?e(r.serializers.types.block,r,r.children):r.children;return e("li",null,t)},block:function(r){var t=r.node,n=r.serializers,i=r.options,o=r.isInline,a=r.children,s=t._type,l=n.types[s];if(!l)throw new Error('Unknown block type "'.concat(s,'", please specify a serializer for it in the `serializers.types` prop'));return e(l,{node:t,options:i,isInline:o},a)},span:function(r){var t=r.node,n=t.mark,i=t.children,o="string"===typeof n?n:n._type,a=r.serializers.marks[o];return a?e(a,r.node,i):(console.warn('Unknown mark type "'.concat(o,'", please specify a serializer for it in the `serializers.marks` prop')),e(r.serializers.markFallback,null,i))},hardBreak:function(){return e("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(r,t,i,o){if("\n"===r&&t.hardBreak)return e(t.hardBreak,{key:"hb-".concat(i)});if("string"===typeof r)return t.text?e(t.text,{key:"text-".concat(i)},r):r;var a;r.children&&(a={children:r.children.map((function(e,t){return o.serializeNode(e,t,r.children,!0)}))});var s=n({},r,a);return e(t.span,{key:r._key||"span-".concat(i),node:s,serializers:t})}}}},DCZw:function(e,r,t){"use strict";var n=t("q1tI"),i=(0,t("DEm0").getSerializers)(n.createElement),o=i.defaultSerializers,a=i.serializeSpan;e.exports={serializeSpan:a,serializers:o,renderProps:{nestMarks:!0}}},DEm0:function(e,r,t){e.exports=t("ctZY")},DzCJ:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.r(r),t.d(r,"__N_SSP",(function(){return I}));var i=t("rePB"),o=t("q1tI"),a=t.n(o),s=t("zCU7"),l=t.n(s),c=t("+rtH"),u=t("UG+U"),p=t("uYw6"),f=t.n(p),d=a.a.createElement,m=function(e){var r=e.children,t=e.post;return d("div",{className:f.a.post_wrapper},d("img",{className:f.a.post_main_image,src:t.mainImage}),d("div",{className:f.a.post_article_wrapper},d("article",{className:f.a.post_main},d("h1",{className:f.a.post_main_title},t.title),r),d("div",{className:f.a.post_side_bar},d("p",{className:f.a.post_publish_date},new Date(t.publishedAt).toDateString()),d("div",{className:f.a.post_author},d("p",null,"Author"),d("div",{className:f.a.post_author_wrapper},d("img",{className:f.a.author_image,src:t.authorImage}),d("p",{className:f.a.author_name},t.name))),d("div",{className:f.a.post_categories},d("p",null,"Categories"),d("div",{className:f.a.post_category_wrapper},t.categories.map((function(e){return d("p",null,e)})))))))},h=t("bYjO"),_=t.n(h),y=t("osSN"),g=t.n(y),v=a.a.createElement;function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){Object(i.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function w(e){return _()(l.a).image(e)}var I=!0;r.default=function(e){var r=e.data;console.log(r);var t=k(k({},r),{},{categories:r.categories,mainImage:w(r.mainImage).width(1200).url(),authorImage:w(r.authorImage).width(100).url()});return v(c.a,null,v(u.a,{current:"blog"}),v(m,{client:l.a,post:t},v(g.a,n({blocks:r.body,imageOptions:{w:480,h:240,fit:"max"}},l.a.config()))))}},Qetd:function(e,r,t){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RT5d:function(e,r,t){"use strict";var n=t("pmlw"),i=t("bYjO"),o=t("Qetd"),a=encodeURIComponent,s="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(n("block-content-image-materializing"));e.exports=function(e){var r=e.node,t=e.options,n=t.projectId,l=t.dataset,c=r.asset;if(!c)throw new Error("Image does not have required `asset` property");if(c.url)return c.url+function(e){var r=e.imageOptions,t=Object.keys(r);if(!t.length)return"";var n=t.map((function(e){return"".concat(a(e),"=").concat(a(r[e]))}));return"?".concat(n.join("&"))}(t);if(!n||!l)throw new Error(s);if(!c._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return i(o({projectId:n,dataset:l},t.imageOptions||{})).image(r).toString()}},V1Fd:function(e,r,t){"use strict";var n=t("Qetd"),i=t("ftCV"),o=t("ueIO"),a=t("xM0z"),s=t("cIWD"),l=["projectId","dataset","imageOptions"],c=function(e){return"undefined"!==typeof e},u={imageOptions:{}};function p(e){return"block"===e._type&&e.listItem}e.exports=function(e,r,t,f){var d=n({},u,r),m=Array.isArray(d.blocks)?d.blocks:[d.blocks],h=a(m),_=o(h,d.listNestMode),y=s(t,d.serializers||{}),g=l.reduce((function(e,r){var t=d[r];return c(t)&&(e[r]=t),e}),{});function v(r,t,n,o){return"list"===(a=r)._type&&a.listItem?function(r){var t=r.listItem,n=r.level,i=r._key,o=r.children.map(v);return e(y.list,{key:i,level:n,type:t,options:g},o)}(r):p(r)?function(r,t){var n=r._key,o=i(r).map(v);return e(y.listItem,{node:r,serializers:y,index:t,key:n,options:g},o)}(r,function(e,r){for(var t=0,n=0;n<r.length;n++){if(r[n]===e)return t;p(r[n])&&t++}return t}(r,n)):function(e){return"string"===typeof e||e.marks||"span"===e._type}(r)?f(r,y,t,{serializeNode:v}):function(r,t,n){var o=i(r).map((function(e,r,t){return v(e,r,t,!0)})),a={key:r._key||"block-".concat(t),node:r,isInline:n,serializers:y,options:g};return e(y.block,a,o)}(r,t,o);var a}var b=Boolean(d.renderContainerOnSingleChild),k=_.map(v);if(b||k.length>1){var w=d.className?{className:d.className}:{};return e(y.container,w,k)}return k[0]?k[0]:"function"===typeof y.empty?e(y.empty):y.empty}},cIWD:function(e,r,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=t("Qetd");e.exports=function(e,r){return Object.keys(e).reduce((function(t,o){var a=n(e[o]);return t[o]="function"===a?"undefined"!==typeof r[o]?r[o]:e[o]:"object"===a?i({},e[o],r[o]):"undefined"===typeof r[o]?e[o]:r[o],t}),{})}},ctZY:function(e,r,t){"use strict";var n=t("CoN9"),i=t("V1Fd"),o=t("RT5d"),a=t("cIWD");e.exports={blocksToNodes:function(e,r,t,o){if(t)return i(e,r,t,o);var a=n(e);return i(e,r,a.defaultSerializers,a.serializeSpan)},getSerializers:n,getImageUrl:o,mergeSerializers:a}},ftCV:function(e,r,t){"use strict";var n=["strong","em","code","underline","strike-through"];function i(e,r,t){if(!e.marks||0===e.marks.length)return e.marks||[];var n=e.marks.reduce((function(e,n){e[n]=e[n]?e[n]+1:1;for(var i=r+1;i<t.length;i++){var o=t[i];if(!o.marks||!Array.isArray(o.marks)||-1===o.marks.indexOf(n))break;e[n]++}return e}),{}),i=o.bind(null,n);return e.marks.slice().sort(i)}function o(e,r,t){var i=e[r]||0,o=e[t]||0;if(i!==o)return o-i;var a=n.indexOf(r),s=n.indexOf(t);return a!==s?a-s:r<t?-1:r>t?1:0}e.exports=function(e){var r=e.children,t=e.markDefs;if(!r||!r.length)return[];var n=r.map(i),o={_type:"span",children:[]},a=[o];return r.forEach((function(e,r){var i=n[r];if(i){var o=1;if(a.length>1)for(;o<a.length;o++){var s=a[o].markKey,l=i.indexOf(s);if(-1===l)break;i.splice(l,1)}var c,u=function(e){for(var r=e.length-1;r>=0;r--){var t=e[r];if("span"===t._type&&t.children)return t}return}(a=a.slice(0,o));if(i.forEach((function(r){var n={_type:"span",_key:e._key,children:[],mark:t.find((function(e){return e._key===r}))||r,markKey:r};u.children.push(n),a.push(n),u=n})),"span"!==(c=e)._type||"string"!==typeof c.text||!Array.isArray(c.marks)&&"undefined"!==typeof c.marks)u.children=u.children.concat(e);else{for(var p=e.text.split("\n"),f=p.length;f-- >1;)p.splice(f,0,"\n");u.children=u.children.concat(p)}}else{a[a.length-1].children.push(e)}})),o.children}},"h70+":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[pid]",function(){return t("DzCJ")}])},kd2E:function(e,r,t){"use strict";function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}e.exports=function(e,r,t,o){r=r||"&",t=t||"=";var a={};if("string"!==typeof e||0===e.length)return a;var s=/\+/g;e=e.split(r);var l=1e3;o&&"number"===typeof o.maxKeys&&(l=o.maxKeys);var c=e.length;l>0&&c>l&&(c=l);for(var u=0;u<c;++u){var p,f,d,m,h=e[u].replace(s,"%20"),_=h.indexOf(t);_>=0?(p=h.substr(0,_),f=h.substr(_+1)):(p=h,f=""),d=decodeURIComponent(p),m=decodeURIComponent(f),n(a,d)?i(a[d])?a[d].push(m):a[d]=[a[d],m]:a[d]=m}return a};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},osSN:function(e,r,t){"use strict";var n=t("q1tI"),i=t("17x9"),o=t("DEm0"),a=t("DCZw"),s=a.serializers,l=a.serializeSpan,c=a.renderProps,u=o.getImageUrl,p=o.blocksToNodes,f=o.mergeSerializers,d=n.createElement,m=function e(r){var t=f(e.defaultSerializers,r.serializers),n=Object.assign({},c,r,{serializers:t,blocks:r.blocks||[]});return p(d,n,s,l)};m.defaultSerializers=s,m.getImageUrl=u,m.propTypes={className:i.string,renderContainerOnSingleChild:i.bool,projectId:i.string,dataset:i.string,imageOptions:i.object,serializers:i.shape({types:i.object,marks:i.object,list:i.func,listItem:i.func,block:i.func,span:i.func}),blocks:i.oneOfType([i.arrayOf(i.shape({_type:i.string.isRequired})),i.shape({_type:i.string.isRequired})]).isRequired},m.defaultProps={renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},e.exports=m},pmlw:function(e,r){e.exports=function(e){return"https://docs.sanity.io/help/"+e}},s4NR:function(e,r,t){"use strict";r.decode=r.parse=t("kd2E"),r.encode=r.stringify=t("4JlD")},uYw6:function(e,r,t){e.exports={post_wrapper:"PostWrapper_post_wrapper__6eJbs",post_main_image:"PostWrapper_post_main_image__A_9f7",post_article_wrapper:"PostWrapper_post_article_wrapper__3cksB",post_main_title:"PostWrapper_post_main_title__2tbtt",post_author:"PostWrapper_post_author__3AlcB",post_publish_date:"PostWrapper_post_publish_date__1BeTY",author_image:"PostWrapper_author_image__2Skua",post_author_wrapper:"PostWrapper_post_author_wrapper__3tJ0I",author_name:"PostWrapper_author_name__3ufkp",post_categories:"PostWrapper_post_categories__1k2If",post_category_wrapper:"PostWrapper_post_category_wrapper__2aL4K",post_main:"PostWrapper_post_main__37-Yw",post_side_bar:"PostWrapper_post_side_bar__3FR-h"}},ueIO:function(e,r,t){"use strict";var n=t("Qetd");function i(e){return Boolean(e.listItem)}function o(e,r){return e.level===r.level&&e.listItem===r.listItem}function a(e){return{_type:"list",_key:"".concat(e._key,"-parent"),level:e.level,listItem:e.listItem,children:[e]}}function s(e){return e.children&&e.children[e.children.length-1]}function l(e,r){var t="string"===typeof r.listItem;if("list"===e._type&&e.level===r.level&&t&&e.listItem===r.listItem)return e;var n=s(e);return!!n&&l(n,r)}e.exports=function(e){for(var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",c=[],u=0;u<e.length;u++){var p=e[u];if(i(p))if(r)if(o(p,r))r.children.push(p);else if(p.level>r.level){var f=a(p);if("html"===t){var d=s(r),m=n({},d,{children:d.children.concat(f)});r.children[r.children.length-1]=m}else r.children.push(f);r=f}else if(p.level<r.level){var h=l(c[c.length-1],p);if(h){(r=h).children.push(p);continue}r=a(p),c.push(r)}else if(p.listItem===r.listItem)console.warn("Unknown state encountered for block",p),c.push(p);else{var _=l(c[c.length-1],{level:p.level});if(_&&_.listItem===p.listItem){(r=_).children.push(p);continue}r=a(p),c.push(r)}else r=a(p),c.push(r);else c.push(p),r=null}return c}},xM0z:function(e,r,t){"use strict";var n=t("Qetd");function i(e){var r=0,t=e.length;if(0===t)return r;for(var n=0;n<t;n++)r=(r<<5)-r+e.charCodeAt(n),r&=r;return r}e.exports=function(e){return e.map((function(e){return e._key?e:n({_key:(r=e,i(JSON.stringify(r)).toString(36).replace(/[^A-Za-z0-9]/g,""))},e);var r}))}}},[["h70+",0,1,3]]]);