# 前端开发校招面试问题整理�?】——JavaScript

## 1、JavaScript 基础

### Q：介�?js 的基本数据类型？

基本类型（值类型）：String，Number，Boolean，Null，Undefined，Symbol，BigInt�?

数字类型包含整数与浮点数，整数精度为 2^53，浮点数值最高精度为 17 位小数�?
另外注意的是，NAN 属于数字类型，代表非数字，即 1/0=NAN，NAN/1=NAN�?
Infinity 代表超过了范围的数，有正负号�?

undefined：表示变量已声明，但不含有值�?
null：表示变量为空�?

引用类型：对象，数组，函数（其实都是对象，都是一种引用）�?

数据封装类对象：Object、Array、Boolean、Number、String
其他对象：Function、Arguments、Math、Date、RegExp、Error

基本类型被保存在栈内存中，引用类型被保存在堆内存�?

### Q：js 中如何判断一个对象是什么类型？

使用 typeof 可以判断一�?javascript 基本对象的类型�?

```javascript
typeof 'John' // 返回 string
typeof 3.14 // 返回 number
typeof NaN // 返回 number
typeof false // 返回 boolean
typeof [1, 2, 3, 4] // 返回 object
typeof { name: 'John', age: 34 } // 返回 object
typeof new Date() // 返回 object
typeof function () {} // 返回 function
typeof myCar // 返回 undefined (如果 myCar 没有声明)
typeof null // 返回 object
```

使用 constructor 可以返回一个构造器的类型，可以根据构造器名称来判断类型�?

```javascript
"John".constructor // 返回函数 String() {[native code]}
(3.14).constructor // 返回函数 Number() {[native code]}
false.constructor // 返回函数 Boolean() {[native code]}
[1,2,3,4].constructor // 返回函数 Array() {[native code]}
{name:'John', age:34}.constructor // 返回函数 Object() {[native code]}
new Date().constructor // 返回函数 Date() {[native code]}
function () {}.constructor // 返回函数 Function() {[native code]}
```

使用 instanceof 可以检测引用类型，如：

```javascript
console.log(person instanceof Object) // 变量 person �?Object 吗？
console.log(colors instanceof Array) // 变量 colors �?Array 吗？
console.log(pattern instanceof RegExp) // 变量 pattern �?RegExp 吗？
```

### Q：js 的原型链你是如何理解的？
![原型链](http://www.shadowingszy.top/images/prototype.png)

只要是对象就有原�? 并且原型也是对象, 因此只要定义了一个对�? 那么就可以找到他的原�? 如此反复, 就可以构成一个对象的序列, 这个结构就被成为原型链�?

每个对象都会在其内部初始化一个属性，就是 prototype(原型)，当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去 prototype 里找这个属性，这个 prototype 又会有自己的 prototype，于是就这样一直找下去，也就是我们平时所说的原型链的概念�?

关系：instance.constructor.prototype = instance.proto

### Q：js �?function.call �?function.apply 的区别？

```javascript
function.apply(thisObj, [argArray])
function.call(thisObj, arg1, arg2, �? argN);
```

apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);�?A 对象应用 B 函数，即�?B 上下文从初始的上下文改变�?A 的上下文�?

call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);�?A 对象调用 B 对象的方法�?

### Q：js 中作用域你是如何理解的？

全局作用域：写在最外层的对象，或者写在内层但是没有用 var 声明的变量，作用域为全局，例如：

```javascript
var outerVar = "outer";
function fn() {
  innerVar = “inner�?
  console.log(outerVar);
}
fn(); //result:outer
console.log(innerVar); //result:inner
```

函数作用域：写在函数内层使用 var 声明的变量，例如�?

```javascript
function fn() {
  var innerVar = 'inner'
}
console.log(innerVar) // ReferenceError: innerVar is not defined
```

作用域链：内部函数可以链式访问外部函数的变量，例如：

```javascript
name = 'aaa'

function b() {
  var name = 'bbb'

  function c() {
    var name = 'ccc'
    console.log(name) //ccc
  }

  function d() {
    console.log(name) //bbb
  }
  c()
  d()
}
b()
console.log(name) //aaa
```

### Q：js 中什么是闭包�?

闭包是利用了 js 的作用域特性，使用返回值为函数的函数，使里面的函数能够访问到外面函数的变量。我们调用外面的函数，就可以调用返回值函数，对外面函数的变量进行修改�?

闭包可以访问另一个函数作用域中变量的函数�?
作用�?
1、可以减少全局变量的对象，防止全局变量过去庞大，导致难以维�?
2、防止修改常量�?
3、读取函数内部的变量，让这些变量的值始终保持在内存中�?

