import "./App.css";
import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MainHomepage from "./Components/Homepage/MainHomepage";
import About from "./Components/About";
import CategoriesMain from "./Components/Categories/CategoriesMain";
import MainPlayPage from './Components/Playpage/MainPlayPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg txt-color">
      <Router>
        <Switch>
          <Route path="/home">
            <MainHomepage />
          </Route>
          <Route path="/categories">
            <CategoriesMain />
          </Route>
        </Switch>
      </Router>
      <MainPlayPage />
    </div>
  );
}

export default App;  



