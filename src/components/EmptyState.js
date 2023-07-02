import "./EmptyState.css";

const EmptyState = ({img, heading, sub}) => {
    return (
        <div className="empty-state-wrapper">
            <div className="empty-state">
                <img src={img} className="empty-state-img" alt="Empty State"></img>
                <h2 className="empty-state-heading">{heading}</h2>
                <p className="empty-state-sub">{sub}</p>
            </div>
        </div>
    )
}

export default EmptyState;