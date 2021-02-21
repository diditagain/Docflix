import "./App.css";
import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Categories from './Components/Categories/Categories';
import Documentaries from "./Components/DocumentaryList/Documentaries"

import MainHomepage from "./Components/Homepage/MainHomepage";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
//import CategoriesMain from "./Components/Categories/CategoriesMain";
import MainPlayPage from './Components/Playpage/MainPlayPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {routers} from './Components/data/router';



function App() {

  const routeMaps = routers.map((item, index) =>
    <Route path={item.link} exact={item.isExact} component={item.component} />
  );


  return (
    <div className="bg txt-color">

      <Router>
        <NavBar />
        <Switch>
          {routeMaps}
          {/* <Route path="/home">
            <MainHomepage />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;



