import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Tabs from './components/tabs';
import Editor from './components/Editor';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/material-darker.css';
import './lib/files/loader';
import './App.scss';

function App() {
  const [ code, setCode ] = useState('');
  const [ currentFile, setCurrentFile ] = useState('');

  return (
    <div className="app">
      <Sidebar setCode={setCode} setCurrentFile={setCurrentFile} />
    <div className="main-area">
        <Tabs file={currentFile} />
        <Editor code={code} />
      </div>
    </div>
  );
}

export default App;
