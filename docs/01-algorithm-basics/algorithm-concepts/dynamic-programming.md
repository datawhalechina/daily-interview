# 动态规?DP)

动态规划是面试中最常被问道的题?但是一般情况下的都是常见的一些题?
1. [百度百科](https://baike.baidu.com/item/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/529408?fr=aladdin)
2. [wikipedia](https://en.wikipedia.org/wiki/Dynamic_programming)


## 1. 最长上升子序列
> **题目**: 最长上升子序列问题是在一个无序的给定序列中找到一个尽可能长的由低到高排列的子序列，这种子序列不一定是连续的或者唯一? 

> **解析**: 
    
    dp[j]: 表示以j结尾的最长子序列的长?
    dp[j] = max(dp[j], dp[i]+1) if(a[i]<d[j]) {i in [1,j]}

    return max(dp[1-n])
使用二分查找可以得到O(nlog)的算?这里就不给出,思路也很简?读者自行查?
```
int lis(vector<int> &nums) {
    if(nums.size() == 0) return 0;
    memset(dp,0,sizeof(dp));
    int ans = 1;
    dp[0] = 1;
    for(int i=0;i<nums.size();i++){
        dp[i] = 1;
        for(int j=0;j<i;j++){
            if(nums[j] < nums[i]){
                dp[i] = max(dp[i],dp[j]+1);
            }
        }
        ans = max(ans,dp[i]);       
    }
    return ans;
}
```
## 2. 最长公共子序列
> **题目**: 给出两个字符串，找到最长公共子序列(LCS)，返回LCS的长度?

> **解析**: 

    dp[i][j]: 表示以i和j结尾的最长序列的长度. 
    dp[i][j] = max(dp[i-1][j], dp[i][j-1]) if(a[i] != b[j])
    dp[i][j] = dp[i-1][j-1] + 1 if(a[i]==b[j])
```
int lcs(string &A, string &B) {
        int dp[A.size()+1][B.size()+1] = {0};   
        for(int i=1;i<=A.size();i++){
            for(int j=1;j<=B.size();j++){
                dp[i][j] = max(dp[i-1][j],dp[i][j-1]);
                if(A[i-1] == B[j-1]){
                    dp[i][j] = max(dp[i][j],dp[i-1][j-1]+1);
                }
            }
        }
        return dp[A.size()][B.size()];
    }
```
## 3. 最长整除子?
> **题目**: 给定一个n个正整数的数? 找出最长的子序?使得序列中每一个较小的数都能整除较大的? 

> Example: 

    Input : arr[] = {10, 5, 3, 15, 20} 
    Output : 3 
    最长子序列: 10, 5, 20.
    因为: 20能被整除10, 10能被5整除.
> **解析**: 这个可以参考最长上升子序列, 首先排序数组.
> 
    dp[i]: 表示下标i结尾?最长的子序列长?
    if(a[j] % a[i] == 0) dp[j] = max(dp[j], dp[i]+1) j in [i+1, n]


```
int largeSubset(int a[], int n) {
    sort(a, a+n);
    int dp[n] = {0};
    dp[0] = 1;
    for(int j = 1; j < n; j++) {
        for(int i = 0; i < j; i++) {
            if(a[j] % a[i] == 0) {
                dp[j] = max(dp[j], dp[i]+1);
            }
        }
    }
    return *max_element(dp, dp+n);
}

```
## 4. 背包问题
> **题目**: 在n个物品中挑选若干物品装入背包，最多能装多满？假设背包的大小为m，每个物品的大小为A[i].

> **解析**:

    表示dp[m]能否装满, dp[m] = dp[m] | dp[m-A[i]])
```
int backPack(int m, vector<int> A) {
    int dp[m+1];
    memset(dp,0,sizeof(dp));
    dp[0]=1;
    //背包问题的循环顺序很重要
    for(int i=0;i<A.size();i++){
        for(int j=m;j>=A[i];j--){
            dp[j] |= dp[j-A[i]];//注意一下这个语句，类似于，
            //if(dp[j-A[i]]==1) dp[j]=1;
        }
    }
    int ans;
    for(ans=m;!dp[ans];--ans);   
    return ans;
}
```
## 5. 编辑距离
> **题目**: 给出两个单词word1和word2，计算出将word1 转换为word2的最少操作次数?
你总共三种操作方法?

    插入一个字?
    删除一个字?
    替换一个字?


> **解析**:
     
     分别表示插入,删除,修改
     dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])+1; // a[i-1] != b[j-1]
    dp[i][j] = dp[i-1][j-1] // a[i-1] == b[j-1]

