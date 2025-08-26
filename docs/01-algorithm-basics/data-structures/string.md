# 1.最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀�?

如果不存在公共前缀，返回空字符�?""�?

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀�?
说明:

所有输入只包含小写字母 a-z �?

**思路**

首先，我们将描述一种查找一组字符串的最长公共前缀 $LCP(S_1 \ldots S_n)LCP(S_1 …S_n )$ 的简单方法�?我们将会用到这样的结论：
$LCP(S_1…S_n)=LCP(LCP(LCP(S_1,S_2),S_3 ),…S_n )$
算法

为了运用这种思想，算法要依次遍历字符�?$[S_1 \ldots S_n]$，当遍历到第 i个字符串的时候，找到最长公共前缀 $LCP(S_1,……S_i)$，当$LCP(S_1,……，S_i)$是一个空串的时候，算法就结束了。否则，在执行了n次遍历之后，算法就会返回最终答案的$LCP(S_1……S_n)$
![图片](https://uploader.shimo.im/f/aNBix4PL8rMkuaHL!thumbnail)
```
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
       if(strs.size() ==0)
        return "";
       string temp=strs[0];
       for(int ii=1;ii<strs.size();ii++){
            while(strs[ii].find(temp) != 0){
                temp=temp.substr(0,temp.size()-1);
                if(temp.size() == 0)
                    return "";
            }
       }
       return temp;
    }
};
```
# 2.有效的括�?
给定一个只包括 '('�?)'�?{'�?}'�?['�?]' 的字符串，判断字符串是否有效�?

有效字符串需满足�?

左括号必须用相同类型的右括号闭合�?
左括号必须以正确的顺序闭合�?
注意空字符串可被认为是有效字符串�?

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
```
class Solution {  
public:  
    bool isValid(string s) {  
        stack<char> paren;
        for(char& c : s){
        case '(':
        case '[':
        case '{': paren.push(c);break;
        case ')':
            if(paren.empty() || paren.top()!= '(')
                return false;
            else
                paren.pop();
            break;
        case '}':
            if(paren.empty() || paren.top()!= '{')
                return false;
            else
                paren.pop();
            break;
        case ']':
            if(paren.empty() || paren.top()!= '[')
                return false;
            else
                paren.pop();
        default:
            pass
            
        }
        return paren.empty();
    }  
}; 
```
# 3.验证回文�?
 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写�?

 说明：本题中，我们将空字符串定义为有效的回文串�?

 示例 1:

 输入: "A man, a plan, a canal: Panama"
 输出: true
 示例 2:

 输入: "race a car"
 输出: false
```
class Solution {
public:
    bool is_letter_number(char c){
        if( (c>='a' && c<='z') || (c>='A' && c<='Z') ||(c>='0' && c<='9') )
            return true;
        else
            return false;
    }
    bool isPalindrome(string s) {
        int right=0,left=s.size()-1;
        while(right < left){
            while(right<left && !is_letter_number(s[right]))
                right++;
            while(right<left && !is_letter_number(s[left]))
                left--;
            //cout<<s[right]<<s[left]<<endl;
            if(tolower(s[left]) != tolower(s[right]))
                return false;

            left--;
            right++;
        }
        return true;
    }
};
```
# 4.反转字符串中的单词III
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序�?

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格�?
```
class Solution {
public:
    string reverseWords(string s) {
        int start=0,endlv=0;
        string res="";
        for(int ii=0;ii<s.size();ii++){
            if(s[ii] == ' ' ){
                endlv=ii-start;
                res+=str_reverse(s.substr(start,endlv));
                res+=" ";
                start=ii+1;
            }
            if(ii == s.size()-1){
                endlv=ii+1-start;
                res+=str_reverse(s.substr(start,endlv));
            }
        }
        return res;
    }
    string str_reverse(string s){
        int right=0,left=s.size()-1;
        while(right<left){
            char temp=s[right];
            s[right++]=s[left];
            s[left--]=temp;
        }
        return s;
    }
    void rev(string &s, int i, int j) {
        while(i < j) {
            swap(s[i], s[j]);
            i++, j--;
        }
    }
    string reverseWords(string &s) {
        int i = 0;
        for(int j=0;j<s.size();j++){
            if(s[j] == ' ') {
                rev(s, i, j-1);
                i = j + 1;
            }
        }
        rev(s, i, s.size()-1);

        rev(s, 0, s.size()-1);
        return s;
    }
};
```
# 5.无重复字符的最长子�?
给定一个字符串，请你找出其中不含有重复字符�?最长子�?的长度�?

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度�?3�?
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度�?1�?
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度�?3�?
     请注意，你的答案必须�?子串 的长度，"pwke" 是一个子序列，不是子串�?
