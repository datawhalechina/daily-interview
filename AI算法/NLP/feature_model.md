1. LSTM 网络结构？：

    LSTM 即长短时记忆网络，包括三个门：更新门、遗忘门和输出门。公式如下：
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

4. Attention 机制

    Attention 核心是从输入中有选择地聚焦到特定重要信息上的一种机制。有三种不同用法：

    - 在 encoder-decoder attention 层，query 来自上一个 decoder layer，memory keys 和 values 来自 encoder 的 output
    - encoder 包含 self-attention，key value 和 query 来自相同的位置，即前一层的输出。encoder 的每个位置都可以注意到前一层的所有位置
    - decoder 与 encoder 类似，通过将所有不合法连接 mask 以防止信息溢出

