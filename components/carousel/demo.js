webpackJsonp([39,193],{725:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(218),s(184)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5b9a\u65f6\u5207\u6362\u4e0b\u4e00\u5f20\u3002"]],"en-US":[["p","Timing of scrolling to the next card/picture."]]},meta:{order:3,title:{"zh-CN":"\u81ea\u52a8\u5207\u6362","en-US":"Scroll automatically"},filename:"components/carousel/demo/autoplay.md",id:"components-carousel-demo-autoplay"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Carousel <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Carousel</span> <span class="token attr-name" >autoplay</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Carousel</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{autoplay:!0},c["default"].createElement("div",null,c["default"].createElement("h3",null,"1")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"2")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"3")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"4")))}}},726:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(218),s(184)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","Basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/carousel/demo/basic.md",id:"components-carousel-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Carousel <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>a<span class="token punctuation" >,</span> b<span class="token punctuation" >,</span> c<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>a<span class="token punctuation" >,</span> b<span class="token punctuation" >,</span> c<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Carousel</span> <span class="token attr-name" >afterChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Carousel</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,a,s){console.log(n,a,s)}return c["default"].createElement(e["default"],{afterChange:n},c["default"].createElement("div",null,c["default"].createElement("h3",null,"1")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"2")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"3")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"4")))}}},727:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(218),s(184)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5207\u6362\u6548\u679c\u4e3a\u6e10\u663e\u3002"]],"en-US":[["p","Slides use fade for transition."]]},meta:{order:2,title:{"zh-CN":"\u6e10\u663e","en-US":"Fade in"},filename:"components/carousel/demo/fade.md",id:"components-carousel-demo-fade"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Carousel <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Carousel</span> <span class="token attr-name" >effect</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fade<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Carousel</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{effect:"fade"},c["default"].createElement("div",null,c["default"].createElement("h3",null,"1")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"2")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"3")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"4")))}}},728:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(218),s(184)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5782\u76f4\u663e\u793a\u3002"]],"en-US":[["p","Vertical pagination."]]},meta:{order:1,title:{"zh-CN":"\u5782\u76f4","en-US":"Vertical"},filename:"components/carousel/demo/vertical.md",id:"components-carousel-demo-vertical"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Carousel <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Carousel</span> <span class="token attr-name" >vertical</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>true<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token number" >4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Carousel</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{vertical:"true"},c["default"].createElement("div",null,c["default"].createElement("h3",null,"1")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"2")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"3")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"4")))}}},1177:function(n,a,s){n.exports={autoplay:s(725),basic:s(726),fade:s(727),vertical:s(728)}}});