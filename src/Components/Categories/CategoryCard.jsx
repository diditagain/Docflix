import React from 'react'
import '../../category.css'

import { Container, Row, Col } from "react-bootstrap"

function CategoryCard(props){

    const item = props.item;
    return(
        <div className="custom-card" onClick={()=>{
            console.log("category card clicked!");
        }}>
            <div className="imgBx">
                <img src="https://picsum.photos/id/789/200/300" alt="images" />
            </div>
            <div className="details">
                <h2>{item.name}</h2>
            </div>
        </div>
    );

}

export default CategoryCard;