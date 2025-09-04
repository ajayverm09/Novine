import React from 'react'
import HeroSlider from '../Components/HomeHero'
import PromoCards from '../Components/HomeCard'
import SpecialOffer from '../Components/HomeOffer'
import BestSellers from '../Components/HomeSeller'
import FeaturesSection from '../Components/HomeFeature'
import NewsletterSection from '../Components/HomeNewsletter'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSlider/>
      <PromoCards/>
      <SpecialOffer/>
      <FeaturesSection/>
      <BestSellers/>
      <NewsletterSection/>
    </div>
  )
}

export default Home
