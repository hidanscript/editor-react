import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import Sidebar from './components/sidebar';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/material-darker.css';
import './lib/files/loader';
import './App.scss';

function App() {
  const [ code, setCode ] = useState('');

  return (
    <div className="app">
      <Sidebar setCode={setCode} />
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
              theme: 'material-darker',
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