例如�?

```javascript
const add = function () {
  let counter = 0
  return function () {
    counter++
    return counter
  }
}

const x = add()
console.log(x()) // 计数器为 1
console.log(x()) // 计数器为 2
console.log(x()) // 计数器为 3
```

## 2、JavaScript 流控�?

### Q：介绍一�?js �?Promise 的用法？

Promise 对象代表一个异步操作，其不受外界影响，有三种状态：
Pending // 进行中、未完成�?
Resolved // 已完成，又称 Fulfilled
Rejected // 已失�?

Promise 对象提供了如下四种方法：
then // 异步操作完成调用方法
catch // 异步操作失败调用方法
all // 所有函数操作完成后调用方法
race // 第一个完成或失败后调用方�?

举个例子�?

```javascript
function read(time) {
  console.log('正在阅读')
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('阅读完毕')
      time = time + 1
      resolve(time)
    }, 2000)
  })
  return p
}

function write(time) {
  console.log('正在写作')
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('写作完毕')
      time = time + 1
      resolve(time)
    }, 2000)
  })
  return p
}

function rest(time) {
  console.log('正在休息')
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('休息完毕')
      time = time + 1
      resolve(time) //把promise的状态设置为resolved，成�?
    }, 2000)
  })
  return p
}

function badDream(time) {
  console.log('正在做梦')
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('做了噩梦')
      time = time + 1
      reject(time) //把promise的状态设置为rejected，失�?
    }, 2000)
  })
  return p
}

read(0)
  .then(function (data) {
    return write(data)
  })
  .then(function (data) {
    return badDream(data)
  })
  .then(function (data) {
    return rest(data)
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (data) {
    //处理失败的方�?
    console.log('�? + data + '步出�?)
  })

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('p1完成')
    resolve(11)
  }, 1000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('p2完成')
    resolve(22)
  }, 2000)
})

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('p3完成')
    resolve(33)
  }, 3000)
})

//all，所有函数都执行结束后，回调方法
Promise.all([p1, p2, p3]).then(function (data) {
  console.log('全部完成', data)
})

//race，第一个函数执行结束后，回调方�?
Promise.race([write(1), rest(2)]).then(function (results) {
  console.log('准备工作完毕�?)
  console.log(results)
})
```

### Q：介绍一�?js �?async �?await 的用法？�?Promise 的区别？

async 作为一个关键字放到函数前面，用于表示函数是一个异步函数�?
因为 async 就是异步的意思，异步函数也就意味着该函数的执行不会阻塞后面代码的执行�?
async 会返回一�?Promise 对象，比如我�?console.log(timeout())，会得到一�?Promise 对象，如�?resolve 会返�?hello world，如�?reject 就会抛异常�?
但这不是重点，async 的最大优势在于其内部可以使用 await，能够更简洁的处理 Promise �?then 链�?
如果 async 中没�?await，它其实就相当于一�?resolve 返回�?return 值的 Promise 对象罢了�?

await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。若 Promise 正常处理(fulfilled)，其回调�?resolve 函数参数作为 await 表达式的值，继续执行 async function。若 Promise 处理异常(rejected)，await 表达式会�?Promise 的异常原因抛出。另外，如果 await 操作符后的表达式的值不是一�?Promise，则返回该值本身�?

async �?await 结合能够更直观地处理 Promise �?then 链�?

举个例子�?
Promise 的写法：

```javascript
doSomething()
  .then(function (res) {
    return doNext(res)
  })
  .then(function (nextRes) {
    return doFinalThing(nextRes)
  })
  .then(function (finalResult) {
    console.log('Got the final result: ' + finalResult)
  })
  .catch(failureCallback)
```

async/await 的写法：

```javascript
try {
  const result = await doSomething()
  const nextRes = await doNext(result)
  const finalResult = await doFinalThing(newResult)
  console.log('Got the final result: ' + finalResult)
} catch (error) {
  failureCallback(error)
}
```

## 3、JavaScript 常用数据结构

### Q：说几个常用�?Array �?api�?

**Array �?API 重点是会用，而不是知道这�?API 是干什么的**

