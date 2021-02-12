
import React from 'react';
import Carousel from  './Carousel'
import NewArrivals from './NewArrivals'
import Trends from './Trends'

function MainHomepage() {
    return (
        <div className="container">
         
          <Carousel />
          <NewArrivals/>
          <Trends/>
        </div>
    );
}
export default MainHomepage;