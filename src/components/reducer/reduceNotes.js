const asyncLocalStorage = {
    setItem(key, value) {
        return Promise.resolve().then(() => {
            window.localStorage.setItem(key, value);
        });
    }
};

let NOTE_COUNTER = 0;

const reduceNotes = (notes, action) => {
    switch (action.type) {
        case 'LOAD_NOTES':
            const loadedNotes = window.localStorage.getItem('notes');
            if (loadedNotes === null)
                return [];

            NOTE_COUNTER = window.localStorage.getItem('counter');
            if (NOTE_COUNTER === null) NOTE_COUNTER = 0;
            
            return JSON.parse(loadedNotes).map(note => {
                return {...note, date: new Date(Date.parse(note.date))};
            });

        case "ADD_NOTE":
            NOTE_COUNTER++;
            let note = {
                id: NOTE_COUNTER,
                colorClass: action.color,
                content: "",
                date: new Date()
            }
            const updatedNotes = [note, ...notes];

            asyncLocalStorage.setItem('notes', JSON.stringify(updatedNotes));
            asyncLocalStorage.setItem('counter', NOTE_COUNTER);
            return updatedNotes;
        case "UPDATE_NOTE":
            const newNotes = notes.map((note, i) => {
                if (note.id === action.id)
                    return {...note, content: action.content, date: new Date()}
                else
                    return note;
            });

            asyncLocalStorage.setItem('notes', JSON.stringify(newNotes));
            return newNotes;
        case "DELETE_NOTE":
            const uNotes = notes.filter((note) => {
                return note.id !== action.id;
            });
            
            asyncLocalStorage.setItem('notes', JSON.stringify(uNotes));
            return uNotes;

        default:
            return [];
    }
}

export default reduceNotes;