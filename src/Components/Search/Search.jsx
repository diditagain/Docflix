import React, { useRef } from "react";
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useRouteMatch,
    useHistory
} from "react-router-dom";

function Search() {
    let { path, url } = useRouteMatch();
    const inputValue = useRef();
    const history = useHistory();
    function handleSubmit() {
        history.push(`/search?q=${inputValue.current.value}`);
    }

    return (<div className="search ">
        <input type="text" name="q"
            ref={inputValue} className="searchTerm" placeholder="What are you looking for?" />
        <button type="submit" onClick={handleSubmit} className="searchButton" >
            <i className="fa fa-search fa-md"></i>
        </button>
    </div>);
}

export default Search;