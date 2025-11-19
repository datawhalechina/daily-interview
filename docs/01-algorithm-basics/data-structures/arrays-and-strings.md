## 数组面试常见题目总结
> 数组是面试中最常见的数据结构之一，主要特点是支持随机读取。解决数组相关题目时，通常遵循以下思路：首先考虑暴力解法，然后思考是否可以排序、使用二分查找或利用其他数据结构（如哈希表、队列、栈等）。同时，要注意数> 组中的两个关键元素：数组的值和对应的下标。

### 1. Two Sum
> 题目：给定一个数组 arr和一个目标值 target，找到一组下标 (i, j)使得 arr[i] + arr[j] = target。
> 进阶：如果数组中有重复的值，找到所有可能的下标组合。
> 例如：arr = [1, 2, 3, 3, 2, 4], target = 5，返回 {(0, 5), (1, 2), (1, 3), (2, 4), (3, 4)}。
> 公司：各大公司

```cpp
//基础解法（返回一对下标）
pair<int, int> twosum(int *arr, int n, int target) {
    map<int, int> hash;
    pair<int, int> result;
    for(int i = 0; i < n; i++) {
        if(hash.find(arr[i]) == hash.end()) {
            hash[target - arr[i]] = i;
        } else {
            result = make_pair(hash[arr[i]], i);
            break;
        }
    }
    return result;
}
//进阶解法（返回所有下标对）
vector<pair<int, int> > twosumplus(int *arr, int n, int target) {
    map<int, vector<int> > hash;
    for(int i = 0; i < n; i ++) {
        if(hash.find(arr[i]) == hash.end()) {
            vector<int> tmp;
            tmp.push_back(i);
            hash[arr[i]] = tmp;
        } else {
            hash[arr[i]].push_back(i);
        }
    }
    vector<pair<int, int> > results;
    for(int i = 0; i < n; i ++) {
        map<int, vector<int>>::iterator it = hash.find(target - arr[i]);
        if(it != hash.end()) {
            for(int j = 0; j < hash[target-arr[i]].size(); j ++) {
                for(int k = 0; k < hash[arr[i]].size(); k ++) {
                    // 避免重复使用同一元素（如 3 + 3 = 6）
                    if(target - arr[i] == arr[i] && k <= j) {
                        continue;
                    }
                    int x = min(hash[target-arr[i]][j], hash[arr[i]][k]);
                    int y = max(hash[target-arr[i]][j], hash[arr[i]][k]);
                    results.push_back(make_pair(x, y));
                }
            }
            hash.erase(it);
        }
    }
    return results;
}
```

### 2. 查找旋转数组
> 题目：一个排序数组（无重复元素）根据未知旋转轴旋转（例如 1 2 3 4 5变成 3 4 5 1 2）。给定目标值进行搜索，存在则返回下标，否则返回 -1。
> 公司：百度，头条等

```cpp
int find(vector<int> &arr, int l, int r, int target) {
    if(l > r || arr.size() == 0) return -1;
    int index = -1;
    while(l <= r) {
        int mid = (l + r) / 2;
        if(arr[mid] == target) {
            index = mid;
            break;
        } else if(arr[mid] < target) {
            if(arr[r] >= target) l = mid + 1;
            else r = mid - 1;
        } else {
            if(arr[l] <= target) r = mid - 1;
            else l = mid + 1;
        }
    }
    return index;
}
```

### 3. 主元素
> 题目：给定一个整数数组，其中有一个数字出现次数超过一半，找出这个主元素。
> 扩展：找到一个出现次数严格大于数组长度 1/3 的元素。
> 公司：百度，京东

