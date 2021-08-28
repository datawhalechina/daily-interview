# 校招前端面试常见问题【3】——CSS

## 1、盒模型

### Q：请简述一下 CSS 盒模型？

![盒模型](http://www.shadowingszy.top/images/box.png)

W3C 模式：盒子宽=width+padding+border+margin
怪异模式：盒子宽=width+margin

### Q：inline、block、inline-block 元素的区别？

inline（行内元素）:
使元素变成行内元素，拥有行内元素的特性，即可以与其他行内元素共享一行，不会独占一行。
不能更改元素的 height，width 的值，大小由内容撑开。
可以使用 padding 上下左右都有效，margin 只有 left 和 right 产生边距效果，但是 top 和 bottom 就不行。

block（块级元素）:
使元素变成块级元素，独占一行，在不设置自己的宽度的情况下，块级元素会默认填满父级元素的宽度。
能够改变元素的 height，width 的值。
可以设置 padding，margin 的各个属性值，top，left，bottom，right 都能够产生边距效果。

inline-block（融合行内于块级）:
结合了 inline 与 block 的一些特点，结合了上述 inline 的第 1 个特点和 block 的第 2,3 个特点。
用通俗的话讲，就是不独占一行的块级元素。

## 2、选择器

### Q：请列举出你用过的 CSS 选择器？

普通选择器：
|选择器|例子|描述|
|-|-|-|
|.class|.intro|选择 class="intro" 的所有元素。|
|#id|#firstname|选择 id="firstname" 的元素。|
|\*|\*|选择所有元素|
|element|p| 选择所有 <p> 元素|

层次选择器
|选择器|例子|描述|
|-|-|-|
|element.class| p.intro| 选择 class="intro" 的所有 <p> 元素|
|element,element| div, p| 选择所有 <div> 元素和所有 <p> 元素|
|element element| div p |选择 <div> 元素内的所有 <p> 元素|
|element>element| div > p| 选择父元素是 <div> 的所有 <p> 元素|
|element+element| div + p| 选择紧跟 <div> 元素的首个 <p> 元素|
|element1~element2| p ~ ul| 选择前面有 <p> 元素的每个 <ul> 元素|

属性选择器
|选择器|例子|描述|
|-|-|-|
|[attribute] |[target] |选择带有 target 属性的所有元素。|
|[attribute=value] |[target=_blank] |选择带有 target="\_blank" 属性的所有元素。|

伪类选择器
|选择器|例子|描述|
|-|-|-|
|:active| a:active |选择活动链接。|
|::after| p::after |在每个 <p> 的内容之后插入内容。|
|::before| p::before |在每个 <p> 的内容之前插入内容。|
|:first-child |p:first-child |选择属于父元素的第一个子元素的每个 <p> 元素。|
|:focus |input:focus |选择获得焦点的 input 元素。|
|:fullscreen| :fullscreen |选择处于全屏模式的元素。|
|:hover |a:hover |选择鼠标指针位于其上的链接。|
|:link| a:link |选择所有未访问过的链接。|
|:not(selector) |:not(p) |选择非 <p> 元素的每个元素。|
|:nth-child(n)| p:nth-child(2) |选择属于其父元素的第二个子元素的每个 <p> 元素。|
|:visited| a:visited |选择所有已访问的链接。|

### Q： CSS 选择器的权重是什么样的？

| 样式       | 权重      |
| ---------- | --------- |
| !important | 权重最大  |
| 内联样式   | 权重 1000 |
| 类选择器   | 权重 10   |
| id 选择器  | 权重 100  |
| 派生选择器 | 权重 1    |

## 3、常见规则

### Q：position 的值有哪几种，布局方式是什么样的？

| 值       | 描述                                                                                                                                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| static   | 元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。                                                                                             |
| relative | 相对于其正常位置进行定位，元素仍保持其未定位前的形状，它原本所占的空间仍保留。                                                                                                                           |
| absolute | 元素框从文档流完全删除，相对于值不为 static 的第一个父元素进行定位。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。 |
| fixed    | 元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。                                                                                                                                  |

### Q： 简单描述下 flex 布局？

使用 flex 布局的元素会成为容器（flex container），它内部的元素自动成为 flex 项目（flex item）。
容器拥有两根隐形的轴，水平的主轴（main axis），和竖直的交叉轴。
此外，需注意使用 flex 容器内元素，即 flex item 的 float，clear、vertical-align 属性将失效。

![盒模型](http://www.shadowingszy.top/images/flex.png)

flex 的各种属性：

```
1、flex-direction
属性决定主轴的方向（即项目的排列方向）。

row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。
```

```
2、flex-wrap
默认情况下，项目都排在”轴线”上。本属性定义如果一条轴线排不下，如何换行。

nowrap（默认值）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方。
```

```

3、align-items
定义弹性盒子在交叉轴上如何对齐。

flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

```

```

4、justify-content
定义弹性盒子在主轴方向上的对齐方式。

flex-start：容器开头对齐。
flex-end：容器终点对齐。
center：容器中点对齐。

```

## 4、常见概念

### Q：FC 是什么？BFC 和 IFC 是什么？

FC：格式化模型。

FC 会根据 CSS 盒子模型将文档中的元素转换为一个个的盒子，每个盒子的布局由以下因素决定：
1、盒子的尺寸：精确指定、由约束条件指定或没有指定
2、盒子的类型：行内盒子（inline）、行内级盒子（inline-level）、原子行内级盒子（atomic inline-level）、块盒子（block）
3、定位方案：普通流定位、浮动定位或绝对定位
4、文档树中的其它元素：即当前盒子的子元素或兄弟元素
5、视窗尺寸与位置
6、包含的图片的尺寸
7、其他的某些外部因素

BFC：块级格式化上下文。

1、在 BFC 中，盒子从顶端开始垂直地一个接一个地排列，两个盒子之间的垂直的间隙是由它们的 margin 值所决定的。在一个 BFC 中，两个相邻的块级盒子的垂直外边距会产生折叠。
2、在 BFC 中，每一个盒子的左外边缘会触碰到容器的左边缘。
3、浮动元素、绝对定位元素，以及设置了 overflow 属性（除了 visible）的元素不是块级盒子的块容器，因此会为他们的内容创建新的 BFC。

IFC：行内级格式化上下文。

1、在 IFC 中，盒子一个接着一个地水平放置。这些盒子会通过不同的方式进行对齐，如底部对齐，顶部对齐，文字基线对齐。
2、矩形区域包含着来自一行的盒子叫做盒行盒（line box）。
3、line box 的宽度由浮动情况和它的包含块决定。line box 的高度由 line-height 计算决定（也就是说，由其内部的块撑开）。

### Q：如何清除浮动？

浮动可以理解为让某个 div 元素脱离标准流，漂浮在标准流之上。
一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

清除浮动可以理解为打破横向排列。清除浮动的关键字是 clear，其取值有以下几种：
1、none，默认值。允许两边都可以有浮动对象
2、left，不允许左边有浮动对象
3、right，不允许右边有浮动对象
4、both，不允许有浮动对象
对于 CSS 的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素。

### Q：什么是回流？什么是重绘？

当页面中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新绘制，这就称为回流。每个页面至少需要一次回流，就是在页面第一次加载的时候。

当页面中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如 background-color。则就叫称为重绘。

任何对页面中元素的操作都会引起回流或者重绘，比如：

1、添加、删除元素(回流+重绘)
2、隐藏元素，display:none(回流+重绘)，visibility:hidden(只重绘，不回流)
3、移动元素，比如改变 top,left(重绘+回流)。
4、对 style 的操作(对不同的属性操作，影响不一样)。
5、还有一种是用户的操作，比如改变浏览器大小，改变浏览器的字体大小等(回流+重绘)

### Q：如何开启 GPU 加速？其优缺点是什么？

当页面中某个 DOM 元素应用了某些 CSS 规则时就会开启 GPU 加速，如 3D 变换：

```css
.cube {
  -webkit-transform: translate3d(250px, 250px, 250px) rotate3d(250px, 250px, 250px, -120deg) scale3d(0.5, 0.5, 0.5);
}
```

如果不想对元素用 3D 变换但是还想要开 GPU 加速，就可以：

```css
.cube {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
```

但是，一定要注意：不要随意使用 GPU 加速，如果的确能够显著提高性能，可以尝试使用 GPU 加速。但是另一方面，使用 GPU 可能会导致严重的性能问题，因为它增加了内存的使用，而且它会减少移动端设备的电池寿命。
