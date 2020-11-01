import React from 'react';
import { icons } from '../sidebar/icons';
function Tabs({ file }) {

  const getClassNameByIconExtension = (file) => {
    if (!file.name) return;
    const nameSplit = file.name.split('.');
    const extension = nameSplit[nameSplit.length - 1].toUpperCase();
    return icons[`${extension}_ICON`] || icons.FOLDER_ICON;
  };

  return (
    <div className="tabs">
      <div className="tabs">
          <div className="tab-item-active">
              <i className={ 'tab-icon ' + getClassNameByIconExtension(file) }></i>
              <span>{file.name}</span>
          </div>
      </div>
    </div>
  );
}

export default Tabs;
