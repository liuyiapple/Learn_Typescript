## typeof 类型保护
   ```js
   typeof操作符判断数据类型
   "string"
    "number"
    "bigInt"
    "boolean"
    "symbol"
    "undefined"
    "object"
    "function"
    然而、typeof 并没有返回字符串null
```
## Inference 推断 
    ```js
        函数类型如果不明确表示输入输出的值，ts将会推断为(Type)传递过来的默认类型
    ```