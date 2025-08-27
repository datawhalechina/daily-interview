# 排序（sort）
> 排序的目的是让一组无序的对象变成有序（升序、降序），排序在面试中很容易被问道。排序之所以这么重要是因为排序是解决大部分问题的第一步，一些看似复杂的问题当数据有序的时候就变的简单，例如查找问题，如果数组有序可以使用搞笑的折半查找。

需要提出，这篇文章并不介绍排序，什么插入、冒泡、希尔等算法，我们都不会介绍，我们的目的是给出最常见的关于排序的面试题目，俗称押题，当然希望每个人都能研究每一个题目，在面试过程中遇到排序问题，都可以解决。

## 1. 快速排序
> 题目: 这是面试中最常见的问题，手写快排，面试官主要是考查候选人的算法基本工。
> 公司: 爱奇艺，某金融公司

```cpp
template<class T>
static bool cmp(const T a, const T b) {
    return a < b;
}

template<class T>
int Poivt(T list[], int start,int end, bool (*cmp)(T, T)=cmp) {
    int t = randint(start, end);
    swap(list[t],list[start]);
    int p,i,j;
    i = start+1;
    j = end;
    p = start;
    while(1) {
        while(i<end && cmp(list[i],list[p])) ++i;
        while(j>start && !cmp(list[j],list[p])) --j;
        if(j<=i) break;
        else{
            swap(list[i],list[j]);
            ++i;
            --j;
        }
    }
    swap(list[j],list[p]);
    return j;
}

// qsort
template<class T>
void QuickSort(T list[], int start,int end, bool (*cmp)(T, T)=cmp) {
    if(start>=end) return;
    int p = Poivt(list,start,end,cmp);
    QuickSort(list,start,p-1,cmp);
    QuickSort(list,p+1,end,cmp);
}
```

## 2. 堆排序
> 题目: 手写堆排序
> 公司: 阿里
```
// 第一步建立最大堆， 下标从1开始 A[1..n]
void BuildMaxHeap(int *A, int n, int &heapsize){
    heapsize=n; //全局变量，表示最大堆的大小
    for(int i = n/2; i > 1; i --){        
        MaxheapFY(A, i);
    }
}

// heapsort
void HeapSort(int *A,int n){
    BuildMaxHeap(A,n);//建立最大堆
    for(int i = n;i >= 1;i --){
        swap(A[0],A[i]);        
        heapsize --;
        MaxheapFY(A, 1);
    }
}

// 维护位置i最大堆的性质
void MaxheapFY(int *A, int i){
    int l,r,now;
    l = i * 2;
    r = i * 2 + 1;
    now = i;
    if(l <= heapsize && A[l] > A[now]) {
        now = l;
    }
    if(r <= heapsize && A[r] > A[now]){
        now = r;
    }
    if(now != i){
        swap(A[i], A[now]);
        MaxheapFY(A, now);    
    }
}

```

## 3. 归并排序
> 题目: 手写归并排序

```
template<class T>
void Merge(T list[], int start, int mid, int end, bool (*cmp)(T, T)=cmp) {
    T *temp = new T[end-start+1];
    int i=start,j=mid+1,k=0;
    while(i<=mid && j<=end) {
        if(cmp(list[i],list[j])) temp[k++] = list[i++];
        else temp[k++] = list[j++];
    }
    while(i<=mid) {
        temp[k++] = list[i++];
    }
    while(j<=end) {
        temp[k++] = list[j++];
    }
    // copy 
    for(i=start;i<=end;i++){
        list[i] = temp[i-start];
    }
    delete [] temp;
}

// MergeSortUtil
template<class T>
void MergeSortUtil(T list[], int start,int end, bool (*cmp)(T, T)=cmp) {
    if(start>=end) return;
    int mid = (start+end) / 2;
    MergeSortUtil(list,start,mid,cmp);
    MergeSortUtil(list,mid+1,end,cmp);
    
    Merge(list,start,mid,end,cmp);
}
```

## 4. 实现多路归并排序
> 题目: 实现常用的多路归并排序(使用最大堆，或者优先队列)
> 公司: 百度，360

```
// vec中每一个vector都是有序的
vector<int> MultMerge(vector<vector<int> > vec, vector<int> &result) {
	int n = vec.size();
	priority_queue<int, vector<int>, greater<int> > q;
	vector<vector<int>::iterator> vec_it;
	for(int i = 0; i < n; i ++) {
		vector<int>::iterator it = vec[i].begin();
		vec_it.push_back(it);
	}
	for(int i = 0; i < n; i ++) {
		if(q.size() < k && vec_it[i] != vec[i].end()) {
			q.push(*(vec_it[i]));
		}
	}
	while(q.size()) {
		int cand = q.top();
		q.pop();
		result.push_back(cand);
		int index = 0;
		for(int i = 0; i < n; i ++) {
			if(vec_it[i] != vec[i].end() && cand == *(vec_it[i])) {
				index = i;
				vec_it[index] ++;
				break;
			}
		}
		if(vec_it[index] != vec[index].end()) {
			q.push(*(vec_it[index]));
		}

	}
	return result;
}
```

## 5. 单链表插入排序
> 题目: 单链表的插入排序（升序）。
> 公司: 百度

```
struct Node {
    int data;
    struct Node * next;
};

void InsertLinked(Node** sorted, Node* tmp) {
    Node* cur;
    // 当前插入节点是最小的值
    if(*sorted == NULL || tmp->data <= (*sorted)->data) {
        tmp->next = *sorted;
        *sorted = tmp;
    }
    else { // 找到插入的位置
        cur = *sorted;
        while(cur->next != NULL && tmp->data > cur->next->data) {
            cur = cur->next;
        }
        tmp->next = cur->next;
        cur->next = tmp;
    }
}

void InsertSort(Node** head) {
    // 有序链表
    Node *sorted = NULL;
    Node * cur = *head;

    while(cur != NULL) {
        Node *next = cur->next;

        // 将cur插入到sorted中，这是一个有序的链表
        InsertLinked(&sorted, cur);

        cur = next;
    }
    *head = sorted;
}

```

## 6. 单链表归并排序
> 题目: 单链表的归并排序。
> 公司: 百度

```
void MergeSort(Node **head_ref) {
    Node *head  = *head_ref;
    Node *left;
    Node *right;

    // 判断是否是null
    if(head == NULL || head->next == NULL) {
        return;
    }

    // 链表分成两个部分，left 和 right
    split(head, &left, &right);
    
    MergeSort(left);
    MergeSort(right);
    
    *head_ref = Merge(left, right);
}

// 左右各一半，
void split(Node *head, Node **left, Node **right) {
    //1. 先计算长度n，分别选择前一半和后一半。
    //2. 使用快慢指针，各取一半
    int n = 0;
    Node *cur = head;
    while(cur != NULL) {
        n ++;
    }
    *left = head;

    int k = n / 2;
    cur = head;
    Node *p = NULL;
    while(k--) {
        p = cur;
        cur = cur->next;
    }
    p->next = NULL;

    *right = cur;
}

Node* Merge(Node *left, Node *right) {
    // merge right to left
    Node *head = NULL;
    head->data = -1;
    Node *p = head;    

    while(left != NULL && right != NULL) {
        if(left->data <= right->data) {
            p->next = left;
            left = left->next;
        }
        else {
            p->next = right;
            right = right->next;
        }
        p = p->next;
    }

    if(left != NULL) {
        p->next = left;
    }
    if(right != NULL) {
        p->next = right;
    }
    
    return head->next;
}
```

