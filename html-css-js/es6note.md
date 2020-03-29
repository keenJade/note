## es6 提出的新点：

### 1. 6 种声明变量的方式： let, const, import 命令, class 命令 , es5（var, function）

    let+const:
         1. 不存在变量的提升
         2. 暂时性的死区--- 也就是产生了块级作用域（必须要有{}大括号，否则不算，）
            不允许重复声明
         3. const声明一个只读常量，但是可以添加属性；通过Object.freeze方法冻结常量，
            通过Object.key(obj)返回给定对象所有可枚举属性的字符串数组

### 2.解构赋值 扩展

...的位置来实现   扩展运算符    

    1. 放在形参或者等号的左边，表示rest运算   ====放在被赋值的一方
    2. 放在实参或等号的右边，表示spread运算   ====放在赋值的一方

    解构赋值：  
        ``` let [a,b,c]= [1,2,3]  console.log(a)  //1 ```

### 3.symbol

### 4. set 与 map 数据结构

### 5. proxy

### 6. reflect

### 7.promise
    promise对异步操作进行封装，promise实现了链式编程
        参数本身是一个函数，resolve,reject本身也是函数。。。  
        只要是网络请求都会放在promise中进行处理，
            成功的处理网络需要调用resolve，执行之后，通过.then处理成功函数
            失败的处理调用reject，执行之后，通过.catch处理
        ```
            new Promise((resolve,reject)=>{
                // 成功
                   resolve()  
                //失败
                    reject()
            }).then(()=>{

            }).catch(()=>{

            })
        ```

        关于promise的链式编程写法：
            1. 通过return  new  Promise();得到我们想要拿到的信息执行下去
            2. 简写： 直接通过return Promise.resolve()将成功的信息执行
            3. 简写： 直接通过return 结果信息；此时我们直接将promise省略掉了，内部会自动进行promise 操作
            4. 如果有是被的结果，我们可以通过 return Promise.reject();将结果抛出，然后执行.catch
                或者手动通过 throw 错误信息；将失败结果给出，执行.catch

        如果碰见需要两次请求实现的需求，一般会通过promise.all()的方式来实现
            Promise.all( 数组)； iterator可迭代的参数
            ```
              Promise.all([
                  new Promise(()=>{}),
                  new Promise(()=>{})
              ]).then(()=>{})
            ```

### 8.Iterator 和 for...of 循环

### 9. generator 函数

### 10. async 函数

### 11. module

### 8.Iterator 和 for...of 循环
