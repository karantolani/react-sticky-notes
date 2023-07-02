import { useDeferredValue, useState, useEffect, useRef, useContext } from "react";
import Note from "./Note";
import ContextMenu from "../ContextMenu";
import MenuItem from "../MenuItem";
import trash from '../images/trash.svg';
import NoteDispatchContext from "../context/NoteDispatchContext";

const NoteContextMenuWrapper = ({notes, query}) => {
    const deferredValue = useDeferredValue(query);
    const [ctxtMenuVisible, setCtxtMenuVisible] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    const currentElementRef = useRef();
    const dispatch = useContext(NoteDispatchContext);

    const handleNoteContextMenu = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setCtxtMenuVisible(true);
        setPosition({
            x: e.pageX,
            y: e.pageY
        });
        currentElementRef.current = id;
    }

    const deleteBtnClick = (e) => {
        e.stopPropagation();
        const id = currentElementRef.current;
        dispatch({type: "DELETE_NOTE", id: id});
        setCtxtMenuVisible(false);
        currentElementRef.current = -1;
    }   


    useEffect(() => {
        const handleClick = () => setCtxtMenuVisible(false);
        document.addEventListener("click", handleClick);
        window.addEventListener("resize", handleClick);
        return () => {
          document.removeEventListener("click", handleClick);
          window.removeEventListener("resize", handleClick);
        };
      }, []);

    return (
        <div className='notes-container'>
            {
                notes.map((note) => 
                    <Note key={note.id} noteInfo={note} query={deferredValue} onContextMenu={handleNoteContextMenu} />    
                )
            }
            {
                ctxtMenuVisible ? (
                <ContextMenu top={position.y} left={position.x} >
                    <MenuItem img={trash} text="Delete" textColor="red" onClick={deleteBtnClick}/>
                </ContextMenu>) : null
            }
        </div>
    )
}

export default NoteContextMenuWrapper;