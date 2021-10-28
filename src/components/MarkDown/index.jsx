import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const MarkDown = (props, ref) => {
  let element =
    typeof props.element === 'string' ? document.getElementById(props.element) : props.element;
  let id = props.id;
  if (!id) {
    throw new Error("<MarkDown id='' /> 请输入id");
  }

  useEffect(() => {
    if (element instanceof Node) {
      id = element.id;
    }
    ref.current = editormd(id, {
      path: '/editormdlib/',
    });
  });

  if (element) {
    if (element instanceof Node) return createPortal(null, element);
    throw new Error(`<MarkDown element="" /> markdown element 不是一个有效元素`);
  }

  return <div id={props.id}></div>;
};

export default forwardRef(MarkDown);
