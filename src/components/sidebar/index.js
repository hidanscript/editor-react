import React, { useState, useEffect } from 'react';
import { icons } from './icons';
import { readDirectory, readFile } from '../../lib/files/loader';

function Sidebar({ setCode, setCurrentFile }) {
  const [ files, setFiles ] = useState([]);

  const selectFile = (file) => {
    const content = readFile(file.dir);
    setCurrentFile(file.name);
    setCode(content);
  };

  useEffect(() => {
    console.log(readDirectory('./public/', setFiles));
  }, []);

  const getClassNameByIconExtension = (file) => {
    const nameSplit = file.name.split('.');
    const extension = nameSplit[nameSplit.length - 1].toUpperCase();
    return icons[`${extension}_ICON`] || icons.FOLDER_ICON;
  };

  return (
    <div className="sidebar">
      {files.map((file, index) => {
        const className = getClassNameByIconExtension(file);
        return <div key={index} className="sidebar-items" onClick={() => selectFile(file)}>
                  <i className={className}></i>
                  {file.name}
               </div>
      })}
    </div>
  );
}

export default Sidebar;
