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

    输入  W：3nm，输入 b：3n，隐层 W：3nn，隐层 b：3n。合计共：3*(nn+nm+2n)