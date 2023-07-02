import './ContextMenu.css';

const ContextMenu = ({top, left, children}) => {
    return (
        <div style={{top: top, left: left}} className="context-menu">
            {children}
        </div>
    )
}

export default ContextMenu;