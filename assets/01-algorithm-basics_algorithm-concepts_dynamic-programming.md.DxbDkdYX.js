import{_ as i,c as l,o as e,ag as a,j as s,a as p}from"./chunks/framework.DT5BmYxR.js";const h=JSON.parse('{"title":"动态规划(DP)","description":"","frontmatter":{},"headers":[],"relativePath":"01-algorithm-basics/algorithm-concepts/dynamic-programming.md","filePath":"01-algorithm-basics/algorithm-concepts/dynamic-programming.md"}'),r={name:"01-algorithm-basics/algorithm-concepts/dynamic-programming.md"};function t(c,n,b,m,o,u){return e(),l("div",null,[...n[0]||(n[0]=[a(`<h1 id="动态规划-dp" tabindex="-1">动态规划(DP) <a class="header-anchor" href="#动态规划-dp" aria-label="Permalink to &quot;动态规划(DP)&quot;">​</a></h1><p>动态规划是面试中最常被问道的题目,但是一般情况下的都是常见的一些题目.</p><ol><li><a href="https://baike.baidu.com/item/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/529408?fr=aladdin" target="_blank" rel="noreferrer">百度百科</a></li><li><a href="https://en.wikipedia.org/wiki/Dynamic_programming" target="_blank" rel="noreferrer">wikipedia</a></li></ol><h2 id="_1-最长上升子序列" tabindex="-1">1. 最长上升子序列 <a class="header-anchor" href="#_1-最长上升子序列" aria-label="Permalink to &quot;1. 最长上升子序列&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 最长上升子序列问题是在一个无序的给定序列中找到一个尽可能长的由低到高排列的子序列，这种子序列不一定是连续的或者唯一的.</p></blockquote><blockquote><p><strong>解析</strong>:</p></blockquote><pre><code>dp[j]: 表示以j结尾的最长子序列的长度,
dp[j] = max(dp[j], dp[i]+1) if(a[i]&lt;d[j]) {i in [1,j]}

return max(dp[1-n])
</code></pre><p>使用二分查找可以得到O(nlog)的算法,这里就不给出,思路也很简单,读者自行查询.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int lis(vector&lt;int&gt; &amp;nums) {</span></span>
<span class="line"><span>    if(nums.size() == 0) return 0;</span></span>
<span class="line"><span>    memset(dp,0,sizeof(dp));</span></span>
<span class="line"><span>    int ans = 1;</span></span>
<span class="line"><span>    dp[0] = 1;</span></span>
<span class="line"><span>    for(int i=0;i&lt;nums.size();i++){</span></span>
<span class="line"><span>        dp[i] = 1;</span></span>
<span class="line"><span>        for(int j=0;j&lt;i;j++){</span></span>
<span class="line"><span>            if(nums[j] &lt; nums[i]){</span></span>
<span class="line"><span>                dp[i] = max(dp[i],dp[j]+1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ans = max(ans,dp[i]);       </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_2-最长公共子序列" tabindex="-1">2. 最长公共子序列 <a class="header-anchor" href="#_2-最长公共子序列" aria-label="Permalink to &quot;2. 最长公共子序列&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给出两个字符串，找到最长公共子序列(LCS)，返回LCS的长度。</p></blockquote><blockquote><p><strong>解析</strong>:</p></blockquote><pre><code>dp[i][j]: 表示以i和j结尾的最长序列的长度. 
dp[i][j] = max(dp[i-1][j], dp[i][j-1]) if(a[i] != b[j])
dp[i][j] = dp[i-1][j-1] + 1 if(a[i]==b[j])
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int lcs(string &amp;A, string &amp;B) {</span></span>
<span class="line"><span>        int dp[A.size()+1][B.size()+1] = {0};   </span></span>
<span class="line"><span>        for(int i=1;i&lt;=A.size();i++){</span></span>
<span class="line"><span>            for(int j=1;j&lt;=B.size();j++){</span></span>
<span class="line"><span>                dp[i][j] = max(dp[i-1][j],dp[i][j-1]);</span></span>
<span class="line"><span>                if(A[i-1] == B[j-1]){</span></span>
<span class="line"><span>                    dp[i][j] = max(dp[i][j],dp[i-1][j-1]+1);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return dp[A.size()][B.size()];</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_3-最长整除子集" tabindex="-1">3. 最长整除子集 <a class="header-anchor" href="#_3-最长整除子集" aria-label="Permalink to &quot;3. 最长整除子集&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个n个正整数的数组, 找出最长的子序列,使得序列中每一个较小的数都能整除较大的数.</p></blockquote><blockquote><p>Example:</p></blockquote><pre><code>Input : arr[] = {10, 5, 3, 15, 20} 
Output : 3 
最长子序列: 10, 5, 20.
因为: 20能被整除10, 10能被5整除.
</code></pre><blockquote><p><strong>解析</strong>: 这个可以参考最长上升子序列, 首先排序数组.</p></blockquote><pre><code>dp[i]: 表示下标i结尾的,最长的子序列长度
if(a[j] % a[i] == 0) dp[j] = max(dp[j], dp[i]+1) j in [i+1, n]
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int largeSubset(int a[], int n) {</span></span>
<span class="line"><span>    sort(a, a+n);</span></span>
<span class="line"><span>    int dp[n] = {0};</span></span>
<span class="line"><span>    dp[0] = 1;</span></span>
<span class="line"><span>    for(int j = 1; j &lt; n; j++) {</span></span>
<span class="line"><span>        for(int i = 0; i &lt; j; i++) {</span></span>
<span class="line"><span>            if(a[j] % a[i] == 0) {</span></span>
<span class="line"><span>                dp[j] = max(dp[j], dp[i]+1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return *max_element(dp, dp+n);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_4-背包问题" tabindex="-1">4. 背包问题 <a class="header-anchor" href="#_4-背包问题" aria-label="Permalink to &quot;4. 背包问题&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 在n个物品中挑选若干物品装入背包，最多能装多满？假设背包的大小为m，每个物品的大小为A[i].</p></blockquote><blockquote><p><strong>解析</strong>:</p></blockquote><pre><code>表示dp[m]能否装满, dp[m] = dp[m] | dp[m-A[i]])
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int backPack(int m, vector&lt;int&gt; A) {</span></span>
<span class="line"><span>    int dp[m+1];</span></span>
<span class="line"><span>    memset(dp,0,sizeof(dp));</span></span>
<span class="line"><span>    dp[0]=1;</span></span>
<span class="line"><span>    //背包问题的循环顺序很重要</span></span>
<span class="line"><span>    for(int i=0;i&lt;A.size();i++){</span></span>
<span class="line"><span>        for(int j=m;j&gt;=A[i];j--){</span></span>
<span class="line"><span>            dp[j] |= dp[j-A[i]];//注意一下这个语句，类似于，</span></span>
<span class="line"><span>            //if(dp[j-A[i]]==1) dp[j]=1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int ans;</span></span>
<span class="line"><span>    for(ans=m;!dp[ans];--ans);   </span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_5-编辑距离" tabindex="-1">5. 编辑距离 <a class="header-anchor" href="#_5-编辑距离" aria-label="Permalink to &quot;5. 编辑距离&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给出两个单词word1和word2，计算出将word1 转换为word2的最少操作次数。 你总共三种操作方法：</p></blockquote><pre><code>插入一个字符
删除一个字符
替换一个字符
</code></pre><blockquote><p><strong>解析</strong>:</p></blockquote><pre><code> 分别表示插入,删除,修改
 dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])+1; // a[i-1] != b[j-1]
dp[i][j] = dp[i-1][j-1] // a[i-1] == b[j-1]
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int minDistance(string &amp;word1, string &amp;word2) {</span></span>
<span class="line"><span>    int dp[word1.size()+1][word2.size()+1];</span></span>
<span class="line"><span>    dp[0][0] = 0;</span></span>
<span class="line"><span>    for(int i=1;i&lt;=word1.size();i++) dp[i][0] = i;</span></span>
<span class="line"><span>    for(int i=1;i&lt;=word2.size();i++) dp[0][i] = i;    </span></span>
<span class="line"><span>    for(int i=1;i&lt;=word1.size();i++){</span></span>
<span class="line"><span>        for(int j=1;j&lt;=word2.size();j++){</span></span>
<span class="line"><span>            if(word1[i-1] == word2[j-1]){</span></span>
<span class="line"><span>                dp[i][j] = dp[i-1][j-1];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>                dp[i][j] = min(min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1]) + 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return dp[word1.size()][word2.size()];</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_6-矩阵链乘" tabindex="-1">6. 矩阵链乘 <a class="header-anchor" href="#_6-矩阵链乘" aria-label="Permalink to &quot;6. 矩阵链乘&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个矩阵序列, 找到有效的方式把这些数相乘到一起. Example:</p></blockquote><pre><code>Input: p[] = {40, 20, 30, 10, 30}   
Output: 26000  

表示四个矩阵,分别是A:40x20, B:20x30, C;30x10, D:10x30.
最优的方式是: (A(BC))D --&gt; 
20*30*10 + 40*20*10 + 40*10*30 
</code></pre><blockquote><p><strong>解析</strong>:</p></blockquote><pre><code>dp[i][j]: 表示[i,j]区间上最小值.
dp[i][j] = min(dp[i][j], dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[l]) k in [i,j-1]
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int MatrixChainOrder(int p[], int n) {    </span></span>
<span class="line"><span>    int dp[n][n]; </span></span>
<span class="line"><span>    int i, j, k, L, q;   </span></span>
<span class="line"><span>    for (i=1; i&lt;n; i++) { </span></span>
<span class="line"><span>        dp[i][i] = 0; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // L is chain length. </span></span>
<span class="line"><span>    for (L=2; L&lt;n; L++) { </span></span>
<span class="line"><span>        for (i=1; i&lt;n-L+1; i++) { </span></span>
<span class="line"><span>            j = i+L-1; </span></span>
<span class="line"><span>            dp[i][j] = INT_MAX; </span></span>
<span class="line"><span>            for (k=i; k&lt;=j-1; k++) { </span></span>
<span class="line"><span>                q = dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j]; </span></span>
<span class="line"><span>                if (q &lt; dp[i][j]) dp[i][j] = q; </span></span>
<span class="line"><span>            } </span></span>
<span class="line"><span>        } </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    return m[1][n-1]; </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_7-回文划分" tabindex="-1">7. 回文划分 <a class="header-anchor" href="#_7-回文划分" aria-label="Permalink to &quot;7. 回文划分&quot;">​</a></h2><blockquote><p><strong>题目</strong>:给定字符串 s, 需要将它分割成一些子串, 使得每个子串都是回文串. 最少需要分割几次?</p></blockquote><blockquote><p><strong>Example</strong>:</p></blockquote><pre><code>样例 1:
输入: &quot;a&quot;
输出: 0
解释: &quot;a&quot; 本身就是回文串, 无需分割

样例 2:
输入: &quot;aab&quot;
输出: 1
解释: 将 &quot;aab&quot; 分割一次, 得到 &quot;aa&quot; 和 &quot;b&quot;, 它们都是回文串.
</code></pre><blockquote><p><strong>解析</strong>:</p></blockquote><p>可以看作序列型动态规划问题, 设定 dp[i] 表示原串的前 i 个字符最少分割多少次可以使得到的都是回文子串.</p><p>如果 s 前 i 个字符组成的子串本身就是回文串, 则 dp[i] = 0, 否则:</p><pre><code>dp[i] = min{dp[j] + 1} (j &lt; i 并且 s[j + 1], s[j + 2], ... , s[i] 是回文串)
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int minCut(string s) {</span></span>
<span class="line"><span>    int n = s.length();</span></span>
<span class="line"><span>    int f[n + 1];</span></span>
<span class="line"><span>    vector&lt;vector&lt;bool&gt;&gt; isPalin(n, vector&lt;bool&gt;(n, false));</span></span>
<span class="line"><span>    for (int i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>        isPalin[i][i] = true;</span></span>
<span class="line"><span>        if (i + 1 &lt; n) {</span></span>
<span class="line"><span>            isPalin[i][i + 1] = (s[i] == s[i + 1]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (int i = n - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span>        for (int j = i + 2; j &lt; n; j++) {</span></span>
<span class="line"><span>            isPalin[i][j] = isPalin[i + 1][j - 1] &amp;&amp; (s[i] == s[j]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    f[0] = -1;</span></span>
<span class="line"><span>    for (int i = 1; i &lt;= n; i++) {</span></span>
<span class="line"><span>        f[i] = i - 1;</span></span>
<span class="line"><span>        for (int j = 0; j &lt; i; j++) {</span></span>
<span class="line"><span>            if (isPalin[j][i - 1]) {</span></span>
<span class="line"><span>                f[i] = min(f[i], f[j] + 1);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return f[n];</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_8-丑数" tabindex="-1">8. 丑数 <a class="header-anchor" href="#_8-丑数" aria-label="Permalink to &quot;8. 丑数&quot;">​</a></h2><blockquote><p><strong>题目</strong>:设计一个算法，找出只含素因子2，3，5 的第 n 小的数。</p></blockquote><blockquote><p><strong>解析</strong>: 使用2,3,5进行组合,得到第n个丑数.</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int dp[100000];    </span></span>
<span class="line"><span>int MIN(int x,int y,int z){</span></span>
<span class="line"><span>    return min(min(x,y),z);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int nthUglyNumber(int n) {</span></span>
<span class="line"><span>    dp[1] = 1;</span></span>
<span class="line"><span>    int i2,i3,i5; // 分别表示2,3,5的对应的数，目标是使用前面的数字构造后面的数字，</span></span>
<span class="line"><span>    // 不能使用2,3,5的倍数进行构造，否则会出现错误   </span></span>
<span class="line"><span>    i2 = i3 = i5 = 1;</span></span>
<span class="line"><span>    int i=2;</span></span>
<span class="line"><span>    while(i&lt;=n){</span></span>
<span class="line"><span>        int m2 = dp[i2] * 2;</span></span>
<span class="line"><span>        int m3 = dp[i3] * 3;</span></span>
<span class="line"><span>        int m5 = dp[i5] * 5;</span></span>
<span class="line"><span>        int minv = MIN(m2,m3,m5);</span></span>
<span class="line"><span>        dp[i++] = minv;        </span></span>
<span class="line"><span>        if(minv == m2) i2++;</span></span>
<span class="line"><span>        if(minv == m3) i3++;</span></span>
<span class="line"><span>        if(minv == m5) i5++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return dp[n];</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_9-最小花费路径" tabindex="-1">9. 最小花费路径 <a class="header-anchor" href="#_9-最小花费路径" aria-label="Permalink to &quot;9. 最小花费路径&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个矩阵,求出从左上角到右下角的最小路径的和.</p></blockquote><blockquote><p><strong>解析</strong>:</p></blockquote><pre><code>dp[i][j]: (0,0)到(i,j)的最小路径的和.
dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+a[i][j]
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int minCost(vector&lt;vector&lt;int&gt;&gt; cost){ </span></span>
<span class="line"><span>     int i, j, m, n; </span></span>
<span class="line"><span>     int m = cost.size();</span></span>
<span class="line"><span>     int n = cost[0].size();</span></span>
<span class="line"><span>     int dp[m+1][n+1];   </span></span>
<span class="line"><span>     dp[0][0] = cost[0][0];   </span></span>
<span class="line"><span>     for (i = 1; i &lt;= m; i++) { </span></span>
<span class="line"><span>        dp[i][0] = dp[i-1][0] + cost[i][0];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (j = 1; j &lt;= n; j++) {</span></span>
<span class="line"><span>        dp[0][j] = dp[0][j-1] + cost[0][j]; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (i = 1; i &lt;= m; i++) {</span></span>
<span class="line"><span>        for (j = 1; j &lt;= n; j++) { </span></span>
<span class="line"><span>            dp[i][j] = min(dp[i-1][j-1],  </span></span>
<span class="line"><span>                        dp[i-1][j],  </span></span>
<span class="line"><span>                        dp[i][j-1]) + cost[i][j]; </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return dp[m][n]; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>int min(int x, int y, int z) { </span></span>
<span class="line"><span>   if (x &lt; y) </span></span>
<span class="line"><span>      return (x &lt; z)? x : z; </span></span>
<span class="line"><span>   else</span></span>
<span class="line"><span>      return (y &lt; z)? y : z; </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_10-最大矩阵和" tabindex="-1">10. 最大矩阵和 <a class="header-anchor" href="#_10-最大矩阵和" aria-label="Permalink to &quot;10. 最大矩阵和&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给定一个由整数组成二维矩阵（r*c），现在需要找出它的一个子矩阵，使得这个子矩阵内的所有元素之和最大，并把这个子矩阵称为最大子矩阵。</p></blockquote><blockquote><p>Example:</p></blockquote><pre><code>例子：
0 -2 -7 0 
9 2 -6 2 
-4 1 -4 1 
-1 8 0 -2 
其最大子矩阵为：
9 2 
-4 1 
-1 8 
其元素总和为15。
</code></pre><blockquote><p><strong>解析</strong>: 将矩阵进行求和压缩到一维形式,之后使用一维数组的最大子段和进行计算.</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int a[101][101],s[101],ma[101];</span></span>
<span class="line"><span>int maxSum(int s[],int ma[],int m){//最大子序列的和</span></span>
<span class="line"><span>    ma[0]=s[0];</span></span>
<span class="line"><span>    for(int i=1;i&lt;m;i++){</span></span>
<span class="line"><span>       if(ma[i-1]&gt;=0) ma[i]=ma[i-1]+s[i];</span></span>
<span class="line"><span>       else ma[i]=s[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int sum=ma[0];</span></span>
<span class="line"><span>    for(int i=1;i&lt;m;i++){</span></span>
<span class="line"><span>        if(sum&lt;ma[i]) sum=ma[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sum;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int maxMatrixSum(int n, int m) {</span></span>
<span class="line"><span>    int res=INT_MIN;//注意序列的最小值</span></span>
<span class="line"><span>    for(int i=0;i&lt;n;i++){</span></span>
<span class="line"><span>        memset(s,0,sizeof(s));</span></span>
<span class="line"><span>        for(int j=i;j&lt;n;j++){</span></span>
<span class="line"><span>            int sum=0;</span></span>
<span class="line"><span>            for(int k=0;k&lt;m;k++){</span></span>
<span class="line"><span>                s[k]+=a[j][k];//转化为一维数组</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            sum=maxSum(s,ma,m);</span></span>
<span class="line"><span>            if(sum&gt;res) res=sum;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="_11-最大正方形面积" tabindex="-1">11. 最大正方形面积 <a class="header-anchor" href="#_11-最大正方形面积" aria-label="Permalink to &quot;11. 最大正方形面积&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给你一个二维矩阵，权值为False和True，找到一个最大的正方形，使得里面的值全部为True，输出它的面积.</p></blockquote><blockquote><p>Example:</p></blockquote><pre><code>输入:
[
[1, 1, 0, 0, 1],
[0, 1, 0, 0, 1],
[0, 0, 1, 1, 1],
[0, 0, 1, 1, 1],
[0, 0, 0, 0, 1]
]
输出: 4
</code></pre><blockquote><p><strong>解析</strong>:</p></blockquote><pre><code>构造辅助数组,dp[m][n], 

用m[i][j]表示右下角的1.
if m[i][j]=1 then
    dp[i][j]=min(dp[i][j-],dp[i-1][j], dp[i-1][j-1]) + 1
else:
    dp[i][j] = 0
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int MaxSubSquare(vector&lt;vector&lt;bool&gt;&gt; &amp;matrix) {</span></span>
<span class="line"><span>    int R=matrix.size(), C=matrix[0].size();</span></span>
<span class="line"><span>    vector&lt;vector&lt;int&gt;&gt; dp(matrix.size(), vector&lt;int&gt;(matrix[0].size(), 0));</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    int i, j;           </span></span>
<span class="line"><span>    for(i = 0; i &lt; R; i++) { </span></span>
<span class="line"><span>        dp[i][0] = matrix[i][0];  </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for(j = 0; j &lt; C; j++) { </span></span>
<span class="line"><span>        dp[0][j] = matrix[0][j];  </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int res = 0;  </span></span>
<span class="line"><span>    for(i = 1; i &lt; R; i++) {  </span></span>
<span class="line"><span>        for(j = 1; j &lt; C; j++) {  </span></span>
<span class="line"><span>            if(matrix[i][j] == 1)  </span></span>
<span class="line"><span>                dp[i][j] = min(dp[i][j-1],min(dp[i-1][j],dp[i-1][j-1])) + 1;  </span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>                dp[i][j] = 0;  </span></span>
<span class="line"><span>            res = max(res, dp[i][j]);</span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    return res;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_12-二进制串个数" tabindex="-1">12. 二进制串个数 <a class="header-anchor" href="#_12-二进制串个数" aria-label="Permalink to &quot;12. 二进制串个数&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 求长度为n的01组成的二进制串中,没有连续1的串的个数.</p></blockquote><blockquote><p><strong>解析</strong>: 分别用a[i]和b[i],表示长度为i,分别0结尾和1结尾的串的个数. 那么</p></blockquote><pre><code>a[i+1] = a[i] + b[i] // 在后面加0
b[i+1] = a[i] // 只能在结尾是0的后面加1
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int countStrings(int n) { </span></span>
<span class="line"><span>    int a[n], b[n]; </span></span>
<span class="line"><span>    a[0] = b[0] = 1; </span></span>
<span class="line"><span>    for (int i = 1; i &lt; n; i++) { </span></span>
<span class="line"><span>        a[i] = a[i-1] + b[i-1]; </span></span>
<span class="line"><span>        b[i] = a[i-1]; </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    return a[n-1] + b[n-1]; </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_13-交叉字符串" tabindex="-1">13. 交叉字符串 <a class="header-anchor" href="#_13-交叉字符串" aria-label="Permalink to &quot;13. 交叉字符串&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 给出三个字符串:s1、s2、s3，判断s3是否由s1和s2交叉构成。<br><strong>解析</strong>:</p></blockquote><pre><code>dp[i][j]: s1[1,i] 和 s2[1,j] 是否能够组成s3[i+j]

dp[i][j] = dp[i][j] || dp[i-1][j]  if s1[i] == s3[i+j-1]

dp[i][j] = dp[i][j] || dp[i][j-1]  if s2[j] == s3[i+j-1]
</code></pre><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bool isInterleave(string &amp;s1, string &amp;s2, string &amp;s3) {</span></span>
<span class="line"><span>    if(s1.size() + s2.size() != s3.size()) return false;</span></span>
<span class="line"><span>    int dp[s1.size() + 1][s2.size() + 1] = {0};</span></span>
<span class="line"><span>    dp[0][0] = 1;</span></span>
<span class="line"><span>    int ok = 1;</span></span>
<span class="line"><span>    // 初始化</span></span>
<span class="line"><span>    for(int i = 1; i &lt;= s1.length(); i++) {</span></span>
<span class="line"><span>        dp[i][0] = dp[i - 1][0] &amp;&amp; s1[i - 1] == s3[i - 1];</span></span>
<span class="line"><span>    }    </span></span>
<span class="line"><span>    for(int i = 1; i &lt;= s2.length(); i++) {</span></span>
<span class="line"><span>        dp[0][i] = dp[0][i - 1] &amp;&amp; s2[i - 1] == s3[i - 1];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // dp转化</span></span>
<span class="line"><span>    for(int i = 1; i &lt;= s1.size(); i++) {</span></span>
<span class="line"><span>        for(int j = 1; j &lt;= s2.size() ;j++) {</span></span>
<span class="line"><span>            if(s3[i+j - 1] == s1[i - 1]) {</span></span>
<span class="line"><span>                dp[i][j] = dp[i][j] || dp[i-1][j];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if(s3[i+j - 1] == s2[j - 1]) {</span></span>
<span class="line"><span>                dp[i][j] = dp[i][j] || dp[i][j - 1];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return dp[s1.size()][s2.size()];</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_14-乘积最大子序列" tabindex="-1">14. 乘积最大子序列 <a class="header-anchor" href="#_14-乘积最大子序列" aria-label="Permalink to &quot;14. 乘积最大子序列&quot;">​</a></h2><blockquote><p><strong>题目</strong>: 找出一个序列中乘积最大的连续子序列（至少包含一个数）。<br><strong>解析</strong>: 这里可以借鉴和最大的子序列,但是需要每次保存两个值,一个最大值和最小值,(因为存在负负得正).</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int maxProduct(vector&lt;int&gt; &amp;nums) {</span></span>
<span class="line"><span>    int premin, premax, ans;</span></span>
<span class="line"><span>    premin = premax = ans = nums[0];</span></span>
<span class="line"><span>    for(int i=1;i&lt;nums.size();i++){</span></span>
<span class="line"><span>        // 每次更新最大最小值,保证负负得正</span></span>
<span class="line"><span>        // 这里使用滚动变量表示dp</span></span>
<span class="line"><span>        int curmax = max(max(premax*nums[i],premin*nums[i]),nums[i]);</span></span>
<span class="line"><span>        int curmin = min(min(premax*nums[i],premin*nums[i]),nums[i]);</span></span>
<span class="line"><span>        premax = curmax;</span></span>
<span class="line"><span>        premin = curmin;</span></span>
<span class="line"><span>        ans = max(curmax, ans);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ans;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_15-k个数之和" tabindex="-1">15. k个数之和 <a class="header-anchor" href="#_15-k个数之和" aria-label="Permalink to &quot;15. k个数之和&quot;">​</a></h2>`,82),s("blockquote",null,[s("p",{"i:":"","[0,n)":""},[s("strong",null,"题目"),p(": 给定 n 个不同的正整数，整数 k（k <= n）以及一个目标数字 target。在这 n 个数里面找出 k 个数，使得这 k 个数的和等于目标数字，求问有多少种方案？"),s("br"),s("strong",null,"解析"),p(": dp[j][s]比碍事j个数组合s的个数, dp[j][s] += dp[j-1][s-A[i]]")])],-1),a(`<div class="language-int vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">int</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ans </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target;s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i];s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[j][s] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i]];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ans </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[k][target];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ans;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h1><ol><li><a href="https://www.lintcode.com/problem/?tag=dynamic-programming" target="_blank" rel="noreferrer">https://www.lintcode.com/problem/?tag=dynamic-programming</a></li><li><a href="https://www.geeksforgeeks.org/dynamic-programming/" target="_blank" rel="noreferrer">https://www.geeksforgeeks.org/dynamic-programming/</a></li></ol>`,3)])])}const k=i(r,[["render",t]]);export{h as __pageData,k as default};
