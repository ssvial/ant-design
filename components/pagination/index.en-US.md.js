webpackJsonp([160],{1818:function(t,e){t.exports={content:["section",["p","A long list can be divided into several pages by ",["code","Pagination"],", and only one page will be loaded at a time."],["h2","When To Use"],["ul",["li",["p","When it will take a long time to load/render all items."]],["li",["p","If you want to browse the data by navigating through pages."]]]],meta:{category:"Components",type:"Navigation",title:"Pagination",cols:1,filename:"components/pagination/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation">=</span>{onChange}</span> <span class="token attr-name">total</span><span class="token attr-value"><span class="token punctuation">=</span>{50}</span> <span class="token punctuation">/></span></span>'},["code","<Pagination onChange={onChange} total={50} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","current"],["td","current page number"],["td","number"],["td","-"]],["tr",["td","defaultCurrent"],["td","default initial page number"],["td","number"],["td","1"]],["tr",["td","defaultPageSize"],["td","default number of data items per page"],["td","number"],["td","10"]],["tr",["td","hideOnSinglePage"],["td","Whether to hide pager on single page"],["td","boolean"],["td","false"]],["tr",["td","itemRender"],["td","to customize item innerHTML"],["td","(page, type: 'page' ","|"," 'prev' ","|"," 'next', originalElement) => React.ReactNode"],["td","-"]],["tr",["td","pageSize"],["td","number of data items per page"],["td","number"],["td","-"]],["tr",["td","pageSizeOptions"],["td","specify the sizeChanger options"],["td","string","[","]"],["td",["span","'10', '20', '30', '40'"]]],["tr",["td","showQuickJumper"],["td","determine whether you can jump to pages directly"],["td","boolean"],["td","false"]],["tr",["td","showSizeChanger"],["td","determine whether ",["code","pageSize"]," can be changed"],["td","boolean"],["td","false"]],["tr",["td","showTotal"],["td","to display the total number and range"],["td","Function(total, range)"],["td","-"]],["tr",["td","simple"],["td","whether to use simple mode"],["td","boolean"],["td","-"]],["tr",["td","size"],["td","specify the size of ",["code","Pagination"],", can be set to ",["code","small"]],["td","string"],["td",'""']],["tr",["td","total"],["td","total number of data items"],["td","number"],["td","0"]],["tr",["td","onChange"],["td","a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments"],["td","Function(page, pageSize)"],["td","noop"]],["tr",["td","onShowSizeChange"],["td","a callback function, executed when ",["code","pageSize"]," is changed"],["td","Function(current, size)"],["td","noop"]]]]]}}});