import{_ as n,c as a,o as p,ag as i}from"./chunks/framework.DT5BmYxR.js";const d=JSON.parse('{"title":"排序（sort）","description":"","frontmatter":{},"headers":[],"relativePath":"01-algorithm-basics/algorithm-concepts/sorting-algorithms.md","filePath":"01-algorithm-basics/algorithm-concepts/sorting-algorithms.md"}'),l={name:"01-algorithm-basics/algorithm-concepts/sorting-algorithms.md"};function e(t,s,r,c,h,b){return p(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="排序-sort" tabindex="-1">排序（sort） <a class="header-anchor" href="#排序-sort" aria-label="Permalink to &quot;排序（sort）&quot;">​</a></h1><blockquote><p>排序的目的是让一组无序的对象变成有序（升序、降序），排序在面试中很容易被问道。排序之所以这么重要是因为排序是解决大部分问题的第一步，一些看似复杂的问题当数据有序的时候就变的简单，例如查找问题，如果数组有序可以使用搞笑的折半查找。</p></blockquote><p>需要提出，这篇文章并不介绍排序，什么插入、冒泡、希尔等算法，我们都不会介绍，我们的目的是给出最常见的关于排序的面试题目，俗称押题，当然希望每个人都能研究每一个题目，在面试过程中遇到排序问题，都可以解决。</p><h2 id="_1-快速排序" tabindex="-1">1. 快速排序 <a class="header-anchor" href="#_1-快速排序" aria-label="Permalink to &quot;1. 快速排序&quot;">​</a></h2><blockquote><p>题目: 这是面试中最常见的问题，手写快排，面试官主要是考查候选人的算法基本工。 公司: 爱奇艺，某金融公司</p></blockquote><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Poivt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmp) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> randint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start, end);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    swap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list[t],list[start]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p,i,j;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> end;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list[i],list[p])) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list[j],list[p])) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">j;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            swap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list[i],list[j]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            ++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">j;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    swap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list[j],list[p]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// qsort</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QuickSort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmp) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Poivt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list,start,end,cmp);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    QuickSort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list,start,p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,cmp);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    QuickSort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list,p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,end,cmp);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="_2-堆排序" tabindex="-1">2. 堆排序 <a class="header-anchor" href="#_2-堆排序" aria-label="Permalink to &quot;2. 堆排序&quot;">​</a></h2><blockquote><p>题目: 手写堆排序 公司: 阿里</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 第一步建立最大堆， 下标从1开始 A[1..n]</span></span>
<span class="line"><span>void BuildMaxHeap(int *A, int n, int &amp;heapsize){</span></span>
<span class="line"><span>    heapsize=n; //全局变量，表示最大堆的大小</span></span>
<span class="line"><span>    for(int i = n/2; i &gt; 1; i --){        </span></span>
<span class="line"><span>        MaxheapFY(A, i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// heapsort</span></span>
<span class="line"><span>void HeapSort(int *A,int n){</span></span>
<span class="line"><span>    BuildMaxHeap(A,n);//建立最大堆</span></span>
<span class="line"><span>    for(int i = n;i &gt;= 1;i --){</span></span>
<span class="line"><span>        swap(A[0],A[i]);        </span></span>
<span class="line"><span>        heapsize --;</span></span>
<span class="line"><span>        MaxheapFY(A, 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 维护位置i最大堆的性质</span></span>
<span class="line"><span>void MaxheapFY(int *A, int i){</span></span>
<span class="line"><span>    int l,r,now;</span></span>
<span class="line"><span>    l = i * 2;</span></span>
<span class="line"><span>    r = i * 2 + 1;</span></span>
<span class="line"><span>    now = i;</span></span>
<span class="line"><span>    if(l &lt;= heapsize &amp;&amp; A[l] &gt; A[now]) {</span></span>
<span class="line"><span>        now = l;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(r &lt;= heapsize &amp;&amp; A[r] &gt; A[now]){</span></span>
<span class="line"><span>        now = r;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(now != i){</span></span>
<span class="line"><span>        swap(A[i], A[now]);</span></span>
<span class="line"><span>        MaxheapFY(A, now);    </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="_3-归并排序" tabindex="-1">3. 归并排序 <a class="header-anchor" href="#_3-归并排序" aria-label="Permalink to &quot;3. 归并排序&quot;">​</a></h2><blockquote><p>题目: 手写归并排序</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>template&lt;class T&gt;</span></span>
<span class="line"><span>void Merge(T list[], int start, int mid, int end, bool (*cmp)(T, T)=cmp) {</span></span>
<span class="line"><span>    T *temp = new T[end-start+1];</span></span>
<span class="line"><span>    int i=start,j=mid+1,k=0;</span></span>
<span class="line"><span>    while(i&lt;=mid &amp;&amp; j&lt;=end) {</span></span>
<span class="line"><span>        if(cmp(list[i],list[j])) temp[k++] = list[i++];</span></span>
<span class="line"><span>        else temp[k++] = list[j++];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while(i&lt;=mid) {</span></span>
<span class="line"><span>        temp[k++] = list[i++];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while(j&lt;=end) {</span></span>
<span class="line"><span>        temp[k++] = list[j++];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // copy </span></span>
<span class="line"><span>    for(i=start;i&lt;=end;i++){</span></span>
<span class="line"><span>        list[i] = temp[i-start];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    delete [] temp;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// MergeSortUtil</span></span>
<span class="line"><span>template&lt;class T&gt;</span></span>
<span class="line"><span>void MergeSortUtil(T list[], int start,int end, bool (*cmp)(T, T)=cmp) {</span></span>
<span class="line"><span>    if(start&gt;=end) return;</span></span>
<span class="line"><span>    int mid = (start+end) / 2;</span></span>
<span class="line"><span>    MergeSortUtil(list,start,mid,cmp);</span></span>
<span class="line"><span>    MergeSortUtil(list,mid+1,end,cmp);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Merge(list,start,mid,end,cmp);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="_4-实现多路归并排序" tabindex="-1">4. 实现多路归并排序 <a class="header-anchor" href="#_4-实现多路归并排序" aria-label="Permalink to &quot;4. 实现多路归并排序&quot;">​</a></h2><blockquote><p>题目: 实现常用的多路归并排序(使用最大堆，或者优先队列) 公司: 百度，360</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// vec中每一个vector都是有序的</span></span>
<span class="line"><span>vector&lt;int&gt; MultMerge(vector&lt;vector&lt;int&gt; &gt; vec, vector&lt;int&gt; &amp;result) {</span></span>
<span class="line"><span>	int n = vec.size();</span></span>
<span class="line"><span>	priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt; &gt; q;</span></span>
<span class="line"><span>	vector&lt;vector&lt;int&gt;::iterator&gt; vec_it;</span></span>
<span class="line"><span>	for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>		vector&lt;int&gt;::iterator it = vec[i].begin();</span></span>
<span class="line"><span>		vec_it.push_back(it);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>		if(q.size() &lt; k &amp;&amp; vec_it[i] != vec[i].end()) {</span></span>
<span class="line"><span>			q.push(*(vec_it[i]));</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	while(q.size()) {</span></span>
<span class="line"><span>		int cand = q.top();</span></span>
<span class="line"><span>		q.pop();</span></span>
<span class="line"><span>		result.push_back(cand);</span></span>
<span class="line"><span>		int index = 0;</span></span>
<span class="line"><span>		for(int i = 0; i &lt; n; i ++) {</span></span>
<span class="line"><span>			if(vec_it[i] != vec[i].end() &amp;&amp; cand == *(vec_it[i])) {</span></span>
<span class="line"><span>				index = i;</span></span>
<span class="line"><span>				vec_it[index] ++;</span></span>
<span class="line"><span>				break;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if(vec_it[index] != vec[index].end()) {</span></span>
<span class="line"><span>			q.push(*(vec_it[index]));</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return result;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_5-单链表插入排序" tabindex="-1">5. 单链表插入排序 <a class="header-anchor" href="#_5-单链表插入排序" aria-label="Permalink to &quot;5. 单链表插入排序&quot;">​</a></h2><blockquote><p>题目: 单链表的插入排序（升序）。 公司: 百度</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>struct Node {</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    struct Node * next;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void InsertLinked(Node** sorted, Node* tmp) {</span></span>
<span class="line"><span>    Node* cur;</span></span>
<span class="line"><span>    // 当前插入节点是最小的值</span></span>
<span class="line"><span>    if(*sorted == NULL || tmp-&gt;data &lt;= (*sorted)-&gt;data) {</span></span>
<span class="line"><span>        tmp-&gt;next = *sorted;</span></span>
<span class="line"><span>        *sorted = tmp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else { // 找到插入的位置</span></span>
<span class="line"><span>        cur = *sorted;</span></span>
<span class="line"><span>        while(cur-&gt;next != NULL &amp;&amp; tmp-&gt;data &gt; cur-&gt;next-&gt;data) {</span></span>
<span class="line"><span>            cur = cur-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        tmp-&gt;next = cur-&gt;next;</span></span>
<span class="line"><span>        cur-&gt;next = tmp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void InsertSort(Node** head) {</span></span>
<span class="line"><span>    // 有序链表</span></span>
<span class="line"><span>    Node *sorted = NULL;</span></span>
<span class="line"><span>    Node * cur = *head;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while(cur != NULL) {</span></span>
<span class="line"><span>        Node *next = cur-&gt;next;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 将cur插入到sorted中，这是一个有序的链表</span></span>
<span class="line"><span>        InsertLinked(&amp;sorted, cur);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        cur = next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    *head = sorted;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="_6-单链表归并排序" tabindex="-1">6. 单链表归并排序 <a class="header-anchor" href="#_6-单链表归并排序" aria-label="Permalink to &quot;6. 单链表归并排序&quot;">​</a></h2><blockquote><p>题目: 单链表的归并排序。 公司: 百度</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>void MergeSort(Node **head_ref) {</span></span>
<span class="line"><span>    Node *head  = *head_ref;</span></span>
<span class="line"><span>    Node *left;</span></span>
<span class="line"><span>    Node *right;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 判断是否是null</span></span>
<span class="line"><span>    if(head == NULL || head-&gt;next == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 链表分成两个部分，left 和 right</span></span>
<span class="line"><span>    split(head, &amp;left, &amp;right);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    MergeSort(left);</span></span>
<span class="line"><span>    MergeSort(right);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    *head_ref = Merge(left, right);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 左右各一半，</span></span>
<span class="line"><span>void split(Node *head, Node **left, Node **right) {</span></span>
<span class="line"><span>    //1. 先计算长度n，分别选择前一半和后一半。</span></span>
<span class="line"><span>    //2. 使用快慢指针，各取一半</span></span>
<span class="line"><span>    int n = 0;</span></span>
<span class="line"><span>    Node *cur = head;</span></span>
<span class="line"><span>    while(cur != NULL) {</span></span>
<span class="line"><span>        n ++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    *left = head;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int k = n / 2;</span></span>
<span class="line"><span>    cur = head;</span></span>
<span class="line"><span>    Node *p = NULL;</span></span>
<span class="line"><span>    while(k--) {</span></span>
<span class="line"><span>        p = cur;</span></span>
<span class="line"><span>        cur = cur-&gt;next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    p-&gt;next = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    *right = cur;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node* Merge(Node *left, Node *right) {</span></span>
<span class="line"><span>    // merge right to left</span></span>
<span class="line"><span>    Node *head = NULL;</span></span>
<span class="line"><span>    head-&gt;data = -1;</span></span>
<span class="line"><span>    Node *p = head;    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while(left != NULL &amp;&amp; right != NULL) {</span></span>
<span class="line"><span>        if(left-&gt;data &lt;= right-&gt;data) {</span></span>
<span class="line"><span>            p-&gt;next = left;</span></span>
<span class="line"><span>            left = left-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            p-&gt;next = right;</span></span>
<span class="line"><span>            right = right-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        p = p-&gt;next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(left != NULL) {</span></span>
<span class="line"><span>        p-&gt;next = left;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if(right != NULL) {</span></span>
<span class="line"><span>        p-&gt;next = right;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return head-&gt;next;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,21)])])}const u=n(l,[["render",e]]);export{d as __pageData,u as default};
