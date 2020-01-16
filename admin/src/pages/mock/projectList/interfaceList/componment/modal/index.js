import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';
// import { Link } from 'dva/router';

connect();
export default class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId: '',
    };
  }

  componentWillMount() {}

  render() {
    const { data=false,visible=false,cancel } =this.props
    return (
        <Modal title={`${data?'编辑':'新增'}参数`} visible={visible} onCancel={cancel} >
            弟弟你说尼玛呢？
        </Modal>
    );
  }
}
