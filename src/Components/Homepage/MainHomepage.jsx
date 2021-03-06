
import React from 'react';
import Carousel from  './Carousel'
import NewArrivals from './NewArrivals'
import Trends from './Trends'
import TopRated from './TopRated'

function MainHomepage() {
    return (
        <div className="container">
         
          <Carousel />
          <NewArrivals/>
          <Trends/>
          <TopRated/>
        </div>
    );
}
export default MainHomepage;