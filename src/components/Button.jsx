import React from 'react';
import ButtonStyle from '../../public/styles/Button.module.css';

function Button({ addTextOnClick }) {
  let buttonArray = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "/",
    "=",
  ];

  return (
    <div className={ButtonStyle.container}>
      {buttonArray.map((button) => (
        <button className={ButtonStyle.button} onClick={() => addTextOnClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default Button;