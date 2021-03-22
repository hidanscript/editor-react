import React from 'react';
import TabItem from './tab-item';

function Tabs({ file }) {
  return (
    <div className="tabs">
        <TabItem file={file} />
    </div>
  );
}

export default Tabs;
