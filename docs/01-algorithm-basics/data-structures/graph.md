# Graph(图)
在面试的过程中,一般不会考到图相关的问题,因为图相关的问题难,而且描述起来很麻烦.
但是也会问道一下常见的问题,比如,最短路径,最小支撑树,拓扑排序都被问到过.

1. 图常用的表示方法有两种: 分别是邻接矩阵和邻接表.
邻接矩阵是不错的一种图存储结构,对于边数相对顶点较少的图,这种结构存在对存储空间的极大浪费. 
因此,找到一种数组与链表相结合的存储方法称为邻接表.

+ 邻接矩阵表示的无向图

<img src="/images/g-2.png">


## 1. 最短路径
+ Dijkstra
1. 维护一个最短路径的的集合(sptSet)和最短距离数组, 直到遍历所有的点, 初始化起始点的距离是0, 集合为空.
2. 初始化起始点s到所有的点的距离是INF, 注意s到s的距离是0.
3. while sptSet 不包含所有的顶点:
    + 选择当前能到达点的最小距离的点u,加入 sptSet
    + 使用u作为中间顶点,更新所有点的距离,选择最小距离的替换 
    + dist[u]+graph[u][v] < dist[v]

[百度百科](https://baike.baidu.com/item/%E8%BF%AA%E6%9D%B0%E6%96%AF%E7%89%B9%E6%8B%89%E7%AE%97%E6%B3%95/4049057?fr=aladdin)     
[wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

```cpp
int minDistance(vector<int> dist, set<int> sptSet) {
    int min_d = INT_MAX, u;
    for(int i = 0, i < dist.size(); i ++) {
        if(sptSet.find(i) == sptSet.end() && dist[v] < min_d) {
            min_d = dist[i], u = i;
        }
    }
    return u;
}
// 使用vector 表示的邻接矩阵, return 起始点到所有点的最小距离
// 没有边的用0填充
vector<int> dijstra(vector<vector<int>> graph, set<int> &sptSet,int src) {
    int V = graph.size();
    vector<int> dist(V, 0);
    for(int i = 0;i < V; i ++) {
        if(i != src) dist[i] = INT_MAX;
    }
    while(sptSet.size() < V-1) {
        // pick mininum distance u
        int u = minDistance(dist, sptSet); 
        sptSet.insert(u);
        // 使用u更新距离
        for(int v = 0; v < V; v ++) {
            if(sptSet.find(v)==sptSet.end() && graph[u][v] 
                        && dist[u] != INT_MAX
                        && dist[u]+graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
}

```
+ Floyd Warshall 
Floyd算法是使用动态规划算法, dist[i][j]表示i-->j的最短距离,     
那么是否存在i-->k-->j的路径小于dist[i][j],于是就有了下面的更新公式,  
+ if dist[i][k] + dist[k][j] < dist[i][j]: 
    dist[i][j] = dist[i][k] + dist[k][j]

[百度百科](https://baike.baidu.com/item/floyd-warshall%E7%AE%97%E6%B3%95/9705345)    
[wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)   

```cpp
void floydWarshall(vector<vector<int> > graph, vector<vector<int>> &dist, vector<vector<int> > &path) {
    int V = graph.size();
    // 参数dist和path需要初始化大小, 确定是否已经初始化
    vector<vector<int> > tmp(V, vector<int>(V));
    dist = path = tmp;
    for(int i = 0; i < V; i ++) {
        for(int j = 0; j < V; j ++) {
            dist[i][j] = graph[i][j];
            path[i][j] = j;
        }
    }
    for(int i = 0; i < V; i++) {
        for(int j = 0; j < V; j++) {
            for(int k = 0; k < V; k++) {
                if(dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    pre[i][j] = pre[i][k];
                }
            }
        }
    }
}
//打印最短路径 u ---> v
int pfpath(int u, int v, vector<vector<int> > path) { 
    while(u != v) {
        cout << u  << " ";
        u = path[u][v];
    }
    cout << u << endl;
}
```
## 2. 最小支撑树
+ Prim Algorithm
1. 用一个集合mstSet维护已经满足要求的顶点
2. 使用dist表示从mstSet集合某个点到u的最小距离为INF, 初始点Src的距离是0.
3. while mstSet doesn't include all vertices:
   + 选择一个不在mstSet中, 并且在dist中距离最小的顶点u, 加入到mstSet
   + 使用u更新dist距离, 表示从mstSet某个点到达为使用的点的最小距离

[百度百科](https://baike.baidu.com/item/Prim/10242166)    
[wikipedia](https://en.wikipedia.org/wiki/Prim%27s_algorithm)

```cpp
int minDistance(vector<int> dist, set<int> mstSet) {
    int min_d = INT_MAX, u;
    for(int i = 0, i < dist.size(); i ++) {
        if(mstSet.find(i) == mstSet.end() && dist[v] < min_d) {
            min_d = dist[i], u = i;
        }
    }
    return u;
}
// 使用vector 表示的邻接矩阵, return 起始点到所有点的最小距离
// 没有边的用0填充
vector<int> dijstra(vector<vector<int>> graph, set<int> &mstSet,int src) {
    int V = graph.size();
    vector<int> dist(V, 0);
    int parent[V]; // 每个顶点的相邻的点
    parent[src] = -1;
    for(int i = 0;i < V; i ++) {
        if(i != src) dist[i] = INT_MAX;
    }
    while(mstSet.size() < V-1) {
        // pick mininum distance u
        int u = minDistance(dist, sptSet); 
        mstSet.insert(u);
        // 使用u更新距离
        for(int v = 0; v < V; v ++) {
            if(mstSet.find(v)==mstSet.end() && graph[u][v] 
                        && graph[u][v] < dist[v]) {
                dist[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }
    return dist;
}

```
+ Kruskal Algorithm

1. 根据权重排序所有的边
2. 选择一个小权重的边,如果它没有和最小支撑顶点形成环,就加入这个边
3. 重复2,知道包含V-1个边

[百度百科](https://baike.baidu.com/item/%E5%85%8B%E9%B2%81%E6%96%AF%E5%85%8B%E5%B0%94%E6%BC%94%E7%AE%97%E6%B3%95)  
[wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)   
[Code 抄写](https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)

```cpp
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
## 3. 拓扑排序
**定义**: 对一个有向无环图(Directed Acyclic Graph简称DAG)G进行拓扑排序，是将G中所有顶点排成一个线性序列，使得图中任意一对顶点u和v，若边(u,v)∈E(G)，则u在线性序列中出现在v之前。
1. 计算所有节点的入度
2. 每次选择一个入度为0的顶点u,如果的已经排序的结果中
3. 将u所到达的所有顶点v,入度减1, 
4. 重复1,2,直到遍历所有顶点

[百度百科](https://baike.baidu.com/item/%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F/5223807?fr=aladdin)    
[wikipedia](https://en.wikipedia.org/wiki/Topological_sorting)

```cpp
class Graph { 
    int V;  // 顶点的个数
    list<int> *adj; // 所有顶点的起始指针
};

void topologicalSort(int V, list<int> *adj) { 
    // 计算所有入度
    vector<int> in_degree(V, 0);   
    for (int u=0; u<V; u++) { 
        list<int>::iterator itr; 
        for (itr = adj[u].begin(); itr != adj[u].end(); itr++) {
             in_degree[*itr]++; 
        }
    } 
    // 加入入度为0的点
    queue<int> q; 
    for (int i = 0; i < V; i++) { 
        if (in_degree[i] == 0) q.push(i); 
    }
    int cnt = 0;   
    vector <int> top_order;   
    while (!q.empty()) { 
        int u = q.front(); 
        q.pop(); 
        top_order.push_back(u);   
        // 所有连接点, 入度减去1
        list<int>::iterator itr; 
        for (itr = adj[u].begin(); itr != adj[u].end(); itr++) {
            if (--in_degree[*itr] == 0) q.push(*itr); 
        }
        cnt++; 
    } 
    if (cnt != V) { 
        cout << "There exists a cycle in the graph\n"; 
        return; 
    }   
    for (int i=0; i<top_order.size(); i++) 
        cout << top_order[i] << " "; 
    cout << endl; 
} 
```
## 4. 有向图判环
**题目**: 请你判断一个 n 个点，m 条边的有向图是否存在环。参数为两个int数组，start[i]到end[i]有一条有向边.     
**解析**: 这是拓扑排序的一种应用.

```cpp
bool isCyclicGraph(vector<int> &start, vector<int> &end) {
    // 找到最大顶点值,构造图,
    int n = 0;
    for (int s : start) {
        n = max(n, s);
    }
    for (int e : end) {
        n = max(n, e);
    }
    // 构造图
    vector<vector<int>> graph(n + 1);
    vector<int> d(n + 1);
    int m = start.size();
    // 计算所有顶点的入度
    for (int i = 0; i < m; i++) {
        graph[start[i]].push_back(end[i]);
        d[end[i]]++;
    }
    queue<int> que;
    // 将所有入度为0的点,加入队列
    for (int i = 1; i <= n; i++) {
        if (graph[i].size() && !d[i]) {
            que.push(i);
        }
    }
    while (!que.empty()) {
        int h = que.front();
        que.pop();
        // 将多有入度为0的点,对应的顶点 入度减去1
        for (int y : graph[h]) {
            d[y]--;
            if (!d[y]) {
                que.push(y);
            }
        }
    }
    // 判断是否所有顶点的入度都是0, 如果是,则没有环,否则就有
    for (int i = 1; i <= n; i++) {
        if (d[i]) {
            return true;
        }
    }
    return false;
}
```

# 参考
1. https://www.cnblogs.com/Ash-ly/p/5920953.html
2. https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/
3. 