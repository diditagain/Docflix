import React from "react"
import '../../category.css'
import { useTranslation } from "react-i18next";
import i18next from "../../i18next";
import { Container, Row, Col } from "react-bootstrap"
import CategoryCard from "./CategoryCard"

import Politic from '../../images/categories/politic.jpg'
import WildNature from '../../images/categories/wildnature.jpg'
import History from '../../images/categories/history.jpg'
import Science from '../../images/categories/science.jpg'
import Art from '../../images/categories/art.jpg'
import Sports from '../../images/categories/sports.jpg'
import Culture from '../../images/categories/culture.jpg'
import Biography from '../../images/categories/biography.jpg'
import Travel from '../../images/categories/travel.jpg'
import Crime from '../../images/categories/crime.jpg'




function Categories(props) {
    const { t } = useTranslation();

    const categories = [
        {
            name: t("Categories.Science"),
            img: Science,
            url:"science"
        },
        {
            name: t("Categories.History"),
            img: History,
            url:"history"
        },
        {
            name: t("Categories.Politic"),
            img: Politic,
            url:"politic"
        },
        {
            name: t("Categories.WildNature"),
            img: WildNature,
            url:"wildnature"
        },
        {
            name: t("Categories.Art"),
            img: Art,
            url:"art"
        },
        {
            name: t("Categories.Sports"),
            img: Sports,
            url:"sports"
        },
        {
            name: t("Categories.Culture"),
            img: Culture,
            url:"culture"
        },
        {
            name: t("Categories.Biography"),
            img: Biography,
            url:"biography"
        },
        {
            name: t("Categories.Travel"),
            img: Travel,
            url:"travel"
        },
        {
            name: t("Categories.Crime"),
            img: Crime,
            url:"crime"
        }
    ]

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