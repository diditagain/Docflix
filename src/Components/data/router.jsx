import Categories from '../Categories/Categories';
import Documentaries from "../DocumentaryList/Documentaries"

import MainHomepage from "../Homepage/MainHomepage";
import About from "../About";
import Contact from "../Contact";

export const routers = [
    { link: "/", title: "Home", component: MainHomepage, isExact: true, isLink: true },
    { link: "/home", title: "Home", component: MainHomepage, isExact: true, isLink: true },
    { link: "/categories", title: "Categories", component: Categories, isExact: true, isLink: true },
    { link: "/categories/:categoryID", title: "Documentaries", component: Documentaries, isExact: false, isLink: false },
    { link: "/about", title: "About", component: About, isExact: false, isLink: true },
    { link: "/contact", title: "Contact", component: Contact, isExact: false, isLink: true },
];