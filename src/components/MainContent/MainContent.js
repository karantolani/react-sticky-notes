import EmptyState from '../EmptyState';
import ColorSelector from '../Sidebar/ColorSelector';
import './MainContent.css';
import blankCanvasImg from '../images/blank_canvas.svg';
import SearchBox from './SearchBox';
import { useState } from 'react';
import NoteContextMenuWrapper from './NotesContextMenu';

const MainContent = ({notes, mobileMode}) => {

    const [inputVal, setInputVal] = useState("");


    const handleChange = e => {
        setInputVal(e.target.value);
    }



    return (
        <div className="MainContent">
            {
                mobileMode ? <h4 className='app-heading large'>Sticky</h4> : null
            }
            <SearchBox value={inputVal} onChange={handleChange}/>
            <div className='notes-wrapper'>
                <h1 className='notes-heading'>Notes</h1>

                {
                    notes.length === 0 ? <EmptyState img={blankCanvasImg} heading="No Notes Found" sub={`Try adding a note by clicking the plus button ${mobileMode? 'at the bottom of the screen' :'in the side bar'}.`}/> :
                    (
                        <NoteContextMenuWrapper notes={notes} query={inputVal} />
                    )
                }



                {
                    mobileMode ? <ColorSelector className="floating-container" /> : null
                }
            </div>
        </div>
    )
}

export default MainContent;