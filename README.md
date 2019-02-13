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