import { React, useEffect, useState, useRef } from 'react'
import ListItems from "./ListItems"
import SortingDropdown from "./SortingDropdown"


function Documentaries() {

    const [selectedSort, setSelectedSort] = useState();
    
    function handleDropdownChanges(s){
        console.log(s);
        setSelectedSort(s);
    }

    return (
        <>
            <SortingDropdown change={handleDropdownChanges}></SortingDropdown>
            <ListItems alg={selectedSort}></ListItems>
        </>
    );

}

export default Documentaries;