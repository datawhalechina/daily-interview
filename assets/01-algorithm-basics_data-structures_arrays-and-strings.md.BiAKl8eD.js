import{_ as s,c as a,o as p,ag as l}from"./chunks/framework.DT5BmYxR.js";const o=JSON.parse('{"title":"数组（Array�?","description":"","frontmatter":{},"headers":[],"relativePath":"01-algorithm-basics/data-structures/arrays-and-strings.md","filePath":"01-algorithm-basics/data-structures/arrays-and-strings.md"}'),e={name:"01-algorithm-basics/data-structures/arrays-and-strings.md"};function i(r,n,c,b,t,m){return p(),a("div",null,[...n[0]||(n[0]=[l(`<h1 id="数组-array�" tabindex="-1">数组（Array�? <a class="header-anchor" href="#数组-array�" aria-label="Permalink to &quot;数组（Array�?&quot;">​</a></h1><blockquote><p>面试中最常见的就是围绕数组进行出题，主要原则数组可以随机读取，一般遇到数组相关的题目，都不是直观看到的那样。第一步暴力解法，第二步是否可以排序，是否可以二分，是否可以使用数据结构（哈希表，队列，栈等）�? 要时刻注意一个数组中有两列数，一列是给定的数组的值，另一个是数组的下标�?</p></blockquote><h2 id="_1-two-sum" tabindex="-1">1. two sum <a class="header-anchor" href="#_1-two-sum" aria-label="Permalink to &quot;1. two sum&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个数组arr，和一个目标值target，找到一组下标（i，j）使得arri = target�?<br> 进阶: 数组中有重复的值，找到所有可能的下标组合�?<br> 例如arr = [1, 2, 3, 3, 2, 4] target = 5�?return {(0, 5), (1, 2), (1, 3), (2, 4), (3, 4)}�?<br><strong>公司</strong>: 各大公司</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pair&lt;int, int&gt; twosum(int *arr, int n, int target) {</span></span>
<span class="line"><span>    map&lt;int, int&gt; hash;</span></span>
<span class="line"><span>    pair&lt;int, int&gt; result;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for(int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>        if(hash.find(arr[i]) == hash.end()) {</span></span>
<span class="line"><span>            hash[target - arr[i]] = i;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            result = make_pair(hash[arr[i]], i);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vector&lt;pair&lt;int, int&gt; &gt; twosumplus(int *arr, int n, int target) {</span></span>
<span class="line"><span>    map&lt;int, vector&lt;int&gt; &gt; hash;</span></span>
<span class="line"><span>    for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>        if(hash.find(arr[i]) == hash.end()) {</span></span>
<span class="line"><span>            vector&lt;int&gt; tmp;</span></span>
<span class="line"><span>            tmp.push_back(i);</span></span>
<span class="line"><span>            hash[arr[i]] = tmp;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            hash[arr[i]].push_back(i);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    vector&lt;pair&lt;int, int&gt; &gt; results;</span></span>
<span class="line"><span>    for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>        map&lt;int, vector&lt;int&gt;&gt;::iterator it = hash.find(target - arr[i]);</span></span>
<span class="line"><span>        if(it != hash.end()) {</span></span>
<span class="line"><span>            for(int j = 0; j &lt; hash[target-arr[i]].size(); j ++) {</span></span>
<span class="line"><span>                for(int k = 0; k &lt; hash[arr[i]].size(); k ++) {</span></span>
<span class="line"><span>                    // 去除 3 + 3 = 6，使用两次同一�?</span></span>
<span class="line"><span>                    if(target - arr[i] == arr[i] &amp;&amp; k &lt;= j) {</span></span>
<span class="line"><span>                        continue;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    int x = min(hash[target-arr[i]][j], hash[arr[i]][k]);</span></span>
<span class="line"><span>                    int y = max(hash[target-arr[i]][j], hash[arr[i]][k]);</span></span>
<span class="line"><span>                    results.push_back(make_pair(x, y));</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            hash.erase(it);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return results;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="_2-查找旋转数组" tabindex="-1">2. 查找旋转数组 <a class="header-anchor" href="#_2-查找旋转数组" aria-label="Permalink to &quot;2. 查找旋转数组&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 排序数组（没有重复元素）根据未知旋转轴排序（例如�? 1 2 3 4 5 变成 3 4 5 0 1 2。给定一个目标值进行搜索，如果存在返回下标，不存在返回-1�?<br><strong>公司</strong>: 百度，头条等</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int find(vector&lt;int&gt; &amp;arr, int l, int r, int target) {</span></span>
<span class="line"><span>    if(l &gt; r || arr.size() == 0) return -1;</span></span>
<span class="line"><span>    int index = -1;</span></span>
<span class="line"><span>    while(l &lt;= r) {</span></span>
<span class="line"><span>        int mid = (l + r) / 2;</span></span>
<span class="line"><span>        if(arr[mid] == target) {</span></span>
<span class="line"><span>            index = mid;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if(arr[mid] &lt; target) {</span></span>
<span class="line"><span>            if(arr[r] &gt;= target) l = mid + 1;</span></span>
<span class="line"><span>            else r = mid - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else { // arr[mid] &gt; target</span></span>
<span class="line"><span>            if(arr[l] &lt;= target) right = mid - 1;</span></span>
<span class="line"><span>            else left = mid + 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return index;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_3-主元�" tabindex="-1">3 主元�? <a class="header-anchor" href="#_3-主元�" aria-label="Permalink to &quot;3 主元�?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个证书数组，其中有一个数字出现了超过1/2，这个数就是主元素，请找出这个数字�?<br> 扩展1: 找到一个主元素，它出现的次数严格大于数组个数的1/3.<br><strong>公司</strong>: 百度，京�?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 每次去掉两个数，剩下的那个就是主元素</span></span>
<span class="line"><span>int MainElem(int *arr, int n) {</span></span>
<span class="line"><span>    int mainelem = arr[0];</span></span>
<span class="line"><span>    int cnt = 1;</span></span>
<span class="line"><span>    for(int i = 1; i &lt; n; i ++) {</span></span>
<span class="line"><span>        if(mainelem == arr[i]) {</span></span>
<span class="line"><span>            cnt ++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            cnt --;</span></span>
<span class="line"><span>            if(cnt == 0) {</span></span>
<span class="line"><span>                mainelem = arr[i];</span></span>
<span class="line"><span>                cnt = 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return mainelem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 每次去掉三个数，选择两个候选集�?</span></span>
<span class="line"><span>int MainElemP(int *arr, int n) {</span></span>
<span class="line"><span>    int maina, mainb, cnta, cntb;</span></span>
<span class="line"><span>    cnta = cntb = 1;</span></span>
<span class="line"><span>    maina = arr[0];</span></span>
<span class="line"><span>    mainb = arr[1];</span></span>
<span class="line"><span>    for(int i = 2; i &lt; n; i ++) {</span></span>
<span class="line"><span>        if(arr[i] == maina) cnta ++;</span></span>
<span class="line"><span>        else if(arr[i] == mainb) cntb ++;</span></span>
<span class="line"><span>        else if(cnta == 0) {</span></span>
<span class="line"><span>            maina = arr[i];</span></span>
<span class="line"><span>            cnta = 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if(cntb == 0) {</span></span>
<span class="line"><span>            mainb = arr[i];</span></span>
<span class="line"><span>            cntb = 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else { // 去掉三个�?</span></span>
<span class="line"><span>            cnta --;</span></span>
<span class="line"><span>            cntb --;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int cnt = 0;</span></span>
<span class="line"><span>    for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>        if(minas == arr[i]) cnt ++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(cnt &gt;= n / 3) return maina;</span></span>
<span class="line"><span>    else return mainb;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="_4-落单的数" tabindex="-1">4. 落单的数 <a class="header-anchor" href="#_4-落单的数" aria-label="Permalink to &quot;4. 落单的数&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 2n+1个数，其中只有一个数出现了一次，其他都出现了两次，求出这个出现一次的数�?<br> 扩展1: 2n+2个数，其中有两个出现一次，其他出现两次，求这两个出现一次的数�?<br> 扩展2: 3n+1个非负数，只有一个数出现了一次，其他都出现了三次，求出现一次的数�? <strong>公司</strong>: 常见的题�?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// xor: a ^ 0 = a, a ^ a = 0</span></span>
<span class="line"><span>int SingleNumber(int *arr, int n) {</span></span>
<span class="line"><span>	int ans = 0;</span></span>
<span class="line"><span>	for(int i = 0; i  &lt; n; i ++) {</span></span>
<span class="line"><span>		ans = ans ^ arr[i]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return ans;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 找到a和b, 和上一个类似，</span></span>
<span class="line"><span>pair&lt;int, int&gt; SingleNumberP(int *arr, int n) {</span></span>
<span class="line"><span>    int c = 0;</span></span>
<span class="line"><span>    for(int i = 0; i  &lt; n; i ++) {</span></span>
<span class="line"><span>        c = c ^ arr[i]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // c = a ^ b, 确定c的位数是1的位置�?</span></span>
<span class="line"><span>    int k = 0;</span></span>
<span class="line"><span>    while(c) {</span></span>
<span class="line"><span>        if(c &amp; 1) break;</span></span>
<span class="line"><span>        k ++;</span></span>
<span class="line"><span>        c =&gt;&gt; 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 根据1的位置不同确定a和b</span></span>
<span class="line"><span>    int a = 0, b = 0;</span></span>
<span class="line"><span>    for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>        if((arr[i]&gt;&gt;k) &amp; 1) {</span></span>
<span class="line"><span>            a ^= arr[i];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            b ^= arr[i];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return make_pair(a, b);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 非负整数，记录所有位�?的个数，�?取余即可</span></span>
<span class="line"><span>int SingleNumberPP(int *arr, int n) {</span></span>
<span class="line"><span>    int res = 0;	</span></span>
<span class="line"><span>    for(int j = 0; j &lt; 32; j ++) {</span></span>
<span class="line"><span>        int bits = 0;</span></span>
<span class="line"><span>        for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>            bits += (arr[i] &gt;&gt; j) &amp; 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ans |= (bits % 3) &lt;&lt; j;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="_5-中位�" tabindex="-1">5. 中位�? <a class="header-anchor" href="#_5-中位�" aria-label="Permalink to &quot;5. 中位�?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定两个有序数组，找到这两个数组合并排序后的中位数�? <strong>公司</strong>: 360，阿�?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>double findMedianSortedArrays(vector&lt;int&gt; &amp;A, vector&lt;int&gt; &amp;B) {</span></span>
<span class="line"><span>    // do A.size() &lt; B.size()</span></span>
<span class="line"><span>    if(A.size() &gt; B.size()) swap(A, B);</span></span>
<span class="line"><span>    int lena = A.size();</span></span>
<span class="line"><span>    int lenb = B.size();</span></span>
<span class="line"><span>    int la = 0, ra = lena, ma, mb, madian;</span></span>
<span class="line"><span>    while(la &lt;= ra) {</span></span>
<span class="line"><span>        ma = (la + ra) / 2;</span></span>
<span class="line"><span>        mb = (lena + lenb + 1) / 2 - ma;</span></span>
<span class="line"><span>        if(ma &lt; lena &amp;&amp; mb &gt; 0 &amp;&amp; B[mb-1] &gt; A[ma]) {</span></span>
<span class="line"><span>            la = ma + 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if(ma &gt; 0 &amp;&amp; mb &lt; lenb &amp;&amp; B[mb] &lt; A[ma-1]) {</span></span>
<span class="line"><span>            ra = ma - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            if(ma == 0) median = B[mb - 1];</span></span>
<span class="line"><span>            else if(mb == 0) median = A[ma - 1];</span></span>
<span class="line"><span>            else {</span></span>
<span class="line"><span>                median = max(A[ma - 1], B[mb - 1]);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if((lena + lenb) % 2 == 1) {</span></span>
<span class="line"><span>        return double(median);</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    if(ma == lena) {</span></span>
<span class="line"><span>        return (median + B[mb]) / 2.0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(mb == lenb) {</span></span>
<span class="line"><span>        return (median + A[ma]) / 2.0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return (median + min(A[ma], B[mb])) / 2.0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="_6-二维数组中的查找" tabindex="-1">6. 二维数组中的查找 <a class="header-anchor" href="#_6-二维数组中的查找" aria-label="Permalink to &quot;6. 二维数组中的查找&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个每一行每一列都有序的二维数组，给定一个target，查找这个值是否在二维数组中�?<br> 扩展1: 计算target出现的次数�?<br><strong>公司</strong>: 常见的题�?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 查找是否存在</span></span>
<span class="line"><span>bool SearchMatrix(vector&lt;vector&lt;int&gt; &gt; matrix, int target) {</span></span>
<span class="line"><span>    if(matrix.size() == 0) return false;</span></span>
<span class="line"><span>    int m = matrix.size(), n = matrix[0].size();</span></span>
<span class="line"><span>    int mid, low = 0, high = n * m - 1;</span></span>
<span class="line"><span>    while(low &lt;= high) {</span></span>
<span class="line"><span>        mid = (low + high) / 2;</span></span>
<span class="line"><span>        int r = mid / n;</span></span>
<span class="line"><span>        int c = mid % n;</span></span>
<span class="line"><span>        if(matrix[r][c] == target) {</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if(matrix[r][c] &lt; target) {</span></span>
<span class="line"><span>            low = mid + 1;</span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            high = mid - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查找次数</span></span>
<span class="line"><span>int SearchMatrixP(vector&lt;vector&lt;int&gt; &gt; matrix, int target) {</span></span>
<span class="line"><span>    if(matrix.size() == 0) return 0;</span></span>
<span class="line"><span>    int m = matrix.size(), n = matrix[0].size();</span></span>
<span class="line"><span>    int i = m - 1, j = 0, cnt = 0;</span></span>
<span class="line"><span>    while(i &gt;= 0 &amp;&amp; j &lt; n) {</span></span>
<span class="line"><span>        if(target == matrix[i][j]) {</span></span>
<span class="line"><span>            cnt ++;</span></span>
<span class="line"><span>            j ++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if(target &gt; matrix[i][j]) {</span></span>
<span class="line"><span>            j ++;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            i --;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return cnt;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="_7-构建乘积数组" tabindex="-1">7. 构建乘积数组 <a class="header-anchor" href="#_7-构建乘积数组" aria-label="Permalink to &quot;7. 构建乘积数组&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个数组A0, 1, ..., n-1, 其中B中的元素Bix...xAi-1x...xA[n-1]�?<br><strong>公司</strong>: 某创业公�?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 从计算中可以直接使用数组的前缀和后缀乘积</span></span>
<span class="line"><span>vector&lt;int&gt; multiply(const vector&lt;int&gt;&amp; arr1) {</span></span>
<span class="line"><span>    vector&lt;int&gt; arr2(arr1.size(), 0);</span></span>
<span class="line"><span>    // 计算前缀</span></span>
<span class="line"><span>    arr2[0] = 1;</span></span>
<span class="line"><span>    for(int i = 1; i &lt; arr1.size(); i ++) {</span></span>
<span class="line"><span>        arr2[i] = arr2[i - 1] * arr1[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 计算后缀</span></span>
<span class="line"><span>    int temp = 1;</span></span>
<span class="line"><span>    for(int i = arr1.size() - 2; i&gt;= 0; i --) {</span></span>
<span class="line"><span>        temp *= arr1[i+1];</span></span>
<span class="line"><span>        arr2[i] *= temp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return arr2;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_8-滑动窗口的最大�" tabindex="-1">8. 滑动窗口的最大�? <a class="header-anchor" href="#_8-滑动窗口的最大�" aria-label="Permalink to &quot;8. 滑动窗口的最大�?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个数组array和滑动的大小k，求所有滑动窗口里的最大值�?<br><strong>公司</strong>: 头条</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 滑动窗口最大�?</span></span>
<span class="line"><span>vector&lt;int&gt; MaxSildingWindow(vector&lt;int&gt; nums, int k) {</span></span>
<span class="line"><span>    deque&lt;int&gt; q;</span></span>
<span class="line"><span>    vector&lt;int&gt; ans;</span></span>
<span class="line"><span>    if(k &lt;= 0) return ans;</span></span>
<span class="line"><span>    if(k == 1) return nums;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for(int i = 0; i &lt; k; i ++) {</span></span>
<span class="line"><span>        while(!q.empty() &amp;&amp; nums[q.back()] &lt;= nums[i]) {</span></span>
<span class="line"><span>            q.pop_back();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        q.push_back(i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for(int i = k; i &lt; nums.size(); i ++) {</span></span>
<span class="line"><span>        ans.push_back(nums[q.front()]);</span></span>
<span class="line"><span>        while(!q.empty() &amp;&amp; nums[q.back()] &lt;= nums[i]) {</span></span>
<span class="line"><span>            q.pop_back();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if(!q.empty() &amp;&amp; i - q.front &gt;= k) { // 超过窗口大小</span></span>
<span class="line"><span>            q.pop_front();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        q.push_back(i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 处理结尾</span></span>
<span class="line"><span>    ans.push_back(nums[q.front()]);</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_9-第k�-�-的数" tabindex="-1">9. 第k�?�?的数 <a class="header-anchor" href="#_9-第k�-�-的数" aria-label="Permalink to &quot;9. 第k�?�?的数&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个无序数组，找出第k小的数�? <strong>公司</strong>: 常见题目</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int randPartition(int *arr,int l,int r){</span></span>
<span class="line"><span>    int x = arr[l];</span></span>
<span class="line"><span>    int i=l+1,j=r;</span></span>
<span class="line"><span>    while(i&lt;j){</span></span>
<span class="line"><span>        while(arr[i]&lt;x &amp;&amp; i&lt;r) i++;</span></span>
<span class="line"><span>        while(arr[j]&gt;=x &amp;&amp; j&gt;l) j--;</span></span>
<span class="line"><span>        if(i&lt;j){</span></span>
<span class="line"><span>            swap(arr[i],arr[j]);</span></span>
<span class="line"><span>            i++;</span></span>
<span class="line"><span>            j--;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 交换最后一个位�?</span></span>
<span class="line"><span>    swap(arr[l],arr[j]);</span></span>
<span class="line"><span>    return j;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int kthSmallest(int *arr,int l,int r,int k){</span></span>
<span class="line"><span>    if(k&lt;0 || k &gt; r-l+1) return -1;</span></span>
<span class="line"><span>    int pos = randPartition(arr,l,r);</span></span>
<span class="line"><span>    // 使用相对位置</span></span>
<span class="line"><span>    if(pos-l+1 == k) return arr[pos];</span></span>
<span class="line"><span>    else if(pos-l+1 &gt; k) return kthSmallest(arr,l,pos-1,k);</span></span>
<span class="line"><span>    else{//在右边，因为使用的是相对位置，所以k要减去左边丢弃的数的个数</span></span>
<span class="line"><span>        return kthSmallest(arr,pos+1,r,k-(pos-l+1));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int findKElem(int *arr, int n, int k) {</span></span>
<span class="line"><span>    // 根据快速排序的思想，使用快排的一次划�?</span></span>
<span class="line"><span>    if(n &lt; 0 || arr == NULL) return -1;</span></span>
<span class="line"><span>    return kthSmallest(arr, 0, n-1, k);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="_10-奇偶排序" tabindex="-1">10. 奇偶排序 <a class="header-anchor" href="#_10-奇偶排序" aria-label="Permalink to &quot;10. 奇偶排序&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个数组，将所有的偶数排列奇数的前面�? <strong>公司</strong>: 搜狐</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void oddEvenSort(vector&lt;int&gt; &amp;arr) {</span></span>
<span class="line"><span>    int i = 0, j = arr.size() - 1;</span></span>
<span class="line"><span>    while(1) {</span></span>
<span class="line"><span>        while(i &lt; j &amp;&amp; a[i] % 2 == 0) i ++;</span></span>
<span class="line"><span>        while(i &lt; j &amp;&amp; a[j] % 2 == 1) j --;</span></span>
<span class="line"><span>        if(i &gt; j) break;</span></span>
<span class="line"><span>        swap(arr[i], arr[j]);</span></span>
<span class="line"><span>        i ++, j --;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,32)])])}const d=s(e,[["render",i]]);export{o as __pageData,d as default};
