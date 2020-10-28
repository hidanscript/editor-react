import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Sidebar() {
  const [ files, setFiles ] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000').then(res => {
      setFiles(res.data.files);
    });
  }, []);

  return (
    <div className="sidebar">
      {files.map((file, index) => {
        let className = '';
        if (file.endsWith('.js')) {
          className = "fab fa-js-square icon-js";
        } else if (file.endsWith('.py')) {
          className = "fab fa-python icon-python";
        } else {
          className = "fas fa-python icon-folder";
        }
        return <div key={index} className="sidebar-items">
                  <i className={className}></i>
                  {file}
               </div>
      })}
    </div>
  );
}

export default Sidebar;
