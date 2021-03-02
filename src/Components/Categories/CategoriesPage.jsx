import React from 'react';
import {
    useParams
} from "react-router-dom";
import dataset from '../../data/documentraies'
import Documentaries from '../DocumentaryList/Documentaries'

function CategoriesPage(props) {
    const { categoryID } = useParams();
    const result = dataset.filter(item => item.category.toLowerCase() == categoryID.toLowerCase()).slice();

    return(
    <div>
        <Documentaries searchResult={result}></Documentaries>
        </div>
    );

}

export default CategoriesPage;