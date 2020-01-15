import React, { Component } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card,Table } from 'antd'

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
    return (
      <PageHeaderWrapper>
        <Card>
          你说尼玛呢弟弟
          <Table />
        </Card>
      </PageHeaderWrapper>
    )
  }
}
