import "./App.css";
import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MainHomepage from "./Components/Homepage/MainHomepage";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CategoriesMain from "./Components/Categories/CategoriesMain";
import MainPlayPage from './Components/Playpage/MainPlayPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <MainPlayPage />
    </div>
  );
}

export default App;  