```cpp
//基础解法（出现次数超过一半）
int MainElem(int *arr, int n) {
    int mainelem = arr[0];
    int cnt = 1;
    for(int i = 1; i < n; i ++) {
        if(mainelem == arr[i]) {
            cnt ++;
        } else {
            cnt --;
            if(cnt == 0) {
                mainelem = arr[i];
                cnt = 1;
            }
        }
    }
    return mainelem;
}
//扩展解法（出现次数超过 1/3）
int MainElemP(int *arr, int n) {
    int maina, mainb, cnta, cntb;
    cnta = cntb = 0;
    maina = arr[0];
    mainb = arr[1];
    for(int i = 2; i < n; i ++) {
        if(arr[i] == maina) cnta ++;
        else if(arr[i] == mainb) cntb ++;
        else if(cnta == 0) {
            maina = arr[i];
            cnta = 1;
        } else if(cntb == 0) {
            mainb = arr[i];
            cntb = 1;
        } else {
            cnta --;
            cntb --;
        }
    }
    int cnt = 0;
    for(int i = 0; i < n; i ++) {
        if(maina == arr[i]) cnt ++;
    }
    if(cnt >= n / 3) return maina;
    else return mainb;
}
```

### 4. 落单的数
> 题目：2n+1个数中只有一个数出现一次，其他都出现两次，找出这个数。
> 扩展1：2n+2个数中有两个数出现一次，其他出现两次，找出这两个数。
> 扩展2：3n+1个非负数中只有一个数出现一次，其他都出现三次，找出这个数。
> 公司：常见题目

```cpp
//基础解法（出现一次的数）
int SingleNumber(int *arr, int n) {
    int ans = 0;
    for(int i = 0; i < n; i ++) {
        ans = ans ^ arr[i];
    }
    return ans;
}
//扩展1解法（两个出现一次的数）
pair<int, int> SingleNumberP(int *arr, int n) {
    int c = 0;
    for(int i = 0; i < n; i ++) {
        c = c ^ arr[i];
    }
    int k = 0;
    while(c) {
        if(c & 1) break;
        k ++;
        c >>= 1;
    }
    int a = 0, b = 0;
    for(int i = 0; i < n; i ++) {
        if((arr[i] >> k) & 1) {
            a ^= arr[i];
        } else {
            b ^= arr[i];
        }
    }
    return make_pair(a, b);
}
//扩展2解法（出现一次的数，其他出现三次）
int SingleNumberPP(int *arr, int n) {
    int res = 0;
    for(int j = 0; j < 32; j ++) {
        int bits = 0;
        for(int i = 0; i < n; i ++) {
            bits += (arr[i] >> j) & 1;
        }
        res |= (bits % 3) << j;
    }
    return res;
}
```

### 5. 中位数
> 题目：给定两个有序数组，找到合并排序后的中位数。
> 公司：360，阿里

```cpp
double findMedianSortedArrays(vector<int> &A, vector<int> &B) {
    if(A.size() > B.size()) swap(A, B);
    int lena = A.size();
    int lenb = B.size();
    int la = 0, ra = lena, ma, mb, median;
    while(la <= ra) {
        ma = (la + ra) / 2;
        mb = (lena + lenb + 1) / 2 - ma;
        if(ma < lena && mb > 0 && B[mb-1] > A[ma]) {
            la = ma + 1;
        } else if(ma > 0 && mb < lenb && B[mb] < A[ma-1]) {
            ra = ma - 1;
        } else {
            if(ma == 0) median = B[mb - 1];
            else if(mb == 0) median = A[ma - 1];
            else median = max(A[ma - 1], B[mb - 1]);
            break;
        }
    }
    if((lena + lenb) % 2 == 1) {
        return double(median);
    }
    if(ma == lena) {
        return (median + B[mb]) / 2.0;
    }
    if(mb == lenb) {
        return (median + A[ma]) / 2.0;
    }
    return (median + min(A[ma], B[mb])) / 2.0;
}
```

### 6. 二维数组中的查找
> 题目：给定一个每行每列都有序的二维数组，判断目标值 target是否存在。
> 扩展：计算 target出现的次数。
> 公司：常见题目

