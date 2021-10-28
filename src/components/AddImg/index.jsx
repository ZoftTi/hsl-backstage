import { useState } from 'react';
import { Button, Image, Modal } from 'antd';

const AddImage = (props) => {
  let src = props.src;

  let [show, toggleDisplay] = useState(props.show || true);

  return (
    <div className="add-image" style={{ marginRight: '20px' }}>
      <Button>文章封面</Button>
      <Modal visible={show} title="文章封面"></Modal>
    </div>
  );
};

export default AddImage;
