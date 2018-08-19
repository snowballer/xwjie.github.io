(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{206:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"接口定义常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口定义常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口定义常见问题")]),t._v(" "),s("p",[t._v("工作中，少不了要定义各种接口，系统集成要定义接口，前后台掉调用也要定义接口。接口定义一定程度上能反应程序员的编程功底。列举一下工作中我发现大家容易出现的问题：")]),t._v(" "),s("h2",{attrs:{id:"返回格式不统一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回格式不统一","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回格式不统一")]),t._v(" "),s("p",[t._v("同一个接口，有时候返回数组，有时候返回单个；成功的时候返回对象，失败的时候返回错误信息字符串。工作中有个系统集成就是这样定义的接口，真是辣眼睛。这个对应代码上，返回的类型是map，json，object，都是不应该的。实际工作中，我们会定义一个统一的格式，就是ResultBean，分页的有另外一个PageResultBean")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),t._v(" "),s("p",[t._v("返回map可读性不好，不知道里面是什么")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("delete")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String lang"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),t._v(" "),s("p",[t._v("成功返回boolean，失败返回string，大忌")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),s("span",{attrs:{class:"token function"}},[t._v("delete")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String lang"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" configService"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("delete")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" local"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"没有考虑失败情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有考虑失败情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有考虑失败情况")]),t._v(" "),s("p",[t._v("一开始只考虑成功场景，等后面测试发现有错误情况，怎么办，改接口呗，前后台都改，劳民伤财无用功。")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),t._v(" "),s("p",[t._v("不返回任何数据，没有考虑失败场景，容易返工")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/update"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("update")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xxx"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"出现和业务无关的输入参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现和业务无关的输入参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 出现和业务无关的输入参数")]),t._v(" "),s("p",[t._v("如lang语言，当前用户信息 都不应该出现参数里面，应该从"),s("strong",[t._v("当前会话")]),t._v("里面获取。后面讲ThreadLocal会说到怎么样去掉。除了代码可读性不好问题外，尤其是参数出现当前用户信息的，这是个严重问题。")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),t._v(" "),s("p",[t._v("（当前用户删除数据）参数出现lang和userid，尤其是userid，大忌")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("delete")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String lang"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String userId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"出现复杂的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现复杂的参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 出现复杂的参数")]),t._v(" "),s("p",[t._v("一般情况下，不允许出现例如json字符串这样的参数，这种参数可读性极差。应该定义对应的bean。")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),t._v(" "),s("p",[t._v("参数出现json格式，可读性不好，代码也难看")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/update"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("update")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String jsonStr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"没有返回应该返回的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有返回应该返回的数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有返回应该返回的数据")]),t._v(" "),s("p",[t._v("例如，新增接口一般情况下应该返回新对象的id标识，这需要编程经验。新手定义的时候因为前台没有用就不返回数据或者只返回true，这都是不恰当的。别人要不要是别人的事情，你该返回的还是应该返回。")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),t._v(" "),s("p",[t._v("约定俗成，新建应该返回新对象的信息(对象或者ID)，只返回boolean容易导致返工")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/add"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//xxx")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configService"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("相关讨论")]),t._v(" "),s("p",[t._v("当时在知乎上发帖的时候，有人认为返回给前台的信息应该越少越好，避免出现信息泄露问题。这个觉悟是对的，但对象ID并不是敏感信息，这里返回没有问题。")])]),t._v(" "),s("p",[t._v("很多人看了我的这篇文章"),s("code",[t._v("程序员你为什么这么累？")]),t._v("，都觉得里面的技术也很简单，没有什么特别的地方，但是，实现这个代码框架之前，就是要你的接口的统一的格式ResultBean，aop才好做。有些人误解了，我那篇文章说的都不是技术，重点说的是编码习惯工作方式，如果你重点还是放在什么技术上，那我也帮不了你了。同样，如果我后面的关于习惯和规范的帖子，你重点还是放在技术上的话，那是丢了西瓜捡芝麻，有很多贴还是没有任何技术点呢。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("晓风轻总结")]),t._v(" "),s("p",[t._v("统一的接口规范，能帮忙规避很多无用的返工修改和可能出现的问题。能使代码可读性更加好，利于进行aop和自动化测试这些额外工作。大家一定要重视。")])])])}],!1,null,null,null);o.options.__file="rest-defined.md";a.default=o.exports}}]);