```cpp
//基础解法（判断是否存在）
bool SearchMatrix(vector<vector<int> > matrix, int target) {
    if(matrix.size() == 0) return false;
    int m = matrix.size(), n = matrix[0].size();
    int mid, low = 0, high = n * m - 1;
    while(low <= high) {
        mid = (low + high) / 2;
        int r = mid / n;
        int c = mid % n;
        if(matrix[r][c] == target) {
            return true;
        } else if(matrix[r][c] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
//扩展解法（计算出现次数）
int SearchMatrixP(vector<vector<int> > matrix, int target) {
    if(matrix.size() == 0) return 0;
    int m = matrix.size(), n = matrix[0].size();
    int i = m - 1, j = 0, cnt = 0;
    while(i >= 0 && j < n) {
        if(target == matrix[i][j]) {
            cnt ++;
            j ++;
        } else if(target > matrix[i][j]) {
            j ++;
        } else {
            i --;
        }
    }
    return cnt;
}
```

### 7. 构建乘积数组
> 题目：给定数组 A[0, 1, ..., n-1]，构建数组 B，其中 B[i] = A[0] * A[1] * ... * A[i-1] * A[i+1] * ... * A[n-1]。
> 公司：某创业公司

```cpp
vector<int> multiply(const vector<int>& arr1) {
    vector<int> arr2(arr1.size(), 1);
    arr2[0] = 1;
    for(int i = 1; i < arr1.size(); i ++) {
        arr2[i] = arr2[i - 1] * arr1[i-1];
    }
    int temp = 1;
    for(int i = arr1.size() - 2; i >= 0; i --) {
        temp *= arr1[i+1];
        arr2[i] *= temp;
    }
    return arr2;
}
```

### 8. 滑动窗口的最大值
> 题目：给定一个数组 array和滑动窗口大小 k，求所有滑动窗口中的最大值。
> 公司：头条

```cpp
vector<int> MaxSildingWindow(vector<int> nums, int k) {
    deque<int> q;
    vector<int> ans;
    if(k <= 0) return ans;
    if(k == 1) return nums;
    for(int i = 0; i < k; i ++) {
        while(!q.empty() && nums[q.back()] <= nums[i]) {
            q.pop_back();
        }
        q.push_back(i);
    }
    for(int i = k; i < nums.size(); i ++) {
        ans.push_back(nums[q.front()]);
        while(!q.empty() && nums[q.back()] <= nums[i]) {
            q.pop_back();
        }
        if(!q.empty() && i - q.front() >= k) {
            q.pop_front();
        }
        q.push_back(i);
    }
    ans.push_back(nums[q.front()]);
    return ans;
}
```

### 9. 第k小的数
> 题目：给定一个无序数组，找出第k小的数。
> 公司：常见题目

```cpp
int randPartition(int *arr,int l,int r){
    int x = arr[l];
    int i = l+1, j = r;
    while(i < j){
        while(arr[i] < x && i < r) i++;
        while(arr[j] >= x && j > l) j--;
        if(i < j){
            swap(arr[i], arr[j]);
            i++;
            j--;
        }
    }
    swap(arr[l], arr[j]);
    return j;
}

int kthSmallest(int *arr,int l,int r,int k){
    if(k < 0 || k > r-l+1) return -1;
    int pos = randPartition(arr,l,r);
    if(pos-l+1 == k) return arr[pos];
    else if(pos-l+1 > k) return kthSmallest(arr,l,pos-1,k);
    else return kthSmallest(arr,pos+1,r,k-(pos-l+1));
}

int findKElem(int *arr, int n, int k) {
    if(n < 0 || arr == NULL) return -1;
    return kthSmallest(arr, 0, n-1, k);
}
```

### 10. 奇偶排序
> 题目：将数组中的所有偶数排在奇数前面。
> 公司：搜狐

```cpp
void oddEvenSort(vector<int> &arr) {
    int i = 0, j = arr.size() - 1;
    while(i < j) {
        while(i < j && arr[i] % 2 == 0) i++;
        while(i < j && arr[j] % 2 == 1) j--;
        if(i < j) {
            swap(arr[i], arr[j]);
            i++;
            j--;
        }
    }
}
```
