import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.DT5BmYxR.js";const h=JSON.parse('{"title":"linklist","description":"","frontmatter":{},"headers":[],"relativePath":"01-algorithm-basics/data-structures/linked-lists.md","filePath":"01-algorithm-basics/data-structures/linked-lists.md"}'),l={name:"01-algorithm-basics/data-structures/linked-lists.md"};function i(r,s,c,t,b,u){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="linklist" tabindex="-1">linklist <a class="header-anchor" href="#linklist" aria-label="Permalink to &quot;linklist&quot;">​</a></h1><p>链表也是面试中常问道的题目，链表定义简单很容易考察面试者的水平，比如在数组中很简单的题目转换成链表就有很大的变动。例如链表的插入和归并排序、查找倒数第k个节点等.</p><h2 id="_1-回文链表-234" tabindex="-1">1.回文链表(234) <a class="header-anchor" href="#_1-回文链表-234" aria-label="Permalink to &quot;1.回文链表(234)&quot;">​</a></h2><p>请判断一个链表是否为回文链表</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isPalindrome</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, head):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        reverse, fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, head</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fast.next:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fast.next.next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            head.next, reverse, head </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reverse, head, head.next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tail </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        is_palindrome </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reverse:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            is_palindrome </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is_palindrome </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reverse.val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tail.val</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            reverse.next, head, reverse </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head, reverse, reverse.next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tail </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tail.next</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is_palindrome</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_2-求单链表的中间节点" tabindex="-1">2.求单链表的中间节点 <a class="header-anchor" href="#_2-求单链表的中间节点" aria-label="Permalink to &quot;2.求单链表的中间节点&quot;">​</a></h2><p>快、慢指针实现</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def find_middle_node(head):</span></span>
<span class="line"><span>    slow, fast = head, head</span></span>
<span class="line"><span>    fast = fast.next if fast else None</span></span>
<span class="line"><span>    while fast and fast.next:</span></span>
<span class="line"><span>        slow = slow.next</span></span>
<span class="line"><span>        fast = fast.next.next</span></span>
<span class="line"><span>    return slow</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-删除无序链表中的重复项" tabindex="-1">3.删除无序链表中的重复项 <a class="header-anchor" href="#_3-删除无序链表中的重复项" aria-label="Permalink to &quot;3.删除无序链表中的重复项&quot;">​</a></h2><p>给定一个无序的链表，去掉其重复项，并保留原顺序，例如链表1-&gt;3-&gt;1-&gt;5-&gt;5-&gt;7，去掉重复项后为1-&gt;3-&gt;5-&gt;7</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class ListNode:</span></span>
<span class="line"><span>    def __init__(self, x):</span></span>
<span class="line"><span>        self.val = x</span></span>
<span class="line"><span>        self.next = None</span></span>
<span class="line"><span>class Solution:</span></span>
<span class="line"><span>    def deleteDuplicates(self, head: ListNode) -&gt; ListNode:</span></span>
<span class="line"><span>        if head is None:</span></span>
<span class="line"><span>            return head</span></span>
<span class="line"><span>        outer = head</span></span>
<span class="line"><span>        while outer:</span></span>
<span class="line"><span>            inpre = outer</span></span>
<span class="line"><span>            inner = inpre.next</span></span>
<span class="line"><span>            while inner:</span></span>
<span class="line"><span>                if inner.val == outer.val:</span></span>
<span class="line"><span>                    inner = inner.next</span></span>
<span class="line"><span>                    inpre.next = inner</span></span>
<span class="line"><span>                else:</span></span>
<span class="line"><span>                    inpre = inner</span></span>
<span class="line"><span>                    inner = inner.next</span></span>
<span class="line"><span>            outer = outer.next</span></span>
<span class="line"><span>        return head</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_4-给定一个排序链表-删除所有含有重复数字的节点" tabindex="-1">4.给定一个排序链表，删除所有含有重复数字的节点 <a class="header-anchor" href="#_4-给定一个排序链表-删除所有含有重复数字的节点" aria-label="Permalink to &quot;4.给定一个排序链表，删除所有含有重复数字的节点&quot;">​</a></h2><p>输入: 1-&gt;2-&gt;3-&gt;3-&gt;4-&gt;4-&gt;5 输出: 1-&gt;2-&gt;5</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class ListNode:</span></span>
<span class="line"><span>    def __init__(self, x):</span></span>
<span class="line"><span>        self.val = x</span></span>
<span class="line"><span>        self.next = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Solution:</span></span>
<span class="line"><span>    def deleteDuplicates(self, head):        </span></span>
<span class="line"><span>        if head is None:</span></span>
<span class="line"><span>            return head</span></span>
<span class="line"><span>        new = ListNode(None)</span></span>
<span class="line"><span>        new.next = head</span></span>
<span class="line"><span>        head = new</span></span>
<span class="line"><span>        outpre = head</span></span>
<span class="line"><span>        outer = outpre.next</span></span>
<span class="line"><span>        flag = False</span></span>
<span class="line"><span>        while outer:</span></span>
<span class="line"><span>            inpre = outer</span></span>
<span class="line"><span>            inner = inpre.next</span></span>
<span class="line"><span>            while inner:</span></span>
<span class="line"><span>                if inner.val == outer.val:</span></span>
<span class="line"><span>                    flag = True</span></span>
<span class="line"><span>                    inner = inner.next</span></span>
<span class="line"><span>                    inpre.next = inner</span></span>
<span class="line"><span>                else:</span></span>
<span class="line"><span>                    inpre = inner</span></span>
<span class="line"><span>                    inner = inner.next</span></span>
<span class="line"><span>            if flag:</span></span>
<span class="line"><span>                outer = outer.next                </span></span>
<span class="line"><span>                outpre.next = outer</span></span>
<span class="line"><span>                flag = False</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                outpre = outer</span></span>
<span class="line"><span>                outer = outer.next</span></span>
<span class="line"><span>        return head.next      </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        def deleteDuplicates_2(self, head):  </span></span>
<span class="line"><span>            if None == head or None == head.next:  </span></span>
<span class="line"><span>                return head  </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>            new_head = ListNode(-1)  </span></span>
<span class="line"><span>            new_head.next = head  </span></span>
<span class="line"><span>            parent = new_head  </span></span>
<span class="line"><span>            cur = head  </span></span>
<span class="line"><span>            while None != cur and None != cur.next:   </span></span>
<span class="line"><span>                if cur.val == cur.next.val:  </span></span>
<span class="line"><span>                    val = cur.val  </span></span>
<span class="line"><span>                    while None != cur and val == cur.val:</span></span>
<span class="line"><span>                        cur = cur.next  </span></span>
<span class="line"><span>                    parent.next = cur  </span></span>
<span class="line"><span>                else:  </span></span>
<span class="line"><span>                    cur = cur.next  </span></span>
<span class="line"><span>                    parent = parent.next  </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>            return new_head.next</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h2 id="_5-环形链表-41" tabindex="-1">5.环形链表?41? <a class="header-anchor" href="#_5-环形链表-41" aria-label="Permalink to &quot;5.环形链表?41?&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>给定一个链表，判断链表中是否有? 并找到第一个相交的?</span></span>
<span class="line"><span>思路：设置两个指针slow和fast，一个步长为1，一个步长为2进行遍历。如果有环，则slow和fast总会在某一点相遇。如果没有环，则fast会先为空，或者fast.next为空</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Solution(object):</span></span>
<span class="line"><span>    def hasCycle(self, head, firstMeetNode):</span></span>
<span class="line"><span>        fast = slow = head</span></span>
<span class="line"><span>        while fast and fast.next:</span></span>
<span class="line"><span>            fast = fast.next.next</span></span>
<span class="line"><span>            slow = slow.next</span></span>
<span class="line"><span>            if slow == fast: # 有环</span></span>
<span class="line"><span>                fast = head</span></span>
<span class="line"><span>                while fast != slow:</span></span>
<span class="line"><span>                    fast = fast.next</span></span>
<span class="line"><span>                    slow = slow.next</span></span>
<span class="line"><span>                firstMeetNode = fast</span></span>
<span class="line"><span>                return True</span></span>
<span class="line"><span>        return False</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_6-反转链表-06" tabindex="-1">6.反转链表?06? <a class="header-anchor" href="#_6-反转链表-06" aria-label="Permalink to &quot;6.反转链表?06?&quot;">​</a></h2><p>(循环算法，递归算法) 微软</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>输入: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL </span></span>
<span class="line"><span>输出: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class ListNode(object):</span></span>
<span class="line"><span>    def __init__(self, x):</span></span>
<span class="line"><span>        self.val = x</span></span>
<span class="line"><span>        self.next = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __repr__(self):</span></span>
<span class="line"><span>        if self:</span></span>
<span class="line"><span>            return &quot;{} -&gt; {}&quot;.format(self.val, repr(self.next))</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>class Solution(object):</span></span>
<span class="line"><span>    &#39;&#39;&#39;循环算法&#39;&#39;&#39;</span></span>
<span class="line"><span>    def reverseList(self, head):</span></span>
<span class="line"><span>        dummy = ListNode(float(&quot;-inf&quot;))</span></span>
<span class="line"><span>        while head:</span></span>
<span class="line"><span>            dummy.next, head.next, head = head, dummy.next, head.next</span></span>
<span class="line"><span>        return dummy.next        </span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Solution2(object):</span></span>
<span class="line"><span>    &#39;&#39;&#39;递归算法&#39;&#39;&#39;</span></span>
<span class="line"><span>    def reverseList(self, head):</span></span>
<span class="line"><span>        [begin, end] = self.reverseListRecu(head)</span></span>
<span class="line"><span>        return begin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def reverseListRecu(self, head):</span></span>
<span class="line"><span>        if not head:</span></span>
<span class="line"><span>            return [None, None]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [begin, end] = self.reverseListRecu(head.next)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if end:</span></span>
<span class="line"><span>            end.next = head</span></span>
<span class="line"><span>            head.next = None</span></span>
<span class="line"><span>            return [begin, head]</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            return [head, head]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="_7-在双向链表中删除指定元素-微软" tabindex="-1">7.在双向链表中删除指定元素（微软） <a class="header-anchor" href="#_7-在双向链表中删除指定元素-微软" aria-label="Permalink to &quot;7.在双向链表中删除指定元素（微软）&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Node(object):</span></span>
<span class="line"><span>    &#39;&#39;&#39;双向节点&#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self, item):</span></span>
<span class="line"><span>        self.item = item</span></span>
<span class="line"><span>        self.next = None</span></span>
<span class="line"><span>        self.prev = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DLinkedlist(object):</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self._head = None</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def remove(self, item):</span></span>
<span class="line"><span>        &quot;&quot;&quot;删除元素&quot;&quot;&quot;</span></span>
<span class="line"><span>        if self.is_empty():</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            cur = self._head</span></span>
<span class="line"><span>            if cur.item == item:</span></span>
<span class="line"><span># 如果首节点的元素即是要删除的元素</span></span>
<span class="line"><span>                if cur.next == None:</span></span>
<span class="line"><span># 如果链表只有这一个节?</span></span>
<span class="line"><span>                    self._head = None</span></span>
<span class="line"><span>                else:</span></span>
<span class="line"><span># 将第二个节点的prev设置为None</span></span>
<span class="line"><span>                    cur.next.prev = None</span></span>
<span class="line"><span># 将_head指向第二个节?</span></span>
<span class="line"><span>                    self._head = cur.next</span></span>
<span class="line"><span>                return</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            while cur != None:</span></span>
<span class="line"><span>                if cur.item == item:</span></span>
<span class="line"><span># 将cur的前一个节点的next指向cur的后一个节?</span></span>
<span class="line"><span>                    cur.prev.next = cur.next</span></span>
<span class="line"><span># 将cur的后一个节点的prev指向cur的前一个节?</span></span>
<span class="line"><span>                    cur.next.prev = cur.prev</span></span>
<span class="line"><span>                    break</span></span>
<span class="line"><span>                cur = cur.next</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="_8-两个链表合并为一个升序链表-微软" tabindex="-1">8.两个链表合并为一个升序链表（微软? <a class="header-anchor" href="#_8-两个链表合并为一个升序链表-微软" aria-label="Permalink to &quot;8.两个链表合并为一个升序链表（微软?&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Node(object):</span></span>
<span class="line"><span>    def __init__(self,item,next_=None):</span></span>
<span class="line"><span>        self.item = item</span></span>
<span class="line"><span>        self.next = next_</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>class Solution(object):</span></span>
<span class="line"><span>    def mergeTwoLists(self, l1,l2):     </span></span>
<span class="line"><span>        head = Node(0)</span></span>
<span class="line"><span>        cur = head</span></span>
<span class="line"><span>        while l1 != None and l2 != None:</span></span>
<span class="line"><span>            if l1.item &lt;= l2.item:</span></span>
<span class="line"><span>                cur.next = l1</span></span>
<span class="line"><span>                l1 =  l1.next</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                cur.next = l2</span></span>
<span class="line"><span>                l2 = l2.next</span></span>
<span class="line"><span>            cur = cur.next</span></span>
<span class="line"><span>        if l1 != None:</span></span>
<span class="line"><span>            cur.next = l1</span></span>
<span class="line"><span>        if l2 != None:</span></span>
<span class="line"><span>            cur.next = l2</span></span>
<span class="line"><span>        return head.next</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_9-倒数第k个节" tabindex="-1">9. 倒数第k个节? <a class="header-anchor" href="#_9-倒数第k个节" aria-label="Permalink to &quot;9. 倒数第k个节?&quot;">​</a></h2><blockquote><p>题目: 找到链表的倒数第k个节? 解析: 使用两个指针fast和slow,fast先走k?之后fast和slow一起走, 直到fast到达最后一个节?slow就是倒数第k个节?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Solution(object):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    题意：删除链表中倒数第k个结点，尽量只扫描一遍?</span></span>
<span class="line"><span>    使用两个指针扫描，当第一个指针扫描到第k个结点后?</span></span>
<span class="line"><span>    第二个指针从表头与第一个指针同时向后移动，</span></span>
<span class="line"><span>    当第一个指针指向空节点时，另一个指针就指向倒数第k个结点了       </span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def removeNthFromEnd(self, head, k):</span></span>
<span class="line"><span>        res = ListNode(0)</span></span>
<span class="line"><span>        res.next = head</span></span>
<span class="line"><span>        tmp = res</span></span>
<span class="line"><span>        for i in range(0, k):</span></span>
<span class="line"><span>            head = head.next</span></span>
<span class="line"><span>        while head != None:</span></span>
<span class="line"><span>            head = head.next</span></span>
<span class="line"><span>            tmp = tmp.next</span></span>
<span class="line"><span>        tmp.next = tmp.next.next</span></span>
<span class="line"><span>        return res.next</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_10-等概率返回链表中的一个元" tabindex="-1">10. 等概率返回链表中的一个元? <a class="header-anchor" href="#_10-等概率返回链表中的一个元" aria-label="Permalink to &quot;10. 等概率返回链表中的一个元?&quot;">​</a></h2><blockquote><p>题意: 给你一个单链表,每次等概率随机返回一个元? 分析: 这里先不做详细解?这是一个随机化算法的一?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Solution(object):</span></span>
<span class="line"><span>    def randNode(self, head):</span></span>
<span class="line"><span>        res = head</span></span>
<span class="line"><span>        cur = head.next</span></span>
<span class="line"><span>        i = 2</span></span>
<span class="line"><span>        while cur != None:</span></span>
<span class="line"><span>            x = random.ranint(0,int(2**31))</span></span>
<span class="line"><span>            j = x % i</span></span>
<span class="line"><span>            if j == 0:</span></span>
<span class="line"><span>                res = cur</span></span>
<span class="line"><span>            cur = cur.next</span></span>
<span class="line"><span>            i += 1</span></span>
<span class="line"><span>        return ans</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,31)])])}const m=n(l,[["render",i]]);export{h as __pageData,m as default};
