import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import GroceryHero from '../components/GroceryHero';
import GroceryScreens from '../components/GroceryScreens';
import GrocerySlider from '../components/GrocerySlider';
import Features from '../components/Features';
import DeliveryContent from '../components/DeliveryContent';

export default class ZeiqDelivery extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Digital Alcoholic Delivery"
          description="Digital Alcoholic Delivery App"
        />
        <GroceryHero />
        <GroceryScreens />
        <GrocerySlider />
        <Features
          image="/images/smartDownload.jpg"
          title="DIGITAL ALCOHOLIC DELIVERY MOBILE APP FEATURES"
          buttonName="DOWNLOAD USER APP"
        />
        <Features
          flex
          image="/images/smartOpen.jpg"
          title="DIGITAL ALCOHOLIC DELIVERY APP DASHBOARD FEATURES"
          buttonName="APP LIVE DEMO"
        />
        <DeliveryContent />
      </Layout>
    );
  }
}
