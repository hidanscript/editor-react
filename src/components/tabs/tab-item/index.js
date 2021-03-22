import React from 'react';
import { icons } from '../../sidebar/icons';

function TabItem ({ file }) {
  const getClassNameByIconExtension = (file) => {
    if (!file.name) return;
    const nameSplit = file.name.split('.');
    const extension = nameSplit[nameSplit.length - 1].toUpperCase();
    return icons[`${extension}_ICON`] || icons.FOLDER_ICON;
  };

  return (
    <div className="tab-item-active">
      <i className={ 'tab-icon ' + getClassNameByIconExtension(file) }></i>
      <span>{file.name}</span>
      <i className="fas fa-times-circle tab-close-icon"></i>
    </div>
  );
}

export default TabItem;
