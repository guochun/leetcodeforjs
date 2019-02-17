# JS 算法与数据结构(LEETCODE)

## 环境安装

1. 安装依赖

  ```
  npm install --save-dev jest  //单元测试
  npm install babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env //环境依赖
  ```
  编辑package.json

  ```
  {
    "scripts": {
      "test": "jest"
    }
  }
  ```

  编辑.babelrc
  ```
  {
    "presets": ["@babel/preset-env"]
  }
  ```

2. 创建js文件

  ```js
  function sum(a, b) {
    return a + b;
  }
  export default sum;
  ```

  ```js
  import sum from './index'

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

3. 启动测试

  ```
  npm test
  ```

---

## 简单算法

### 字符串

  反转字符串的单词

  ```js
  /*给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
  示例
  输入: "Let's take LeetCode contest"
  输出: "s'teL ekat edoCteeL tsetnoc" 
  注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。*/

  function reverseWords(s) {
    let res = ''
    let word = ''
    for(let c of s) {
      if (c === ' ') {
        res += word + c
        word = ''
      } else {
        word = c + word
      }
    }
    return res + word
  }

  function reverseWords(s) {
    return s.split(' ').map((v) => {
      return v.split('').reverse().join('')
    }).join(' ')
  }
  ```
  计算二进制子串


  ```js
  /*给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

  重复出现的子串要计算它们出现的次数。

  示例 1 :

  输入: "00110011"
  输出: 6
  解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

  请注意，一些重复出现的子串要计算它们出现的次数。

  另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
  示例 2 :

  输入: "10101"
  输出: 4
  解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
  注意：

  s.length 在1到50,000之间。
  s 只包含“0”或“1”字符。*/

  var countBinarySubstrings = function (s) {
    return s.replace(/10/g, '1,0').replace(/01/g, '0,1').split(',').reduce((res, a, i, arr) => {
      return i ? res + Math.min(a.length,arr[i--].length ) : 0
    }, 0)
  };

  ```

### 数组

  电话号码的组合

  ```js
  /*给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
  示例:
  输入："23"
  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].*/
  
  ```


### 正则


### 排序


### 递归



### 链表

 链表的逆序

 ```js
  /*反转一个单链表。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
  进阶:
  你可以迭代或递归地反转链表。你能否用两种方法解决这道题？*/

  


 ```

---