```
int minDistance(string &word1, string &word2) {
    int dp[word1.size()+1][word2.size()+1];
    dp[0][0] = 0;
    for(int i=1;i<=word1.size();i++) dp[i][0] = i;
    for(int i=1;i<=word2.size();i++) dp[0][i] = i;    
    for(int i=1;i<=word1.size();i++){
        for(int j=1;j<=word2.size();j++){
            if(word1[i-1] == word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }
            else{
                dp[i][j] = min(min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1]) + 1;
            }
        }
    }
    return dp[word1.size()][word2.size()];
}
```
## 6. 矩阵链乘
> **题目**: 给你一个矩阵序? 找到有效的方式把这些数相乘到一? 
> Example:
  
    Input: p[] = {40, 20, 30, 10, 30}   
    Output: 26000  

    表示四个矩阵,分别是A:40x20, B:20x30, C;30x10, D:10x30.
    最优的方式? (A(BC))D --> 
    20*30*10 + 40*20*10 + 40*10*30 


> **解析**: 

    dp[i][j]: 表示[i,j]区间上最小?
    dp[i][j] = min(dp[i][j], dp[i][k]+dp[k+1][j]+p[i-1]*p[k]*p[l]) k in [i,j-1]

```
int MatrixChainOrder(int p[], int n) {    
    int dp[n][n]; 
    int i, j, k, L, q;   
    for (i=1; i<n; i++) { 
        dp[i][i] = 0; 
    }
    // L is chain length. 
    for (L=2; L<n; L++) { 
        for (i=1; i<n-L+1; i++) { 
            j = i+L-1; 
            dp[i][j] = INT_MAX; 
            for (k=i; k<=j-1; k++) { 
                q = dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j]; 
                if (q < dp[i][j]) dp[i][j] = q; 
            } 
        } 
    } 
    return m[1][n-1]; 
} 
```
## 7. 回文划分
> **题目**:给定字符?s, 需要将它分割成一些子? 使得每个子串都是回文?
最少需要分割几?

> **Example**:

    样例 1:
    输入: "a"
    输出: 0
    解释: "a" 本身就是回文? 无需分割

    样例 2:
    输入: "aab"
    输出: 1
    解释: ?"aab" 分割一? 得到 "aa" ?"b", 它们都是回文?


> **解析**:

可以看作序列型动态规划问? 设定 dp[i] 表示原串的前 i 个字符最少分割多少次可以使得到的都是回文子串.

如果 s ?i 个字符组成的子串本身就是回文? ?dp[i] = 0, 否则:

    dp[i] = min{dp[j] + 1} (j < i 并且 s[j + 1], s[j + 2], ... , s[i] 是回文串)

```
int minCut(string s) {
    int n = s.length();
    int f[n + 1];
    vector<vector<bool>> isPalin(n, vector<bool>(n, false));
    for (int i = 0; i < n; i++) {
        isPalin[i][i] = true;
        if (i + 1 < n) {
            isPalin[i][i + 1] = (s[i] == s[i + 1]);
        }
    }
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i + 2; j < n; j++) {
            isPalin[i][j] = isPalin[i + 1][j - 1] && (s[i] == s[j]);
        }
    }
    f[0] = -1;
    for (int i = 1; i <= n; i++) {
        f[i] = i - 1;
        for (int j = 0; j < i; j++) {
            if (isPalin[j][i - 1]) {
                f[i] = min(f[i], f[j] + 1);
            }
        }
    }
    return f[n];
}
```

## 8. 丑数
> **题目**:设计一个算法，找出只含素因??? 的第 n 小的数?

> **解析**: 使用2,3,5进行组合,得到第n个丑?

