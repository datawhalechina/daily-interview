import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.DT5BmYxR.js";const m=JSON.parse('{"title":"贪心算法","description":"","frontmatter":{},"headers":[],"relativePath":"01-algorithm-basics/algorithm-concepts/greedy-algorithms.md","filePath":"01-algorithm-basics/algorithm-concepts/greedy-algorithms.md"}'),l={name:"01-algorithm-basics/algorithm-concepts/greedy-algorithms.md"};function i(r,s,t,c,b,u){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="贪心算法" tabindex="-1">贪心算法 <a class="header-anchor" href="#贪心算法" aria-label="Permalink to &quot;贪心算法&quot;">​</a></h1><blockquote><p>是每次只考虑当前最优，目标证明每次是考虑当前最优能够达到局部最优，这就是贪心的思想，一般情况下贪心和排序一起出现，都是先根据条件进行排序，之后基于贪心策略得到最优结果? 面试的时候面试官一般不会出贪心算法，如果可能贪心一般都可以使用动态规划解决，面试官很喜欢出动态规划的题目?</p></blockquote><h2 id="_1-最大连续子序列" tabindex="-1">1. 最大连续子序列 <a class="header-anchor" href="#_1-最大连续子序列" aria-label="Permalink to &quot;1. 最大连续子序列&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个整数数组，找到一个具有最大和的子数组，返回其最大和?<br><strong>扩展1</strong>: 给定一个整数数组，找出两个 不重?子数组使得它们的和最大?<br><strong>扩展2</strong>: 给定一个整数数组，找出两个不重叠的子数组A和B，使两个子数组和的差的绝对值|SUM(A) - SUM(B)|最大?<br><strong>分析</strong>: 使用这个s表示当前可能满足的最大和，如果s&gt;0,我们认为s对接下来的加操作有帮助，基于s+=nums[i]，if s &lt; 0, 认为s只会对后面造成负影响，两s=nums[i]?<br><strong>扩展问题</strong>: 可以?数组从每个位置k分开，分别结算[1,i]和[i+1, n)的最值，记录的过程中可以使用数组保存下来的已经计算好的值?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int maxSubArray(vector&lt;int&gt; &amp;nums) {</span></span>
<span class="line"><span>    int s = 0, ans = -1000000;</span></span>
<span class="line"><span>    for(int i = 0; i &lt; nums.size(); i ++) {</span></span>
<span class="line"><span>        if(s &gt; 0) s += nums[i];</span></span>
<span class="line"><span>        else s = nums[i];</span></span>
<span class="line"><span>        ans = max(s, ans);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2-删除数字" tabindex="-1">2. 删除数字 <a class="header-anchor" href="#_2-删除数字" aria-label="Permalink to &quot;2. 删除数字&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个以字符串表示的非负整数，从该数字中移除掉k个数位，让剩余数位组成的数字尽可能小，求可能的最小结果?<br><strong>分析</strong>: 从左到右遍历字符串，找到第一个不满足递增的数字删除，一定会保证当前操作之后剩下的数字最小?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>string removeKdigits(string &amp;num, int k) {</span></span>
<span class="line"><span>    int i;</span></span>
<span class="line"><span>    while(k --) {</span></span>
<span class="line"><span>        for(i = 0; i &lt; num.size() - 1 &amp;&amp; num[i] &lt;= num[i+1]; i ++);</span></span>
<span class="line"><span>        num.erase(num.begin() + i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // remove 0</span></span>
<span class="line"><span>    auto it = num.begin();</span></span>
<span class="line"><span>    while(it != num.end() &amp;&amp; *it == &#39;0&#39;) {</span></span>
<span class="line"><span>        num.erase(it);</span></span>
<span class="line"><span>        it = num.begin();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(num.size() == 0) num = &quot;0&quot;;</span></span>
<span class="line"><span>    return num;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_3-无重叠区" tabindex="-1">3. 无重叠区? <a class="header-anchor" href="#_3-无重叠区" aria-label="Permalink to &quot;3. 无重叠区?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一些区间，找到需要移除的最小区间数，以使其余的区间不重叠?<br><strong>分析</strong>: 贪心一般伴随着排序一起出现，我们根据区间的结束使用升序排序，之后进行遍历，如果发现不满足条件，则移除这个不满足的区间?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>classs Interval {</span></span>
<span class="line"><span>    int start, end;</span></span>
<span class="line"><span>    Interval(int start, int end) {</span></span>
<span class="line"><span>        this-&gt;start = start;</span></span>
<span class="line"><span>        this-&gt;end = end;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>bool cmp(Interval a, Interval b) {</span></span>
<span class="line"><span>    if(a.end &lt; b.end) return 1;</span></span>
<span class="line"><span>    else return 0;</span></span>
<span class="line"><span>}     </span></span>
<span class="line"><span>int eraseOverlapIntervals(vector&lt;Interval&gt; &amp;intervals) {</span></span>
<span class="line"><span>    sort(intervals.begin(), intervals.end(), cmp);    </span></span>
<span class="line"><span>    int cnt = 0;</span></span>
<span class="line"><span>    Interval tmp = intervals[0];</span></span>
<span class="line"><span>    for(int i = 1; i &lt; intervals.size(); i ++) {</span></span>
<span class="line"><span>        if(tmp.end &lt;= intervals[i].start) tmp = intervals[i];</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            cnt ++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return cnt;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_4-合并数字" tabindex="-1">4. 合并数字 <a class="header-anchor" href="#_4-合并数字" aria-label="Permalink to &quot;4. 合并数字&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给出n个数，现在要将这n个数合并成一个数，每次只能选择两个数a,b合并，每次合并需要消耗a+b的能量，输出将这n个数合并成一个数后消耗的最小能量?<br><strong>分析</strong>: 参考哈夫曼树的构造，每一次合并两个最小的数，直到剩下一个数字，因为每次要选择两个最小的，需要用到最小堆来实现，可以使用C++SLT中的优先队列. 根据这个题目，请大家<strong>自行补上哈夫曼树</strong>?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int mergeNumber(vector&lt;int&gt; &amp;numbers) {</span></span>
<span class="line"><span>    priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; pq;</span></span>
<span class="line"><span>    for(int i = 0; i &lt; numbers.size(); i ++) {</span></span>
<span class="line"><span>        pq.push(numbers[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int cost = 0;</span></span>
<span class="line"><span>    while(pq.size() &gt; 1) {</span></span>
<span class="line"><span>        int a = pq.top();</span></span>
<span class="line"><span>        pq.pop();</span></span>
<span class="line"><span>        int b = pq.top();</span></span>
<span class="line"><span>        pq.pop();</span></span>
<span class="line"><span>        cost += (a + b);</span></span>
<span class="line"><span>        pq.push(a + b);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return cost;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_5-最小支撑树" tabindex="-1">5. 最小支撑树 <a class="header-anchor" href="#_5-最小支撑树" aria-label="Permalink to &quot;5. 最小支撑树&quot;">​</a></h2><blockquote><p>题目: 使用kruskal算法，构造最小支撑树? 分析: 详见百度百科或者wikipedia.<br> 代码: <a href="https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/">kruskal code</a></p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Edge { </span></span>
<span class="line"><span>    int src, dest, weight; </span></span>
<span class="line"><span>}; </span></span>
<span class="line"><span>struct Graph { </span></span>
<span class="line"><span>    int V, E;   </span></span>
<span class="line"><span>    struct Edge* edge; </span></span>
<span class="line"><span>}; </span></span>
<span class="line"><span>struct Graph* createGraph(int V, int E) { </span></span>
<span class="line"><span>    struct Graph* graph = new Graph; </span></span>
<span class="line"><span>    graph-&gt;V = V; </span></span>
<span class="line"><span>    graph-&gt;E = E;   </span></span>
<span class="line"><span>    graph-&gt;edge = new Edge[E]; </span></span>
<span class="line"><span>    return graph; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>struct subset { </span></span>
<span class="line"><span>    int parent; </span></span>
<span class="line"><span>    int rank; </span></span>
<span class="line"><span>}; </span></span>
<span class="line"><span>int find(struct subset subsets[], int i) { </span></span>
<span class="line"><span>    if (subsets[i].parent != i) </span></span>
<span class="line"><span>        subsets[i].parent = find(subsets, subsets[i].parent); </span></span>
<span class="line"><span>    return subsets[i].parent; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>void Union(struct subset subsets[], int x, int y) { </span></span>
<span class="line"><span>    int xroot = find(subsets, x); </span></span>
<span class="line"><span>    int yroot = find(subsets, y);   </span></span>
<span class="line"><span>    if (subsets[xroot].rank &lt; subsets[yroot].rank) </span></span>
<span class="line"><span>        subsets[xroot].parent = yroot; </span></span>
<span class="line"><span>    else if (subsets[xroot].rank &gt; subsets[yroot].rank) </span></span>
<span class="line"><span>        subsets[yroot].parent = xroot;   </span></span>
<span class="line"><span>    else { </span></span>
<span class="line"><span>        subsets[yroot].parent = xroot; </span></span>
<span class="line"><span>        subsets[xroot].rank++; </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>int myComp(const void* a, const void* b) { </span></span>
<span class="line"><span>    struct Edge* a1 = (struct Edge*)a; </span></span>
<span class="line"><span>    struct Edge* b1 = (struct Edge*)b; </span></span>
<span class="line"><span>    return a1-&gt;weight &gt; b1-&gt;weight; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>void KruskalMST(struct Graph* graph) { </span></span>
<span class="line"><span>    int V = graph-&gt;V; </span></span>
<span class="line"><span>    struct Edge result[V];  </span></span>
<span class="line"><span>    int e = 0; </span></span>
<span class="line"><span>    int i = 0; </span></span>
<span class="line"><span>    qsort(graph-&gt;edge, graph-&gt;E, sizeof(graph-&gt;edge[0]), myComp);   </span></span>
<span class="line"><span>    struct subset *subsets = </span></span>
<span class="line"><span>        (struct subset*) malloc( V * sizeof(struct subset) ); </span></span>
<span class="line"><span>    for (int v = 0; v &lt; V; ++v) { </span></span>
<span class="line"><span>        subsets[v].parent = v; </span></span>
<span class="line"><span>        subsets[v].rank = 0; </span></span>
<span class="line"><span>    }   </span></span>
<span class="line"><span>    while (e &lt; V - 1) { </span></span>
<span class="line"><span>        struct Edge next_edge = graph-&gt;edge[i++];   </span></span>
<span class="line"><span>        int x = find(subsets, next_edge.src); </span></span>
<span class="line"><span>        int y = find(subsets, next_edge.dest);   </span></span>
<span class="line"><span>        if (x != y) { </span></span>
<span class="line"><span>            result[e++] = next_edge; </span></span>
<span class="line"><span>            Union(subsets, x, y); </span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span>    }   </span></span>
<span class="line"><span>    return; </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h2 id="_6-补齐数组" tabindex="-1">6. 补齐数组 <a class="header-anchor" href="#_6-补齐数组" aria-label="Permalink to &quot;6. 补齐数组&quot;">​</a></h2><blockquote><p>题目: 给出一个正整数数组nums和一个整数n，向数组添加patch元素，使得范围[1, n]包含的任何数字都可以由数组中某些元素的总和形成。返回所需的最少补齐数?<br> 分析?</p><ol><li>升序排序?</li><li>使用r表示目前可以表示的右边界，如果当前?&gt; r, 超出范围，又因为 [1, n] 区间内的任何数字都可以用 nums 中某几个数字的和来表示，那么只需要有n/2以及 [1, n/2] 区间内任何数字都可以?nums 中某几个数字的和来表示即可。所有我们将r扩大一倍，继续判断是否满足?</li><li>直到 r &gt;= n?</li></ol></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int minPatches(vector&lt;int&gt; &amp;nums, int n) {</span></span>
<span class="line"><span>    sort(nums.begin(), nums.end());</span></span>
<span class="line"><span>    long long r = 1;</span></span>
<span class="line"><span>    int i = 0;</span></span>
<span class="line"><span>    int cnt = 0;</span></span>
<span class="line"><span>    while(r &lt;= n) {</span></span>
<span class="line"><span>        if(i &lt; nums.size() &amp;&amp; nums[i] &lt;= r) r += nums[i++];</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            cnt ++;</span></span>
<span class="line"><span>            r *= 2;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return cnt;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_7-买卖股票的最佳时" tabindex="-1">7. 买卖股票的最佳时? <a class="header-anchor" href="#_7-买卖股票的最佳时" aria-label="Permalink to &quot;7. 买卖股票的最佳时?&quot;">​</a></h2><blockquote><p>题目: 假设有一个数组，它的第i个元素是一支给定的股票在第i天的价格。如果你最多只允许完成一次交?例如,一次买卖股?,设计一个算法来找出最大利润?<br> 分析: 先低价买入，再高价卖出，因此从前向后，记录最小值并且更新最有结果，</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int maxProfit(vector&lt;int&gt; &amp;prices) {</span></span>
<span class="line"><span>    int minp = prices[0];</span></span>
<span class="line"><span>    int ans = 0;</span></span>
<span class="line"><span>    for(int i = 1; i &lt; prices.size(); i ++) {</span></span>
<span class="line"><span>        ans = max(ans, prices[i] - minp);</span></span>
<span class="line"><span>        minp = min(minp, prices[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_8-买卖股票的最佳时机ii" tabindex="-1">8. 买卖股票的最佳时机II <a class="header-anchor" href="#_8-买卖股票的最佳时机ii" aria-label="Permalink to &quot;8. 买卖股票的最佳时机II&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 假设有一个数组，它的第i个元素是一个给定的股票在第i天的价格。设计一个算法来找到最大的利润。你可以完成尽可能多的交?多次买卖股票)。然?你不能同时参与多个交?你必须在再次购买前出售股??<br><strong>分析</strong>: 多次买卖，我们可以尽可能多的买卖股票，如果满足prices[i+1] &gt; price[i]，就进行一次买卖，其实我们知道如果是一个递增序列?prices[i+1] - prices[i]) + (prices[i] - prices[i-1]) = prices[i+1] - prices[i]，可以保证我们将所有可能的买卖识别出来?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int maxProfit(vector&lt;int&gt; &amp;prices) {</span></span>
<span class="line"><span>    int sum = 0;</span></span>
<span class="line"><span>    for(int i=1;i&lt;prices.size();i++){</span></span>
<span class="line"><span>        if(prices[i] &gt; prices[i-1]){</span></span>
<span class="line"><span>            sum += prices[i] - prices[i-1];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sum;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_9-买卖股票的最佳时机含手续" tabindex="-1">9. 买卖股票的最佳时机含手续? <a class="header-anchor" href="#_9-买卖股票的最佳时机含手续" aria-label="Permalink to &quot;9. 买卖股票的最佳时机含手续?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个数组，其中第i个元素是一支股票在第i天的价格，以及一个非负数 fee 代表了交易手续费。（只需要在卖出时支?fee）。你可以进行任意次交易，而每次交易都必须付手续费，而且你不能持有超?支数量的股票（也就是说，你在买入之前需要先把之前买入的卖出）。返回可以获得的最大利润?<br><strong>分析</strong>:</p><ul><li>我们考虑最朴素的方法，对于每一天，如果当前有股票，考虑出售或者保留，如果没股票，考虑购买或者跳过，进行dfs搜索。每天都有两种操作，时间复杂度为O(2^n).</li><li>如何优化呢？我们用动态规划的思想来解决这个问题，考虑每一天同时维护两种状态：拥有股票(own)状态和已经售出股票(sell)状态。用own和sell分别保留这两种状态到目前为止所拥有的最大利润?对于sell，用前一天own状态转移，比较卖出持有股是否能得到更多的利润，即sell = max(sell , own + price - fee)?而对于own , 我们考虑是否买新的股票更能赚?换言之，更优惠），own=max( own, sell-price).</li><li>初始化我们要把sell设为0表示最初是sell状态且没有profit，把own设为负无穷因为最初不存在该状态，我们不希望从这个状态进行转?</li><li>因为我们保存的都是最优状态，所以在买卖股票时候取max能保证最优性不?</li><li>最后直接返回sell即可.</li><li>来自(<a href="https://www.jiuzhang.com/solution/best-time-to-buy-and-sell-stock-with-transaction-fee/#tag-highlight-lang-cpp" target="_blank" rel="noreferrer">https://www.jiuzhang.com/solution/best-time-to-buy-and-sell-stock-with-transaction-fee/#tag-highlight-lang-cpp</a>)</li></ul></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int maxProfit(vector&lt;int&gt; &amp;prices, int fee) {</span></span>
<span class="line"><span>    int sell = 0, buy = -prices[0];</span></span>
<span class="line"><span>    for (int price : prices) {</span></span>
<span class="line"><span>        int sellOld = sell;</span></span>
<span class="line"><span>        sell = max(sell, buy + price - fee);</span></span>
<span class="line"><span>        buy = max(buy, sellOld - price);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sell;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_10-最后的" tabindex="-1">10. 最后的? <a class="header-anchor" href="#_10-最后的" aria-label="Permalink to &quot;10. 最后的?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个n只猫，每一个猫都有一个初始化的萌系数，当一只猫的萌系数变成0它就会离开你。现在你实在受不了这n只萌猫，想要只留下一只猫，并且使它的萌系数最低。每一个你可以选择任意一只猫A去消耗另外一只猫B的萌系数，这样的话猫B的萌系数就会减去猫A的萌系数，当猫A的萌系数不变。通过多次回合之后，最后剩下的猫的萌系数最小是多少?<br><strong>分析</strong>: 我们的目的是留下一只猫，使它的萌系数最小，从这个角度出发，我们可以选择最小萌系数的猫，去消耗其他的猫，如果其他的猫萌系数变?，就离开了。例如最小萌系数的猫的系数是a，对于其他的猫，如果b%a == 0，则经过多次消耗之后，b就会离开，如果b%a!=0, 则结果是经过多轮消耗之后变?b%a, a)，直到一方变?，我们可以发现这是一个求最大公约的算式。因此，最后的猫萌系数是gcd(h[0],h[0],...,h[n-1]);</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int gcd(int a, int b) {</span></span>
<span class="line"><span>    if(a == 0) return b;</span></span>
<span class="line"><span>    return gcd(b % a, a);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int solve(vector&lt;int&gt; &amp;h) {</span></span>
<span class="line"><span>    if(h.size() == 1) return h[0];</span></span>
<span class="line"><span>    int ans = gcd(h[0], h[1]);</span></span>
<span class="line"><span>    for(int i = 2; i &lt; h.size(); i ++) {</span></span>
<span class="line"><span>        ans = gcd(ans, h[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`cpp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,32)])])}const d=n(l,[["render",i]]);export{m as __pageData,d as default};
