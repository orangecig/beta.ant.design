webpackJsonp([108,197],{968:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var s=n(1),a=(o(s),n(2));o(a);e.exports={content:["section",["p","Double column transfer choice box. One or more elements can be selected from either column, one click on the proper 'direction' button, and the transfer is done."],["p","The left column is considered the 'source' and the right column is considered the 'target'. As you can see in the API description, these names are reflected in."],["h2","When To Use"],["p","To transfer the elements between two columns in an intuitive and efficient way."]],meta:{category:"Components",type:"Form Controls",cols:1,title:"Transfer",filename:"components/transfer/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]],["li",["a",{href:"#Warning"},"Warning"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","dataSource"],["td","Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in ",["code","targetKeys"]," prop."],["td","Array"],["td","[]"]],["tr",["td","render"],["td","The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record."],["td","Function(record)"],["td"]],["tr",["td","targetKeys"],["td","A set of keys of elements that are listed on the right column."],["td","Array"],["td","[]"]],["tr",["td","onChange"],["td","A callback function that is executed when the transfer between columns is complete."],["td","Function(targetKeys, direction, moveKeys)"],["td"]],["tr",["td","onSelectChange"],["td","A callback function which is executed when selected items are changed."],["td","Function(sourceSelectedKeys, targetSelectedKeys)"],["td"]],["tr",["td","listStyle"],["td","A custom CSS style used for rendering the transfer columns."],["td","Object"],["td"]],["tr",["td","className"],["td","A custom CSS class."],["td","String"],["td"]],["tr",["td","titles"],["td","A set of titles that are sorted from left to right."],["td","Array"],["td","['\u6e90\u5217\u8868', '\u76ee\u7684\u5217\u8868']"]],["tr",["td","operations"],["td","A set of operations that are sorted form top to bottom."],["td","Array"],["td","[]"]],["tr",["td","showSearch"],["td","If included, a search box is shown on each column."],["td","Boolean"],["td","false"]],["tr",["td","searchPlaceholder"],["td","The hint text of the search box."],["td","String"],["td","'Please input the content'"]],["tr",["td","notFoundContent"],["td","Text to display when a column is empty."],["td","React.node"],["td","'The list is empty'"]],["tr",["td","footer"],["td","A function used for rendering the footer."],["td","Function(props)"],["td"]]]],["h2","Warning"],["p","According the ",["a",{title:null,href:"http://facebook.github.io/react/docs/multiple-components.html#dynamic-children"},"standard"]," of React, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in ",["code","dataSource"]," array. By default, ",["code","key"]," property is used as an unique identifier. "],["p","If there's no ",["code","key"]," in your data, you should use ",["code","rowKey"]," to specify the key that will be used for uniquely identify each element."],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// eg. your primary key is `uid`</span>\n<span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Transfer</span> <span class="token attr-name" >rowKey</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>record <span class="token operator" >=</span><span class="token operator" >></span> record<span class="token punctuation" >.</span>uid<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>'},["code","// eg. your primary key is `uid`\nreturn <Transfer rowKey={record => record.uid} />;"]]]}}});