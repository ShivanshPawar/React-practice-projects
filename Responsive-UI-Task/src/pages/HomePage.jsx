import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Marquee from '../components/Marquee'

const HomePage = () => {
    return (
        <div className='w-full h-full px-5 md:px-10 lg:px-15'>
            <Navbar />
            <Hero />
            <About />
            <Marquee/>
        </div>
    )
}

export default HomePage