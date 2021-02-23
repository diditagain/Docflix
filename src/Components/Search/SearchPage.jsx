import React from 'react';
import Documentaries from  '../DocumentaryList/Documentaries';
import dataSet from '../../data/documentraies';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

function SearchPage(){

    let query = new URLSearchParams(useLocation().search);
    const param = query.get("q");

    

    // const dataSet = []; /* Silinecek */

    const searchResult = dataSet.filter(item => item.name.toLowerCase().includes(param.toLowerCase())).slice();
    console.log(param)
    // const searchResult = items.slice(); /* Silinecek */

    return(<Documentaries searchResult={searchResult}/>);
}

export default SearchPage;