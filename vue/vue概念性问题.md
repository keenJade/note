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
