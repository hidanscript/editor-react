import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Prism from 'prismjs';
import './App.scss';

function App() {
  const [ writtenCode, setCode ] = useState('');
  const [ html, setHtml ] = useState('');

  useEffect(() => {
    let html = writtenCode;
    let newHtml = '';
    const codigo = document.querySelector('#codigo');
    if (html.length) {
      html = html.split(' ');
      for(let i = 0; i < html.length; i++) {
        if(html[i] == 'function' || html[i] == 'const' || html[i] == 'let') {
          const newFunction = document.createElement('span');
          newFunction.className = "funcion";
          newFunction.innerHTML = html[i] + ' ';
          newHtml += newFunction.outerHTML;
        } else {
          if (html[i].match(/\n/)) {
            const breakline = document.createElement('br');
            newHtml += breakline.outerHTML + ' ';  
          }
          if (!isNaN(html[i])) {
            const newNumber = document.createElement('span');
            newNumber.className = "numero";
            newHtml += newNumber.outerHTML;
          } else {
            newHtml += html[i] + ' ';
          }
        }
      }
      codigo.innerHTML = newHtml;
    } else {
      codigo.innerHTML = '';
    }
  }, [writtenCode]);

  const addEnter = (e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
      const codigo = document.querySelector('#codigo');
      codigo.innerHTML += document.createElement('br').outerHTML;
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-items"><i className="fas fa-folder-open icon-folder"></i>src</div>
        <div className="sidebar-items"><i className="fab fa-js-square icon-js sub"></i>index.js</div>
        <div className="sidebar-items"><i className="fab fa-python icon-python sub"></i>users.py</div>
        <div className="sidebar-items"><i className="fas fa-folder icon-folder"></i>build</div>
        <div className="sidebar-items"><i className="fas fa-folder icon-folder"></i>components</div>
    </div>
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
          <div id="codigo"></div>
          <textarea
            value={writtenCode}
            onChange={code => { 
              setCode(code.target.value || '');
            }}
            className="main-textarea"
            spellCheck="false"
            onKeyPress={(event) => addEnter(event)}
          />
        </div>
        
    </div>
    </div>
  );
}

export default App;
