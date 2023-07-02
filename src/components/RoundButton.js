import './RoundButton.css';
import React, { forwardRef } from 'react';

const RoundButton = ({selImg, unselImg, width, height, btnState, onClick}, ref) => {

    const clickHandler = () => {
        onClick();
    }

    return (
        <div ref={ref} className="round-btn-container" onClick={clickHandler}>
            <img src={btnState ? selImg : unselImg} height={height} width={width} alt='Button'/>
        </div>
    )
}

export default forwardRef(RoundButton);