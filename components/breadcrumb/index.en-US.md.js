webpackJsonp([182,194],{701:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=a(1),o=(r(n),a(2));r(o);e.exports={content:["section",["p","A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up within the hierarchy."],["h2","When To Use"],["ul",["li",["p","When the system has more than two layers in a hierarchy."]],["li",["p","When you need to inform the user of where they are."]],["li",["p","When the user may need to navigate back to a higher level When the application has multi-layer architecture."]]]],meta:{category:"Components",type:"Navigation",title:"Breadcrumb",filename:"components/breadcrumb/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n  &lt;Breadcrumb.Item>Home&lt;/Breadcrumb.Item>\n  &lt;Breadcrumb.Item>Application Center&lt;/Breadcrumb.Item>\n  &lt;Breadcrumb.Item>Application List&lt;/Breadcrumb.Item>\n  &lt;Breadcrumb.Item>An Application&lt;/Breadcrumb.Item>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb</span><span class="token punctuation" >></span></span>'},["code","<Breadcrumb>\n  <Breadcrumb.Item>Home</Breadcrumb.Item>\n  <Breadcrumb.Item>Application Center</Breadcrumb.Item>\n  <Breadcrumb.Item>Application List</Breadcrumb.Item>\n  <Breadcrumb.Item>An Application</Breadcrumb.Item>\n</Breadcrumb>"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Optional"],["th","Default"]]],["tbody",["tr",["td","routes"],["td","The routing stack information of router"],["td","Array"],["td"],["td","-"]],["tr",["td","params"],["td","Routing parameter"],["td","Object"],["td"],["td","-"]],["tr",["td","separator"],["td","Custom separator"],["td","String or Element"],["td"],["td","'/'"]],["tr",["td","itemRender"],["td","Custom item renderer"],["td","(route, params, routes, paths) => React.ReactNode"],["td"],["td","-"]]]],["blockquote",["p",["code","linkRender"]," and ",["code","nameRender"]," were removed after ",["code","antd@2.0"],", please use ",["code","itemRender"]," instead."]]]}}});