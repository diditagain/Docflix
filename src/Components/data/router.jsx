import Categories from '../Categories/Categories';
import Documentaries from "../DocumentaryList/Documentaries"
import CategoriesPage from "../Categories/CategoriesPage"
import MainHomepage from "../Homepage/MainHomepage";
import About from "../About";
import Contact from "../Contact";
import SearchPage from "../Search/SearchPage";
import DocumantaryDetail from "../DocumentaryDetail/DocumentaryDetail";


export const routers = [
    { link: "/", title: "Home", component: MainHomepage, isExact: true, isLink: true },
    { link: "/home", title: "Home", component: MainHomepage, isExact: true, isLink: true },
    { link: "/categories", title: "Categories", component: Categories, isExact: true, isLink: true },
    { link: "/categories/:categoryID", title: "Documentaries", component: CategoriesPage, isExact: false, isLink: false },
    { link: "/about", title: "About", component: About, isExact: false, isLink: true },
    { link: "/contact", title: "Contact", component: Contact, isExact: false, isLink: true },
    { link: "/search", title: "Search", component: SearchPage, isExact: false, isLink: true },
    { link: "/documentaries/:dID", title: "Search", component: DocumantaryDetail, isExact: false, isLink: true },
];