```
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int  size,i=0,j,k,max=0;
        size = s.size();
        for(j = 0;j<size;j++){
            for(k = i;k<j;k++)
                if(s[k]==s[j]){
                    i = k+1;
                    break;
                }
            if(j-i+1 > max)
                max = j-i+1;
        }
        return max;
    }
     
    int Judge(int* cnt) {
        for(int i = 0; i < 256; i ++) {
            if(cnt[i] >= 2) return false;
        }
        return true;
    }
    int lengthOfLongestSubstring2(string s) {
        int cnt[256] = {0};
        int start = 0, end = 0, ans = 0;
        while(start <= end){
            if(judge(cnt)) {
                cnt[s[end]] ++;
                end ++;
            }
            else {
                cnt[s[start]]--;
                start ++;
            }
            ans = max(ans, end-start+1);
        }
        return ans;
    }
};
```
# 6. 最长回文子�?
给定一个字符串 s，找�?s 中最长的回文子串。你可以假设 s 的最大长度为 1000�?

示例 1�?

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案�?
示例 2�?

输入: "cbbd"
输出: "bb"

```
class Solution {
public:
string longestPalindrome(string s) {
    int len = s.size(),max = 0;
    int r_lo = 0;
    for(int i=1;i<len;++i){
        int lo = i,hi =i;
        while(lo>=0 && hi<=len &&s[lo]==s[hi]){//从左到右遍历aba型的回文
            if(max<hi-lo){//记录最大回文串长度并记录该串的�?
                max = hi-lo;
                r_lo = lo;
            }
            lo--;
            hi++;
        }
        lo = i-1;hi = i;
        while(lo>=0 && hi<=len &&s[lo]==s[hi]){//遍历abba型的回文串，其余同上
            if(max<hi-lo){
                max = hi-lo;
                r_lo = lo;
            }
            lo--;
            hi++;
        }
    }
    string s1(s,r_lo,max+1);//构造输出回文串
    return s1;
    }
};
```
# 7.括号生成
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合�?

例如，给�?n = 3，生成结果为�?

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<String>();
        generate(res, "", 0, 0, n);
        
        return res;
    }
        //count1统计�?”的个数，count2统计�?”的个数
    public void generate(List<String> res , String ans, int count1, int count2, int n){
        
        if(count1 > n || count2 > n) return;
        
        if(count1 == n && count2 == n)  res.add(ans);
 
        
        if(count1 >= count2){
            String ans1 = new String(ans);
            generate(res, ans+"(", count1+1, count2, n);
            generate(res, ans1+")", count1, count2+1, n);
            
        }
    }

}
```
# 8.压缩字符�?
给定一组字符，使用原地算法将其压缩�?

压缩后的长度必须始终小于或等于原数组长度�?

数组的每个元素应该是长度�? 的字符（不是 int 整数类型）�?

在完成原地修改输入数组后，返回数组的新长度�?

 

进阶�?
你能否仅使用O(1) 空间解决问题�?

 

示例 1�?

输入�?
["a","a","b","b","c","c","c"]

输出�?
返回6，输入数组的�?个字符应该是：["a","2","b","2","c","3"]

说明�?
"aa"�?a2"替代�?bb"�?b2"替代�?ccc"�?c3"替代�?
示例 2�?

输入�?
["a"]

输出�?
返回1，输入数组的�?个字符应该是：["a"]

说明�?
没有任何字符串被替代�?
示例 3�?

输入�?
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

输出�?
返回4，输入数组的�?个字符应该是：["a","b","1","2"]�?

说明�?
由于字符"a"不重复，所以不会被压缩�?bbbbbbbbbbbb"被“b12”替代�?
注意每个数字在数组中都有它自己的位置�?
注意�?

所有字符都有一个ASCII值在[35, 126]区间内�?
1 <= len(chars) <= 1000�?
```
class Solution {
public:
    int compress(vector<char>& chars) {
        int i;
        int len=0;
        
       for( i=0;i<chars.size();i++){
           int cnt=1;
            while(i+1<chars.size()&&chars[i]==chars[i+1]){
                cnt++;
                i++;
            }
           chars[len++]=chars[i];
           if(cnt==1)continue;
           for(char ch:to_string(cnt)){
               chars[len++]=ch;
           }
           
        }
        return len;
    }
};
```
# 9.字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1�?

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```
import java.util.HashMap;

