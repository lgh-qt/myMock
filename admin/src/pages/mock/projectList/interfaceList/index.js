import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Table, Divider } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

connect();
export default class MockList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId: '',
    };
  }

  componentWillMount() {}

  render() {
    const dataSource = [
      {
        key: '1',
        interfaceName: '增加',
        createName: 'liugh',
        createTime: '2019-12-29 11:11:11',
        updateName: 'liugh',
        updateTime: '2019-12-30 12:12:12',
      },
      {
        key: '2',
        interfaceName: '删除',
        createName: 'liugh',
        createTime: '2020-01-02 11:11:11',
        updateName: 'liugh',
        updateTime: '2019-01-03 12:12:12',
      },
    ];

    const columns = [
      {
        title: '接口名称',
        dataIndex: 'interfaceName',
        key: 'interfaceName',
      },
      {
        title: '创建人',
        dataIndex: 'createName',
        key: 'createName',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '最后修改人',
        dataIndex: 'updateName',
        key: 'updateName',
      },
      {
        title: '最后修改时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
      },
      {
        title: '操作',
        key: 'option',
        render: (text, recode) => (
          <div>
            <Link to={{ pathname: '/mock/project/interface/details', state: recode }}>
              查看详情
            </Link>
            <Divider type="vertical" />
            <a>删除</a>
          </div>
        ),
      },
    ];
    return (
      <PageHeaderWrapper>
        <Card>
          {/* 你说尼玛呢弟弟 */}
          <Table size="small" dataSource={dataSource} columns={columns} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
