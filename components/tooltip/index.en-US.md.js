webpackJsonp([129,226],{1185:function(t,e){t.exports={content:["section",["p","A simple text popup tip."],["h2","When To Use"],["ul",["li",["p","The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations."]],["li",["p","To provide an explanation of a ",["code","button/text/operation"],". It's often used instead of the html ",["code","title"]," attribute."]]]],meta:{category:"Components",type:"Data Display",title:"Tooltip",filename:"components/tooltip/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Note",title:"Note"},"Note"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","title"],["td","The text shown in the tooltip"],["td","string","|","React.Element"],["td","-"]]]],["h3","Common API"],["p","The following APIs are shared by Tooltip, Popconfirm, Popover."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","placement"],["td","The position of the tooltip relative to the target, which can be one of ",["code","top"]," ",["code","left"]," ",["code","right"]," ",["code","bottom"]," ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","leftTop"]," ",["code","leftBottom"]," ",["code","rightTop"]," ",["code","rightBottom"]],["td","string"],["td",["code","top"]]],["tr",["td","getPopupContainer"],["td","The DOM container of the tip, the default behavior is to create a ",["code","div"]," element in ",["code","body"],". Use ",["code","getTooltipContainer"]," if you are using ",["code","antd@<2.5.2"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","arrowPointAtCenter"],["td","Whether the arrow is pointed at the center of target, supported after ",["code","antd@1.11+"]],["td","boolean"],["td",["code","false"]]],["tr",["td","autoAdjustOverflow"],["td","Whether to adjust popup placement automatically when popup is off screen"],["td","boolean"],["td",["code","true"]]],["tr",["td","visible"],["td","Whether the floating tooltip card is visible or not"],["td","boolean"],["td",["code","false"]]],["tr",["td","onVisibleChange"],["td","Callback executed when visibility of the tooltip card is changed"],["td","(visible) => void"],["td","-"]],["tr",["td","mouseEnterDelay"],["td","Delay in seconds, before tooltip is shown on mouse enter"],["td","number"],["td","0"]],["tr",["td","mouseLeaveDelay"],["td","Delay in seconds, before tooltip is hidden on mouse leave"],["td","number"],["td","0.1"]],["tr",["td","trigger"],["td","Tooltip trigger mode"],["td",["code","hover"]," ","|"," ",["code","focus"]," ","|"," ",["code","click"]],["td",["code","hover"]]],["tr",["td","overlayClassName"],["td","Class name of the tooltip card"],["td","string"],["td","-"]],["tr",["td","overlayStyle"],["td","Style of the tooltip card"],["td","object"],["td","-"]]]],["h2","Note"],["p","Please ensure that the child node of ",["code","Tooltip"]," accepts ",["code","onMouseEnter"],", ",["code","onMouseLeave"],", ",["code","onFocus"],", ",["code","onClick"]," events."]]}}});