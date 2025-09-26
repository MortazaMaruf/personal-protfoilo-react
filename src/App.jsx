import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-[#1C2226] text-white'>
   <div className='w-11/12 mx-auto'>
    <Navbar/>
    <Landing/>
    <About/>
    <Skill/>
    <Work/>
    <Footer/>

   </div>
   </div>
  )
}

export default App
