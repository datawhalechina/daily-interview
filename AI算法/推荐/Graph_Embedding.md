# Graph Embedding
在许多推荐场景下，可以用网络结构数据来刻画对象（用户、商品等）之间的关系。例如：可以将用户和商品作为网络中的结点，用户和商品之间的边代表购买关系。

Graph Embedding 是一种将网络中对象之间的关系转换为每个对象的（向量）特征的一种技术。其主要想法是输入网络后，为每个对象生成一个（向量）特征，满足在网络中越相似的对象，其向量特征之间距离越接近。

下面主要介绍DeepWalk和Node2Vec两种Graph Embedding 算法。这两种算法利用网络生成对象序列后，采用word2vec算法生成对象的Graph Embedding。

## 1. Deep Walk
DeepWalk 主要由RandomWalk 和 Word2Vec 两部分组成。RandomWalk 用于生成结点（对象）序列，Word2Vec利用结点序列生成对象的Embedding。

在RandomWalk中，给定网络中以任意一点为起点，每次在当前结点的邻居中等概率选择一个节点放入已生成的序列中，并把该结点作为下一个结点重复上述采样过程，直到获得的序列长度达到预设的要求。

在获得足够多的结点序列后，使用Word2Vec算法生成每个对象的Embedding。在论文中使用Word2Vec中的SkipGram算法。

具体算法如下所示。

<div align=center>
<img src="https://raw.githubusercontent.com/Yzmshjd/picBed/main/interview/graph_embedding/alg1.png" width='600' height='500'>
</div>

在DeepWalk中使用深度优先的方式生成对象序列，为了丰富对网络中相似结点的含义，也可以尝试用广度优先的方式生成对象序列。Node2Vec 就是一种在生成对象序列时结合深度优先和广度优先的算法。

## 2. Node2Vec
### 2.1 序列生成算法
Node2Vec 在RandomWalk的基础上引入search bias $\alpha$，通过调节超参数$\alpha$，控制对象序列生成过程中广度优先和深度优先的强度。

RandomWalk的搜索方法比较朴素。在相邻结点之间根据边的权重或者其他业务理解定义转移概率。特别地，DeepWalk 采用等概率的方式搜索下一个结点。转移概率可以有如下的表达形式。

<div align=center>
<img src="https://raw.githubusercontent.com/Yzmshjd/picBed/main/interview/graph_embedding/transition.png" height='100'>
</div>

进一步，Node2Vec在未归一化的转移概率$\pi_{vx}$之前乘以偏置项$\alpha$，来反映序列生成算法对于深度优先和广度优先的偏好。以下是偏置项$\alpha$的具体表达形式。

<div align=center>
<img src="https://raw.githubusercontent.com/Yzmshjd/picBed/main/interview/graph_embedding/prob.png">
</div>

其中$d_{tx}$为顶点$t$和顶点$x$之间的最短路径长度，$p, q$控制深度优先和广度优先的强度。

假设当前随机游走经过边$(t,x)$后达到顶点$v$，以$\pi_{vx}=\alpha_{pq}(t,x)\omega_{vx}$的未归一化概率搜索下一个结点。

<div align=center>
<img src="https://raw.githubusercontent.com/Yzmshjd/picBed/main/interview/graph_embedding/graph.png" width='500'>
</div>

偏置项$\alpha$受到超参数p和q的控制，具体来说p, q的大小会对搜索策略产生如下影响。

Return parameter p的影响：
1. 超参数p影响回到之前结点t的概率大小。如果p越小,则回到之前结点t的概率越大，搜索策略越倾向于在初始结点的附近进行搜索。

In-out parameter q的影响：
1. 超参数q控制着搜索算法对于广度优先和深度优先的偏好。从示意图中，我们可以看到q越小，越倾向于搜索远离初始结点t，与倾向于深度优先的方式。

### 2.2 Embedding学习
Node2vec 采用和SkipGram类似的想法，学习从节点到embedding的函数$f$，使得给定结点$u$，其近邻结点$N_S(u)$的出现的概率最大。近邻结点的是由序列生成算法获得的一系列点。具体数学表达如下。

<div align=center>
<img src='https://raw.githubusercontent.com/Yzmshjd/picBed/main/interview/graph_embedding/opt.png' width=250, height=50>
</div>

在原文中使用了条件独立性假设和特征空间独立行假设，并使用softmax函数来表示概率，将上述优化问题化简为容易求解的优化问题。采用SGD算法获得生成Embedding的函数$f$。具体的化简过程可以参考原文。

如下是Node2Vec的整个算法过程，其中采用了时间复杂度为O(1)的alias采样方法，具体可以参考[2]。

<div align=center>
<img src="https://raw.githubusercontent.com/Yzmshjd/picBed/main/interview/graph_embedding/alg2.png", width='600', height='500'>
</div>

## 面试真题
1. 请结合业务谈一下怎样在推荐场景中建立网络。
2. 在Node2Vec建立对象序列的过程中，怎样实现深度优先和广度优先的？

## 参考文献
1. [浅梦的学习笔记——DeepWalk](https://blog.csdn.net/u012151283/article/details/86806922)
2. [浅梦的学习笔记——Node2Vec](https://blog.csdn.net/u012151283/article/details/87081272)
3. [《深度学习推荐系统》——王喆著](https://zhuanlan.zhihu.com/p/119248677?utm_source=zhihu&utm_medium=social&utm_oi=26827615633408)
4. [DeepWalk: Online Learning of Social Representations](http://www.perozzi.net/publications/14_kdd_deepwalk.pdf)
5. [node2vec: Scalable Feature Learning for Networks](https://arxiv.org/abs/1607.00653)
