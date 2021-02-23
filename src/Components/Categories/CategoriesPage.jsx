import React from 'react';
import {
    useParams
} from "react-router-dom";
import dataset from '../../data/documentraies'
import Documentaries from '../DocumentaryList/Documentaries'

function CategoriesPage(props) {
    const { categoryID } = useParams();
    console.log(categoryID);

    const result = dataset.filter(item => item.category.toLowerCase() == categoryID.toLowerCase()).slice();
    console.log(Number.parseInt("2134200",10));
    return(
        <Documentaries searchResult={result}></Documentaries>
    );

}

export default CategoriesPage;