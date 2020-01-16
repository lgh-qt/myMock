/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-unresolved
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Divider, Card, Table,Input,Select,Button } from 'antd';
import { connect } from 'dva';
import Modals from './componment/modal'
// import { Link } from 'dva/router';
import styles from './index.less';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

const { Option } =Select
const options = {
  mode: 'javascript',
  theme: 'material',
  lineNumbers: true,
};
connect();
export default class MockList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      describe: '1123131',
      url: 'http://www.baidu.com',
      requestMsg: [
        { key: 'name', description: '姓名', type: 'string', mandatory: 1 },
        { key: 'age', description: '年龄', type: 'number', mandatory: 0 },
      ],
      returnMsg: '返回示例',
      requestWay: 'post',
      visible:false,
      eidtData:false,
    };
    this.columns = [
        {
          title: '键值',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '字段类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '是否必填',
          dataIndex: 'mandatory',
          key: 'mandatory',
          render: text => {
            const type = {
              0: '否',
              1: '是',
            };
            return type[text];
          },
        },
        {
          title: '操作',
          dataIndex: 'option',
          key: 'option',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render: (text, recodr, index) => (
            <div>
              <a onClick={()=>{this.eidtClick(recodr,index)}}>编辑</a>
              <Divider type="vertical" />
              <a onClick={()=>{this.onDelect(index)}}>删除</a>
            </div>
          ),
        },
      ];
  }

  componentWillMount() {}

  onBeforChangeCode = type => (editor, data, value) => {
    // console.log(editor, data, value, 111111);
    this.setState({ [type]: value });
  };

  onChangeInput = type => e => {
      console.log(type,e)
      if(type!=='requestWay'){
        const { value }= e.target;
        this.setState({
            [type]:value
        })
      }else{
        this.setState({
            [type]:e
        })
      }
     
  }

  onDelect = index => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      const newSource =this.state.requestMsg.concat();
    //   console.log(newSource)
      newSource.splice(index,1);
      this.setState({
        requestMsg:newSource
      })
  }

  eidtClick = (recodr,index) => {
    console.log(recodr,index)
    this.setState({
        eidtData:recodr,
        visible:true
    })

  }

  handleCancel = () =>{
    this.setState({
        eidtData:false,
        visible:false
    })
  }

  render() {
    const { describe, url, requestMsg, returnMsg, requestWay,visible,eidtData } = this.state;
    return (
      <PageHeaderWrapper>
        <Card>
          <div>
            <ul>
              {/* <li>:</li> */}
              <li>
                  <span style={{marginRight:10}}>简单描述: </span>
                  <Input style={{width:'500px'}}  onChange= {this.onChangeInput('describe')} value={describe} />
              </li>
            </ul>
            <ul>
              {/* <li>:</li> */}
              <li>
                <span style={{marginRight:10}}>请求URL: </span>
                <Input style={{width:'500px'}} onChange= {this.onChangeInput('url')} value={url} />
              </li>
            </ul>
            <ul>
              <li>
                  <span style={{marginRight:10}}>请求方式: </span>
                  <Select value={requestWay} onChange={this.onChangeInput('requestWay')}>
                    <Option key='post'>POST</Option>
                    <Option key='get'>GET</Option>
                  </Select>
                </li>
            </ul>
            <ul>
              <li>参数:</li>
              <li className={styles.myPre}>
                <Table size="small" columns={this.columns} dataSource={requestMsg} />
                <Modals visible={visible} data={eidtData} cancel={this.handleCancel} />
              </li>
              <li></li>
            </ul>
            <ul>
              <li>返回示例</li>
              <li className={styles.myPre}>
                <CodeMirror
                  value={returnMsg}
                  options={options}
                  onBeforeChange={this.onBeforChangeCode('returnMsg')}
                />
              </li>
            </ul>
            <ul>
                <li>
                    <Button type='primary'>保存</Button>
                    <Button style={{marginLeft:10}}>返回</Button>
                </li>
            </ul>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
