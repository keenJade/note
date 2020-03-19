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

### 8.Iterator 和 for...of 循环

### 9. generator 函数

### 10. async 函数

### 11. module

### 8.Iterator 和 for...of 循环
