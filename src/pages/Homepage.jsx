import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Discounts from '../components/Discounts';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Products from '../components/Products';

import { useState } from 'react';

const Homepage = ({setProduct}) => {

  const [theme,setTheme]=useState(false);

  const [countqty,setCountqty]=useState(0);

  const [cart,setCart]=useState([])
  
  const toggletheme=()=>{
    setTheme(!theme)
  }
  

  function incrementCount(){
    setCountqty(c => c+1) 
  }

  function Addtocart(item){
    setCart([item,...cart])
    setProduct([item,...cart])
    incrementCount()
  }

  


  return (
    <>
     <Navbar theme={theme} toggletheme={toggletheme} countqty={countqty} />
      <Banner/>
        <About theme={theme} />
        <Products theme={theme} Addtocart={Addtocart} countqty={countqty} />
        <Discounts theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
    </>
  )
}

export default Homepage
