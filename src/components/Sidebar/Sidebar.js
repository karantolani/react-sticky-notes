import './Sidebar.css';
import ColorSelector from './ColorSelector';


const Sidebar = () => {

    return (
        <div className='Sidebar'>
            <h4 className='app-heading'>Sticky</h4>
            <ColorSelector/>
        </div>
    )
}

export default Sidebar;