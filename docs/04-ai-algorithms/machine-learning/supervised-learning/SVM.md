

# SVM面试题

## 1. SVM直观解释

SVM，Support Vector Machine，它是一种二分类模型，其基本模型定义为特征空间上的间隔最大的线性分类器，间隔最大使它有别于感知机；其还包括**核技巧**，这使它成为实质上的非线性分类器。其学习策略就是间隔最大化，可形式化为一个求解凸二次规划的问题。其学习算法就是求解凸二次规划的最优化算法。

这里涉及了几个概念，**二分类模型**，**线性分类器**，**间隔最大化**，**凸二次规划问题**。

- 二分类模型：给定的各个样本数据分别属于两个类之一，而目标是确定新数据点将归属到哪个类中。
- 线性分类器：分割样本点的分类器是一个超平面，这也就要求样本线性可分，这是hard-margin SVM的要求，对于后来的soft-margin SVM，放低为近似线性可分，再到后来的核技巧，要求映射到高维空间后要近似线性可分。
- 线性可分：$D0$和$D1$是$n$维欧氏空间中的两个点集（点的集合）。如果存在 $n$维向量 $w$和实数$b$，使得所有属于$D0$的点 xi 都有 $wx_i+b>0$，而对于所有属于$D1$的点 $x_j$则有 $wx_j+b<0$。则我们称$D0$和$D1$线性可分。
- 间隔最大化：首先要知道SVM中有函数间隔和几何间隔，函数间隔刻画样本点到超平面的相对距离，几何间隔刻画的是样本点到超平面的绝对距离，SVM的直观目的就是找到最小函数距离的样本点，然后最大化它的几何间隔。
- 凸二次规划：目标函数是二次的，约束条件是线性的。

## 2. 核心公式

 - 线性可分训练集：$T=\left\{\left(x_{1}, y_{1}\right),\left(x_{2}, y_{2}\right), \ldots,\left(x_{n}, y_{n}\right)\right\}$
 - 学习得到的超平面：$w^{* T} x+b^{*}=0$
 - 相应的分类决策函数：$f(x)=\operatorname{sign}\left(w^{* T} x+b^{*}\right)$
 - SVM基本思想：间隔最大化，不仅要讲正负类样本分开，而且对最难分的点（离超平面最近的点）也要有足够大的确信度将他们分开。


![在这里插入图片描述](img/SVM/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NTQ3Mjgx,size_16,color_FFFFFF,t_70.png)![在这里插入图片描述](img/SVM/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NTQ3Mjgx,size_16,color_FFFFFF,t_70-20211031095607863-5645369.png)

**函数间隔**

给定一个超平面$（w, b）$，定义该超平面关于样本点 $(x_i,y_i )$ 的函数间隔为：$\widehat{\gamma}_{i}=y_{i}\left(w^{T} x_{i}+b\right)$
定义该超平面关于训练集$T$的函数间隔为：$\widehat{\gamma}=\min _{i=1,2, \ldots, N} \widehat{\gamma}_{i}$

**几何间隔**

给定一个超平面$（w, b）$，定义该超平面关于样本点 $(x_i,y_i )$ 的几何间隔为：$\gamma_{i}=y_{i}\left(\frac{w^{T}}{\|w\|} x_{i}+\frac{b}{\|w\|}\right)$
定义该超平面关于训练集$T$的几何间隔为：$\gamma=\min _{i=1,2, \ldots, N} \gamma_{i}$

**函数间隔与几何间隔的关系**

$\begin{array}{c}{\gamma_{i}=\frac{\hat{\gamma}_{i}}{\|w\|}, i=1,2, \ldots, N} \\ {\gamma=\frac{\hat{\gamma}}{\|w\|}}\end{array}$

**间隔最大化**

求得一个几何间隔最大的分离超平面，可以表示为如下的最优化问题：
$\begin{array}{c}{\max _{w, b} \gamma} \\ {\text {s.t.} y_{i}\left(\frac{w^{T}}{\|w\|} x_{i}+\frac{b}{\|w\|}\right) \geq \gamma, i=1,2, \ldots, N}\end{array}$

考虑函数间隔与几何间隔的关系式，改写为：

$\begin{array}{c}{\max _{w, b} \frac{\hat{\gamma}}{\|w\|}} \\ {\text {s.t. } y_{i}\left(w^{T} x_{i}+b\right) \geq \hat{\gamma}, i=1,2, \ldots, N}\end{array}$

