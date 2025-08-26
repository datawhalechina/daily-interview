# 数组（Array�?
> 面试中最常见的就是围绕数组进行出题，主要原则数组可以随机读取，一般遇到数组相关的题目，都不是直观看到的那样。第一步暴力解法，第二步是否可以排序，是否可以二分，是否可以使用数据结构（哈希表，队列，栈等）�?
> 要时刻注意一个数组中有两列数，一列是给定的数组的值，另一个是数组的下标�?

## 1. two sum
> **题目**: 给你一个数组arr，和一个目标值target，找到一组下标（i，j）使得arri = target�?    
> 进阶: 数组中有重复的值，找到所有可能的下标组合�?     
> 例如arr = [1, 2, 3, 3, 2, 4] target = 5�?return {(0, 5), (1, 2), (1, 3), (2, 4), (3, 4)}�?      
> **公司**: 各大公司
```
pair<int, int> twosum(int *arr, int n, int target) {
    map<int, int> hash;
    pair<int, int> result;

    for(int i = 0; i < n; i++) {
        if(hash.find(arr[i]) == hash.end()) {
            hash[target - arr[i]] = i;
        }
        else {
            result = make_pair(hash[arr[i]], i);
            break;
        }
    }
    return result;
}

vector<pair<int, int> > twosumplus(int *arr, int n, int target) {
    map<int, vector<int> > hash;
    for(int i = 0; i < n; i ++) {
        if(hash.find(arr[i]) == hash.end()) {
            vector<int> tmp;
            tmp.push_back(i);
            hash[arr[i]] = tmp;
        }
        else {
            hash[arr[i]].push_back(i);
        }
    }
    vector<pair<int, int> > results;
    for(int i = 0; i < n; i ++) {
        map<int, vector<int>>::iterator it = hash.find(target - arr[i]);
        if(it != hash.end()) {
            for(int j = 0; j < hash[target-arr[i]].size(); j ++) {
                for(int k = 0; k < hash[arr[i]].size(); k ++) {
                    // 去除 3 + 3 = 6，使用两次同一�?
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

## 2. 查找旋转数组
> **题目**: 排序数组（没有重复元素）根据未知旋转轴排序（例如�? 1  2 3 4 5 变成 3 4 5 0 1  2。给定一个目标值进行搜索，如果存在返回下标，不存在返回-1�?     
> **公司**: 百度，头条等
```
int find(vector<int> &arr, int l, int r, int target) {
    if(l > r || arr.size() == 0) return -1;
    int index = -1;
    while(l <= r) {
        int mid = (l + r) / 2;
        if(arr[mid] == target) {
            index = mid;
            break;
        }
        else if(arr[mid] < target) {
            if(arr[r] >= target) l = mid + 1;
            else r = mid - 1;
        }
        else { // arr[mid] > target
            if(arr[l] <= target) right = mid - 1;
            else left = mid + 1;
        }
    }
    return index;
}
```

## 3 主元�?
> **题目**: 给你一个证书数组，其中有一个数字出现了超过1/2，这个数就是主元素，请找出这个数字�?      
> 扩展1: 找到一个主元素，它出现的次数严格大于数组个数的1/3.     
> **公司**: 百度，京�?
```
// 每次去掉两个数，剩下的那个就是主元素
int MainElem(int *arr, int n) {
    int mainelem = arr[0];
    int cnt = 1;
    for(int i = 1; i < n; i ++) {
        if(mainelem == arr[i]) {
            cnt ++;
        }
        else {
            cnt --;
            if(cnt == 0) {
                mainelem = arr[i];
                cnt = 1;
            }
        }
    }
    return mainelem;
}

