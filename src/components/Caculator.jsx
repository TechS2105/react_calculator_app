import React, {useState} from 'react';
import Display from './Display';
import Button from './Button';
import CalculatorStyle from '../../public/styles/Calculator.module.css'

function Calculator({ heading }) {

    const [value, setValue] = useState("");

    function addTextOnClick(buttonText) {
        
        if(buttonText === "C"){

            setValue("");

        } else if (buttonText === "=") {
            
            const result = eval(value);
            setValue(result);

        } else {
            
            const resultValue = value + buttonText;
            setValue(resultValue);

        }

    }
    
    return (

        <>
            <h1 className={CalculatorStyle.heading}> {heading} </h1>
            <Display
    
                inputVal = {value}
                
            />
            <Button
            
                addTextOnClick = {addTextOnClick}
                
            />
        </>

    );

}

export default Calculator;