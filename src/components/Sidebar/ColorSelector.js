import './ColorSelector.css';
import { useRef, useState } from 'react';
import plusImg from '../images/plus.svg';
import RoundButton from '../RoundButton';
import ColorButton from './ColorButton';

const colorsClassList = ['light-yellow', 'light-red', 'light-purple', 'light-blue', 'light-green'];

const ColorSelector = ({className}) => {

    const [colorsVisible, setColorsVisibilty] = useState(false);
    const addNoteBtnRef = useRef();

    const handleAddNoteBtnClick = () => {
        if (colorsVisible)
            addNoteBtnRef.current.style.transform = "rotate(0deg)";
        else
            addNoteBtnRef.current.style.transform = "rotate(360deg)";

        setColorsVisibilty(!colorsVisible);
    }

    return (
        <div className={className}>
            <RoundButton 
                    ref={addNoteBtnRef}
                    selImg={plusImg}
                    unselImg={plusImg} 
                    width={20} height={20}
                    btnState={colorsVisible}
                    onClick={handleAddNoteBtnClick}
                    />
                <div className={`color-selector${colorsVisible? "": " hidden"}`}>
                    {
                        colorsClassList.map((cname, index) => 
                            <ColorButton
                            key={index}
                            colorClass={cname}
                            onColorClick={handleAddNoteBtnClick}
                            />
                        )
                    }
                </div>
        </div>
    )
}

export default ColorSelector;