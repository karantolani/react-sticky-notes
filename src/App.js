import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import { useEffect, useReducer, useState } from 'react';
import reduceNotes from './components/reducer/reduceNotes';
import NoteDispatchContext from './components/context/NoteDispatchContext'

const App = () => {
    const [notes, dispatch] = useReducer(reduceNotes, []);
    const [mobileMode, setMobileMode] = useState(false);

    useEffect(() => {
        const listener = () => {
            const query = "(max-width: 450px)";
            const media = window.matchMedia(query);
            
            console.log(media.matches);
            setMobileMode(media.matches);
        }

        listener();
        window.addEventListener("resize", listener);

        dispatch({type:'LOAD_NOTES'});
        return () => window.removeEventListener("resize", listener);

    }, []);

	return (
        <NoteDispatchContext.Provider value={dispatch}>
            <div className="App">
                {mobileMode ? null: <Sidebar /> }
                <MainContent mobileMode={mobileMode} notes={notes}/>
            </div>
        </NoteDispatchContext.Provider>
	);
}

export default App;