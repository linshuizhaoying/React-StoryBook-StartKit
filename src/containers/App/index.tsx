import * as React from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { infoListRemote } from '../../actions/index';
import './index.css';

class App extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      infoList: '',
    }
  }

  componentWillMount() {

  }
  componentDidMount() {
    // console.log(this.props)
  }
  componentWillReceiveProps(nextProps: any) {
    // console.log(nextProps)
    if (nextProps.info) {
      this.setState({
        infoList: nextProps.info.item
      })
    }
  }

  getInfo = () => {
    const { dispatch } = this.props;
    dispatch(infoListRemote())
  }

  render() {
    return (
      <div className="App">
        <div className="test"> {this.state.infoList} </div>
        <h1>  {this.props.text} </h1>
        <Button type="danger" onClick={this.getInfo}> Click Me</Button>
        <Icon type="play-circle-o" />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  info: state.info.info,
})
let AppWrapper = App
AppWrapper = connect(mapStateToProps)(App);

export default AppWrapper;