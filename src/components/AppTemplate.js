import React from 'react';
import './AppTemplate.scss';

const AppTemplate = ({ children }) => {
  return (
    <div className="AppTemplate">
      <div className="app-title">To Do List</div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default AppTemplate;
