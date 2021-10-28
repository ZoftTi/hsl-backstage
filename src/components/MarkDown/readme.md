```jsx
import { useRef } from 'react';

function App() {
  let ref = useRef();
  return (
    <>
      <button
        onClick={() => {
          console.log(ref.current.getMarkdown());
        }}
      >
        获取MarkDown内容
      </button>
      <MarkDown id="markdown" ref={ref}></MarkDown>;
    </>
  );
}
```

- https://pandao.github.io/editor.md/examples/index.html

| `params`  | 描述                                                 |
| --------- | ---------------------------------------------------- |
| `id`      | 生成的`markdown`编译器的容器                         |
| `ref`     | `markdown`编译器实例                                 |
| `element` | `markdown`渲染容器, 传入元素`id`或者, 带有`id`的元素 |
