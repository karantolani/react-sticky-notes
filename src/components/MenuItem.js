const MenuItem = ({img, text, textColor, onClick}) => {
    return (
        <div className="menu-item" onClick={onClick}>
            {img === undefined ? null: <img alt="menu item" src={img} width={16} height={16}/>}
            <p style={{color: textColor}} className="menu-item-txt">{text}</p>
        </div>
    )
}

export default MenuItem;