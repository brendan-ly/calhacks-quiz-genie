import React from 'react';
import { useState, useEffect } from "react";

const QuizButton = ({ 
    id, 
    text,
    backgroundColor = '#423B70',
    status = 'unclicked',
    isCorrect = false
 }) => {

    const [color, setColor] = useState(backgroundColor)
    const [buttonStatus, setButtonStatus] = useState(status)
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleMouseOver = () => {
        if (buttonStatus === 'unclicked') {
            (setColor('#1E88E5'));
        }
    }
    
    const handleMouseOut = () => {
        setColor(colorToStatus[buttonStatus]);
    }

    const handleClick = () => {
        isCorrect ? setButtonStatus('right') : setButtonStatus('wrong');
    }

    const colorToStatus = {
        'unclicked': '#423B70',
        'right': '#699742',
        'wrong': '#ff5757',
    }

    return ( 
        <button 
            style={{
                textAlign: 'left',         // 'text-left'
                padding: '12px 16px',      // 'py-3 px-4' -> padding Y: 3*4px = 12px, padding X: 4*4px = 16px
                height: 'auto',            // 'h-auto'
                whiteSpace: 'normal',      // 'whitespace-normal'
                backgroundColor: color, // 'bg-newpurple-500' -> Assuming 'newpurple-500' is #6B46C1
                color: 'white',            // 'text-white'
                borderRadius: '0.375rem',  // 'rounded-md' -> 0.375rem = 6px
                maxWidth: '24rem',         // 'max-w-96' -> 96 * 0.25rem = 24rem
                transition: 'background-color 0.3s ease', // Ensures smooth hover transition
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}>
            { text }
        </button>
    )
}

export default QuizButton;