import React, { Component } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card,Table } from 'antd'
import { connect } from 'dva';
import { Link } from 'dva/router';

connect()
export default class MockList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // userId: '',
    }
  }

  componentWillMount() {
  }

  render() {
    const dataSource = [
      {
        key: '1',
        name: '前端组件',
        time:'2019-12'
      },
      {
        key: '2',
        name: '接口管理',
        time:'2020-01'
      },
    ];
    
    const columns = [
      {
        title: '项目名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '操作',
        key: 'option',
        render:(text,recode)=>(<div><Link to={{ pathname: '/mock/list/details', state: recode }}>查看</Link></div>)
      },
    ];
    return (
      <PageHeaderWrapper>
        <Card>
          {/* 你说尼玛呢弟弟 */}
          <Table size='small' dataSource={dataSource} columns={columns} />
        </Card>
      </PageHeaderWrapper>
    )
  }
}
