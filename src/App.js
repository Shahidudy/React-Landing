import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer';

import "./styles.css"

function MyApp(){
    return(
    <div className='container'> 
      < Header/>
      < Hero/>
      < Footer/>
    </div>
    )
  }

  export default MyApp;