```
int dp[100000];    
int MIN(int x,int y,int z){
    return min(min(x,y),z);
    
}
int nthUglyNumber(int n) {
    dp[1] = 1;
    int i2,i3,i5; // 分别表示2,3,5的对应的数，目标是使用前面的数字构造后面的数字?
    // 不能使用2,3,5的倍数进行构造，否则会出现错?  
    i2 = i3 = i5 = 1;
    int i=2;
    while(i<=n){
        int m2 = dp[i2] * 2;
        int m3 = dp[i3] * 3;
        int m5 = dp[i5] * 5;
        int minv = MIN(m2,m3,m5);
        dp[i++] = minv;        
        if(minv == m2) i2++;
        if(minv == m3) i3++;
        if(minv == m5) i5++;
    }
    return dp[n];
}
```
## 9. 最小花费路?
> **题目**: 给定一个矩?求出从左上角到右下角的最小路径的?

> **解析**: 

    dp[i][j]: (0,0)?i,j)的最小路径的?
    dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+a[i][j]

```
int minCost(vector<vector<int>> cost){ 
     int i, j, m, n; 
     int m = cost.size();
     int n = cost[0].size();
     int dp[m+1][n+1];   
     dp[0][0] = cost[0][0];   
     for (i = 1; i <= m; i++) { 
        dp[i][0] = dp[i-1][0] + cost[i][0];
    }
    for (j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j-1] + cost[0][j]; 
    }
    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) { 
            dp[i][j] = min(dp[i-1][j-1],  
                        dp[i-1][j],  
                        dp[i][j-1]) + cost[i][j]; 
        }
    }
    return dp[m][n]; 
} 
int min(int x, int y, int z) { 
   if (x < y) 
      return (x < z)? x : z; 
   else
      return (y < z)? y : z; 
} 
```
## 10. 最大矩阵和
> **题目**: 给定一个由整数组成二维矩阵（r*c），现在需要找出它的一个子矩阵，使得这个子矩阵内的所有元素之和最大，并把这个子矩阵称为最大子矩阵?

> Example:

    例子?
    0 -2 -7 0 
    9 2 -6 2 
    -4 1 -4 1 
    -1 8 0 -2 
    其最大子矩阵为：
    9 2 
    -4 1 
    -1 8 
    其元素总和?5?

> **解析**: 将矩阵进行求和压缩到一维形?之后使用一维数组的最大子段和进行计算.

```
int a[101][101],s[101],ma[101];
int maxSum(int s[],int ma[],int m){//最大子序列的和
    ma[0]=s[0];
    for(int i=1;i<m;i++){
       if(ma[i-1]>=0) ma[i]=ma[i-1]+s[i];
       else ma[i]=s[i];
    }
    int sum=ma[0];
    for(int i=1;i<m;i++){
        if(sum<ma[i]) sum=ma[i];
    }
    return sum;
}
int maxMatrixSum(int n, int m) {
    int res=INT_MIN;//注意序列的最小?
    for(int i=0;i<n;i++){
        memset(s,0,sizeof(s));
        for(int j=i;j<n;j++){
            int sum=0;
            for(int k=0;k<m;k++){
                s[k]+=a[j][k];//转化为一维数?
            }
            sum=maxSum(s,ma,m);
            if(sum>res) res=sum;
        }
    }
    return res;
}
```
## 11. 最大正方形面积
> **题目**: 给你一个二维矩阵，权值为False和True，找到一个最大的正方形，使得里面的值全部为True，输出它的面?

> Example:

    输入:
    [
    [1, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1]
    ]
    输出: 4

> **解析**: 

    构造辅助数?dp[m][n], 

    用m[i][j]表示右下角的1.
    if m[i][j]=1 then
        dp[i][j]=min(dp[i][j-],dp[i-1][j], dp[i-1][j-1]) + 1
    else:
        dp[i][j] = 0
    
```
int MaxSubSquare(vector<vector<bool>> &matrix) {
    int R=matrix.size(), C=matrix[0].size();
    vector<vector<int>> dp(matrix.size(), vector<int>(matrix[0].size(), 0));
    
    int i, j;           
    for(i = 0; i < R; i++) { 
        dp[i][0] = matrix[i][0];  
    }
    for(j = 0; j < C; j++) { 
        dp[0][j] = matrix[0][j];  
    }
    int res = 0;  
    for(i = 1; i < R; i++) {  
        for(j = 1; j < C; j++) {  
            if(matrix[i][j] == 1)  
                dp[i][j] = min(dp[i][j-1],min(dp[i-1][j],dp[i-1][j-1])) + 1;  
            else
                dp[i][j] = 0;  
            res = max(res, dp[i][j]);
        }  
    }  
    return res;
}   
```
## 12. 二进制串个数
> **题目**: 求长度为n?1组成的二进制串中,没有连续1的串的个? 

