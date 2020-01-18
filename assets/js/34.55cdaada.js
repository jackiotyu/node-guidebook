(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{319:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径"}},[t._v("#")]),t._v(" 路径")]),t._v(" "),a("p",[t._v("Node.js 中分为"),a("strong",[t._v("相对路径")]),t._v("和"),a("strong",[t._v("绝对路径")]),t._v("两种，相对路径表示当前目录层级对于目标的位置，而绝对路径表示目标当前所在的位置。")]),t._v(" "),a("h2",{attrs:{id:"相对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对路径"}},[t._v("#")]),t._v(" 相对路径")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("./")]),t._v(" 表示当前目录，不使用 "),a("code",[t._v("require")]),t._v(" 时，与 "),a("code",[t._v("process.cwd()")]),t._v(" 一样，使用 "),a("code",[t._v("require")]),t._v(" 时，与 "),a("code",[t._v("__dirname")]),t._v(" 一样")]),t._v(" "),a("li",[a("code",[t._v("../")]),t._v(" 表示上层目录")])]),t._v(" "),a("p",[t._v("只有在 "),a("code",[t._v("require()")]),t._v(" 时才使用相对路径的写法，其它地方一律使用绝对路径。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前目录下")]),t._v("\npath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相邻目录下")]),t._v("\npath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../regexp/regexp.js'")]),t._v("\n")])])]),a("h2",{attrs:{id:"绝对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径"}},[t._v("#")]),t._v(" 绝对路径")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("__dirname")]),t._v(" 被执行的 JavaScript 文件所在目录的绝对路径")]),t._v(" "),a("li",[a("code",[t._v("__filename")]),t._v(" 被执行的 JavaScript 文件的绝对路径")]),t._v(" "),a("li",[a("code",[t._v("process.cwd()")]),t._v(" 当前 Node 命令执行时所在的文件夹的绝对路径")])]),t._v(" "),a("h2",{attrs:{id:"常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[t._v("#")]),t._v(" 常用方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("path.join([...paths])")]),t._v(" 使用平台特定的分隔符把所有 "),a("code",[t._v("path")]),t._v(" 片段连接到一起，并规范化生成的路径")]),t._v(" "),a("li",[a("code",[t._v("path.resolve([...paths])")]),t._v(" 将路径或路径片段的序列处理成绝对路径。指定的路径序列是从右往左开始处理的，后面的 "),a("code",[t._v("path")]),t._v(" 被依次处理，直到构造完绝对路径")])]),t._v(" "),a("p",[t._v("🌰 "),a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz/asdf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quux'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'..'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return: '/foo/bar/baz/asdf'")]),t._v("\n\npath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throw 'TypeError: Path must be a string. Received {}'")]),t._v("\n\npath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo/bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return: '/foo/bar/baz'")]),t._v("\n\npath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo/bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp/file/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return: '/tmp/file'")]),t._v("\n\npath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wwwroot'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static_files/png/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../gif/image.gif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前工作目录是 /home/myself/node")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);