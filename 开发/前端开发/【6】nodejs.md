# 校招前端面试常见问题【6】——NodeJS

## NodeJS

#### Q：NodeJS 的 IO 模型特点是什么？与多线程同步 IO 有什么不同？

NodeJS 的 IO 模型（更准确的说是 js 的执行环境，也就是 v8）的特点是“单线程异步非阻塞”。

而与多线程同步 IO，两者各有优劣，应该根据实际应用场景来做取舍。

在传统的观点里，异步 IO 的好处是 IO 本身并不需要占用太多的资源，缺点在于非线性代码带来的复杂度和难以理解维护，而多线程同步 IO 的缺点在于性能资源的开销和线程管理的问题。

所以很显然，在相同的机器资源里面，异步 IO 的并发量肯定是要高于多线程同步 IO 的；但是服务器程序本身肯定不只是由 IO 组成，还有逻辑运算的部分，过重的逻辑运算依旧会影响性能。换句话说，密集型 CPU 任务会阻塞 js 的执行，导致异步 IO 得不到处理，极大地影响到 node 处理响应的时间。

总之，node 的 IO 模型更适合处理 IO 密集型的任务。多线程同步 IO 更适合处理计算密集型的任务。

#### Q：V8 引擎垃圾回收机制是什么样的？

1、如何判断是否可以回收
（1）标记清除
当变量进入环境（例如，在函数中声明一个变量）时，就将这个变量标记为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。

具体做法：
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。
然后，它会去掉运行环境中的变量以及被环境中变量所引用的变量的标记
此后，依然有标记的变量就被视为准备删除的变量，原因是在运行环境中已经无法访问到这些变量了。
最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。

（2）引用计数
引用计数的含义是跟踪记录每个值被引用的次数。
当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。
如果同一个值又被赋给另一个变量，则该值的引用次数加 1。
相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。
当这个值的引用次数变成 0 时，就可以将其占用的内存空间回收回来，这样，当垃圾收集器下次再运行时，它就会释放那 些引用次数为零的值所占用的内存。
但这样会有循环引用的问题。

2、V8 垃圾回收策略
将内存分为两个生代：新生代（new generation）和老生代（old generation）。
新生代中的对象为存活时间较短的对象，老生代中的对象为存活时间较长或常驻内存的对象，分别对新老生代采用不同的垃圾回收算法来提高效率，对象最开始都会先被分配到新生代（如果新生代内存空间不够，直接分配到老生代），新生代中的对象会在满足某些条件后，晋升到老生代。

新生代主要使用 Scavenge 进行管理，将内存平均分为两块，使用空间叫 From，闲置空间叫 To，新对象都先分配到 From 空间中，在空间快要占满时将存活对象复制到 To 空间中，然后清空 From 的内存空间，此时，调换 From 空间和 To 空间，继续进行内存分配，当满足晋升条件时对象会从新生代晋升到老生代。

对象晋升的条件主要有两个：
如果一个对象是第二次经历从 From 空间复制到 To 空间，那么这个对象会被移动到老生代中。
当要从 From 空间复制一个对象到 To 空间时，如果 To 空间已经使用了超过 25%，则这个对象直接晋升到老生代中。（设置 25%这个阈值的原因是当这次 Scavenge 回收完成后，这个 To 空间会变为 From 空间，接下来的内存分配将在这个空间中进行。如果占比过高，会影响后续的内存分配）

老生代主要采用 Mark-Sweep 和 Mark-Compact 算法，一个是标记清除，一个是标记整理。两者不同的地方是，Mark-Sweep 在垃圾回收后会产生碎片内存，而 Mark-Compact 在清除前会进行一步整理，将存活对象向一侧移动，随后清空边界的另一侧内存，这样空闲的内存都是连续的，但是带来的问题就是速度会慢一些。在 V8 中，老生代是 Mark-Sweep 和 Mark-Compact 两者共同进行管理的。

#### Q：实现一个 EventEmitter？

实现：

```javascript
class EventEmitter {
  constructor() {
    this._events = {}
  }

  subscribe(type, handler) {
    if (this._events.hasOwnProperty(type)) {
      this._events[type].push(handler)
    } else {
      this._events[type] = [handler]
    }
  }

  unsubscribe(type, handler) {
    if (this._events.hasOwnProperty(type)) {
      const index = this._events[type].indexOf(handler)
      if (index > -1) {
        this._events[type].splice(index, 1)
      }
    }
  }

  once(type, handler) {
    let fired = false
    let _this = this
    function magic() {
      _this.unsubscribe(type, magic)

      if (!fired) {
        fired = true
        handler.apply(_this, arguments)
      }
    }
    this.subscribe(type, magic)
  }

  emit(type, args) {
    if (this._events.hasOwnProperty(type)) {
      this._events[type].forEach((fn) => fn(args))
    }
  }
}

module.exports = EventEmitter
```

使用：

```javascript
const EventEmitter = require('./myEventEmitter')

const eventEmitter = new EventEmitter()

const fn = (args) => {
  console.log('good args', args)
}
const fn2 = (args) => {
  console.log('good args 2', args)
}
const fn3 = (args) => {
  console.log('good args 3', args)
}

eventEmitter.subscribe('good', fn)
eventEmitter.subscribe('good2', fn2)

eventEmitter.emit('good', 11111)
eventEmitter.emit('good2', 22222)

eventEmitter.unsubscribe('good', fn)

eventEmitter.emit('good2', 22222)

eventEmitter.once('good3', fn3)
eventEmitter.emit('good3', 33333)

eventEmitter.emit('good3', 33333)
```

#### Q：es6 模块化、commonjs 模块化的区别？

es6 模块化：

```
在es6规范中，使用import和export可以使js文件模块化。
每个import的js文件都是单例，如果再次import，就直接在内存中进行读取。

导出方式1：
//lib.js 文件
let foo = "stringFoo";
let fn0 = function() {
    console.log("fn0");
};
export{foo, fn}

//main.js文件
import {foo, fn} from "./lib";
console.log(bar+"_"+foo);

```

commonjs 模块化：

```
Node 应用由模块组成，采用 CommonJS 模块规范。

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。如果要定义全局变量，需要global属性。

CommonJS规范规定，每个模块内部，module变量代表当前模块。
这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
为了方便，Node为每个模块提供一个exports变量，指向module.exports。

例如：
var test = function () {
	console.log(123);
};
module.exports.test = test;

使用require('XXX')加载模块。
require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。
```

## NodeJS 相关框架

#### Q：请简述一下 Koa 的洋葱模型？

koa 洋葱模型是指 koa 中每个中间件的执行顺序。
koa 在执行多个中间件中的逻辑时，会先执行第一个中间件的逻辑，执行到 next()函数后会执行第二个中间件的逻辑，以此类推，直到最后一个中间件。当最后一个中间件执行完毕后，会跳回执行倒数第二个中间件 next()函数后面的代码，以此类推，直到第一个中间件 next()函数后面的代码执行完毕。

![洋葱模型](http://www.shadowingszy.top/images/koa.png)

举例来说：

```javascript
const Koa = require('koa')

const app = new Koa()
const PORT = 3000

// #1
app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(1)
})
// #2
app.use(async (ctx, next) => {
  console.log(2)
  await next()
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)
})

app.listen(PORT)
console.log(`http://localhost:${PORT}`)
```

访问 http://localhost:3000，控制台打印：

```
1
2
3
2
1
```