等价与下式

$\begin{array}{c}{\max _{w, b} \frac{1}{\|w\|}} \\ {\text {s.t. } 1-y_{i}\left(w^{T} x_{i}+b\right) \leq 0, i=1,2, \ldots, N}\end{array}$

注意到最大化$\frac{1}{\|w\|}$ 和最小化$\frac{1}{2}\|w\|^{2}$是等价的，故最优化问题可转化为：

$\begin{array}{c}{\min _{w, b} \frac{1}{2}\|w\|^{2}} \\ {\text {s.t. } 1-y_{i}\left(w^{T} x_{i}+b\right) \leq 0, i=1,2, \ldots, N}\end{array}$

构造Lagrange函数：
$\begin{aligned} L(w, b, \alpha)=& \frac{1}{2}\|w\|^{2}+\sum_{i=1}^{N} \alpha_{i}\left[1-y_{i}\left(w^{T} x_{i}+b\right)\right] \\ \alpha_{i} & \geq 0, i=1,2, \ldots, N \end{aligned}$

令$\theta_{\alpha}(w, b)=\max _{\alpha_{i} \geq 0} L(w, b, \alpha)$

则有$\theta_{\alpha}(w, b)=\left\{\begin{array}{c}{\frac{1}{2}\|w\|^{2},当全部约束满足} \\ {+\infty，当存在约束不满足}\end{array}\right.$

故原问题等价于
$\min _{w, b} \theta_{\alpha}(w, b)=\min _{w, b} \max _{\alpha_{i} \geq 0} L(w, b, \alpha)$

**对偶算法**


根据拉格朗日对偶性，上式的对偶问题为：
$\min _{w, b} \theta_{\alpha}(w, b)= \max _{\alpha_{i} \geq 0}\min _{w, b} L(w, b, \alpha)$

（1）求$\min _{w, b} L(w, b, \alpha)$

$\nabla_{w} L(w, b, \alpha)=w-\sum_{i=1}^{N} \alpha_{i} y_{i} x_{i}=0$

$\nabla_{b} L(w, b, \alpha)=-\sum_{i=1}^{N} \alpha_{i} y_{i}=0$

得

$w=\sum_{i=1}^{N} \alpha_{i} y_{i} x_{i}$

$\sum_{i=1}^{N} \alpha_{i} y_{i}=0$

将以上两式代入拉格朗日函数中消去，得
$\begin{aligned} L(w, b, \alpha) &=-\frac{1}{2} \sum_{i=1}^{N} \sum_{j=1}^{N} \alpha_{i} \alpha_{j} y_{i} y_{j}\left\langle x_{i}, x_{j}\right\rangle+\sum_{i=1}^{\mathrm{N}} \alpha_{i} \end{aligned}$

（2）求$\min _{w, b} L(w, b, \alpha)$求对$\alpha$的极大，即是对偶问题

$\begin{aligned} \max _{\alpha} &-\frac{1}{2} \sum_{i=1}^{N} \sum_{j=1}^{N} \alpha_{i} \alpha_{j} y_{i} y_{j}\left\langle x_{i}, x_{j}\right\rangle+\sum_{i=1}^{\mathrm{N}} \alpha_{i} \\ \text {s.t.} & \sum_{i=1}^{N} \alpha_{i} y_{i}=0 \\ \alpha_{i} & \geq 0, i=1,2, \ldots, N \end{aligned}$

将极大改为极小，得

${\min _{\alpha} \frac{1}{2} \sum_{i=1}^{N} \sum_{j=1}^{N} \alpha_{i} \alpha_{j} y_{i} y_{j}\left\langle x_{i}, x_{j}\right\rangle-\sum_{i=1}^{\mathrm{N}} \alpha_{i}}$

$\sum_{i=1}^{N} \alpha_{i} y_{i}=0$

$\alpha_{i} \geq 0, i=1,2, \ldots, N$


原问题的对偶问题：
$\begin{aligned} \min _{\alpha} & \frac{1}{2} \sum_{i=1}^{N} \sum_{j=1}^{N} \alpha_{i} \alpha_{j} y_{i} y_{j}\left\langle x_{i}, x_{j}\right\rangle-\sum_{i=1}^{\mathrm{N}} \alpha_{i} \\ \text {s.t.} & \sum_{i=1}^{N} \alpha_{i} y_{i}=0  \\ & \alpha_{i} \geq 0, i=1,2, \ldots, N \end{aligned}$

求解方法：
（1）由于该问题为凸优化问题，故可直接求解。
（2）由于该问题与其原问题等价，其原问题满足Slater定理，故该问题的解与KKT条件为充分必要的关系，故只需找到一组解满足KKT条件，即找到了问题的解（充分性）。  

关于对偶问题的解$\alpha^{*}=\left(\alpha_{1}^{*}, \alpha_{2}^{*}, \ldots, \alpha_{N}^{*}\right)$，是由SMO算法解出来的，这个结合加入松弛变量的情况再讲。

解出对偶问题的解$\alpha^{*}=\left(\alpha_{1}^{*}, \alpha_{2}^{*}, \ldots, \alpha_{N}^{*}\right)$后，怎么求原问题的解$w^{*}, b^{*}$？

由KKT条件可知，原问题和对偶问题均取到最优值的解$\left(w^{*}, b^{*}, \alpha^{*}\right)$需满足以下四个要求：

 1. 对原始变量梯度为0：
 $\nabla_{w} L\left(w^{*}, b^{*}, \alpha^{*}\right)=w^{*}-\sum_{i=1}^{N} \alpha_{i}^{*} y_{i} x_{i}=0$
    $\nabla_{b} L\left(w^{*}, b^{*}, \alpha^{*}\right)=-\sum_{i=1}^{N} \alpha_{i}^{*} y_{i}=0$
 2. 原问题可行： 
    $1-y_{i}\left(w^{* T} x_{i}+b^{*}\right) \leq 0, i=1,2, \ldots, N$    
 3. 不等式约束乘子非负:
 $\alpha_{i}^{*} \geq 0, i=1,2, \ldots, N$
 4. 对偶互补松弛：
 $\alpha_{i}^{*}\left[1-y_{i}\left(w^{* T} x_{i}+b^{*}\right)\right]=0, i=1,2, \dots, N$   

由于1中
$\nabla_{w} L\left(w^{*}, b^{*}, \alpha^{*}\right)=w^{*}-\sum_{i=1}^{N} \alpha_{i}^{*} y_{i} x_{i}=0$

得到
$w^{*}=\sum_{i=1}^{N} \alpha_{i}^{*} y_{i} x_{i}$
这样$w^{*}$就求出来了

用反证法我们可以得到至少有一个$\alpha_{i}^{*}>0$，假设所有的$\alpha_{i}^{*}=0$，由$w^{*}-\sum_{i=1}^{N} \alpha_{i}^{*} y_{i} x_{i}=0$知道，$w^{*}=0$，而$w^{*}=0$显然不是原问题的解，我们要零解一点意义都没有。

接下来，求$b^{*}$
取$\alpha_{i}^{*}$ 的一个分量满足$\alpha_{i}^{*}>0$ ，则有对应的由4中的 $\alpha_{i}^{*}\left[1-y_{i}\left(w^{* T} x_{i}+b^{*}\right)\right]=0, i=1,2, \dots, N$，有$1-y_{j}\left(w^{* T} x_{j}+b^{*}\right)=0$

代入$w^{*}$和样本点$(x_j,y_j)$，求出
$b^{*}=y_{j}-\sum_{i=1}^{N} \alpha_{i}^{*} y_{i}\left\langle x_{i}, x_{j}\right\rangle$

这样超平面的两个参数$(w^{*},b^{*})$就都求出来了
$w^{*}=\sum_{i=1}^{N} \alpha_{i}^{*} y_{i} x_{i}$
$b^{*}=y_{j}-\sum_{i=1}^{N} \alpha_{i}^{*} y_{i}\left\langle x_{i}, x_{j}\right\rangle$

至于为什么SVM叫支持向量机，因为我们发现只有$\alpha_{i}^{*}>0$时，对应的样本$(x_i,y_i)$才会对最终超平面的结果产生影响，此时$1-y_{i}\left(w^{* T} x_{i}+b^{*}\right)=0$， 也就是函数间隔为1，我们称这类样本为支持向量，所以这个模型被叫做支持向量机。支持向量的个数一般很少，所以支持向量机只有很少的“重要的”训练样本决定。


**核技巧**

基本思想：找一个映射Φ（一般为高维映射），将样本点特征x映射到新的特征空间Φ(x)，使其在新的特征空间中线性可分（或近似线性可分），然后利用之前的SVM算法在新的特征空间中对样本进行分类。
![在这里插入图片描述](img/SVM/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NTQ3Mjgx,size_16,color_FFFFFF,t_70-20211031095618159.png)
流程：
输入训练集$T=\left\{\left(x_{1}, y_{1}\right),\left(x_{2}, y_{2}\right), \ldots,\left(x_{n}, y_{n}\right)\right\}$其中$x_{i} \in R^{n}, y_{i} \in\{-1,+1\}$
（1）选择合适的映射函数Φ，将训练集??映射为
$T=\left\{\left(\Phi\left(x_{1}\right), y_{1}\right),\left(\Phi\left(x_{2}\right), y_{2}\right), \ldots,\left(\Phi\left(x_{n}\right), y_{n}\right)\right\}$
（2）选择惩罚参数C，构造并求解约束最优化问题（原问题的对偶问题）
$\min_{\alpha} \frac{1}{2} \sum_{i=1}^{N} \sum_{j=1}^{N} \alpha_{i} \alpha_{j} y_{i} y_{j}\left\langle\Phi\left(x_{i}\right), \Phi\left(x_{j}\right)\right\rangle-\sum_{i=1}^{\mathrm{N}} \alpha_{i}$
$\begin{aligned} \text { s.t. } & \sum_{i=1}^{N} \alpha_{i} y_{i}=0 \\ & 0 \leq \alpha_{i} \leq C, i=1,2, \ldots, N \end{aligned}$
求得最优解$\alpha^{*}=\left(\alpha_{1}^{*}, \alpha_{2}^{*}, \ldots, \alpha_{N}^{*}\right)^{T}$
（3）计算$W^{*}, b^{*}$:
$w^{*}=\sum_{i=1}^{N} \alpha_{i}^{*} y_{i} \Phi\left(x_{i}\right)$
选择$a^{*}$的一个分量满足$0<\alpha_{i}^{*}<C$，计算
$b^{*}=y_{j}-\sum_{i=1}^{N} \alpha_{i}^{*} y_{i}\left\langle\Phi\left(x_{i}\right), \Phi\left(x_{j}\right)\right\rangle$
（4）求得分离超平面和分类决策函数：
$w^{* T} \Phi(x)+b^{*}=0$
$f(x)=\operatorname{sign}\left(w^{* T} \Phi(x)+b^{*}\right)=\operatorname{sign}\left(\sum_{i=1}^{N} \alpha_{i}^{*} y_{i}\left\langle\Phi(x), \Phi\left(x_{i}\right)\right\rangle+ b^{*}\right)$

该算法的问题：
（1）合适的映射函数??太难找，几乎找不到
（2）假设找到了映射函数??，由于将数据映射到高维，在高维空间中做运算，计算量太大（维数灾难）

改进：
     考虑到算法中如果不需写出分离超平面，即不需写出$w^{?}$，而是直接用$f(x)=\operatorname{sign}\left(w^{* T} \Phi(x)+b^{*}\right)=\operatorname{sign}\left(\alpha_{i}^{*} y_{i}\left\langle\Phi(x), \Phi\left(x_{j}\right)\right\rangle+ b^{*}\right)$来做预测，同样可以给出分类边界以及达到预测目的。这样的话，算法中需要用到样本的地方全部以内积形式出现，如果我们能够找到一种函数，能够在低维空间中直接算出高维内积，并且该函数对应着某个映射，即解决了以上两个问题。

核函数的本质：用相似度函数重新定义内积运算。

什么样的函数可以作为核函数？
核函数对应的Gram矩阵为半正定矩阵。

常用的核函数:

 1. 线性核函数（linear kernel）$K(x, z)=x^{T} z$
 2. 多项式核函数（polynomial kernel function）$K(x, z)=\left(\gamma x^{T} z+r\right)^{p}$
 3. 高斯核函数（ Gaussian kernel function ） $K(x, z)=\exp \left(-\gamma\|x-z\|^{2}\right)$

    

## 3. SVM 为什么采用间隔最大化

当训练数据线性可分时，存在无穷个分离超平面可以将两类数据正确分开。感知机利用误分类最小策略，求得分离超平面，不过此时的解有无穷多个。线性可分支持向量机利用间隔最大化求得最优分离超平面，这时，解是唯一的。另一方面，此时的分隔超平面所产生的分类结果是**最鲁棒的**，对未知实例的泛化能力最强。可以借此机会阐述一下几何间隔以及函数间隔的关系。

## 4. 为什么要将求解 SVM 的原始问题转换为其对偶问题

- 对偶问题往往更易求解，当我们寻找约束存在时的最优点的时候，约束的存在虽然减小了需要搜寻的范围，但是却使问题变得更加复杂。为了使问题变得易于处理，我们的方法是把目标函数和约束全部融入一个新的函数，即拉格朗日函数，再通过这个函数来寻找最优点。

- 可以自然引入核函数，进而推广到非线性分类问题。

## 5. 为什么 SVM 要引入核函数

当样本在原始空间**线性不可分时**，可**将样本从原始空间映射到一个更高维的特征空间，使得样本在这个特征空间内线性可分**。而引入这样的映射后，所要求解的对偶问题的求解中，无需求解真正的映射函数，而只需要知道其核函数。核函数的定义：$K(x,y)=<ϕ(x),ϕ(y)>$，即在特征空间的内积等于它们在原始样本空间中通过核函数 $K $计算的结果。一方面数据变成了高维空间中线性可分的数据，另一方面不需要求解具体的映射函数，只需要给定具体的核函数即可，这样使得求解的难度大大降低。

## 6. 为什么SVM对缺失数据敏感

- SVM 没有处理缺失值的策略
- SVM的效果和支持向量点有关，缺失值可能影响支持向量点的分布



## 7. SVM 核函数之间的区别

SVM 核函数一般选择**线性核**和**高斯核(RBF 核)**。 

线性核：主要用于线性可分的情形，参数少，速度快，对于一般数据，分类效果已经很理想了。

RBF 核：主要用于线性不可分的情形，参数多，分类结果非常依赖于参数。

如果 Feature 的数量很大，跟样本数量差不多，这时候选用线性核的 SVM。

如果 Feature 的数量比较小，样本数量一般，不算大也不算小，选用高斯核的 SVM。

## 8. LR和SVM的联系与区别

- 联系： 
  - LR和SVM都可以处理分类问题，且一般都用于处理线性二分类问题
  - 两个方法都可以增加不同的正则化项，如l1、l2等等。所以在很多实验中，两种算法的结果是很接近的。 

- 区别：
  - LR是参数模型，SVM是非参数模型。 
  - 从目标函数来看，区别在于逻辑回归采用的是交叉熵损失函数，SVM采用的是合页损失函数，这两个损失函数的目的都是增加对分类影响较大的数据点的权重，减少与分类关系较小的数据点的权重。 
  - SVM的处理方法是只考虑支持向量点，也就是和分类最相关的少数点，去学习分类器。而逻辑回归通过非线性映射，大大减小了离分类平面较远的点的权重，相对提升了与分类最相关的数据点的权重。
  - 逻辑回归相对来说模型更简单，好理解，特别是大规模线性分类时比较方便。而SVM的理解和优化相对来说复杂一些，SVM转化为对偶问题后,分类只需要计算与少数几个支持向量的距离,这个在进行复杂核函数计算时优势很明显,能够大大简化模型和计算。 

## 9. SVM的原理是什么？

SVM是一种二类分类模型，其主要思想为找到空间中的一个更够将所有数据样本划开的超平面，并且使得数据集中所有数据到这个超平面的距离最短。它的基本模型是在特征空间中寻找间隔最大化的分离超平面的线性分类器。（间隔最大使它有别于感知机）。需要求解能够正确划分训练数据集并且几何间隔最大的分离超平面。对于线性可分的数据集来说，这样的超平面有无穷多个（即感知机），但是几何间隔最大的分离超平面却是唯一的。

## 10. SVM如何处理多分类问题？

**一对多**：就是对每个类都训练出一个分类器，设定为目标类为一类，其余类为另外一类。这样针对k个类可以训练出k个分类器，当有一个新的样本来的时候，用这k个分类器来测试，那个分类器的概率高，那么这个样本就属于哪一类。 
**一对一**：任意两个类训练出一个分类器，如果有k类，一共训练出$C(2,k)$ 个分类器，这样当有一个新的样本要来的时候，用这$C(2,k) $个分类器来测试，每当被判定属于某一类的时候，该类就加一，最后票数最多的类别被认定为该样本的类。

 

## 参考文献

 - 关于SMO算法 https://blog.csdn.net/luoshixian099/article/details/51227754#commentBox
 - 李航《统计学习方法》
 - 面试真题 https://zhuanlan.zhihu.com/p/43827793   https://zhuanlan.zhihu.com/p/57947723
