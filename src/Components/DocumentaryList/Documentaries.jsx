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

const items = [
    {
        id: 1,
        name: 'ARoom 237',
        view: '2,154,134',
        like: '1,234',
        comment: '34'
    },
    {
        id: 2,
        name: 'BRoom 237',
        view: '3,154,134',
        like: '2,234',
        comment: '44'
    },
    {
        id: 3,
        name: 'DRoom 237',
        view: '4,154,134',
        like: '1,034',
        comment: '54'
    },
    {
        id: 4,
        name: 'Hasan',
        view: '4,254,134',
        like: '6,234',
        comment: '14'
    },
];

function Documentaries() {

    let query = new URLSearchParams(useLocation().search);
    const param = query.get("q");


    const dataSet = []; /* Silinecek */

    // const searchResult = dataSet.filter(item => item.name.toLowerCase().includes(param.toLowerCase())).slice();
    
    const searchResult = items.slice(); /* Silinecek */

    const [selectedSort, setSelectedSort] = useState();
    
    function handleDropdownChanges(s){
        console.log(s);
        setSelectedSort(s);
    }

    return (
        <Container>
            <SortingDropdown change={handleDropdownChanges}></SortingDropdown>
            <ListItems searchResult={searchResult} alg={selectedSort}></ListItems>
        </Container>
    );

}

export default Documentaries;