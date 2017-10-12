webpackJsonp([142,226],{1114:function(t,s){t.exports={content:["section",["p","\u5f15\u5bfc\u7528\u6237\u6309\u7167\u6d41\u7a0b\u5b8c\u6210\u4efb\u52a1\u7684\u5bfc\u822a\u6761\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u5f53\u4efb\u52a1\u590d\u6742\u6216\u8005\u5b58\u5728\u5148\u540e\u5173\u7cfb\u65f6\uff0c\u5c06\u5176\u5206\u89e3\u6210\u4e00\u7cfb\u5217\u6b65\u9aa4\uff0c\u4ece\u800c\u7b80\u5316\u4efb\u52a1\u3002"]],meta:{category:"Components",subtitle:"\u6b65\u9aa4\u6761",type:"Navigation",cols:1,title:"Steps",filename:"components/steps/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Steps</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7b2c\u4e00\u6b65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7b2c\u4e8c\u6b65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7b2c\u4e09\u6b65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Steps</span><span class="token punctuation">></span></span>'},["code",'<Steps>\n  <Step title="\u7b2c\u4e00\u6b65" />\n  <Step title="\u7b2c\u4e8c\u6b65" />\n  <Step title="\u7b2c\u4e09\u6b65" />\n</Steps>']],["h3","Steps"],["p","\u6574\u4f53\u6b65\u9aa4\u6761\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","current"],["td","\u6307\u5b9a\u5f53\u524d\u6b65\u9aa4\uff0c\u4ece 0 \u5f00\u59cb\u8bb0\u6570\u3002\u5728\u5b50 Step \u5143\u7d20\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",["code","status"]," \u5c5e\u6027\u8986\u76d6\u72b6\u6001"],["td","number"],["td","0"]],["tr",["td","status"],["td","\u6307\u5b9a\u5f53\u524d\u6b65\u9aa4\u7684\u72b6\u6001\uff0c\u53ef\u9009 ",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","string"],["td","process"]],["tr",["td","size"],["td","\u6307\u5b9a\u5927\u5c0f\uff0c\u76ee\u524d\u652f\u6301\u666e\u901a\uff08",["code","default"],"\uff09\u548c\u8ff7\u4f60\uff08",["code","small"],"\uff09"],["td","string"],["td","default"]],["tr",["td","direction"],["td","\u6307\u5b9a\u6b65\u9aa4\u6761\u65b9\u5411\u3002\u76ee\u524d\u652f\u6301\u6c34\u5e73\uff08",["code","horizontal"],"\uff09\u548c\u7ad6\u76f4\uff08",["code","vertical"],"\uff09\u4e24\u79cd\u65b9\u5411"],["td","string"],["td","horizontal"]],["tr",["td","progressDot"],["td","\u70b9\u72b6\u6b65\u9aa4\u6761\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4e00\u4e2a function"],["td","Boolean or (iconDot, {index, status, title, description}) => ReactNode"],["td","false"]]]],["h3","Steps.Step"],["p","\u6b65\u9aa4\u6761\u5185\u7684\u6bcf\u4e00\u4e2a\u6b65\u9aa4\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","status"],["td","\u6307\u5b9a\u72b6\u6001\u3002\u5f53\u4e0d\u914d\u7f6e\u8be5\u5c5e\u6027\u65f6\uff0c\u4f1a\u4f7f\u7528 Steps \u7684 ",["code","current"]," \u6765\u81ea\u52a8\u6307\u5b9a\u72b6\u6001\u3002\u53ef\u9009\uff1a",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","string"],["td","wait"]],["tr",["td","title"],["td","\u6807\u9898"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","description"],["td","\u6b65\u9aa4\u7684\u8be6\u60c5\u63cf\u8ff0\uff0c\u53ef\u9009"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","icon"],["td","\u6b65\u9aa4\u56fe\u6807\u7684\u7c7b\u578b\uff0c\u53ef\u9009"],["td","string","|","ReactNode"],["td","-"]]]]]}}});