> **解析**: 分别用a[i]和b[i],表示长度为i,分别0结尾?结尾的串的个? 那么

    a[i+1] = a[i] + b[i] // 在后面加0
    b[i+1] = a[i] // 只能在结尾是0的后面加1

```
int countStrings(int n) { 
    int a[n], b[n]; 
    a[0] = b[0] = 1; 
    for (int i = 1; i < n; i++) { 
        a[i] = a[i-1] + b[i-1]; 
        b[i] = a[i-1]; 
    } 
    return a[n-1] + b[n-1]; 
} 
```
## 13. 交叉字符?
> **题目**: 给出三个字符?s1、s2、s3，判断s3是否由s1和s2交叉构成?    
> **解析**: 
    
    dp[i][j]: s1[1,i] ?s2[1,j] 是否能够组成s3[i+j]
    
    dp[i][j] = dp[i][j] || dp[i-1][j]  if s1[i] == s3[i+j-1]
    
    dp[i][j] = dp[i][j] || dp[i][j-1]  if s2[j] == s3[i+j-1]

```
bool isInterleave(string &s1, string &s2, string &s3) {
    if(s1.size() + s2.size() != s3.size()) return false;
    int dp[s1.size() + 1][s2.size() + 1] = {0};
    dp[0][0] = 1;
    int ok = 1;
    // 初始?
    for(int i = 1; i <= s1.length(); i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1];
    }    
    for(int i = 1; i <= s2.length(); i++) {
        dp[0][i] = dp[0][i - 1] && s2[i - 1] == s3[i - 1];
    }
    // dp转化
    for(int i = 1; i <= s1.size(); i++) {
        for(int j = 1; j <= s2.size() ;j++) {
            if(s3[i+j - 1] == s1[i - 1]) {
                dp[i][j] = dp[i][j] || dp[i-1][j];
            }
            if(s3[i+j - 1] == s2[j - 1]) {
                dp[i][j] = dp[i][j] || dp[i][j - 1];
            }
            
        }
    }
    return dp[s1.size()][s2.size()];
}
```

## 14. 乘积最大子序列
> **题目**: 找出一个序列中乘积最大的连续子序列（至少包含一个数）?     
> **解析**: 这里可以借鉴和最大的子序?但是需要每次保存两个?一个最大值和最小?(因为存在负负得正).

```
int maxProduct(vector<int> &nums) {
    int premin, premax, ans;
    premin = premax = ans = nums[0];
    for(int i=1;i<nums.size();i++){
        // 每次更新最大最小?保证负负得正
        // 这里使用滚动变量表示dp
        int curmax = max(max(premax*nums[i],premin*nums[i]),nums[i]);
        int curmin = min(min(premax*nums[i],premin*nums[i]),nums[i]);
        premax = curmax;
        premin = curmin;
        ans = max(curmax, ans);
    }
    return ans;
    
}

```
## 15. k个数之和
> **题目**: 给定 n 个不同的正整数，整数 k（k <= n）以及一个目标数?target。在?n 个数里面找出 k 个数，使得这 k 个数的和等于目标数字，求问有多少种方案？       
> **解析**: dp[j][s]比碍事j个数组合s的个?
> dp[j][s] += dp[j-1][s-A[i]] {i: [0,n)}

```int kSum(vector<int> &A, int k, int target) {
    int ans = 0;
    int dp[1000][1000] = {0};
    dp[0][0] = 1;    
    for(int i=0;i<A.size();i++){
        for(int j=k;j>0;j--){
            for(int s=target;s>=A[i];s--){
                dp[j][s] += dp[j-1][s-A[i]];
            }
        }
    }   
    ans = dp[k][target];
    return ans;
}
```


# 参?
1. https://www.lintcode.com/problem/?tag=dynamic-programming
2. https://www.geeksforgeeks.org/dynamic-programming/