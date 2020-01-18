(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{312:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模块机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块机制"}},[t._v("#")]),t._v(" 模块机制")]),t._v(" "),a("p",[t._v("模块是代码结构的基本组成部分。通过模块系统，我们可以用模块化的方式来组织应用代码。模块可以通过 "),a("code",[t._v("module.exports")]),t._v(" 自由地隐藏内部实现、对外暴露接口。我们只需要通过 "),a("code",[t._v("require")]),t._v(" 方法，就能实现模块加载引入。")]),t._v(" "),a("h2",{attrs:{id:"模块分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块分类"}},[t._v("#")]),t._v(" 模块分类")]),t._v(" "),a("h3",{attrs:{id:"核心模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心模块"}},[t._v("#")]),t._v(" 核心模块")]),t._v(" "),a("p",[t._v("Node 平台自带一套基本的功能模块，也有人称之为 Node 平台的 API。")]),t._v(" "),a("p",[t._v("核心模块部分在 Node 源代码的编译过程中，编译进了二进制执行文件。在 Node 进程启动时，部分核心模块就被直接加载进内存中，所以这部分核心模块引入时，文件定位和编译执行这两个步骤可以省略掉，并且在路径分析中优先判断，所以它的加载速度是最快的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"文件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件模块"}},[t._v("#")]),t._v(" 文件模块")]),t._v(" "),a("p",[t._v("文件模块则是在运行时动态加载，需要完整的路径分析、文件定位、编译执行过程，速度笔核心模块慢。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" calc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/calculatror'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"第三方文件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方文件模块"}},[t._v("#")]),t._v(" 第三方文件模块")]),t._v(" "),a("p",[t._v("社区或第三方开发的功能模块，这种模块在 Node 本身没有，需要通过 NPM 的方式下载之后再引入。比如要操作 MySQL 数据库，则需要引入 MySQL 这个模块。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"模块加载机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块加载机制"}},[t._v("#")]),t._v(" 模块加载机制")]),t._v(" "),a("p",[t._v("与前端浏览器会缓存静态脚本文件以提高性能一样，Node 对引入过的模块都会进行缓存，以减少二次引入时的开销。不同的地方在于，浏览器仅仅缓存文件，而 Node 缓存的是编译和执行之后的对象。")]),t._v(" "),a("p",[t._v("不论是核心模块还是文件模块，"),a("code",[t._v("require()")]),t._v(" 方法对相同模块的二次加载都一律采用缓存优先的方式，这是"),a("strong",[t._v("第一优先级")]),t._v("的。不同之处在于核心模块的缓存检查先于文件模块的缓存检查。")]),t._v(" "),a("p",[t._v("在 NodeJS 中引入模块，需要经历如下三个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("路径分析")]),t._v(" "),a("li",[t._v("文件定位")]),t._v(" "),a("li",[t._v("编译执行")])]),t._v(" "),a("h3",{attrs:{id:"路径分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径分析"}},[t._v("#")]),t._v(" 路径分析")]),t._v(" "),a("p",[a("code",[t._v("require()")]),t._v(" 接受一个标识符作为参数。在 Node 实战中，正是基于这样一个标识符进行模块查找的。模块标识符在 Node 中主要分为以下几个分类。")]),t._v(" "),a("ul",[a("li",[t._v("核心模块，如 http、fs、path 等")]),t._v(" "),a("li",[a("code",[t._v(".")]),t._v(" 或 "),a("code",[t._v("..")]),t._v(" 开头的相对路径文件模块")]),t._v(" "),a("li",[t._v("以 "),a("code",[t._v("/")]),t._v(" 开始的绝对路径文件模块")]),t._v(" "),a("li",[t._v("非路径形式的第三方文件模块，如自定义的 connect 模块")])]),t._v(" "),a("h4",{attrs:{id:"核心模块-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心模块-2"}},[t._v("#")]),t._v(" 核心模块")]),t._v(" "),a("p",[t._v("核心模块的优先级仅次于缓存加载，它在 Node 的源代码编译过程中已经编译为二进制代码，其加载过程最快。")]),t._v(" "),a("p",[t._v("如果试图加载一个与核心模块标识符相同的自定义模块，那是不会成功的。如果自己编写了一个 http 用户模块，想要加载成功，必须选择一个不同的标识符或者换用路径的方式引入。")]),t._v(" "),a("h4",{attrs:{id:"路径形式的文件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径形式的文件模块"}},[t._v("#")]),t._v(" 路径形式的文件模块")]),t._v(" "),a("p",[t._v("以 "),a("code",[t._v(".")]),t._v("、"),a("code",[t._v("..")]),t._v(" 和 "),a("code",[t._v("/")]),t._v(" 开始的标识符，这里都被当做文件模块来处理。在分析文件模块时，"),a("code",[t._v("require()")]),t._v(" 方法会将路径转为真实路径，并以真实路径作为索引，将编译执行后的结果存放到缓存中，以使二次加载时更快。")]),t._v(" "),a("p",[t._v("由于文件模块给 Node 指明了确切的文件位置，所以在查找过程中可以节约大量时间，其加载速度慢于核心模块。")]),t._v(" "),a("h4",{attrs:{id:"自定义模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义模块"}},[t._v("#")]),t._v(" 自定义模块")]),t._v(" "),a("p",[t._v("自定义模块指的是非核心模块，也不是路径形式的标识符。它是一种特殊的文件模块，可能是一个文件或包的形式。这类模块的查找是最费时的，也是所有方式中最慢的一种。")]),t._v(" "),a("h3",{attrs:{id:"文件定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件定位"}},[t._v("#")]),t._v(" 文件定位")]),t._v(" "),a("p",[t._v("在文件定位过程中，需要注意包括文件扩展名的分析、目录和包的处理。")]),t._v(" "),a("h4",{attrs:{id:"文件扩展名分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件扩展名分析"}},[t._v("#")]),t._v(" 文件扩展名分析")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("require()")]),t._v(" 分析标识符的过程中，当标识符不包含文件扩展名时，会按 "),a("code",[t._v(".js")]),t._v("、"),a("code",[t._v(".json")]),t._v("、"),a("code",[t._v(".node")]),t._v(" 的次序补足扩展名，依次尝试。")]),t._v(" "),a("p",[t._v("在尝试过程中，需要调用 fs 模块同步阻塞式地判断文件是否存在。因为 Node 是单线程的，所以这里是一个会引起性能问题的地方。小诀窍是：如果是 "),a("code",[t._v(".node")]),t._v(" 和 "),a("code",[t._v(".json")]),t._v(" 文件，在传递给 "),a("code",[t._v("require()")]),t._v(" 的标识符中带上扩展名，会加快一点速度。另一个诀窍是：同步配合缓存，可以大幅度缓解 Node 单线程中阻塞式调用的缺陷。")]),t._v(" "),a("h4",{attrs:{id:"目录分析和包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录分析和包"}},[t._v("#")]),t._v(" 目录分析和包")]),t._v(" "),a("p",[t._v("在分析标识符的过程中，"),a("code",[t._v("require()")]),t._v(" 通过分析文件扩展名之后，可能没有查找到对应文件，但却得到一个目录，这在引入自定义模块和逐个模块路径进行查找时经常会出现，此时 Node 会将目录当做一个包来处理。")]),t._v(" "),a("p",[a("strong",[t._v("查找步骤：")])]),t._v(" "),a("ol",[a("li",[t._v("当前目录 "),a("code",[t._v("package.json")]),t._v(" 通过 "),a("code",[t._v("JSON.parse()")]),t._v(" 解析包描述对象，从中取出 main 属性指定的文件名进行定位")]),t._v(" "),a("li",[t._v("如果 main 属性指定文件名错误，或压根没有 "),a("code",[t._v("package.json")]),t._v("，则 Node 会将 index 当做默认文件名")]),t._v(" "),a("li",[t._v("如果目录分析的过程中没有定位成果任何文件，则自定义模块进入下一个模块路径进行查找")])]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/module/commonjs.html#目录的加载规则"}},[t._v("扩展：目录加载规则")])],1),t._v(" "),a("h3",{attrs:{id:"模块编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块编译"}},[t._v("#")]),t._v(" 模块编译")]),t._v(" "),a("p",[t._v("编译和执行是引入文件模块的最后一个阶段。定位到具体的文件后，Node 会新建一个模块对象，然后根据路径载入并编译。对于不同的文件扩展名，其载入方法也有所不同。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".js")]),t._v(" 文件：通过 fs 模块同步读取文件后编译执行")]),t._v(" "),a("li",[a("code",[t._v(".node")]),t._v(" 文件：这是用 C/C++ 编写的扩展文件，通过 "),a("code",[t._v("dlopen()")]),t._v(" 方法加载最后编译生成的文件")]),t._v(" "),a("li",[a("code",[t._v(".json")]),t._v(" 文件：通过 fs 模块同步读取文件后，用 "),a("code",[t._v("JSON.parse()")]),t._v(" 解析返回结果")]),t._v(" "),a("li",[t._v("其余扩展名文件：它们都被当做 "),a("code",[t._v(".js")]),t._v(" 文件载入")])]),t._v(" "),a("p",[t._v("每一次编译成功的模块都会将其文件路径作为索引缓存在 "),a("code",[t._v("Module._cache")]),t._v(" 对象上，以提高二次引入的性能。")]),t._v(" "),a("h4",{attrs:{id:"javascript-模块的编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-模块的编译"}},[t._v("#")]),t._v(" JavaScript 模块的编译")]),t._v(" "),a("p",[t._v("我们都知道每个模块文件中不仅存在着 "),a("code",[t._v("require")]),t._v("、"),a("code",[t._v("exports")]),t._v(" 和 "),a("code",[t._v("module")]),t._v(" 这三个变量，也存在着 "),a("code",[t._v("__filename")]),t._v("、"),a("code",[t._v("__dirname")]),t._v(" 这两个变量。这些变量不会放诸于浏览器端，因为会存在污染全局变量的情况。")]),t._v(" "),a("p",[t._v("事实上，在编译过程中，Node 会获取的 JavaScript 文件内容进行了头尾包装。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" math "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'math'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("area")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" radius "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" radius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样每个模块文件之间都进行了作用域隔离。包装后的代码会通过 vm 原生模块的 "),a("code",[t._v("runInThisContext()")]),t._v(" 方法执行（类似于 eval，只有具有明确上下文，不污染全局），返回一个具体的 function 对象。最后，将当前模块对象的 exports 属性、"),a("code",[t._v("require()")]),t._v(" 方法、"),a("code",[t._v("module")]),t._v("（模块对象自身）以及在文件定位中得到的完整文件路径和文件目录作为参数传递给这个 "),a("code",[t._v("function()")]),t._v(" 执行。")]),t._v(" "),a("p",[t._v("这就是这些变量并没有定义在每个模块文件中却存在的原因。在执行之后，模块的 exports 属性被返回给了调用方。exports 属性上的任何方法和属性都可以被外部调用到，但是模块中的其余变量或属性则不可直接调用。")]),t._v(" "),a("h4",{attrs:{id:"c-c-模块的编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-c-模块的编译"}},[t._v("#")]),t._v(" C/C++ 模块的编译")]),t._v(" "),a("p",[t._v("Node 调用 "),a("code",[t._v("process.dlopen()")]),t._v(" 方法进行加载和执行。在 Node 的架构下，"),a("code",[t._v("dlopen()")]),t._v(" 方法在 Windows 和 *nix 平台下分别有不同的实现，通过 libuv 兼容层进行了封装。")]),t._v(" "),a("p",[t._v("实际上，"),a("code",[t._v(".node")]),t._v(" 的模块文件并不需要编译，因为它是编写 C/C++ 模块之后编译生成的，所以这里只有加载和执行的过程。在执行过程中，模块的 exports 对象与 "),a("code",[t._v(".node")]),t._v(" 模块产生联系，然后返回给调用者。")]),t._v(" "),a("h4",{attrs:{id:"json-文件的编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-文件的编译"}},[t._v("#")]),t._v(" JSON 文件的编译")]),t._v(" "),a("p",[t._v("Node 利用 fs 模块同步读取 JSON 文件的内容之后，调用 "),a("code",[t._v("JSON.parse()")]),t._v(" 方法得到对象，然后将它赋给模块对象的 exports，以供外部调用。")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("参考资料：")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/dist/latest-v12.x/docs/api/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("📖 Node.js documentation: modules"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/38382637",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 浅析当下的 Node.js CommonJS 模块系统"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009060866",target:"_blank",rel:"noopener noreferrer"}},[t._v("📝 在 Node.js 中引入模块，你所需要直到的一切都在这里"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);