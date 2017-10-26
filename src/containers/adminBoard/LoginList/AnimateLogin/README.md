## Animated Design 登录页面

### 说明

继承Ant Desgin `Form` 的验证方式

验证是用配合简单的正则校验库。

动态效果通过`animated.css`完成。

设置`webpack`加载相对路径的`svg`文件

### 用法

```js
import  AnimateLogin  from './containers/adminBoard/LoginList/AnimateLogin'

```

### 属性

* currentForm (`login` || `reg`)

### 正则校验用法

```js

  checkUsername = (rule: any, value: any, callback: any) =>{
    if(!Validator.userCheck(value)){
      callback('用户名长度为4-12位,只允许字母数字组合');
    }else{
      callback();
    }
  }

```

validator.js:

```js
  
  ...
  username: /^\w{4,12}$/,
  ...

  userCheck = (value: string) => {
    if (!RULES.required(value)) {
      return false
    }else {
      console.log('userCheck:' + new RegExp(RULES.username).test(value))
      return  new RegExp(RULES.username).test(value)
    }
  }

```