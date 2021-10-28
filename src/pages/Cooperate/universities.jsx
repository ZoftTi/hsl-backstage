import React from 'react';
import { ProBreadcrumb, PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Space } from 'antd';

function HelloMessage(props) {
  let content = (
    <Space>
      <Button type="primary">新建</Button>
      <Button>上传</Button>
    </Space>
  );
  return <PageHeaderWrapper content={content}></PageHeaderWrapper>;
}

export default HelloMessage;
