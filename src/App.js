import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import Sidebar from './components/sidebar';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import './lib/files/loader';
import './App.scss';

let code = "";

function App() {
  return (
    <div className="app">
      <Sidebar />
    <div className="main-area">
        <div className="tabs">
            <div className="tab-item-active">
                <i className="fab fa-js-square icon-js tab-icon"></i>
                <span>index.js</span>
            </div>
            <div className="tab-item">
                <i className="fab fa-python icon-python tab-iconL"></i>
                <span>users.py</span>
            </div>
        </div>
          <div className="editor">
            <CodeMirror
              value={code}
              className="main-textarea"
              options={{
                theme: 'monokai',
                keyMap: 'sublime',
                mode: 'jsx',
              }}
            />
          </div>
    </div>
    </div>
  );
}

export default App;