// 每次去掉三个数，选择两个候选集�?
int MainElemP(int *arr, int n) {
    int maina, mainb, cnta, cntb;
    cnta = cntb = 1;
    maina = arr[0];
    mainb = arr[1];
    for(int i = 2; i < n; i ++) {
        if(arr[i] == maina) cnta ++;
        else if(arr[i] == mainb) cntb ++;
        else if(cnta == 0) {
            maina = arr[i];
            cnta = 1;
        }
        else if(cntb == 0) {
            mainb = arr[i];
            cntb = 1;
        }
        else { // 去掉三个�?
            cnta --;
            cntb --;
        }
    }
    int cnt = 0;
    for(int i = 0; i < n; i ++) {
        if(minas == arr[i]) cnt ++;
    }
    if(cnt >= n / 3) return maina;
    else return mainb;
}
```

## 4. 落单的数
> **题目**: 2n+1个数，其中只有一个数出现了一次，其他都出现了两次，求出这个出现一次的数�?       
> 扩展1: 2n+2个数，其中有两个出现一次，其他出现两次，求这两个出现一次的数�?       
> 扩展2: 3n+1个非负数，只有一个数出现了一次，其他都出现了三次，求出现一次的数�?       **公司**: 常见的题�?
```
// xor: a ^ 0 = a, a ^ a = 0
int SingleNumber(int *arr, int n) {
	int ans = 0;
	for(int i = 0; i  < n; i ++) {
		ans = ans ^ arr[i]
	}
	return ans;
}
// 找到a和b, 和上一个类似，
pair<int, int> SingleNumberP(int *arr, int n) {
    int c = 0;
    for(int i = 0; i  < n; i ++) {
        c = c ^ arr[i]
    }
    // c = a ^ b, 确定c的位数是1的位置�?
    int k = 0;
    while(c) {
        if(c & 1) break;
        k ++;
        c =>> 1;
    }
    // 根据1的位置不同确定a和b
    int a = 0, b = 0;
    for(int i = 0; i < n; i ++) {
        if((arr[i]>>k) & 1) {
            a ^= arr[i];
        }
        else {
            b ^= arr[i];
        }
    }
    return make_pair(a, b);
}
// 非负整数，记录所有位�?的个数，�?取余即可
int SingleNumberPP(int *arr, int n) {
    int res = 0;	
    for(int j = 0; j < 32; j ++) {
        int bits = 0;
        for(int i = 0; i < n; i ++) {
            bits += (arr[i] >> j) & 1;
        }
        ans |= (bits % 3) << j;
    }
    return ans;
}
```
## 5. 中位�?
> **题目**: 给定两个有序数组，找到这两个数组合并排序后的中位数�? 
> **公司**: 360，阿�?
```
double findMedianSortedArrays(vector<int> &A, vector<int> &B) {
    // do A.size() < B.size()
    if(A.size() > B.size()) swap(A, B);
    int lena = A.size();
    int lenb = B.size();
    int la = 0, ra = lena, ma, mb, madian;
    while(la <= ra) {
        ma = (la + ra) / 2;
        mb = (lena + lenb + 1) / 2 - ma;
        if(ma < lena && mb > 0 && B[mb-1] > A[ma]) {
            la = ma + 1;
        }
        else if(ma > 0 && mb < lenb && B[mb] < A[ma-1]) {
            ra = ma - 1;
        }
        else {
            if(ma == 0) median = B[mb - 1];
            else if(mb == 0) median = A[ma - 1];
            else {
                median = max(A[ma - 1], B[mb - 1]);
            }
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

## 6. 二维数组中的查找
> **题目**: 给你一个每一行每一列都有序的二维数组，给定一个target，查找这个值是否在二维数组中�?      
> 扩展1: 计算target出现的次数�?    
> **公司**: 常见的题�?
```
// 查找是否存在
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
        }
        else if(matrix[r][c] < target) {
            low = mid + 1;
        } 
        else {
            high = mid - 1;
        }
    }
    return false;
}

// 查找次数
int SearchMatrixP(vector<vector<int> > matrix, int target) {
    if(matrix.size() == 0) return 0;
    int m = matrix.size(), n = matrix[0].size();
    int i = m - 1, j = 0, cnt = 0;
    while(i >= 0 && j < n) {
        if(target == matrix[i][j]) {
            cnt ++;
            j ++;
        }
        else if(target > matrix[i][j]) {
            j ++;
        }
        else {
            i --;
        }
    }
    return cnt;
}
```
## 7. 构建乘积数组
> **题目**: 给定一个数组A0, 1, ..., n-1, 其中B中的元素Bix...xAi-1x...xA[n-1]�?       
> **公司**: 某创业公�?
```
// 从计算中可以直接使用数组的前缀和后缀乘积
vector<int> multiply(const vector<int>& arr1) {
    vector<int> arr2(arr1.size(), 0);
    // 计算前缀
    arr2[0] = 1;
    for(int i = 1; i < arr1.size(); i ++) {
        arr2[i] = arr2[i - 1] * arr1[i];
    }
    // 计算后缀
    int temp = 1;
    for(int i = arr1.size() - 2; i>= 0; i --) {
        temp *= arr1[i+1];
        arr2[i] *= temp;
    }
    return arr2;
}
```
## 8. 滑动窗口的最大�?
> **题目**: 给定一个数组array和滑动的大小k，求所有滑动窗口里的最大值�?     
> **公司**: 头条
```
// 滑动窗口最大�?
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
        if(!q.empty() && i - q.front >= k) { // 超过窗口大小
            q.pop_front();
        }
        q.push_back(i);
    }
    // 处理结尾
    ans.push_back(nums[q.front()]);
    return ans;
}
```
## 9. 第k�?�?的数
> **题目**: 给你一个无序数组，找出第k小的数�?
> **公司**: 常见题目
```
int randPartition(int *arr,int l,int r){
    int x = arr[l];
    int i=l+1,j=r;
    while(i<j){
        while(arr[i]<x && i<r) i++;
        while(arr[j]>=x && j>l) j--;
        if(i<j){
            swap(arr[i],arr[j]);
            i++;
            j--;
        }
    }
    // 交换最后一个位�?
    swap(arr[l],arr[j]);
    return j;
}
int kthSmallest(int *arr,int l,int r,int k){
    if(k<0 || k > r-l+1) return -1;
    int pos = randPartition(arr,l,r);
    // 使用相对位置
    if(pos-l+1 == k) return arr[pos];
    else if(pos-l+1 > k) return kthSmallest(arr,l,pos-1,k);
    else{//在右边，因为使用的是相对位置，所以k要减去左边丢弃的数的个数
        return kthSmallest(arr,pos+1,r,k-(pos-l+1));
    }
}
int findKElem(int *arr, int n, int k) {
    // 根据快速排序的思想，使用快排的一次划�?
    if(n < 0 || arr == NULL) return -1;
    return kthSmallest(arr, 0, n-1, k);
}
```
## 10. 奇偶排序
> **题目**: 给你一个数组，将所有的偶数排列奇数的前面�?
> **公司**: 搜狐
```
void oddEvenSort(vector<int> &arr) {
    int i = 0, j = arr.size() - 1;
    while(1) {
        while(i < j && a[i] % 2 == 0) i ++;
        while(i < j && a[j] % 2 == 1) j --;
        if(i > j) break;
        swap(arr[i], arr[j]);
        i ++, j --;
    }
}
```

