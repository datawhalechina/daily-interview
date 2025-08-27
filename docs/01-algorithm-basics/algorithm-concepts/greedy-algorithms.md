# 贪心算法
> 是每次只考虑当前最优，目标证明每次是考虑当前最优能够达到局部最优，这就是贪心的思想，一般情况下贪心和排序一起出现，都是先根据条件进行排序，之后基于贪心策略得到最优结果?
> 面试的时候面试官一般不会出贪心算法，如果可能贪心一般都可以使用动态规划解决，面试官很喜欢出动态规划的题目?

## 1. 最大连续子序列
> **题目**: 给定一个整数数组，找到一个具有最大和的子数组，返回其最大和?   
> **扩展1**: 给定一个整数数组，找出两个 不重?子数组使得它们的和最大?    
> **扩展2**: 给定一个整数数组，找出两个不重叠的子数组A和B，使两个子数组和的差的绝对值|SUM(A) - SUM(B)|最大?       
> **分析**: 使用这个s表示当前可能满足的最大和，如果s>0,我们认为s对接下来的加操作有帮助，基于s+=nums[i]，if s < 0, 认为s只会对后面造成负影响，两s=nums[i]?     
> **扩展问题**: 可以?数组从每个位置k分开，分别结算[1,i]和[i+1, n)的最值，记录的过程中可以使用数组保存下来的已经计算好的值?
```
int maxSubArray(vector<int> &nums) {
    int s = 0, ans = -1000000;
    for(int i = 0; i < nums.size(); i ++) {
        if(s > 0) s += nums[i];
        else s = nums[i];
        ans = max(s, ans);
    }
    return ans;
}
```
## 2. 删除数字
> **题目**: 给定一个以字符串表示的非负整数，从该数字中移除掉k个数位，让剩余数位组成的数字尽可能小，求可能的最小结果?  
> **分析**: 从左到右遍历字符串，找到第一个不满足递增的数字删除，一定会保证当前操作之后剩下的数字最小?
```
string removeKdigits(string &num, int k) {
    int i;
    while(k --) {
        for(i = 0; i < num.size() - 1 && num[i] <= num[i+1]; i ++);
        num.erase(num.begin() + i);
    }
    // remove 0
    auto it = num.begin();
    while(it != num.end() && *it == '0') {
        num.erase(it);
        it = num.begin();
    }
    if(num.size() == 0) num = "0";
    return num;
}

```
## 3. 无重叠区?
> **题目**: 给定一些区间，找到需要移除的最小区间数，以使其余的区间不重叠?     
> **分析**: 贪心一般伴随着排序一起出现，我们根据区间的结束使用升序排序，之后进行遍历，如果发现不满足条件，则移除这个不满足的区间?
```
classs Interval {
    int start, end;
    Interval(int start, int end) {
        this->start = start;
        this->end = end;
    }
}
bool cmp(Interval a, Interval b) {
    if(a.end < b.end) return 1;
    else return 0;
}     
int eraseOverlapIntervals(vector<Interval> &intervals) {
    sort(intervals.begin(), intervals.end(), cmp);    
    int cnt = 0;
    Interval tmp = intervals[0];
    for(int i = 1; i < intervals.size(); i ++) {
        if(tmp.end <= intervals[i].start) tmp = intervals[i];
        else {
            cnt ++;
        }
    }
    return cnt;
}
```
## 4. 合并数字
> **题目**: 给出n个数，现在要将这n个数合并成一个数，每次只能选择两个数a,b合并，每次合并需要消耗a+b的能量，输出将这n个数合并成一个数后消耗的最小能量?  
> **分析**: 参考哈夫曼树的构造，每一次合并两个最小的数，直到剩下一个数字，因为每次要选择两个最小的，需要用到最小堆来实现，可以使用C++SLT中的优先队列.
> 根据这个题目，请大家**自行补上哈夫曼树**?
```
int mergeNumber(vector<int> &numbers) {
    priority_queue<int, vector<int>, greater<int>> pq;
    for(int i = 0; i < numbers.size(); i ++) {
        pq.push(numbers[i]);
    }
    int cost = 0;
    while(pq.size() > 1) {
        int a = pq.top();
        pq.pop();
        int b = pq.top();
        pq.pop();
        cost += (a + b);
        pq.push(a + b);
    }
    return cost;
}

```
## 5. 最小支撑树
> 题目: 使用kruskal算法，构造最小支撑树?
> 分析: 详见百度百科或者wikipedia.       
> 代码: <a href="https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/">kruskal code</a>
```
struct Edge { 
    int src, dest, weight; 
}; 
struct Graph { 
    int V, E;   
    struct Edge* edge; 
}; 
struct Graph* createGraph(int V, int E) { 
    struct Graph* graph = new Graph; 
    graph->V = V; 
    graph->E = E;   
    graph->edge = new Edge[E]; 
    return graph; 
} 
struct subset { 
    int parent; 
    int rank; 
}; 
int find(struct subset subsets[], int i) { 
    if (subsets[i].parent != i) 
        subsets[i].parent = find(subsets, subsets[i].parent); 
    return subsets[i].parent; 
} 
void Union(struct subset subsets[], int x, int y) { 
    int xroot = find(subsets, x); 
    int yroot = find(subsets, y);   
    if (subsets[xroot].rank < subsets[yroot].rank) 
        subsets[xroot].parent = yroot; 
    else if (subsets[xroot].rank > subsets[yroot].rank) 
        subsets[yroot].parent = xroot;   
    else { 
        subsets[yroot].parent = xroot; 
        subsets[xroot].rank++; 
    } 
} 
int myComp(const void* a, const void* b) { 
    struct Edge* a1 = (struct Edge*)a; 
    struct Edge* b1 = (struct Edge*)b; 
    return a1->weight > b1->weight; 
} 
void KruskalMST(struct Graph* graph) { 
    int V = graph->V; 
    struct Edge result[V];  
    int e = 0; 
    int i = 0; 
    qsort(graph->edge, graph->E, sizeof(graph->edge[0]), myComp);   
    struct subset *subsets = 
        (struct subset*) malloc( V * sizeof(struct subset) ); 
    for (int v = 0; v < V; ++v) { 
        subsets[v].parent = v; 
        subsets[v].rank = 0; 
    }   
    while (e < V - 1) { 
        struct Edge next_edge = graph->edge[i++];   
        int x = find(subsets, next_edge.src); 
        int y = find(subsets, next_edge.dest);   
        if (x != y) { 
            result[e++] = next_edge; 
            Union(subsets, x, y); 
        } 
    }   
    return; 
} 
```
## 6. 补齐数组
> 题目: 给出一个正整数数组nums和一个整数n，向数组添加patch元素，使得范围[1, n]包含的任何数字都可以由数组中某些元素的总和形成。返回所需的最少补齐数?       
> 分析?
> 1. 升序排序?
> 2. 使用r表示目前可以表示的右边界，如果当前?> r, 超出范围，又因为 [1, n] 区间内的任何数字都可以用 nums 中某几个数字的和来表示，那么只需要有n/2以及 [1, n/2] 区间内任何数字都可以?nums 中某几个数字的和来表示即可。所有我们将r扩大一倍，继续判断是否满足?
> 3. 直到 r >= n?
```
int minPatches(vector<int> &nums, int n) {
    sort(nums.begin(), nums.end());
    long long r = 1;
    int i = 0;
    int cnt = 0;
    while(r <= n) {
        if(i < nums.size() && nums[i] <= r) r += nums[i++];
        else {
            cnt ++;
            r *= 2;
        }
    }
    return cnt;
}
```

