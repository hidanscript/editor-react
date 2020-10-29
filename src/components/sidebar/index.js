import React, { useState, useEffect } from 'react';
import { readDirectory, readFile } from '../../lib/files/loader';

function Sidebar({ setCode }) {
  const [ files, setFiles ] = useState([]);

  const selectFile = (file) => {
    const content = readFile(file.dir);
    setCode(content);
  };

  useEffect(() => {
    console.log(readDirectory('./', setFiles));
  }, []);

  return (
    <div className="sidebar">
      {files.map((file, index) => {
        let className = '';
        if (file.name.endsWith('.js')) {
          className = "fab fa-js-square icon-js";
        } else if (file.name.endsWith('.py')) {
          className = "fab fa-python icon-python";
        } else {
          className = "fas fa-python icon-folder";
        }
        return <div key={index} className="sidebar-items" onClick={() => selectFile(file)}>
                  <i className={className}></i>
                  {file.name}
               </div>
      })}
    </div>
  );
}

export default Sidebar;
