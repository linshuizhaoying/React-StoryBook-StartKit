import * as React from 'react';
import { connect } from 'react-redux';
import './index.css';

class AdminBoard extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {

  }
  componentDidMount() {
    // console.log(this.props)
  }
  componentWillReceiveProps(nextProps: any) {
    // console.log(nextProps)
  }


  render() {
    return (
      <div className="AdminBoard">
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
})
let AdminWrapper = AdminBoard
AdminWrapper = connect(mapStateToProps)(AdminBoard);

export default AdminWrapper;