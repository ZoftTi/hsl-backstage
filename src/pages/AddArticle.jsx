/**
 * 新增文章
 */
import { useEffect, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProForm, { ProFormText, ProFormDatePicker } from '@ant-design/pro-form';
import { Layout, Radio, Form, message } from 'antd';
import moment from 'moment';

import MarkDown from '@/components/MarkDown';
import AddImg from '@/components/AddImg';

const AddArticle = (props) => {
  let ref = useRef();
  let submit = async (values) => {
    console.log(values);
    if (!values.title) {
      message.warning('请输入文章标题');
      return;
    }
    let markdown = ref.current.getMarkdown();
    console.log(markdown);
  };
  return (
    <>
      <PageHeaderWrapper content="书写 MarkDown 格式的文章" />
      <Layout>
        <Layout.Header className="content-header">
          新增至:
          <Radio.Group size="middle" defaultValue="1">
            <Radio.Button value="1">新闻</Radio.Button>
            <Radio.Button value="2">行业动态</Radio.Button>
            <Radio.Button value="3">教育体系</Radio.Button>
            <Radio.Button value="4">合作院校</Radio.Button>
          </Radio.Group>
        </Layout.Header>

        <Layout.Content className="content-container">
          <ProForm
            layout="inline"
            onFinish={async (values) => {
              await submit(values);
            }}
          >
            <ProForm.Group>
              <ProFormText required label="标题" placeholder="给文章起个名字" name="title" />
              <ProFormDatePicker
                required
                label="时间"
                name="date"
                initialValue={moment(new Date())}
              />
              <AddImg />
            </ProForm.Group>
          </ProForm>
          <MarkDown id="markdown" ref={ref} />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default AddArticle;
