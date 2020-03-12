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
    1. 通过props向自组件传递数据
    2. 通过事件向父组件发送消息  自定义事件$emit

     