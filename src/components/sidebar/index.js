import React, { useState, useEffect } from 'react';
import { readDirectory, readFile } from '../../lib/files/loader';

function Sidebar({ setCode, setCurrentFile }) {
  const [ files, setFiles ] = useState([]);

  const selectFile = (file) => {
    const content = readFile(file.dir);
    setCurrentFile(file.name);
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
        } else if (file.name.endsWith('.md')) {
          className = "fab fa-readme icon-python";
        } else if (file.name.endsWith('.json')) {
          className = "fas fa-chevron-right icon-js";
        } else if (file.name.endsWith('.log')) {
          className = "fas fa-bug icon-python";
        } else if (file.name.endsWith('.git') || file.name.endsWith('.gitignore')) {
          className = "fab fa-git-alt icon-git";
        } else {
          className = "fas fa-folder icon-folder";
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