## 7. 买卖股票的最佳时?
> 题目: 假设有一个数组，它的第i个元素是一支给定的股票在第i天的价格。如果你最多只允许完成一次交?例如,一次买卖股?,设计一个算法来找出最大利润?   
> 分析: 先低价买入，再高价卖出，因此从前向后，记录最小值并且更新最有结果，

```
int maxProfit(vector<int> &prices) {
    int minp = prices[0];
    int ans = 0;
    for(int i = 1; i < prices.size(); i ++) {
        ans = max(ans, prices[i] - minp);
        minp = min(minp, prices[i]);
    }
    return ans;
}
```
## 8. 买卖股票的最佳时机II
> **题目**: 假设有一个数组，它的第i个元素是一个给定的股票在第i天的价格。设计一个算法来找到最大的利润。你可以完成尽可能多的交?多次买卖股票)。然?你不能同时参与多个交?你必须在再次购买前出售股??    
> **分析**: 多次买卖，我们可以尽可能多的买卖股票，如果满足prices[i+1] > price[i]，就进行一次买卖，其实我们知道如果是一个递增序列?prices[i+1] - prices[i]) + (prices[i] - prices[i-1]) = prices[i+1] - prices[i]，可以保证我们将所有可能的买卖识别出来?

```
int maxProfit(vector<int> &prices) {
    int sum = 0;
    for(int i=1;i<prices.size();i++){
        if(prices[i] > prices[i-1]){
            sum += prices[i] - prices[i-1];
        }
    }
    return sum;
}
```
## 9. 买卖股票的最佳时机含手续?
> **题目**: 给定一个数组，其中第i个元素是一支股票在第i天的价格，以及一个非负数 fee 代表了交易手续费。（只需要在卖出时支?fee）。你可以进行任意次交易，而每次交易都必须付手续费，而且你不能持有超?支数量的股票（也就是说，你在买入之前需要先把之前买入的卖出）。返回可以获得的最大利润?     
> **分析**: 
> + 我们考虑最朴素的方法，对于每一天，如果当前有股票，考虑出售或者保留，如果没股票，考虑购买或者跳过，进行dfs搜索。每天都有两种操作，时间复杂度为O(2^n).
> + 如何优化呢？我们用动态规划的思想来解决这个问题，考虑每一天同时维护两种状态：拥有股票(own)状态和已经售出股票(sell)状态。用own和sell分别保留这两种状态到目前为止所拥有的最大利润?对于sell，用前一天own状态转移，比较卖出持有股是否能得到更多的利润，即sell = max(sell , own + price - fee)?而对于own , 我们考虑是否买新的股票更能赚?换言之，更优惠），own=max( own, sell-price).
> + 初始化我们要把sell设为0表示最初是sell状态且没有profit，把own设为负无穷因为最初不存在该状态，我们不希望从这个状态进行转?
> + 因为我们保存的都是最优状态，所以在买卖股票时候取max能保证最优性不?
> + 最后直接返回sell即可. 
> + 来自(https://www.jiuzhang.com/solution/best-time-to-buy-and-sell-stock-with-transaction-fee/#tag-highlight-lang-cpp)

```
int maxProfit(vector<int> &prices, int fee) {
    int sell = 0, buy = -prices[0];
    for (int price : prices) {
        int sellOld = sell;
        sell = max(sell, buy + price - fee);
        buy = max(buy, sellOld - price);
    }
    return sell;
}
```

## 10. 最后的?
> **题目**: 给你一个n只猫，每一个猫都有一个初始化的萌系数，当一只猫的萌系数变成0它就会离开你。现在你实在受不了这n只萌猫，想要只留下一只猫，并且使它的萌系数最低。每一个你可以选择任意一只猫A去消耗另外一只猫B的萌系数，这样的话猫B的萌系数就会减去猫A的萌系数，当猫A的萌系数不变。通过多次回合之后，最后剩下的猫的萌系数最小是多少?   
> **分析**: 我们的目的是留下一只猫，使它的萌系数最小，从这个角度出发，我们可以选择最小萌系数的猫，去消耗其他的猫，如果其他的猫萌系数变?，就离开了。例如最小萌系数的猫的系数是a，对于其他的猫，如果b%a == 0，则经过多次消耗之后，b就会离开，如果b%a!=0, 则结果是经过多轮消耗之后变?b%a, a)，直到一方变?，我们可以发现这是一个求最大公约的算式。因此，最后的猫萌系数是gcd(h[0],h[0],...,h[n-1]);

```
int gcd(int a, int b) {
    if(a == 0) return b;
    return gcd(b % a, a);
}
int solve(vector<int> &h) {
    if(h.size() == 1) return h[0];
    int ans = gcd(h[0], h[1]);
    for(int i = 2; i < h.size(); i ++) {
        ans = gcd(ans, h[i]);
    }
    return ans;
}
```cpp