import * as React from 'react';
import {
  Button,
  Form,
  Icon,
  Input
  } from 'antd';
import './index.less';
import  Validator  from '../../../../util/validator';
const FormItem = Form.Item
class Login extends React.Component<any, any> {

  constructor (props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
      currentForm: 'login'
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps: any) {
  }

  checkUsername = (rule: any, value: any, callback: any) =>{
    if(!Validator.userCheck(value)){
      callback('用户名长度为4-12位,只允许字母数字组合');
    }else{
      callback();
    }
  }

  checkPassword = (rule: any, value: any, callback: any) =>{
    if(!Validator.passCheck(value)){
      callback('密码必须6位或以上,必须有字母和数字混合');
    }else{
      callback();
    }
  }

  handleChange(e: any, value: any) {
    this.setState({
      [value]: e.target.value
    }, () => {
      // console.log(this.state)
    })
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      let {username, password} = values;
      
      if (!err && username.length > 0 && password.length > 0) {
        console.log({username, password})
      }
      
    });
  }

  toggleAction = () =>{
    console.log('action')
    if(this.state.currentForm == 'login'){
      this.setState({
        currentForm: 'reg'
      })
    }else{
      this.setState({
        currentForm: 'login'
      })
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="AnimatedLogin" >
        <div className="form">
          <div className="thumbnail"><img src={require('./logo.svg')}/></div>
          <Form  onSubmit={this.handleSubmit} className={this.state.currentForm === 'login' ? 'show animated fadeInDown' : 'hide animated fadeInUp'}>

          <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入你的账户' }, {
                  validator: this.checkUsername,
                }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
              )}
          </FormItem>

          <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
              )}
          </FormItem>
          <FormItem>
            <Button htmlType="submit">创建账号</Button>
          </FormItem>
            <p className="message">账号已注册? <a onClick={this.toggleAction}>登录</a></p>
          </Form>

          
          <Form  onSubmit={this.handleSubmit} className={this.state.currentForm === 'reg' ? 'show animated fadeInUp' : 'hide animated fadeInDown'}>
            <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入你的账户' }, {
                    validator: this.checkUsername,
                  }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                )}
            </FormItem>

            <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }, {
                    validator: this.checkPassword,
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                )}
            </FormItem>
            <FormItem>
              <Button htmlType="submit">登录</Button>
            </FormItem>
            <p className="message">还没有账号? <a onClick={this.toggleAction}>创建账号</a></p>
          </Form>
        </div>
      </div>
    ) 
  }
}


const AnimatedLogin = Form.create()(Login)
export default AnimatedLogin;