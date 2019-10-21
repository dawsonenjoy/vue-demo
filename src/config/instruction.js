export default {
  defaultInstr: {
    index: "",
    content: `
    这个页面你应该能看懂...这里就讲讲这里的界面布局，以及面包屑导航和页面说明实现的原理：
    <p>1.首先页面总体分三块，上/下左/下右，然后上是标题栏（src/layout/Heading组件），下左是导航栏（src/layout/Navigation组件），下右是主要内容展示，就是你现在看到的地方</p>
    <p>2.然后通过Layout组件（src/layout/Layout下）将这2个组件拼在一起，使用了栅格布局————左边分5，右边分19（总共24）</p>
    <p>3.在router/index里将根路由的组件设置为Layout，其他路由除了404都在根路由下，就实现了这个界面样式效果</p>
    <p>4.而对于面包屑导航和页面说明则定义了Title和Instruction组件来实现，也都在src/layout目录下</p>
    <p>5.这两个组件本身定义了模板内容，现在你看到的文字就是模板内容里的，如果你到别的页面，那么根据页面传递的内容，现在你看到的这些内容将会被覆盖成新的内容（即对应页面的文字说明），而这个内容的传递是通过内置的slot组件实现的</p>
    <p>6.然后在Layout组件当中这两个组件也拼在了里面，而你看到的这些说明内容都是从src/config/instruction.js里读取的，然后根据路由读取对应路由下的文字说明以及面包屑导航地址</p>
    <p>7.由于Layout是处于根路由下，所以正常情况下子路由跳转不会影响到父路由组件的变化，而这里我们要更新对应路由页面的文字说明，因此在Layout中对路由属性$route进行了watch监听，当发生修改时则重新获取文字说明啥的</p>
    <p>6.还有页面的样式是用预编译语言sass写的（应该说scss，即版本3.0+的sass），要使用sass就要先安装node-sass和sass-loader</p>

    <h3>架构目录说明：</h3>
    <p>对了，架构目录都放了啥也说下吧</p>
    <p>基本的内容都在src下，所以先将src之外的目录吧...</p>
    <p>build：里面就动了webpack.dev/prod.conf.js文件，就往HtmlWebpackPlugin对象里加入了界面图标favicon.ico的配置</p>
    <p>config：里面没动过，其实也是些配置</p>
    <p>dist：如果你输入命令：npm run build，就会构建项目，生成的内容就在这个文件夹下，到时候比如部署nginx，就把这个目录整个拷过去就行了</p>
    <p>node_modules：里面会安装所有依赖的模块，不用管</p>
    <p>static：存放静态文件如图片啥的，一般从根目录的index.html引入的静态文件才放在这里，这里没有就没动</p>
    <p>test：测试用的吧，没动过</p>
    <p>.babelrc：编译版本兼容用的，不用动</p>
    <p>.eslint开头的文件：eslint拼写规范检查，就动了.eslintignore文件，往里面加了一行：/src/，代表忽略对src目录下的检查（相当于eslint就没啥用了...），不然太烦了...，规范写的时候建议还是不要忽略src下的检查...</p>
    <p>.gitignore：忽略git版本控制检查的文件，自动配好的，不想上传的文件可以加这里面，要是没有这个忽略，node_modules文件夹可能有几百M模块呢...</p>
    <p>favicon.ico：网站图标</p>
    <p>index.html：入口html，整个项目就这一个html...</p>
    <p>package.json：包管理用的，你可以修改里面依赖的包和版本啥的，然后再输入命令：npm install，就会按照这个文件进行包安装</p>
    <p>package-lock.json：也是包管理，保证版本不出问题</p>
    <p>README.me：不用我说了吧...虽然我几乎没怎么写</p>

    <h4>然后就是最重要的src目录了：</h4>
    <p>api：ajax.js文件封装了restful风格的四个方法：get/post/put/delete，然后其他具体的请求方法封装就放在api底下的目录里</p>
    <p>assets：静态文件内容</p>
    <p>components：定义了各种功能、样式组件</p>
    <p>config：定义了请求时会使用到的参数、以及该项目里的文字说明啥的配置</p>
    <p>layout：定义了全局界面的样式组件，包括整体布局、标题、导航栏啥的</p>
    <p>mock：定义了模拟数据的接口</p>
    <p>router：定义了所有路由</p>
    <p>store：定义了vuex的状态管理内容</p>
    <p>utils：定义了一些封装的工具函数</p>
    <p>views：定义了各个页面的组件，里面相当于将components里的组件拼成一个个的界面</p>
    <p>APP.vue：入口文件</p>
    <p>main.js：引入了一些全局依赖和组件啥的，包括vue全家桶：vue-router、vuex啥的，还有UI框架elementui，以及mock等</p>
    `
  },
  testComponent: {
    index: "组件基本使用测试",
    content: `该页面就是基本的组件使用示例，其实现主要说明如下：
    <p>1.引入组件：通过import引入组件后，在components属性当中添加该组件，即可在template里直接使用</p>
    <p>2.data属性：在data属性当中可以定义组件使用的数据，在template中直接使用{{数据名}}来获取数据</p>
    <p>3.属性绑定data：通过v-bind指令实现（v-bind可以简写成":"）</p>
    <p>4.在别的属性里（比如methods）要使用data里的数据，一般要通过this.来引用</p>
    <p>5.组件化开发里data不应该直接设置一个属性对象，具体原因可以查看这里：<a href="https://www.cnblogs.com/wangjiachen666/p/9876266.html" target="_blank">链接</a></a></p>
    <p>6.methods属性：在methods属性里可以定义一些事件方法，而在template当中可以通过一些事件来绑定这些方法，而绑定事件通过v-on指令实现（v-on可以简写成"@"）</p>
    `
  },
  testConnect: {
    index: "组件通信测试",
    content: `该页面就是简单的组件间通信示例，其实现主要说明如下：
    <p>1.浅黄色背景的内容只是单纯的通过import导入了组件并使用</p>
    <p>2.浅绿色背景的两个按钮分别实现了接收子组件的值和向子组件传值</p>
    <p>3.浅蓝色背景的按钮实现了给不相干关系的其他组件传值</p>
    <p>4.接收子组件的值是通过父组件设置props属性，里面存放可能接收的子组件的传值，然后子组件通过将值放入对应的属性里进行传值</p>
    <p>5.向子组件传值是通过父组件通过$emit方法设置一个事件和对应发送的值，然后在子组件监听该事件，然后获取对应的数据</p>
    <p>6.向其他组件传值是通过定义一个公共的事件媒介（src/utils/component-pass的Event对象），然后需要传递事件的组件通过引用这个对象，并调用$emit方法设置一个事件和对应发送的值，然后在其他组件也同样调用这个Event对象，利用$on方法监听该事件，然后获取对应的数据</p>
    `
  },
  testFilter: {
    index: "过滤器使用测试",
    content: `该页面就是简单的过滤器使用示例，其实现主要说明如下：
    <p>1.在组件当中通过filters属性定义局部过滤器</p>
    <p>2.在src/filters/index里定义全局过滤器，然后再main.js中引入</p>
    <p>3.在组件当中通过{{参数|过滤器}}来调用</p>
    `
  },
  testDirective: {
    index: "指令使用测试",
    content: `该页面就是简单的指令使用示例，其实现主要说明如下：
    <p>1.使用了v-if和v-show指令，当为true时结果都是显示，为false时，右键检查可以看到v-if的节点直接消失，而v-show的只是设置了display="none"</p>
    <p>2.使用v-for循环遍历数组，而在数组的字符串里存放html代码，通过v-html指令将其转成html代码显示</p>
    <p>3.尝试了自定义指令，可以看到指令默认会获取元素的dom以及传递进来的数据，对于数据，比如：v-xxx:x.y.z="v"，那么x在传入数据对象的arg里，只能有1个，y和z都在对象的modifiers里，可以传入多个，值都为true，v在对象的value里，只能有1个</p>
    <p>4.这里尝试了定义局部指令（在当前组件的directives属性下）和全局指令，在src/directives/index下，全局的需要在main.js中导入</p>
    `
  },
  testRoute: {
    index: "路由使用测试",
    content: `该页面包含了一些路由内容使用示例，包括路由传值、get传参、路由钩子等，其实现主要说明如下：
    <p>1.在路由配置时，path属性值的后面添加"/:参数"，即代表可接收路由参数，若希望能够将参数绑定到组件里，则还需要设置props属性值为true</p>
    <p>2.在组件当中获取路由传递的参数有两种方式：一种是$route.params.参数名获取；另一种是当路由设置了props属性为true时，可以在组件当中也设置props属性，接收对应的参数</p>
    <p>3.接收get参数（即问号后面的内容），可以通过$route.query.参数名获取</p>
    <p>4.对于局部路由钩子函数（在一定时刻触发的函数），可以在组件里面设置，其中接收参数有：to、from和next，分别代表前往的路由对象，来自哪的路由对象以及前往该路由的方法</p>
    <p>5.其中next方法可以往里面传递参数，从而自定义前往的路由，默认跳到to对象里的路由下</p>
    <p>6.这里只示范了局部路由钩子函数，还有全局的路由钩子函数，其直接在router对象里面设置，相关的钩子函数比如有beforeEach（进入所有路由前）、afterEach</p>
    `
  },
  testVuex: {
    index: "vuex测试",
    content: `
    该页面模拟了计数器的加减功能，其实现主要说明如下：
    <p>1.vuex实现数据的管理，配置接口在src/store/下</p>
    <p>2.src/store/下state存放各种数据，mutations存放对state数据的原子级操作方法，mutation-type里对mutations里功能方法的名字进行了定义，actions里存放封装了mutations里原子方法的高级方法，getters里面存放了对state数据的获取，index文件将所有内容整合在了一起</p>
    <p>3.通过vuex内置的mapState, mapMutations, mapActions, mapGetters属性可以获取对应4个内置属性的内容</p>
    <p>4.通过...[]数组解构将vuex的数据和方法放入当前组件</p>
    <p>5.页面中的add和sub是使用了mutations里对state的操作（加/减1），add2使用了actions里的高级操作（加2）</p>
    <p>6.因为vuex是全局的状态管理，所以你尽可以随意切换页面后回来，会发现数据还是跟原来一样（浏览器关掉不算！）</p>
    `
  },
  testMock: {
    index: "mock测试",
    content: `
    该页面模拟了对数据的修改和删除，其实现主要说明如下：
    <p>1.mockjs实现数据模拟，配置接口在src/mock/index里</p>
    <p>2.使用src/api/test/test下封装的请求方法获取数据</p>
    <p>3.在mounted挂载时执行方法，这里通过async和await关键字实现异步转同步处理</p>
    <p>4.本页面的数据以数组方式存储，为了能够监听到数组内容的变化，通过splice方法对其进行操作，详细可以上网自行搜索</p>
    <p>5.页面样式使用了elementui的面包屑导航和表格</p>
    `
  },
  testForm: {
    index: "表单缓存测试",
    content: `
    该页面的表单数据即使跳转到别的页面，回到该页面时数据也依旧存在，其实现主要说明如下：
    <p>1.实际上就是实现了页面缓存</p>
    <p>2.实现页面缓存的原理就是使用内置的keep-alive组件实现页面缓存（在src/layout/Layout组件里的route-view里可以看到）</p>
    <p>3.但是由于如果直接使用keep-alive，将会对所有页面进行缓存，所以我们进行了小小的配置</p>
    <p>4.配置就是在src/router/index里对/testForm路由加上了一个属性meta，里面存放了keepAlive字段，而在Layout的keep-alive下对页面进行判断是否keepAlive字段为true，是则缓存，否则不缓存</p>
    <p>5.整个界面代码基本就从elementui的表单那里拷过来的，所以就不说明了，有兴趣可以自己去看看那个框架</p>
    `
  },
  testStatic: {
    index: "静态资源测试",
    content: `
    该页面很简单，就是引用了一张图片以及2个外部的scss文件，其实现主要说明如下：
    <p>1.知道@代表src目录的意思了吧</p>
    <p>2.图片很简单，就是在img标签里引入对应路径的图片文件，这里你可以试试引入一个不存在的图片文件，会发现网站竟然报错不运行了？这说明和传统的开发方式不一样，原来静态资源只是作为引入，如果引入失败也没什么特别的处理，但是在模块化开发时，从这个例子也可以体会到什么叫做一切皆模块，即使是图片、css之类的静态资源，都被当成一个模块引入，引入失败，就会影响到整个程序的运行，用了import之类的导入就会引入，否则和这模块八竿子打不着关系</p>
    <p>3.这里scss文件的导入用了两种方式：一种是直接在js脚本中通过import关键字当成模块导入；另一种是在scss代码块里通过@import指令导入</p>
        `
  },
  none: {
    index: "...",
    content: `这个页面还没写说明呢`
  }
};
