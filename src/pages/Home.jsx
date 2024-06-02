import React from 'react'
import Navbar from '../components/Navbar'
import HeroSec from '../components/HeroSec'
import Data from '../data/data.json'
import Features from '../components/Features'
import Advantages from '../components/Advantages'
import Testinomials from '../components/Testinomials'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'

const Home = () => {
    
  return (
 
    <div className='w-[1090px] px-.2rem m-auto'>
    <Navbar/>
      <HeroSec data={Data.hero}/>
      <Features data={Data.features}/>
      <Advantages/>
      <Testinomials data={Data.testimonials}/>
      <Faqs/>
      <Footer/>
      <BottomFooter/>
    </div>
 
  )
}

export default Home
