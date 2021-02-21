import { React, useEffect, useState, useRef } from 'react'
import ListItems from "./ListItems"
import SortingDropdown from "./SortingDropdown"
import { Container, Row, Col } from "react-bootstrap"


function Documentaries() {

    const [selectedSort, setSelectedSort] = useState();
    
    function handleDropdownChanges(s){
        console.log(s);
        setSelectedSort(s);
    }

    return (
        <Container>
            <SortingDropdown change={handleDropdownChanges}></SortingDropdown>
            <ListItems alg={selectedSort}></ListItems>
        </Container>
    );

}

export default Documentaries;