import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Marquee from '../components/Marquee'
import Section2 from '../components/Section2'

const HomePage = () => {
    return (
        <div className='w-full h-full px-5 md:px-10 lg:px-15'>
            <Navbar />
            <Hero />
            <About />
            <Marquee/>
            <Section2/>
        </div>
    )
}

export default HomePage