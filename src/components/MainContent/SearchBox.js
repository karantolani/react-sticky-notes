import './SearchBox.css';
import searchIcon from '../images/search.svg';

const SearchBox = ({value, onChange}) => {
    return (
        <div className="search-box">
            <img src={searchIcon} className='search-icon' alt="Search Box"/>
            <input placeholder='Search' value={value} className="search-input" type="text" onChange={onChange}/>
        </div>        
    )
}

export default SearchBox;