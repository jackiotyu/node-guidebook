(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{281:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"守护进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#守护进程"}},[t._v("#")]),t._v(" 守护进程")]),t._v(" "),a("p",[t._v("守护进程是后台运行不受终端控制的进程（如输入、输出等），一般的网络服务都是以守护进程的方式运行。")]),t._v(" "),a("h2",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),a("p",[t._v("守护进程脱离终端的主要原因两点：")]),t._v(" "),a("ol",[a("li",[t._v("用户启动守护进程的终端在启动守护进程之后，需要执行其他任务")]),t._v(" "),a("li",[t._v("如其他用户登录该终端后，以前的守护进程的错误信息不应出现，由终端上的一些键所产生的信号（如中断信号），不应以前从该终端上启动的任何守护进程造成影响")])]),t._v(" "),a("h2",{attrs:{id:"实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),a("h3",{attrs:{id:"实现步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),a("ol",[a("li",[t._v("父进程通过 "),a("code",[t._v("fork")]),t._v(" 等方法创建子进程")]),t._v(" "),a("li",[t._v("在子进程中创建新回话（调用系统函数 setsid）")]),t._v(" "),a("li",[t._v("改变子进程工作目录（如："),a("code",[t._v('"/"')]),t._v(" 或 "),a("code",[t._v('"/usr"')]),t._v(" 等）")]),t._v(" "),a("li",[t._v("父进程终止，子进程由 init 进程接管")])]),t._v(" "),a("h3",{attrs:{id:"setsid-详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setsid-详解"}},[t._v("#")]),t._v(" setsid 详解")]),t._v(" "),a("p",[a("code",[t._v("setsid")]),t._v(" 主要完成三件事：")]),t._v(" "),a("ol",[a("li",[t._v("该进程完成一个新会话的会话领导")]),t._v(" "),a("li",[t._v("该进程编程一个进程组的组长")]),t._v(" "),a("li",[t._v("该进程没有控制终端")])]),t._v(" "),a("p",[t._v("然而，Nodejs 中并没有对 "),a("code",[t._v("setsid")]),t._v(" 方法的直接封装，翻阅文档发现有一个地方是可以调用该方法的。")]),t._v(" "),a("h3",{attrs:{id:"实现过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现过程"}},[t._v("#")]),t._v(" 实现过程")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" spawn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child_process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'restart server'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node js pid is'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"https://cnodejs.org/topic/57adfadf476898b472247eac",target:"_blank",rel:"noopener noreferrer"}},[t._v("守护进程实现（Node.js 版本）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ElemeFE/node-interview/blob/master/sections/zh-cn/process.md#%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("守护进程实现（C 语言版本）"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"守护进程总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#守护进程总结"}},[t._v("#")]),t._v(" 守护进程总结")]),t._v(" "),a("p",[t._v("在实际工作中对于守护进程并不陌生，例如 PM2、Egg-Cluster 等，以上只是一个简单的 Demo 对守护进程做了一个说明，在实际工作中对守护进程的健壮性要求还是很高的，例如：进程的异常监听、工作进程管理调度、进程挂掉之后重启等等，这些还需要我们去不断思考。")])])}),[],!1,null,null,null);s.default=r.exports}}]);