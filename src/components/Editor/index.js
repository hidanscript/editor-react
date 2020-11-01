import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

function Editor({ code }) {
  return (
    <div className="editor">
      <CodeMirror
        value={code}
        className="main-textarea"
        options={{
          theme: 'material-darker',
          keyMap: 'sublime',
          mode: 'jsx',
        }}
      />
    </div>
  );
}

export default Editor;