```javascript
push(a)           // 末尾添加，返回数组长�?
unshift(a)	      // 首位添加，返回数组长�?
shift()	          // 删除第一个元素，并返回删除的元素
pop()	            // 删除最后一个元素，并返回删除的元素
join(a)	          // 把数组中的所有元素放到一个字符串中，分隔符为a
concat(a, b)	    // 将b连接到a后面
sort()	          // 数组排序
reverse()	        // 数组倒序
isArray(a)	      // a是否为数�?
slice(a, b)	      // 根据输入的开始点和末尾点，截取出新的数组（包括前不包括后�?
splice(a, b, c)	  // 从a位置开始，删除b长度的数组，插入c

indexOf(a)	      // 从前向后寻找值等于a的项，返回index
lastIndexOf(a)	  // 从后向前寻找等于a的项，返回index

every(function(item, index, array))	      // 对数组每一项运行一次某函数，若函数每一项都为true，返回true
some(function(item, index, array))	      // 对数组每一项运行一次某函数，若函数某一项为true，返回true
filter(function(item, index, array))	    // 对数组每一项运行一次某函数，返回返回值为true的项的数�?
map(function(item, index, array))	        // 对数组每一项运行一次某函数，返回返回值的数组
forEach(function(item, index, array))	    // 对数组每一项运行一次某函数，无返回�?
reduce(function(prev, cur, index, array)) //接收四个参数：前一个值、当前值、项的索引和数组对象，这个函数的任意返回值会作为第一个参数传给下一项�?
```

### Q：for in �?for of 遍历数组/对象的区别？

对于数组：for in 输出的是数组索引值（下标），for of 输出的是数组元素�?
对于对象：for in 输出的是对象 key 值，for of 输出的是对象 value 值�?

### Q：代码实现一下展平数组？

```javascript
const arr = [1, 3, [3, 4, [5, 6]]]

// 第一种方案：用现成api，不兼容低版本的浏览�?
const arr1 = arr.flat(Infinity)

// 第二种方案：原生循环递归实现
function flat2(arr) {
  const result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flat(item))
    } else {
      result.push(item)
    }
  })
  return result
}
const arr2 = flat2(arr)

// 第三种方案：使用解构和递归实现
function flat3(arr) {
  const result = [].concat(...arr.map((x) => (Array.isArray(x) ? flat(x) : x)))
  return result
}
const arr3 = flat3(arr)
```

### Q：代码实现一下深拷贝对象�?

```javascript
// 对象中如果均为基本类�?
JSON.parse(JSON.stringify(obj))

// 对象中如果既有基本类型，还有Array和Object
function deepCopy(data) {
  let output
  if (data === null || !(typeof data === 'object')) {
    output = data
  } else {
    output = data.constructor.name === 'Array' ? [] : {}
    for (let key in data) {
      output[key] = deepCopy(data[key])
    }
  }
  return output
}
```

### Q�?test" �?new String("test")有什么区别，{}�?new Object()有什么区别？

"test"是一�?string 类型的常量，�?new String()会创建一个字符串对象�?

```javascript
const obj1 = new String('abc') // 类型为object
const obj2 = 'abc' // 类型为string

obj1 == obj2 // true
obj1 === obj2 // false
```

�?{} �?new Object() 本身都是创建对象，并返回这个对象的引用�?

```javascript
const obj1 = new Object('abc') // 类型为object
const obj2 = {} // 类型为obejct

obj1 == obj2 // false
obj1 === obj2 // false
```

## 4、DOM/BOM api

### Q：addEventListener 用法？和 onxxx 的区别是什么？

onxxx �?DOM0 的标准，所有浏览器支持，它会直接在 DOM 对象上注册事件名称�?
例如�?

```javascript
document.getElementById('click').onclick = function (event) {
  console.log(event.target)
}
```

addEventListener �?DOM2 的标准，IE8 以上浏览器支持，它分为三个阶段：捕获阶段，目标阶段，冒泡阶段�?
每个事件都会先由根传到目标元素，再传回根�?

### Q：事件代理指的是什么？

事件代理是指为了给多个元素添加事件（比如 li），我们给元素的父级元素添加事件，当事件发生时，我们通过`e.target`捕获事件目标，判断目标后，执行对应的事件�?

### Q：如何使�?js 访问 cookie？如果想要禁止用 js 访问 cookie，该怎么做？

使用 document.cookie 即可查看 cookie。cookie 储存形式是`key=value;key=value;`形式的字符串�?

�?header 中设�?HttpOnly 后可以防�?js 访问 cookie�?

### Q：如何使�?js 计算浏览器可视区域？

```javascript
// 获取浏览器窗口的可视区域的宽�?
const width = document.documentElement.clientWidth || document.body.clientWidth

// 获取浏览器窗口的可视区域的高�?
const height = document.documentElement.clientHeight || document.body.clientHeight
```
