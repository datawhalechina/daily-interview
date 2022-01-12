

## Prophet面试题

## 1. 简要介绍Prophet

常见的时间序列分解方法：

将时间序列分成季节项$S_t$，趋势项$T_t$，剩余项$R_t$，即对所有的$t≥0$
$$
y_{t}=S_{t}+T_{t}+R_{t}	
$$

$$
y_{t}=S_{t} \times T_{t} \times R_{t}
$$

$$
\ln y_{t}=\ln S_{t}+\ln T_{t}+\ln R_{t}
$$

fbprophet 的在此基础上，添加了节日项。
$$
y(t)=g(t)+s(t)+h(t)+\epsilon_{t}
$$

## 2. 趋势项模型

* **基于逻辑回归**

   sigmoid 函数为
  $$
  \sigma(x)=1 /\left(1+e^{-x}\right)
  $$
  prophet在逻辑回归的基础上添加了随时间变化的参数，那么逻辑回归就可以改写成：
  $$
  f(x)=\frac{C(t)}{\left(1+e^{-k(t)(x-m(t))}\right)}
  $$
  这里的 $C$ 称为曲线的最大渐近值， $k$ 表示曲线的增长率，$m$  表示曲线的中点。当 $$
  C=1, k=1, m=0
  $$时，恰好就是大家常见的 sigmoid 函数的形式。

* **基于分段线性函数**
  $$
  g(t)=\frac{C(t)}{1+\exp \left(-\left(k+\boldsymbol{a}(t)^{t} \boldsymbol{\delta}\right) \cdot\left(t-\left(m+\boldsymbol{a}(t)^{T} \boldsymbol{\gamma}\right)\right.\right.}
  $$
  $k$表示变化量

  $a_{j}(t)$表示指示函数：
  $$
  a_{j}(t)=\left\{\begin{array}{l}1, \text { if } t \geq s_{j} \\ 0, \text { otherwise }\end{array}\right.
  $$
  $\delta_{j}$表示在时间戳$s_{j}$上的增长率的变化量

  $\gamma_{j}$确定线段边界
  $$
  \gamma_{j}=\left(s_{j}-m-\sum_{\ell<j} \gamma_{\ell}\right) \cdot\left(1-\frac{k+\sum_{\ell<j} \delta_{\ell}}{k+\sum_{\ell \leq j} \delta_{\ell}}\right)
  $$
  其中：
  $$
  \boldsymbol{a}(t)=\left(a_{1}(t), \cdots, a_{S}(t)\right)^{T}, \boldsymbol{\delta}=\left(\delta_{1}, \cdots, \delta_{S}\right)^{T}, \boldsymbol{\gamma}=\left({\gamma}_{1}, \cdots, \gamma_{S}\right)^{T}
  $$

## 3. 变点的选择

在 Prophet 算法中，需要给出变点的位置，个数，以及增长的变化率：

- changepoint_range

  changepoint_range 指的是百分比，需要在前 changepoint_range 那么长的时间序列中设置变点

- n_changepoint

  n_changepoint 表示变点的个数，在默认的函数中是 n_changepoint = 25

- changepoint_prior_scale。

  changepoint_prior_scale 表示变点增长率的分布情况
  $$
  \delta_{j} \sim \operatorname{Laplace}(0, \tau)
  $$
  $\mathcal{T}$就是 change_point_scale

## 4. 对未来的预估

对于已知的时间序列，可以手动设置s个变点

对于预测的数据模型使用Poisson分布找到新增的变点，然后与已知的变点进行拼接

## 5. 季节性趋势

时间序列通常会随着天，周，月，年等季节性的变化而呈现季节性的变化，也称为周期性的变化

prophet算法使用傅立叶级数来模拟时间序列的周期性

$P$表示时间序列的周期， $P = 365.25$表示以年为周期，$P = 7$表示以周为周期。它的傅立叶级数的形式都是：
$$
s(t)=\sum_{n=1}^{N}\left(a_{n} \cos \left(\frac{2 \pi n t}{P}\right)+b_{n} \sin \left(\frac{2 \pi n t}{P}\right)\right)
$$

## 6. 节假日效应（holidays and events）

除了周末，同样有很多节假日，而且不同的国家有着不同的假期，不同的节假日可以看成相互独立的模型，并且可以为不同的节假日设置不同的前后窗口值，表示该节假日会影响前后一段时间的时间序列。
$$
h(t)=Z(t) \boldsymbol{\kappa}=\sum_{i=1}^{L} \kappa_{i} \cdot 1_{\left\{t \in D_{i}\right\}}
$$
其中：$Z(t)=\left(1_{\left\{t \in D_{1}\right\}}, \cdots, 1_{\left\{t \in D_{L}\right\}}\right), \boldsymbol{\kappa}=\left(\kappa_{1}, \cdots, \kappa_{L}\right)^{T}$，$\boldsymbol{\kappa} \sim \operatorname{Normal}\left(0, v^{2}\right)$

并且该正态分布是受到$v$ = holidays_prior_scale 这个指标影响的。默认值是 10，当值越大时，表示节假日对模型的影响越大；当值越小时，表示节假日对模型的效果越小



## 7. 参数

在 Prophet 中，用户一般可以设置以下四种参数：

1. Capacity：在增量函数是逻辑回归函数的时候，需要设置的容量值。

2. Change Points：可以通过 n_changepoints 和 changepoint_range 来进行等距的变点设置，也可以通过人工设置的方式来指定时间序列的变点。

3. 季节性和节假日：可以根据实际的业务需求来指定相应的节假日。

4. 光滑参数：

    $\tau$ = changepoint_prior_scale 可以用来控制趋势的灵活度

    $\sigma$ = seasonality_prior_scale 用来控制季节项的灵活度，

   $v$ =  holidays prior scale 用来控制节假日的灵活度。





## 参考资料

https://zhuanlan.zhihu.com/p/52330017

