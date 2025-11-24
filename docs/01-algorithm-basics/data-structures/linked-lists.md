# linklist
链表也是面试中常问道的题目，链表定义简单很容易考察面试者的水平，比如在数组中很简单的题目转换成链表就有很大的变动。例如链表的插入和归并排序、查找倒数第k个节点等.

## 1.回文链表（234）

请判断一个链表是否为回文链表

```python
class Solution(object):
    def isPalindrome(self, head):
        reverse, fast = None, head
        while fast and fast.next:
            fast = fast.next.next
            head.next, reverse, head = reverse, head, head.next
            
        tail = head.next if fast else head

        is_palindrome = True
        while reverse:
            is_palindrome = is_palindrome and reverse.val == tail.val
            reverse.next, head, reverse = head, reverse, reverse.next
            tail = tail.next

        return is_palindrome
```

## 2.求单链表的中间节点
快、慢指针实现
```python
def find_middle_node(head):
    slow, fast = head, head
    fast = fast.next if fast else None
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

## 3.删除无序链表中的重复项
给定一个无序的链表，去掉其重复项，并保留原顺序，例如链表1->3->1->5->5->7，去掉重复项后为1->3->5->7
```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head is None:
            return head
        outer = head
        while outer:
            inpre = outer
            inner = inpre.next
            while inner:
                if inner.val == outer.val:
                    inner = inner.next
                    inpre.next = inner
                else:
                    inpre = inner
                    inner = inner.next
            outer = outer.next
        return head        
```

## 4.给定一个排序链表，删除所有含有重复数字的节点

输入: 1->2->3->3->4->4->5
输出: 1->2->5
```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteDuplicates(self, head):        
        if head is None:
            return head
        new = ListNode(None)
        new.next = head
        head = new
        outpre = head
        outer = outpre.next
        flag = False
        while outer:
            inpre = outer
            inner = inpre.next
            while inner:
                if inner.val == outer.val:
                    flag = True
                    inner = inner.next
                    inpre.next = inner
                else:
                    inpre = inner
                    inner = inner.next
            if flag:
                outer = outer.next                
                outpre.next = outer
                flag = False
            else:
                outpre = outer
                outer = outer.next
        return head.next      

        def deleteDuplicates_2(self, head):  
            if None == head or None == head.next:  
                return head  
    
            new_head = ListNode(-1)  
            new_head.next = head  
            parent = new_head  
            cur = head  
            while None != cur and None != cur.next:   
                if cur.val == cur.next.val:  
                    val = cur.val  
                    while None != cur and val == cur.val:
                        cur = cur.next  
                    parent.next = cur  
                else:  
                    cur = cur.next  
                    parent = parent.next  
    
            return new_head.next 
```

## 5.环形链表（141）
~~~
给定一个链表，判断链表中是否有环, 并找到第一个相交的点
思路：设置两个指针slow和fast，一个步长为1，一个步长为2进行遍历。如果有环，则slow和fast总会在某一点相遇。如果没有环，则fast会先为空，或者fast.next为空
~~~

```python
class Solution(object):
    def hasCycle(self, head, firstMeetNode):
        fast = slow = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if slow == fast: # 有环
                fast = head
                while fast != slow:
                    fast = fast.next
                    slow = slow.next
                firstMeetNode = fast
                return True
        return False
```

## 6.反转链表（206）

(循环算法，递归算法)  微软

~~~
输入: 1->2->3->4->5->NULL 
输出: 5->4->3->2->1->NULL
~~~

```python
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

    def __repr__(self):
        if self:
            return "{} -> {}".format(self.val, repr(self.next))
        
class Solution(object):
    '''循环算法'''
    def reverseList(self, head):
        dummy = ListNode(float("-inf"))
        while head:
            dummy.next, head.next, head = head, dummy.next, head.next
        return dummy.next        

class Solution2(object):
    '''递归算法'''
    def reverseList(self, head):
        [begin, end] = self.reverseListRecu(head)
        return begin

    def reverseListRecu(self, head):
        if not head:
            return [None, None]

        [begin, end] = self.reverseListRecu(head.next)

        if end:
            end.next = head
            head.next = None
            return [begin, head]
        else:
            return [head, head]
```

## 7.在双向链表中删除指定元素（微软）

```python
class Node(object):
    '''双向节点'''
    def __init__(self, item):
        self.item = item
        self.next = None
        self.prev = None

class DLinkedlist(object):
    def __init__(self):
        self._head = None
    
    def remove(self, item):
        """删除元素"""
        if self.is_empty():
            return
        else:
            cur = self._head
            if cur.item == item:
# 如果首节点的元素即是要删除的元素
                if cur.next == None:
# 如果链表只有这一个节点
                    self._head = None
                else:
# 将第二个节点的prev设置为None
                    cur.next.prev = None
# 将_head指向第二个节点
                    self._head = cur.next
                return
            
            while cur != None:
                if cur.item == item:
# 将cur的前一个节点的next指向cur的后一个节点
                    cur.prev.next = cur.next
# 将cur的后一个节点的prev指向cur的前一个节点
                    cur.next.prev = cur.prev
                    break
                cur = cur.next
                
```

## 8.两个链表合并为一个升序链表（微软）

```python
class Node(object):
    def __init__(self,item,next_=None):
        self.item = item
        self.next = next_
             
class Solution(object):
    def mergeTwoLists(self, l1,l2):     
        head = Node(0)
        cur = head
        while l1 != None and l2 != None:
            if l1.item <= l2.item:
                cur.next = l1
                l1 =  l1.next
            else:
                cur.next = l2
                l2 = l2.next
            cur = cur.next
        if l1 != None:
            cur.next = l1
        if l2 != None:
            cur.next = l2
        return head.next    
```
## 9. 倒数第k个节点
> 题目: 找到链表的倒数第k个节点
> 解析: 使用两个指针fast和slow,fast先走k步,之后fast和slow一起走,
> 直到fast到达最后一个节点,slow就是倒数第k个节点

```python
class Solution(object):
    '''
    题意：删除链表中倒数第k个结点，尽量只扫描一遍。
    使用两个指针扫描，当第一个指针扫描到第k个结点后，
    第二个指针从表头与第一个指针同时向后移动，
    当第一个指针指向空节点时，另一个指针就指向倒数第k个结点了       
    '''
    def removeNthFromEnd(self, head, k):
        res = ListNode(0)
        res.next = head
        tmp = res
        for i in range(0, k):
            head = head.next
        while head != None:
            head = head.next
            tmp = tmp.next
        tmp.next = tmp.next.next
        return res.next

```

## 10. 等概率返回链表中的一个元素
> 题意: 给你一个单链表,每次等概率随机返回一个元素
> 分析: 这里先不做详细解释,这是一个随机化算法的一种
```python
class Solution(object):
    def randNode(self, head):
        res = head
        cur = head.next
        i = 2
        while cur != None:
            x = random.ranint(0,int(2**31))
            j = x % i
            if j == 0:
                res = cur
            cur = cur.next
            i += 1
        return ans
```

