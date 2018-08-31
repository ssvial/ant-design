webpackJsonp([21],{1859:function(n,a,s){n.exports={"12hours":s(2427),addon:s(2428),basic:s(2429),disabled:s(2430),"hide-column":s(2431),"interval-options":s(2432),size:s(2433),value:s(2434)}},2427:function(n,a,s){n.exports={content:{"zh-CN":[["p","12 \u5c0f\u65f6\u5236\u7684\u65f6\u95f4\u9009\u62e9\u5668\uff0c\u9ed8\u8ba4\u7684 format \u4e3a ",["code","h:mm:ss a"],"\u3002"]],"en-US":[["p","TimePicker of 12 hours format, with default format ",["code","h:mm:ss a"],"."]]},meta:{order:7,title:{"zh-CN":"12 \u5c0f\u65f6\u5236","en-US":"12 hours"},filename:"components/time-picker/demo/12hours.md",id:"components-time-picker-demo-12hours"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h:mm:ss</span> <span class="token attr-name">A"</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h:mm</span> <span class="token attr-name">a"</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(32));function t(n,a){console.log(n,a)}return n.createElement("div",null,n.createElement(a.TimePicker,{use12Hours:!0,onChange:t}),n.createElement(a.TimePicker,{use12Hours:!0,format:"h:mm:ss A",onChange:t}),n.createElement(a.TimePicker,{use12Hours:!0,format:"h:mm a",onChange:t}))}}},2428:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5728 TimePicker \u9009\u62e9\u6846\u5e95\u90e8\u663e\u793a\u81ea\u5b9a\u4e49\u7684\u5185\u5bb9\u3002"]],"en-US":[["p","Render addon contents to timepicker panel's bottom."]]},meta:{order:6,title:{"zh-CN":"\u9644\u52a0\u5185\u5bb9","en-US":"Addon"},filename:"components/time-picker/demo/addon.md",id:"components-time-picker-demo-addon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TimePickerAddonDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> open<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleOpenChange <span class="token operator">=</span> <span class="token punctuation">(</span>open<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  handleClose <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n        <span class="token attr-name">open</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>open<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onOpenChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleOpenChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">addon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>Button size<span class="token operator">=</span><span class="token string">"small"</span> type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClose<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Ok\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePickerAddonDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(32);function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var p=function(s){function p(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,o=Array(t),c=0;c<t;c++)o[c]=arguments[c];return a=s=e(this,(n=p.__proto__||Object.getPrototypeOf(p)).call.apply(n,[this].concat(o))),s.state={open:!1},s.handleOpenChange=function(n){s.setState({open:n})},s.handleClose=function(){return s.setState({open:!1})},e(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(p,n.Component),a(p,[{key:"render",value:function(){var a=this;return n.createElement(t.TimePicker,{open:this.state.open,onOpenChange:this.handleOpenChange,addon:function(){return n.createElement(t.Button,{size:"small",type:"primary",onClick:a.handleClose},"Ok")}})}}]),p}();return n.createElement(p,null)}}},2429:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u70b9\u51fb TimePicker\uff0c\u7136\u540e\u53ef\u4ee5\u5728\u6d6e\u5c42\u4e2d\u9009\u62e9\u6216\u8005\u8f93\u5165\u67d0\u4e00\u65f6\u95f4\u3002"]],"en-US":[["p","Click ",["code","TimePicker"],", and then we could select or input a time in panel."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/time-picker/demo/basic.md",id:"components-time-picker-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">defaultOpenValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'00:00:00\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(32)),t=function(n){return n&&n.__esModule?n:{default:n}}(s(34));return n.createElement(a.TimePicker,{onChange:function(n,a){console.log(n,a)},defaultOpenValue:(0,t.default)("00:00:00","HH:mm:ss")})}}},2430:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u7981\u7528\u65f6\u95f4\u9009\u62e9\u3002"]],"en-US":[["p","A disabled state of the ",["code","TimePicker"],"."]]},meta:{order:3,title:{"zh-CN":"\u7981\u7528","en-US":"disabled"},filename:"components/time-picker/demo/disabled.md",id:"components-time-picker-demo-disabled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(32)),t=function(n){return n&&n.__esModule?n:{default:n}}(s(34));return n.createElement(a.TimePicker,{defaultValue:(0,t.default)("12:08:23","HH:mm:ss"),disabled:!0})}}},2431:function(n,a,s){n.exports={content:{"zh-CN":[["p","TimePicker \u6d6e\u5c42\u4e2d\u7684\u5217\u4f1a\u968f\u7740 ",["code","format"]," \u53d8\u5316\uff0c\u5f53\u7565\u53bb ",["code","format"]," \u4e2d\u7684\u67d0\u90e8\u5206\u65f6\uff0c\u6d6e\u5c42\u4e2d\u5bf9\u5e94\u7684\u5217\u4e5f\u4f1a\u6d88\u5931\u3002"]],"en-US":[["p","While part of ",["code","format"]," is omitted, the corresponding column in panel will disappear, too."]]},meta:{order:4,title:{"zh-CN":"\u9009\u62e9\u65f6\u5206","en-US":"Hour and minute"},filename:"components/time-picker/demo/hide-column.md",id:"components-time-picker-demo-hide-column"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> format <span class="token operator">=</span> <span class="token string">\'HH:mm\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08\'</span><span class="token punctuation">,</span> format<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>format<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(32)),t=function(n){return n&&n.__esModule?n:{default:n}}(s(34));return n.createElement(a.TimePicker,{defaultValue:(0,t.default)("12:08","HH:mm"),format:"HH:mm"})}}},2432:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u4f7f\u7528 ",["code","hourStep"]," ",["code","minuteStep"]," ",["code","secondStep"]," \u6309\u6b65\u957f\u5c55\u793a\u53ef\u9009\u7684\u65f6\u5206\u79d2\u3002"]],"en-US":[["p","Show stepped options by ",["code","hourStep"]," ",["code","minuteStep"]," ",["code","secondStep"],"."]]},meta:{order:5,title:{"zh-CN":"\u6b65\u957f\u9009\u9879","en-US":"interval option"},filename:"components/time-picker/demo/interval-options.md",id:"components-time-picker-demo-interval-options"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">minuteStep</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span></span> <span class="token attr-name">secondStep</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(32));return n.createElement(a.TimePicker,{minuteStep:15,secondStep:10})}}},2433:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4e09\u79cd\u5927\u5c0f\u7684\u8f93\u5165\u6846\uff0c\u5927\u7684\u7528\u5728\u8868\u5355\u4e2d\uff0c\u4e2d\u7684\u4e3a\u9ed8\u8ba4\u3002"]],"en-US":[["p","The input box comes in three sizes. large is used in the form, while the medium size is the default."]]},meta:{order:2,title:{"zh-CN":"\u4e09\u79cd\u5927\u5c0f","en-US":"Three Sizes"},filename:"components/time-picker/demo/size.md",id:"components-time-picker-demo-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),s(32)),t=function(n){return n&&n.__esModule?n:{default:n}}(s(34));return n.createElement("div",null,n.createElement(a.TimePicker,{defaultValue:(0,t.default)("12:08:23","HH:mm:ss"),size:"large"}),n.createElement(a.TimePicker,{defaultValue:(0,t.default)("12:08:23","HH:mm:ss")}),n.createElement(a.TimePicker,{defaultValue:(0,t.default)("12:08:23","HH:mm:ss"),size:"small"}))}}},2434:function(n,a,s){n.exports={content:{"zh-CN":[["p","value \u548c onChange \u9700\u8981\u914d\u5408\u4f7f\u7528\u3002"]],"en-US":[["p",["code","value"]," and ",["code","onChange"]," should be used together,"]]},meta:{order:1,title:{"zh-CN":"\u53d7\u63a7\u7ec4\u4ef6","en-US":"Under Control"},filename:"components/time-picker/demo/value.md",id:"components-time-picker-demo-value"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> time <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(32);function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var p=function(s){function p(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,o=Array(t),c=0;c<t;c++)o[c]=arguments[c];return a=s=e(this,(n=p.__proto__||Object.getPrototypeOf(p)).call.apply(n,[this].concat(o))),s.state={value:null},s.onChange=function(n){console.log(n),s.setState({value:n})},e(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(p,n.Component),a(p,[{key:"render",value:function(){return n.createElement(t.TimePicker,{value:this.state.value,onChange:this.onChange})}}]),p}();return n.createElement(p,null)}}}});