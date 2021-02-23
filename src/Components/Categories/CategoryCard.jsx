import React from 'react'
import '../../category.css'

import { Container, Row, Col } from "react-bootstrap"
import {
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';

function CategoryCard(props) {

    let { url } = useRouteMatch();
    const item = props.item;
    return (
        <div className="custom-card" onClick={() => {
            console.log("category card clicked!");
        }}>
            <Link to={`${url}/${item.url}`}>
                <div className="imgBx">
                    <img src={item.img} alt="images" />
                </div>
                <div className="details">
                    <h2>{item.name}</h2>
                </div>
            </Link>
        </div>
    );

}

export default CategoryCard;