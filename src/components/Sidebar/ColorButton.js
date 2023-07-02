import React, { useContext } from 'react';
import NoteDispatchContext from '../context/NoteDispatchContext';
import './ColorButton.css';

const ColorButton = ({colorClass, onColorClick}) => {
    const dispatch = useContext(NoteDispatchContext);

    let classList = `color-btn ${colorClass}`;
    

    const handleBtnClick = () => {
        dispatch({type: "ADD_NOTE", color: colorClass});
        onColorClick();
    }

    return (
        <div className={classList} onClick={handleBtnClick}></div>
    )
}

export default ColorButton;