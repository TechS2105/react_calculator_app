import React from 'react';
import DisplayStyle from '../../public/styles/Display.module.css';

function Display({ inputVal }) {
  return (
    <input
      type="text"
      className={DisplayStyle.inputSection}
      readOnly
      value={inputVal}
    />
  );
}

export default Display;