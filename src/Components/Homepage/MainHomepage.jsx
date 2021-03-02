
import React from 'react';
import Carousel from './Carousel'
import NewArrivals from './NewArrivals'
import Trends from './Trends'
import TopRated from './TopRated'
import { useTranslation } from "react-i18next";
import i18next from "../../i18next";
function MainHomepage() {
  const { t } = useTranslation();
  return (
    <div className="container">

      <Carousel />
      <h2 className="mt-5">{t('Homepage.NewArrivals')}</h2>
      <NewArrivals />
      <h2 className="mt-5">{t('Homepage.Trends')}</h2>
      <Trends />
      <h2 className="mt-5">{t('Homepage.TopRated')}</h2>
      <TopRated />
    </div>
  );
}
export default MainHomepage;