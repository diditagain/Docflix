import { React, useEffect, useState, useRef } from 'react'
import ListItems from "./ListItems"
import SortingDropdown from "./SortingDropdown"
import { Container, Row, Col } from "react-bootstrap"
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

// import dataSet from ...



function Documentaries(props) {


    const [selectedSort, setSelectedSort] = useState();

    function handleDropdownChanges(s) {
        console.log(s);
        setSelectedSort(s);
    }

    return (
        <div>
            <div style={{marginLeft:'86px'}}>
                <SortingDropdown change={handleDropdownChanges}></SortingDropdown>
            </div>

            <ListItems searchResult={props.searchResult} alg={selectedSort}></ListItems>
        </div>
    );

}

export default Documentaries;