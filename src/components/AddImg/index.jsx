import { useState, useRef, useCallback } from 'react';
import { Button, Modal } from 'antd';
import './index.less';

const AddImage = (props) => {
  let selectEl = useRef();
  let box = useRef();
  let [src, setSrc] = useState(props.src);

  let [show, toggleDisplay] = useState(props.show || false);

  let selectImg = (e) => {
    if (e.type === 'drop') {
      e.preventDefault();
    }
    let img = e.type === 'drop' ? e.dataTransfer.files[0] : e.target.files[0];
    let src = img && URL.createObjectURL(img);
    if (src) {
      setSrc(src);
    }
  };
  let closeModal = useCallback(() => toggleDisplay(false), []);
  let openModal = useCallback(() => toggleDisplay(true), []);
  let openSelect = useCallback(() => selectEl.current.click(), []);
  let onDragOverCapture = useCallback((e) => e.preventDefault());
  let onOk = useCallback(
    (e) => {
      props.onOk(selectEl.current.files[0], e);
      closeModal();
    },
    [props.onOk],
  );

  return (
    <div className="add-image" style={{ marginRight: '20px' }} ref={box}>
      <Button onClick={openModal}>{props.text}</Button>
      <Modal visible={show} title={props.title} onCancel={closeModal} onOk={onOk}>
        <span>点击 / 拖拽 即可上传</span>
        <div
          className="select-img"
          onClick={openSelect}
          onDrop={selectImg}
          onDragOverCapture={onDragOverCapture}
        >
          {!src && '请选择图片'}
          {src && <img src={src} width="100%" />}
        </div>
        <input
          type="file"
          onChange={selectImg}
          ref={selectEl}
          className="add-img-select"
          accept=".png, .jpg, .jpeg"
        />
      </Modal>
    </div>
  );
};

export default AddImage;
