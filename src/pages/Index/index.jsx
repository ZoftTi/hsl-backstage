import React, { useState, useEffect } from 'react';
import { Row, Col, Modal, Button, Card, Space, message } from 'antd';
import { createFromIconfontCN, UploadOutlined } from '@ant-design/icons';
// 请求方法
import request from 'umi-request';
import { PlusOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2852460_zqjls059qjb.js',
});

import './index.less';

function BannerBoxItem(props) {
  // 下载图片到本地
  const downloadImg = () => {
    var a = document.createElement('a'); // 创建一个a节点插入的document
    var event = new MouseEvent('click'); // 模拟鼠标click点击事件
    a.download = 'mochu_img'; // 设置a节点的download属性值
    a.href = props.url; // 将图片的src赋值给a节点的href
    a.dispatchEvent(event);
  };
  // 删除轮播图
  const removeImg = () => {
    request(`http://1.117.92.6:1330/slide/${v.id}`);
  };

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  //模态框
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const handleFileChange = (e) => {
    const input = e.target;
    const files = e.target.files;
    let data = new FormData();
    data.set('image', files[0]);
    console.log(data);
    request
      .post('http://1.117.92.6:1330/image', {
        body: data,
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzUzOTI3NjEsIm5iZiI6MTYzNTM5Mjc2MSwiZXhwIjoxNjM1Mzk5OTYxLCJkYXRhIjp7ImlkIjo0LCJ1c2VybmFtZSI6ImFkbWluIiwicmFuayI6MX19.atIlyJoW_fB9RdLOPs_MvThL2koRxFLBKGqXlxeWz5o',
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="bannerBox">
      <div className="banner" style={{ backgroundImage: 'url(' + props.url + ')' }}></div>
      <p className="name">{props.name}</p>
      <div className="control">
        <IconFont onClick={downloadImg} className="iconfont" type="icon-xiazai" /> |
        <IconFont onClick={showModal} className="iconfont" type="icon-bianji_o" /> |
        <IconFont className="iconfont" type="icon-shanchu" /> |
        <IconFont className="iconfont" type="icon-lianxi2hebing_jinzhi" />
      </div>
      <Modal
        title="轮播图编辑"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="modalImg" style={{ backgroundImage: 'url(' + props.url + ')' }}>
          <Button type="primary" className="uploadBtn">
            重新上传图片
          </Button>
          <input type="file" className="uploadBanner" onChange={handleFileChange} />
          <div className="zezhao"></div>
        </div>
      </Modal>
    </div>
  );
}

function Index(props) {
  const [bannerList, setBannerList] = useState([1, 2, 3, 4, 5, 6, 7]);

  useEffect(() => {
    request.get('http://1.117.92.6:1330/slide').then((res) => {
      setBannerList(res);
    });
  }, [0]);
  return (
    <div className="cardBox">
      <Row gutter={[30, 30]}>
        {bannerList.map((v, i) => {
          return (
            <Col span={6} key={i}>
              <BannerBoxItem name={v.name} url={v.image} id={v.id} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Index;