class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        //第一次遍历哈希表，将数组元素和对应的频次存入哈希�?
        for(int i = 0; i < s.length(); i++){
            if(!map.containsKey(s.charAt(i))){
                map.put(s.charAt(i), 1);
            }else{
                map.put(s.charAt(i), map.get(s.charAt(i)) + 1);
            }
        }
        //第二次遍历数组，依次看数组中每一个元素的频次，如果为1则返�?
        for(int i = 0; i < s.length(); i++){
            if(map.get(s.charAt(i)) == 1){
                return i;
            }
        }
        return -1;
    }
}

// O(n+256*2)
struct TNode {
	int k;
	int index;
	TNode() {}
	TNode(int _k, int _index):k(_k), index(_index) {}
};

char first_char_4(string s) {
	if(s.size() == 0) return ' ';
	if(s.size() == 1) return s[0];
	
	TNode cnt[256];
	for(int i = 0; i < 256; i++) {
		cnt[i].k = 0;
		cnt[i].index = -1;
	}

	for(int i = 0; i < s.size(); i++) {
		if(cnt[s[i]].index == -1) {
			cnt[s[i]].index = i;
		}
		cnt[s[i]].k ++;
	}
	
	int t_index = s.size() + 1;
	int ans = (char) ' ';
	for(int i = 0; i < 256; i++) {
		if(cnt[i].k == 1 && cnt[i].index < t_index) {
			t_index = cnt[i].index;
			ans = i;
		}
	}
	return (char) ans;
}
```
# 10.字符串相�?
给定两个以字符串形式表示的非负整�?num1 �?num2，返�?num1 �?num2 的乘积，它们的乘积也表示为字符串形式�?

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明�?

num1 �?num2 的长度小�?10�?
num1 �?num2 只包含数�?0-9�?
num1 �?num2 均不以零开头，除非是数�?0 本身�?
不能使用任何标准库的大数类型（比�?BigInteger）或直接将输入转换为整数来处理�?
```
class Solution {
    public String multiply(String num1, String num2) {
        /**
        num1的第i�?高位�?开�?和num2的第j位相乘的结果在乘积中的位置是[i+j, i+j+1]
        �? 123 * 45,  123的第1�?2 �?5的第0�?4 乘积 08 存放在结果的第[1, 2]位中
          index:    0 1 2 3 4  
              
                        1 2 3
                    *     4 5
                    ---------
                          1 5
                        1 0
                      0 5
                    ---------
                      0 6 1 5
                        1 2
                      0 8
                    0 4
                    ---------
                    0 5 5 3 5
        这样我们就可以单独都对每一位进行相乘计算把结果存入相应的index�?       
        **/
        
        int n1 = num1.length()-1;
        int n2 = num2.length()-1;
        if(n1 < 0 || n2 < 0) return "";
        int[] mul = new int[n1+n2+2];
        
        for(int i = n1; i >= 0; --i) {
            for(int j = n2; j >= 0; --j) {
                int bitmul = (num1.charAt(i)-'0') * (num2.charAt(j)-'0');      
                bitmul += mul[i+j+1]; // 先加低位判断是否有新的进�?
                
                mul[i+j] += bitmul / 10;
                mul[i+j+1] = bitmul % 10;
            }
        }
        
        StringBuilder sb = new StringBuilder();
        int i = 0;
        // 去掉前导0
        while(i < mul.length-1 && mul[i] == 0) 
            i++;
        for(; i < mul.length; ++i)
            sb.append(mul[i]);
        return sb.toString();
    }
}
```

