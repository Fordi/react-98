import React, { useState } from 'react';

import classNames from '../helpers/classNames';
import decorate from '../helpers/decorate';

import TaskBar from './TaskBar';

export default ({ children, className }) => {
  const [windowList, setWindowList] = useState([]);

  const addWindow = w => {
    if (windowList.findIndex(({uid}) => w.uid === uid) === -1) {
      setWindowList([...windowList, w]);
    }
  };
  const removeWindow = w => {
    setWindowList(windowList.filter(({uid}) => w.uid !== uid));
  };
  return (
    <div className={classNames(
      'desktop',
      className,
    )}>
      <div className="desktop-windows">
        {decorate(children, { addWindow, removeWindow })}
      </div>
      <TaskBar windowList={windowList}/>
    </div>
  );

};
