webpackJsonp([44,194],{985:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(251),s(250)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684\u6807\u7b7e\u5c55\u793a\uff0c\u6dfb\u52a0 closable \u8868\u793a\u53ef\u5173\u95ed\u3002"]],"en-US":[["p","Simple demo of tag, 'closable' property represents which can be closed."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onClose</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span><span class="token punctuation" >></span></span>Tag <span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span><span class="token punctuation" >></span></span>Tag <span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClose<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Tag <span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}return c["default"].createElement("div",null,c["default"].createElement(o["default"],null,"Tag 1"),c["default"].createElement(o["default"],null,"Tag 2"),c["default"].createElement(o["default"],{closable:!0,onClose:n},"Tag 3"))}}},986:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(251),s(250)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u56db\u79cd\u989c\u8272\u7684\u6807\u7b7e\u3002"]],"en-US":[["p","Colorful tags."]]},meta:{order:1,title:{"zh-CN":"\u5404\u79cd\u7c7b\u578b","en-US":"Colorful tags"},filename:"components/tag/demo/colorful.md",id:"components-tag-demo-colorful"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>blue<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Blue<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Green<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>yellow<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://github.com/ant-design/ant-design/issues/1862<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Yellow<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>red<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Red<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(o["default"],{closable:!0,color:"blue"},"Blue"),c["default"].createElement(o["default"],{closable:!0,color:"green"},"Green"),c["default"].createElement(o["default"],{closable:!0,color:"yellow"},c["default"].createElement("a",{href:"https://github.com/ant-design/ant-design/issues/1862"},"Yellow")),c["default"].createElement(o["default"],{closable:!0,color:"red"},"Red"))}}},987:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(10),s(9)),o=t(p),e=(s(251),s(250)),c=t(e),l=s(102),u=t(l),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:{"zh-CN":[["p","\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002"],["p","\u4f7f\u7528 ",["code","afterClose"]," \u5220\u9664\u65f6\u6709\u52a8\u753b\u6548\u679c\u3002"]],"en-US":[["p","Generating a set of tag by array, you can dynamically add and remove."],["p","Using 'afterClose' property, There are animated when a tag was removed."]]},meta:{order:2,title:{"zh-CN":"\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","en-US":"Dynamically add and remove"},filename:"components/tag/demo/control.md",id:"components-tag-demo-control"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> index <span class="token operator" >=</span> <span class="token number" >3</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      tags<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Unremovable\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Tag 2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Tag 3\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleClose</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> key<span class="token punctuation" >)</span> <span class="token operator" >&amp;&amp;</span> tag<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>tags<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >addTag</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    index <span class="token operator" >+</span><span class="token operator" >=</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n    tags<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> index<span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`New tag </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>index<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>tags<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >closable</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> <span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >afterClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >handleClose</span><span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>name<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>dashed<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>addTag<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token operator" >+</span> New <span class="token class-name" >tag</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=3,a=i["default"].createClass({displayName:"App",getInitialState:function(){return{tags:[{key:1,name:"Unremovable"},{key:2,name:"Tag 2"},{key:3,name:"Tag 3"}]}},handleClose:function(n){var a=[].concat((0,u["default"])(this.state.tags)).filter(function(a){return a.key!==n&&a});console.log(a),this.setState({tags:a})},addTag:function(){var a=[].concat((0,u["default"])(this.state.tags));n+=1,a.push({key:n,name:"New tag "+n}),this.setState({tags:a})},render:function(){var n=this,a=this.state.tags;return i["default"].createElement("div",null,a.map(function(a){return i["default"].createElement(c["default"],{key:a.key,closable:1!==a.key,afterClose:function(){return n.handleClose(a.key)}},a.name)}),i["default"].createElement(o["default"],{size:"small",type:"dashed",onClick:this.addTag},"+ New tag"))}});return i["default"].createElement(a,null)}}},1208:function(n,a,s){n.exports={basic:s(985),colorful:s(986),control:s(987)}}});