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

### 数组


### 正则


### 排序


### 递归


---