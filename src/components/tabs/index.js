import React from 'react';

function Tabs({ file }) {
  return (
    <div className="tabs">
      <div className="tabs">
          <div className="tab-item-active">
              <i className="fab fa-js-square icon-js tab-icon"></i>
              <span>{file}</span>
          </div>
      </div>
    </div>
  );
}

export default Tabs;
