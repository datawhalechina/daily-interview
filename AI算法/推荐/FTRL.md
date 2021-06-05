# FTRL
FTRL(Follow the Regularized Leader) 由Google的H. Berendan McMahan 等人于2010年提出【4】,FTRL是一种在线最优化求解算法,结合L1-FOBOS和L1-RDA算法,用于解决在线学习中,权重参数不能产生较好的稀疏性的问题。
由于在线学习涉及内容较多，本文从提升模型稀疏性的角度入手，简单介绍经典的TG, L1-FOBOS, L1-RDA 和 FTRL 算法的原理。

## 模型稀疏性
众所周知，Lasso对权重参数(W)引入L1正则项使得模型的训练结果具有稀疏性,稀疏的模型不仅有变量选择的功能，同时在模型线上进行预测时，可以大大减小运算量。但是在在线学习的场景下,利用SGD的方式进行权重参数(W)的更新,每次只使用一个样本，权重参数的更新具有很大的随机性,无法将权重参数准确地更新为0。为解决这一问题，TG, L1-FOBOS, L1-RDA，FTRL 等一系列算法被提出。

## TG(Truncated Gradient)
为了得到具有稀疏性的权重参数(W)，最简单的方法就是引入一个阈值，当某个权重参数的值小于该阈值就将其置0。TG方法就是在这个想法的基础上，稍加改进，使用如下式的梯度更新方式。
$$W^{(t+1)}=T_{1}\left(W^{(t)}-\eta^{(t)} G^{(t)}, \eta^{(t)} \lambda^{(t)}, \theta\right)$$
$$T_{1}\left(v_{i}, \alpha, \theta\right)=\left\{\begin{array}{ll}
\max \left(0, v_{i}-\alpha\right) & \text { if } v_{i} \in[0, \theta] \\
\min \left(0, v_{i}+\alpha\right) & \text { if } v_{i} \in[-\theta, 0] \\
v_{i} & \text { otherwise }
\end{array}\right.$$
其中$G^{(t)}$是当前参数的梯度，$\eta^{(t)}$是学习率，$\lambda^{(t)}$控制梯度阶段发生的频次，每k次进行一次梯度截断。$\theta$为梯度截断时设置的阈值。通过调节$\lambda,\theta$可以权重参数的稀疏性。

$$
\lambda^{(t)}=\left\{
\begin{aligned}
k\lambda & , & t\ mod\ k = 0 \\
0 & , & otherwise
\end{aligned}
\right.
$$

## L1-FOBOS
FOBOS(Forward-Backward Splitting)分两步更新权重。
$$W^{\left(t+\frac{1}{2}\right)}=W^{(t)}-\eta^{(t)} G^{(t)}$$
$$W^{(t+1)}=\arg \min _{W}\left\{\frac{1}{2}\left\|W-W^{\left(t+\frac{1}{2}\right)}\right\|^{2}+\eta^{\left(t+\frac{1}{2}\right)} \Psi(W)\right\}$$

FOBOS的第一步就是正常的梯度下降算法，第二部对W进行调整，引入正则项使得参数具有稀疏性。将以上两部转换为一步，可以有如下表达。
$$W^{(t+1)}=\operatorname{argmin}_{W}\left\{\frac{1}{2}\left\|W-W^{(t)}+\eta^{(t)} G^{(t)}\right\|^{2}+\eta^{\left(t+\frac{1}{2}\right)} \Psi(W)\right\}$$


实际使用中，将FOBOS中的正则算子$\Psi(W)$替换成$\lambda\Vert W\Vert_{1}$,通过数学推导，最终可以获得如下的梯度新公式。
$$w_i^{(t)}=sgnw_{i}^{(t)}-\eta^{(t)}g_i^{(t)})\max(0, \vert w_{i}^{(t)}-\eta^{(t)}g_i^{(t)}\vert - \eta^{(t+\frac{1}{2})}\lambda)$$
从公式中可以发现，一旦权重参数更新后的值$\vert w_{i}^{(t)}-\eta^{(t)}g_i^{(t)}\vert$小于$\eta^{(t+\frac{1}{2})}\lambda$就将改权重参数置0。

## L1-RDA
RDA(Regularized Dual Average)是牺牲一定精度，进一步提升权重参数稀疏性的方法，如下是L1-RDA使用的权重参数更新公式。
$$
W^{(t+1)}=\underset{W}{\arg\min}\{\frac{1}{t}\Sigma_{r=1}^t G^{(r)}\cdot W+\lambda\Vert W\Vert_1 + \frac{\gamma}{2\sqrt t}\Vert W\Vert_{2}^2\}
$$
其中$\Sigma_{r=1}^t G^{(r)}$是历史的梯度的平均值。
通过数学推导L1-RDA有如下等价的参数更新公式。
$$
w_i^{(t+1)}=\left\{
\begin{matrix}
0 \ & , & if \vert \bar{g}_i^{(t)} < \lambda \\
-\frac{\sqrt{t}}{\gamma}(\bar g _i ^{(t)}-\lambda sgn(\bar g_i^{(t)})) & , & otherwise
\end{matrix}
\right.
$$
从公式中可以发现，一旦权重参数的历史平均梯度小于阈值$\lambda$就将该权重参数置0。
## FTRL
通常情况下，L1-FOBOS在计算最优解的精度上较高,而L1-RDA在损失一定精度的前提下可以获得更加稀疏的权重参数(W)。FTRL结合L1-FOBOS和L1-RDA的优点而产生的算法。
通过数学推导，L1-FOBOS可以写为：
$$W^{(t+1)}=\arg \min _{W}\left\{G^{(t)} \cdot W+\lambda\|W\|_{1}+\frac{1}{2 \eta^{(t)}}\left\|W-W^{(t)}\right\|_{2}^{2}\right\}$$
L1-RDA可以写为：
$$W^{(t+1)}=\arg \min _{W}\left\{G^{(1: t)} \cdot W+t \lambda\|W\|_{1}+\frac{1}{2 \eta^{(t)}}\|W-0\|_{2}^{2}\right\}$$
$$其中G^{(1: t)}=\Sigma_i^t G^{(i)}$$

FTRL结合上两时，可以写作：
$$W^{(t+1)}=\arg \min _{W}\left\{G^{(1: t)} \cdot W+\lambda_{1}\|W\|_{1}+\lambda_{2} \frac{1}{2}\|W\|_{2}^{2}+\frac{1}{2} \sum_{\mathrm{s}=1} \sigma^{(s)}\left\|W-W^{(s)}\right\|_{2}^{2}\right\}$$
$其中引入\Vert W\Vert_2^2不会影响稀疏性，同时会使解更加“光滑”。$

通过数学推导，FTRL有如下表达形式：
$$w_{i}^{(t+1)}=\left\{\begin{array}{ll}
0 & \text { if }\left|z_{i}^{(t)}\right|<\lambda_{1} \\
-\left(\lambda_{2}+\sum_{s=1}^{t} \sigma^{(s)}\right)^{-1}\left(z_{i}^{(t)}-\lambda_{1} \operatorname{sgn}\left(z_{i}^{(t)}\right)\right) & \text { otherwise }
\end{array}\right.$$
$$Z^{(t)}=G^{(1: t)}-\sum_{s=1}^{t} \sigma^{(s)} W^{(s)}$$

##总结
本文简单梳理了在线学习中提升权重参数稀疏性的算法的思想，公式较为繁多。对其中的基础知识和公式推导感兴趣的小伙伴可以参考冯扬的《在线最优化求解》【1】，对于FTRL的工程实现感兴趣的小伙伴可以参阅H. Brendan McMahan 等人于2013发表的论文【2】 ，【3】是2011年发表的一篇关于FTRL和FOBOS, RDA比较的论文。

##参考文献
【1】[冯扬————在线最优化解法](https://wenku.baidu.com/view/a76c760c4b7302768e9951e79b89680203d86bcc.html)
【2】[Ad Click Prediction: a View from the Trenches](https://static.googleusercontent.com/media/research.google.com/zh-CN//pubs/archive/41159.pdf)
【3】[Follow-the-Regularized-Leader and Mirror Descent: Equivalence Theorems and Implicit Updates](https://arxiv.org/abs/1009.3240v1)
【4】[Adaptive Bound Optimization for Online Convex Optimization](https://arxiv.org/abs/1002.4908)