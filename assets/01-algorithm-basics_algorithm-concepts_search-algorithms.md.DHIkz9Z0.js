import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.DT5BmYxR.js";const o=JSON.parse('{"title":"search","description":"","frontmatter":{},"headers":[],"relativePath":"01-algorithm-basics/algorithm-concepts/search-algorithms.md","filePath":"01-algorithm-basics/algorithm-concepts/search-algorithms.md"}'),l={name:"01-algorithm-basics/algorithm-concepts/search-algorithms.md"};function i(r,s,c,b,t,u){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="search" tabindex="-1">search <a class="header-anchor" href="#search" aria-label="Permalink to &quot;search&quot;">​</a></h1><p>bfs ?dfs的相关的题目</p><h2 id="_1-全排" tabindex="-1">1. 全排? <a class="header-anchor" href="#_1-全排" aria-label="Permalink to &quot;1. 全排?&quot;">​</a></h2><blockquote><p>题目: 给定一个数字列表，返回其所有可能的排列?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// premute(ans, nums, 0)</span></span>
<span class="line"><span>void permute(vector&lt;vector&lt;int&gt; &gt; &amp;ans, vector&lt;int&gt; &amp;nums, int k){</span></span>
<span class="line"><span>    if(k==nums.size()-1){</span></span>
<span class="line"><span>        ans.push_back(nums);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 以k开头的所有排?</span></span>
<span class="line"><span>    for(int i=k;i&lt;nums.size();i++){</span></span>
<span class="line"><span>        // 以每一个都作为开头，进行遍历</span></span>
<span class="line"><span>        swap(nums[i],nums[k]);</span></span>
<span class="line"><span>        permute(ans,nums,k+1);</span></span>
<span class="line"><span>        // 回溯</span></span>
<span class="line"><span>        swap(nums[i],nums[k]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_2-子集" tabindex="-1">2. 子集 <a class="header-anchor" href="#_2-子集" aria-label="Permalink to &quot;2. 子集&quot;">​</a></h2><blockquote><p>题目: 给定一个可能具有重复数字的列表，返回其所有可能的子集?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 调用函数dfs(res, sub, , nums, 0)之前, nums 必须首先排序, </span></span>
<span class="line"><span>// sort(nums.begin(), nums.end());</span></span>
<span class="line"><span>void dfs(vector&lt;vector&lt;int&gt;&gt; &amp;res, vector&lt;int&gt; &amp;sub, vector&lt;int&gt; &amp;nums, int k) {   </span></span>
<span class="line"><span>        res.push_back(sub);</span></span>
<span class="line"><span>    for(int i= k; i &lt; nums.size(); i++) {</span></span>
<span class="line"><span>        // 跳过相同元素, </span></span>
<span class="line"><span>        if(i != k &amp;&amp; nums[i] == nums[i - 1]) continue; </span></span>
<span class="line"><span>        sub.push_back(nums[i]);</span></span>
<span class="line"><span>        dfs(res, sub, nums, i + 1);</span></span>
<span class="line"><span>        // 回溯其他可能组合</span></span>
<span class="line"><span>        sub.pop_back();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_3-word-break-problem" tabindex="-1">3. Word Break Problem <a class="header-anchor" href="#_3-word-break-problem" aria-label="Permalink to &quot;3. Word Break Problem&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给一字串s和单词的字典dict,在字串中增加空格来构建一个句子，并且所有单词都来自字典。返回所有有可能的句子?<br><strong>分析</strong>: 利用f[i]记录以i为起点的每个片段的终点j，并且片段要在字典中，然后从0位置开始搜索，每次给当前片段加上空格，然后以当前片段的末尾作为下一次搜索的头部，避免不必要的搜索?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>vetor&lt;int&gt; f[1000];</span></span>
<span class="line"><span>vector&lt;string&gt; wordBreak(string &amp;s, unordered_set&lt;string&gt; &amp;wordDict) {</span></span>
<span class="line"><span>    n = s.length();</span></span>
<span class="line"><span>    int i, j;</span></span>
<span class="line"><span>    // 遍历所有可能的(i,j)组合,是否在字典中</span></span>
<span class="line"><span>    for (i = n - 1; i &gt;= 0; --i) {</span></span>
<span class="line"><span>        for (j = i + 1; j &lt;= n; ++j) {</span></span>
<span class="line"><span>            if (wordDict.find(s.substr(i, j - i)) != wordDict.end()) {</span></span>
<span class="line"><span>                // 大家请思考不加这个条件和加条件有什么区?</span></span>
<span class="line"><span>                // if (j == n || f[j].size() &gt; 0) </span></span>
<span class="line"><span>                //    f[i].push_back(j);</span></span>
<span class="line"><span>                f[i].push_back(j);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    dfs(0, s, &quot;&quot;);</span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>void dfs(int p, string s, string &amp;now, vector&lt;int&gt; &amp;res) {</span></span>
<span class="line"><span>    if(p == s.size()) {</span></span>
<span class="line"><span>        res.push_back(now);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(p &gt; 0) { // 找到一个单词划?</span></span>
<span class="line"><span>        now += &quot; &quot;;</span></span>
<span class="line"><span>    }   </span></span>
<span class="line"><span>    // 遍历所有以p开? 以j结尾的划分进行dfs</span></span>
<span class="line"><span>    for(int i = 0; i &lt; f[p].size(); i ++) {</span></span>
<span class="line"><span>        dfs(f[p][i], s, now+s.substr(p, f[p][i]-p), res);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="_4-k-similar-strings" tabindex="-1">4. K-Similar Strings <a class="header-anchor" href="#_4-k-similar-strings" aria-label="Permalink to &quot;4. K-Similar Strings&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 如果可以通过?A 中的两个小写字母精确地交换位?K 次得到与 B 相等的字符串，我们称字符?A ?B 的相似度?K（K 为非负整数）? 给定两个字母异位?A ?B ，返?A ?B 的相似度 K 的最小值? 解析: 这是一个bfs的问? 每次改变A的一个字? 和B进行比较, 将改变后的A加入到候选队列中,直到所有出现A==B位置,得到此时的次?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Node {</span></span>
<span class="line"><span>    string s;</span></span>
<span class="line"><span>    int step;</span></span>
<span class="line"><span>    Node(string _s, int _step):s(_s),step(_step);</span></span>
<span class="line"><span>    Node(){}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int kSimilarity(string &amp;A, string &amp;B) {</span></span>
<span class="line"><span>    Node start(A, 0);</span></span>
<span class="line"><span>    queue&lt;Node&gt; q;</span></span>
<span class="line"><span>    set&lt;string&gt; vis;</span></span>
<span class="line"><span>    q.push(start);</span></span>
<span class="line"><span>    int ans = 0;</span></span>
<span class="line"><span>    while(q.size()) {</span></span>
<span class="line"><span>        Node str = q.front();</span></span>
<span class="line"><span>        q.pop();</span></span>
<span class="line"><span>        if(str.s == B) {</span></span>
<span class="line"><span>            ans = str.step;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        int i = 0;</span></span>
<span class="line"><span>        while(str[i] == B[i]) i ++;</span></span>
<span class="line"><span>        for(int j = i + 1; j &lt; B.size(); j ++) {</span></span>
<span class="line"><span>            if(str[j] != B[j] &amp;&amp; str[j] == B[i]) {</span></span>
<span class="line"><span>                string temp = str;</span></span>
<span class="line"><span>                swap(temp[i], temp[j]);</span></span>
<span class="line"><span>                if(vis.find(temp) == vis.end()) {</span></span>
<span class="line"><span>                    q.push(Node(temp, str.step+1));</span></span>
<span class="line"><span>                    vis.insert(temp);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="_5-无向图的联通块" tabindex="-1">5. 无向图的联通块 <a class="header-anchor" href="#_5-无向图的联通块" aria-label="Permalink to &quot;5. 无向图的联通块&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给一个布尔类型的二维数组, 0 表示? 1 表示岛。如果两?是相邻的,那么我们认为他们是同一个岛.我们只考虑 上下左右 相邻. 求出岛屿的个?<br><strong>解析</strong>: 这就是无向图的联通块问题, 我们遍历所有是1的位置进行dfs(i,j), 并且将所有访问过的位置记录下?如果当前位置?,而且没有访问,则次数就?.</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void dfs(vector&lt;vector&lt;int&gt;&gt; &amp;grid, int i, int j) {</span></span>
<span class="line"><span>    if(i &lt; 0 || i &gt;= grid.size()) return;</span></span>
<span class="line"><span>    if(j &lt; 0 || j &gt;= grid[0].size()) return;</span></span>
<span class="line"><span>    if(!grid[i][j]) return;</span></span>
<span class="line"><span>    grid[i][j] = 0;</span></span>
<span class="line"><span>    // 四个方向搜索</span></span>
<span class="line"><span>    dfs(grid, i-1, j);</span></span>
<span class="line"><span>    dfs(grid, i+1, j);</span></span>
<span class="line"><span>    dfs(grid, i, j-1);</span></span>
<span class="line"><span>    dfs(grid, i, j+1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int numIslands(vector&lt;vector&lt;int&gt;&gt; &amp;grid) {</span></span>
<span class="line"><span>    if (grid.empty() || grid[0].empty()) return 0;</span></span>
<span class="line"><span>    int N = grid.size(), M = grid[0].size();</span></span>
<span class="line"><span>    int cnt = 0;</span></span>
<span class="line"><span>    for (int i = 0; i &lt; N; ++i) {</span></span>
<span class="line"><span>        for (int j = 0; j &lt; M; ++j) {</span></span>
<span class="line"><span>            if (grid[i][j]) {</span></span>
<span class="line"><span>                dfs(grid, i, j);</span></span>
<span class="line"><span>                ++cnt;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return cnt;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="_6-k个数的和" tabindex="-1">6. k个数的和 <a class="header-anchor" href="#_6-k个数的和" aria-label="Permalink to &quot;6. k个数的和&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定n个不同的正整数，整数k?&lt;= k &lt;= n）以及一个目标数字? 在这n个数里面找出K个数，使得这K个数的和等于目标数字，你需要找出所有满足要求的方案? <strong>解析</strong>: dfs(i, k, target) 每次怕判断是够使用第i个? 如果使用, dfs(i+1,k-1,target-arr[i]) 如果不使? dfs(i+1,k,target), if target == 0, 则表示满足要?存储结果</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void dfs(vector&lt;int&gt; A, int i, int k, int target, vector&lt;int&gt; &amp;now, vector&lt;vector&lt;int&gt;&gt; &amp;res) {</span></span>
<span class="line"><span>    if(i &gt; A.size() || target &lt; 0 || k &lt; 0) return;</span></span>
<span class="line"><span>    if(target == 0 &amp;&amp; k==0) {</span></span>
<span class="line"><span>        res.push_back(now);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // user</span></span>
<span class="line"><span>    now.push_back(A[i]);</span></span>
<span class="line"><span>    dfs(A, i+1, k-1, target-A[i], now, res);</span></span>
<span class="line"><span>    now.pop_back();</span></span>
<span class="line"><span>    // not use i</span></span>
<span class="line"><span>    dfs(A, i+1, k, target, now, res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vector&lt;vector&lt;int&gt;&gt; kSumII(vector&lt;int&gt; &amp;A, int k, int target) {</span></span>
<span class="line"><span>    // write your code here</span></span>
<span class="line"><span>    vector&lt;vector&lt;int&gt;&gt; res;</span></span>
<span class="line"><span>    vector&lt;int&gt; now;</span></span>
<span class="line"><span>    dfs(A,0,k,target,now,res);</span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_7-单词接龙" tabindex="-1">7. 单词接龙 <a class="header-anchor" href="#_7-单词接龙" aria-label="Permalink to &quot;7. 单词接龙&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给出两个单词（start和end）和一个字典，找出从start到end的最短转换序列，输出最短序列的长度?<br> 变换规则如下?</p></blockquote><ul><li>每次只能改变一个字母?</li><li>变换过程中的中间单词必须在字典中出现?起始单词和结束单词不需要出现在字典?</li></ul><blockquote><p><strong>解析</strong>: 使用bfs进行变换,每一修改一个字符[&#39;a&#39;--&#39;z&#39;],判断是否在字典中,并记录当前的步数.</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int ladderLength(string &amp;start, string &amp;end, unordered_set&lt;string&gt; &amp;dict) {</span></span>
<span class="line"><span>    int length = 2;    </span></span>
<span class="line"><span>    if(start == end) return 1;</span></span>
<span class="line"><span>    queue&lt;string&gt; q;</span></span>
<span class="line"><span>    q.push(start);</span></span>
<span class="line"><span>    while(!q.empty()){</span></span>
<span class="line"><span>        int size = q.size();// 对每一个层以此处理, 这一个的都步数一?</span></span>
<span class="line"><span>        for(int i=0;i&lt;size;i++){</span></span>
<span class="line"><span>            string tmp = q.front();</span></span>
<span class="line"><span>            q.pop();</span></span>
<span class="line"><span>            // 遍历tmp的所有的字符，进?6个字符的变换</span></span>
<span class="line"><span>            for(int j=0;j&lt;tmp.size();j++){</span></span>
<span class="line"><span>                // 要记录老字符，因为最后要恢复</span></span>
<span class="line"><span>                char oldc = tmp[j];</span></span>
<span class="line"><span>                for(char c=&#39;a&#39;;c&lt;=&#39;z&#39;;c++){</span></span>
<span class="line"><span>                    if(tmp[j] == c) continue;</span></span>
<span class="line"><span>                    tmp[j] = c;</span></span>
<span class="line"><span>                    //验证是否已经满足条件</span></span>
<span class="line"><span>                    if(tmp == end) return length;</span></span>
<span class="line"><span>                    // 变换的单词是否在字典?</span></span>
<span class="line"><span>                    if(dict.find(tmp) != dict.end()){</span></span>
<span class="line"><span>                        q.push(tmp);</span></span>
<span class="line"><span>                        dict.erase(tmp); // 防止多次使用</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 恢复当前的变?这个不变，变化下一?</span></span>
<span class="line"><span>                tmp[j] = oldc;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        length ++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return length;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_8-单词搜索" tabindex="-1">8. 单词搜索 <a class="header-anchor" href="#_8-单词搜索" aria-label="Permalink to &quot;8. 单词搜索&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给出一个二维的字母板和一个单词，寻找字母板网格中是否存在这个单词。单词可以由按顺序的相邻单元的字母组成，其中相邻单元指的是水平或者垂直方向相邻。每个单元中的字母最多只能使用一次?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>样例</span></span>
<span class="line"><span>样例 1:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入：[&quot;ABCE&quot;,&quot;SFCS&quot;,&quot;ADEE&quot;]?ABCCED&quot;</span></span>
<span class="line"><span>输出：true</span></span>
<span class="line"><span>解释?</span></span>
<span class="line"><span>[    </span></span>
<span class="line"><span>     A B C E</span></span>
<span class="line"><span>     S F C S </span></span>
<span class="line"><span>     A D E E</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>(0,0)A-&gt;(0,1)B-&gt;(0,2)C-&gt;(1,2)C-&gt;(2,2)E-&gt;(2,1)D</span></span>
<span class="line"><span>样例 2:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入：[&quot;z&quot;]?z&quot;</span></span>
<span class="line"><span>输出：true</span></span>
<span class="line"><span>解释?</span></span>
<span class="line"><span>[ z ]</span></span>
<span class="line"><span>(0,0)z</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bool dfs(int i, int j, int k, vector&lt;vector&lt;char&gt;&gt; &amp;board, string word, vector&lt;vector&lt;int&gt;&gt; &amp;vis) {</span></span>
<span class="line"><span>    if(board[i][j] == word[k]) {</span></span>
<span class="line"><span>        ++ k;</span></span>
<span class="line"><span>        if(k == word.size()) {</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else return false;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    bool flag = false; </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    vis[i][j] = 1;</span></span>
<span class="line"><span>    if(i-1 &gt;=0 &amp;&amp; (!vis[i-1][j]) &amp;&amp; board[i-1][j] == word[k]) flag = flag | dfs(i-1, j, k, board, word, vis); </span></span>
<span class="line"><span>    if(flag) return flag;</span></span>
<span class="line"><span>    if(i+1 &lt; board.size() &amp;&amp; (!vis[i+1][j]) &amp;&amp; board[i+1][j] == word[k]) flag = flag | dfs(i+1, j, k, board, word, vis); </span></span>
<span class="line"><span>    if(flag) return flag;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(j-1 &gt;= 0 &amp;&amp; (!vis[i][j-1]) &amp;&amp; board[i][j-1] == word[k]) flag = flag | dfs(i, j-1, k, board, word, vis);</span></span>
<span class="line"><span>    if(flag) return flag;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(j+1 &lt;= board[0].size() &amp;&amp; (!vis[i][j+1]) &amp;&amp; board[i][j+1] == word[k]) flag = flag | dfs(i, j+1, k, board, word, vis);</span></span>
<span class="line"><span>    // 下次使用标记</span></span>
<span class="line"><span>    vis[i][j] = 0;</span></span>
<span class="line"><span>    return flag;</span></span>
<span class="line"><span>}    </span></span>
<span class="line"><span>bool exist(vector&lt;vector&lt;char&gt;&gt; &amp;board, string &amp;word) {</span></span>
<span class="line"><span>    if(board.empty() || board[0].size() == 0) return false;</span></span>
<span class="line"><span>    bool res = false;</span></span>
<span class="line"><span>    vector&lt;vector&lt;int&gt;&gt; vis(board.size(), vector&lt;int&gt;(board[0].size(), 0));</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    for(int i = 0; i &lt; board.size(); i ++) {</span></span>
<span class="line"><span>        for(int j = 0; j &lt; board[i].size(); j ++) {</span></span>
<span class="line"><span>            if(word[0] == board[i][j] &amp;&amp; dfs(i,j,0,board,word, vis)){</span></span>
<span class="line"><span>                return true;                    </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return res;   </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_9-分割字符" tabindex="-1">9. 分割字符? <a class="header-anchor" href="#_9-分割字符" aria-label="Permalink to &quot;9. 分割字符?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给一个字符串,你可以选择在一个字符或两个相邻字符之后拆分字符?使字符串由仅一个字符或两个字符组成,输出所有可能的结果.<br><strong>解析</strong>?dfs(s) = dfs(s-1) + dfs(s-2)</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void dfs(int i, string s, vector&lt;string&gt; &amp;now, vector&lt;vector&lt;string&gt;&gt; &amp;res) {</span></span>
<span class="line"><span>    if(i == s.size()) {</span></span>
<span class="line"><span>        res.push_back(now);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(s.size() - i == 1) {</span></span>
<span class="line"><span>        now.push_back(s.substr(i, 1));</span></span>
<span class="line"><span>        dfs(i+1,s,now,res);</span></span>
<span class="line"><span>        now.pop_back();</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(s.size() - i &gt;= 2) {</span></span>
<span class="line"><span>        now.push_back(s.substr(i, 1));</span></span>
<span class="line"><span>        dfs(i+1,s,now,res);    </span></span>
<span class="line"><span>        now.pop_back();</span></span>
<span class="line"><span>        now.push_back(s.substr(i, 2));</span></span>
<span class="line"><span>        dfs(i+2,s,now,res);</span></span>
<span class="line"><span>        now.pop_back();</span></span>
<span class="line"><span>    }    </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>vector&lt;vector&lt;string&gt;&gt; splitString(string&amp; s) {</span></span>
<span class="line"><span>    vector&lt;string&gt; now; </span></span>
<span class="line"><span>    vector&lt;vector&lt;string&gt;&gt; res;</span></span>
<span class="line"><span>    dfs(0,s,now,res);    </span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_10-划分回文" tabindex="-1">10. 划分回文? <a class="header-anchor" href="#_10-划分回文" aria-label="Permalink to &quot;10. 划分回文?&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个字符串S，将S切分成每一个子串都是回文串，返回所有可能的结果.</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Input  : s = &quot;bcc&quot;</span></span>
<span class="line"><span>Output : [[&quot;b&quot;, &quot;c&quot;, &quot;c&quot;], [&quot;b&quot;, &quot;cc&quot;]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bool checkPalindrome(string str) { </span></span>
<span class="line"><span>    int len = str.length(); </span></span>
<span class="line"><span>    len--; </span></span>
<span class="line"><span>    for (int i=0; i&lt;len; i++) { </span></span>
<span class="line"><span>        if (str[i] != str[len]) return false; </span></span>
<span class="line"><span>        len--; </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    return true; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>void addStrings(vector&lt;vector&lt;string&gt; &gt; &amp;v, string &amp;s, </span></span>
<span class="line"><span>                vector&lt;string&gt; &amp;temp, int index) { </span></span>
<span class="line"><span>    int len = s.length(); </span></span>
<span class="line"><span>    string str; </span></span>
<span class="line"><span>    vector&lt;string&gt; current = temp; </span></span>
<span class="line"><span>    if (index == 0) temp.clear(); </span></span>
<span class="line"><span>    for (int i = index; i &lt; len; ++i) { </span></span>
<span class="line"><span>        str = str + s[i]; </span></span>
<span class="line"><span>        if (checkPalindrome(str)) { </span></span>
<span class="line"><span>            temp.push_back(str); </span></span>
<span class="line"><span>            if (i+1 &lt; len) </span></span>
<span class="line"><span>                addStrings(v,s,temp,i+1); </span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>                v.push_back(temp); </span></span>
<span class="line"><span>            temp = current; </span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    return; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>\`\`\`cpp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,36)])])}const d=n(l,[["render",i]]);export{o as __pageData,d as default};
