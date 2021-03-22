import React, { useState, useEffect } from 'react';
import { icons } from './icons';
import { readDirectory, readFile } from '../../lib/files/loader';

function Sidebar({ setCode, setCurrentFile }) {
  const [ files, setFiles ] = useState([]);

  const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n-i-1; j++) {
        if (arr[j].name > arr[j+1].name) {
          const temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  };

  const selectFile = (file) => {
    const content = readFile(file.dir);
    setCurrentFile(file);
    setCode(content);
  };

  const sortFiles = (files) => {
    const newFiles = bubbleSort(files);
    setFiles(newFiles);
  };

  useEffect(() => {
    readDirectory('./', sortFiles);
  }, []);

  const getClassNameByIconExtension = (file) => {
    if (!file.name) return;
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
