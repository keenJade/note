1. mvvm Model-view-viewmodel 软件架构模式
   模型-视图-视图模型：同时利用数据绑定的优势和通过绑定数据的框架尽可能接近纯应用程序模型

2. 每个 vue 实例被创建经过一系列的初始化进程
   设置数据监听-编译模板-将实例挂载到 DOM 并将数据更新时更新 DOM

3. 生命周期图
   new Vue()新建一个 vue 实例---初始化事件&声明周期 beforeCreate
   ---初始化 注入&校验 created
   ----否 调用 vm.$mount(el)函数时--是否指定template模板选项
            ----是   是否指定el元素选项--是否指定template模板选项
                    --- 是  将模板template编译到render渲染函数中
                    --- 否  将el元素外部html作为template编译
    ---beforeMount  创建vm.$el 并用其替换 el
   ---mounted 挂载完毕  
    ---当 data 被修改时---beforeUpdate ---虚拟 dom 重新渲染更新 --update
   ---当调用 vm.\$destroy()函数时
   ---beforeDestroy
   ---解除绑定，销毁子组件以及事件监听器
   ---销毁完毕 destroyed

4. 响应式原理
   在生成 vue 实例时，对传入的 data 进行遍历，通过 Object.defineProperty 将这些属性转为
   getter/setter.
   每个 vue 实例都有一个 watch 实例，它会在实例渲染时记录这些属性，并在 setter 触发时重新渲染

5.  vue 中常用的语句
   computed 计算属性，用于对元数据进行修改
   methods 方法属性，用于绑定方法
   watch 数据变化监听器
   filters 过滤器
   mixins 用于减少代码污染，减少代码量，实现代码重用
   extends 用于扩展，对构造器进行扩展

6. 组件内部不能访问Vue实例的数据，组件内部有保存自己数据的地方
   存放在自己的data属性中，此时的data属性是一个方法，不是一个对象

   组件中的data为什么是一个函数:使用函数的时候每次都会返回一个新的对象，
      当在多次调用的时候，就会返回格子的对象，而不是同一个对象

7. 如何封装
   先通过Vue.component组册组件，就dom模板封装在template标签中，将数据保存在
   注册组件的data函数中，通过return 返回我们组件中的数据，将对应的方法。
   通过methods属性，放在组件中

8. 父子组件的通信
   请求数据的代码一般写在最外层，获取到数据之后在传递给需要的列表中
    1. 通过props向子组件传递数据
    2. 通过事件向父组件发送消息  自定义事件$emit
         子组件需要发射信息，父组件需要接收，在子组件中通过
         $emit（“在父组件中定义的事件名字”，需要传递的参数）

### 总结
   计算属性： 本质 含有get()set() 
      计算属性多次使用，只会调用一次，它有缓存

   事件监听 ： event参数的传递
            click(abs,event) ->$event

   修饰符：  .stop  .prevent .enter  .once .native

   条件判断：   v-if  v-else 

   v-show：  是否显示v-if是否渲染出来
   v-for:   循环的获取，可以传三个值
   数组方式的响应式：  split pop unshift 等
     
   v-model：  的本质： v-bind动态绑定,v-on事件处理

   修饰符： .lazy .number .trim

   组件开发：全局和剧组组件
            父子组件
            模板的分类写法script,template
   数据的存放: 自组件不能直接访问父组件
            自组件中有自己的data,必须是一个函数

9. 组件化开发：
         父子组件的访问方式：$children少用
         $refs -> refence(引用)： 直接拿到自己对应的ref的key值，它是一个对象类型，
         默认是空的对象，必须在组件上面写明ref="起个名字“  然后使用直接获取
         子访问父：$parent  $root:访问根组件
   插槽slot： 可以有默认值，没有传入显示默认，有传入替换
      具名插槽的使用：需要给替换的插槽给一个name,然后通过slot属性添加在上面

   作用域插槽：父组件替换插槽的标签，但是内容有子组件来提供
         slot可以自定义属性
         需要现在slot插槽中自定义一个属性，起一个名字，通过template标签，添加一个
         v-slot指令v-slot=slot，将自己想要的内容放进去

9. 前端模块化：
      commonJS, AMD,CMD,ES6的Modules
      node就是commonJS实现的
         核心：导出和导入
         通过module.exports导出一个对象，将需要导出的属性以键值对的形式定义，
         es6可以直接写一个健
       通过require导入  require（路径）

      ##### 在es6中实现导入与导出
      在我们引入的文件中，需要在script标签中添加type 属性，type=module，才能进行底层的支持

      我们可以将需要导入的内容全部放在一个对象中
      如果需要将所有的内容统一的导入的时候，需要这样做：
        ``` import * as aaa from "./aaa.js" ```
         --- 导出：export  可以导出一个对象 可以导出函数，可以导出类
               我们还可以用到export default进行导出 可以自定义，但是export default
               默认的只能有一个，需要导入者自己定义命名的时候才能使用
         --- 导入：import{导入的属性名，可以多个} from "模块路径名"

10. webpack:

11. Vue cli:

12. Vuex: 是vue.js的状态管理库，也可以说是响应式的全局变量
      采用全局单利模式，将共享的状态抽离出来，使组件树中的每一个位置都可以获取共享的状态（变量）或者触发行为。
    



