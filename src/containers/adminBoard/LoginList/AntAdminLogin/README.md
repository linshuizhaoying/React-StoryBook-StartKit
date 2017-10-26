## Ant Design 登录页面

### 说明

Ant Desgin 的控件

验证是用`Form`配合简单的正则校验库。

未添加动态效果。

### 用法

```js
import  AntAdminLogin  from './containers/adminBoard/LoginList/AntAdminLogin'

```

### 属性

* `无`

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