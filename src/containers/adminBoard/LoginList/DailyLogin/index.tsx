import * as React from 'react';
import {
  Button,
  Form,
  Input,
  Icon
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
      <div id="DailyLogin">
    
    <div className="container">
          <div className="top">
            <h1 id="title" className="hidden"><span id="logo">Daily <span>UI</span></span></h1>
          </div>

          <div className="login-box animated fadeInUp">
            <div className="box-header">
              <h2>Log In</h2>
            </div>

            <Form onSubmit={this.handleSubmit} className="SignUp-form">
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
                <Button htmlType="submit">Sign In</Button>
                <br/>
                <a href="#"><p className="small">Forgot your password?</p></a>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    ) 
  }
}


const DailyLogin = Form.create()(Login)
export default DailyLogin;