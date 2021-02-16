import React from "react"
import '../../category.css'
import { Container, Row, Col } from "react-bootstrap"
import CategoryCard from "./CategoryCard"

const categories = [
    {
        name: "Science",
        img: "Science"
    },
    {
        name: "History",
        img: "History"
    },
    {
        name: "Politic",
        img: "Politic"
    },
    {
        name: "Wild Nature",
        img: "WildNature"
    },
    {
        name: "Art",
        img: "Art"
    },
    {
        name: "Sports",
        img: "Sports"
    },
    {
        name: "Culture",
        img: "Culture"
    },
    {
        name: "Biography",
        img: "Biography"
    },
    {
        name: "Travel",
        img: "Travel"
    },
    {
        name: "Crime",
        img: "Crime"
    }
]

function Categories(props) {

    const cards = categories.map((item, index) => {
        return (
            <CategoryCard item={item}></CategoryCard>
        );
    });

    return (<div className="grid">
        {cards}
    </div>);
}

export default Categories;