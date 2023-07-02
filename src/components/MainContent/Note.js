import RoundButton from '../RoundButton';
import './Note.css';
import penImg from '../images/edit.svg';
import checkImg from '../images/check.svg';
import { useEffect, useRef, useState, useMemo, useContext } from 'react';
import NoteDispatchContext from '../context/NoteDispatchContext';

const formatDate = date => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
}

const Note = ({noteInfo, query, onContextMenu}) => {
    const classList = `note-container ${noteInfo.colorClass}`;
    const textAreaRef = useRef(null);
    const [noteContent, setContent] = useState(noteInfo.content);
    const [editMode, setEditMode] = useState(noteInfo.content.length === 0);
    const dispatch = useContext(NoteDispatchContext);

    const memoizedDate = useMemo(() => formatDate(noteInfo.date), [noteInfo]);;
    const visible = editMode || noteContent.includes(query);

    const changeHandler = (e) => {
        setContent(e.target.value);
    } 

    const handleContextMenu = (e) => {
        onContextMenu(e, noteInfo.id);
    }

    const handleEditBtnClick = () => {
        if (editMode)
            dispatch({type: "UPDATE_NOTE", id: noteInfo.id, content: noteContent});

        setEditMode(!editMode);
    }


    useEffect(() => {
        if (editMode)
            textAreaRef.current.focus();
    }, [editMode]);


    return (
        <div style={{display: visible ? "flex": "none"}} onContextMenu={visible ? handleContextMenu : null} className={classList}>
            <textarea ref={textAreaRef} readOnly={!editMode} maxLength={150} className='note-content' onChange={changeHandler} value={noteContent}></textarea>
               <div className='note-info'>
                <p className='date'>{memoizedDate}</p>
                <RoundButton 
                    selImg={checkImg} unselImg={penImg} 
                    width={16} height={16} 
                    btnState={editMode}
                    onClick={handleEditBtnClick}
                    />
            </div>
        </div>
    )
}

export default Note;