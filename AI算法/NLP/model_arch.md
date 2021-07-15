1. LSTM 网络结构？

    LSTM 即长短时记忆网络，包括三个门：更新门（输入门）、遗忘门和输出门。公式如下：
    $$
    \hat{c}^{<t>} = \tanh (W_c [a^{<t-1}>, x^{<t>}] + b_c) \\
    \Gamma_u = \sigma(W_u [a^{<t-1}>, x^{<t>}] + b_u) \\
    \Gamma_f = \sigma(W_f [a^{<t-1}>, x^{<t>}] + b_f) \\
    \Gamma_o = \sigma(W_o [a^{<t-1}>, x^{<t>}] + b_o) \\
    c^{<t>} = \Gamma_u * \hat{c}^{<t>} + \Gamma_f*c^{<t-1>} \\
    a^{<t>} = \Gamma_o * c^{<t>}
    $$

2. 假设输入维度为 m，输出为 n，求 GRU 参数？

    输入  W：3nm，隐层 W：3nn，隐层 b：3n，合计共：`3*(nn+nm+n)`。当然，也有的实现会把前一时刻的隐层和当前时刻的输入分开，使用两个 bias，此时需要再增加 3n 个参数。

3. CNN 有什么好处？

    - 稀疏（局部）连接：卷积核尺寸远小于输入特征尺寸，输出层的每个节点都只与部分输入层连接
    - 参数共享：卷积核的滑动窗在不同位置的权值是一样的
    - 等价表示（输入/输出数据的结构化）：输入和输出在结构上保持对应关系

4. 卷积层输出 size？

    给定 n×n 输入，f×f 卷积核，padding p，stride s，输出的尺寸为：
    $$
    \lfloor \frac{n+2p-f}{s} + 1 \rfloor \times \lfloor \frac{n+2p-f}{s} + 1 \rfloo
    $$
    
5. Attention 机制

    Attention 核心是从输入中有选择地聚焦到特定重要信息上的一种机制。有三种不同用法：

    - 在 encoder-decoder attention 层，query 来自上一个 decoder layer，memory keys 和 values 来自 encoder 的 output
    - encoder 包含 self-attention，key value 和 query 来自相同的位置，即前一层的输出。encoder 的每个位置都可以注意到前一层的所有位置
    - decoder 与 encoder 类似，通过将所有不合法连接 mask 以防止信息溢出

6. 孪生网络原理？

    孪生网络是指包含两个或多个相同子网络的架构。相同是指配置、参数和权重都一模一样。主要用于评价输入之间的相似度。损失函数主要采用 Triplet Loss 或 Contrastive Loss。
    
7. FastText 相比 Word2vec 有哪些不同？

    - FastText 增加了 Ngram 特征，可以更好地解决未登录词及在小数据集上训练的问题
    - FastText 是一个工具包，除了可以训练词向量还可以训练有监督的文本分类模型

8. Glove 与 Word2vec 的区别？

    在 Word2vec 中，高频的词共现只是产生了更多的训练数据，并没有携带额外的信息；Glove 加入词的全局共现频率信息。它基于词上下文矩阵的矩阵分解技术，首先构建一个大的单词×上下文共现矩阵，然后学习低维表示，可以视为共现矩阵的重构问题。

    - Word2vec 是局部语料训练，特征提取基于滑动窗口；Glove 的滑动窗口是为了构建共现矩阵，统计全部语料在固定窗口内词的共现频次。
    - Word2vec 损失函数是带权重的交叉熵；Glove 的损失函数是最小平方损失
    - Glove 利用了全局信息，训练时收敛更快
    
9. Doc2vec 原理？

    Doc2vec 是训练文档表征的，在输入层增加了一个 Doc 向量。有两种不同的训练方法：Distributed Memory  是给定上下文和段落向量的情况下预测单词的概率。在一个句子或者段落文档训练过程中，段落 ID 保存不变，共享同一个段落向量。Distributed Bag of Words 则在只给定段落向量的情况下预测段落中一组随机单词的概率。使用时固定词向量，随机初始化 Doc 向量，训练几个步骤后得到最终 Doc 向量。
    
10. LSTM 和 GRU 的区别？

    - GRU 将 LSTM 的更新门、遗忘门和输出门替换为更新门和重置门
    - GRU 将记忆状态和输出状态合并为一个状态
    - GRU 参数更少，更容易收敛，但数据量大时，LSTM 效果更好
