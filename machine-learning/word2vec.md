**Author: kangbingbing;     Email: kangb93@126.com**
# word2vec
## 直观解释
Word2vec是Google实现word embedding的一种具体的方式。因为速度快效果好，而广为人知。
而Word embedding是一个普适的概念或者任务，即用向量来表示字或词，一般也称为词嵌入。
## 核心公式
简单来说，Word2Vec就是“两个训练方案＋两个提速手段”，两个训练方案见下表，两个提速手段分别为HS（Hierarchical Softmax ）、负采样（Negative Sampling）。
我们设置一个大小为 t 的窗口，在数据集里随机抽取一个中心词Wt，这个词的前c个和后 c个单词构成该词的上下文，即：
```
context(W)=(Wt−c ,...,Wt−2,Wt−1;Wt+1,Wt+2,...,Wt+c)
```

| ** model **   | 训练方法 | 说明   | 目标函数   | 
|:----:|:----:|:----|:----:|:----|:----:|
| skip-gram       | 神经网络   | 最大化p(w\|context(w))，即用中心词w的上下文去预测 w | - 最大化均值“对数似然概率”  - 见式①、式②    - 式①中两个词之间的 skip-gram 概率p(wt+j\|wt) 可以定义为式②  - 式②分子是把w对应的词向量和  context(w) 里的某个词对应的词向量做内积，分母是把 w对应的词向量和词汇表中的所有词向量做内积   | 
| CBOW   | 神经网络 | 最大化p(context(w)\|w)，即用中心词w去预测其上下文   | - 于skip-gram类似, 调换Wt+j和Wt的位置即可 | 

![图片](https://uploader.shimo.im/f/P4TRFtpLw60xH8AB.png!thumbnail)  ---- ①
![图片](https://uploader.shimo.im/f/bVPzpjXTsEQAsK2H.png!thumbnail)        ---- ②




## 注意要点
1. 在小数据集中，Skip-gram和CBoW哪种表现更好？
>Skip-gram是用一个center word预测其context里的word；而CBoW是用context里的所有word去预测一个center word。显然，前者对训练数据的利用更高效（构造的数据集多），因此，对于较小的语料库，Skip-gram是更好的选择。
2. 为什么要使用HS（Hierarchical Softmax ）和负采样（Negative Sampling）？
>两个模型的原始做法都是做内积，经过 Softmax 后得到概率，因此复杂度很高。假设我们拥有一个百万量级的词典，每一步训练都需要计算上百万次词向量的内积，显然这是无法容忍的。因此人们提出了两种较为实用的训练技巧，即HS和Negative Sampling。

3. 介绍一下HS（Hierarchical Softmax ）
>HS 是试图用词频建立一棵哈夫曼树，那么经常出现的词路径会比较短。树的叶子节点表示词，共词典大小多个，而非叶子结点是模型的参数，比词典个数少一个。要预测的词，转化成预测从根节点到该词所在叶子节点的路径，是多个二分类问题。本质是把 N 分类问题变成 log(N)次二分类
4. 介绍一下负采样（Negative Sampling）
>把原来的 Softmax 多分类问题，直接转化成一个正例和多个负例的二分类问题。让正例预测 1，负例预测 0，这样子更新局部的参数。.
5. 负采样为什么要用词频来做采样概率？
>可以让频率高的词先学习，然后带动其他词的学习。
6. 对比 Skip-gram 和 CBOW
>CBOW 会比Skip-gram训练速度更快，因为前者每次会更新 context(w) 的词向量，而 Skip-gram 只更新核心词的词向量。
>Skip-gram 对低频词效果比 CBOW好，因为Skip-gram 是尝试用当前词去预测上下文，当前词是低频词还是高频词没有区别。但是 CBOW 相当于是完形填空，会选择最常见或者说概率最大的词来补全，因此不太会选择低频词。
7. 对比字向量和词向量
>字向量可以解决未登录词的问题，以及可以避免分词；词向量包含的语义空间更大，更加丰富，如果语料足够的情况下，词向量是能够学到更多的语义信息。
8. 如何衡量word2vec得出的词/字向量的质量？
>在实际工程中一般以word embedding对于实际任务的收益为评价标准，包括词汇类比任务（如king – queen = man - woman）以及NLP中常见的应用任务，比如命名实体识别（NER），关系抽取（RE）等。
9. 神经网络框架里的Embedding层和word-embedding有什么关系？
>Embedding层就是以one hot为输入（实际一般输入字或词的id）、中间层节点为字向量维数的全连接层。而这个全连接层的参数，就是一个“字向量表”，即word-embedding。
10.  word2vec的缺点？
>没有考虑词序，因为它假设了词的上下文无关(把概率变为连乘)；没有考虑全局的统计信息。
## 面试真题
1. 为什么训练得到的字词向量会有如下一些性质，比如向量的夹角余弦、向量的欧氏距离都能在一定程度上反应字词之间的相似性？

  答：因为，我们在用语言模型无监督训练时，是开了窗口的，通过前n个字预测下一个字的概率，这个n就是窗口的大小，同一个窗口内的词语，会有相似的更新，这些更新会累积，而具有相似模式的词语就会把这些相似更新累积到可观的程度。
2. word2vec跟Glove的异同？
3. word2vec 相比之前的 Word Embedding 方法好在什么地方

reference：
1. [https://blog.csdn.net/zhangxb35/article/details/74716245](https://blog.csdn.net/zhangxb35/article/details/74716245)
2. [https://spaces.ac.cn/archives/4122](https://spaces.ac.cn/archives/4122)

