import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Marquee from '../components/Marquee'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'

const HomePage = () => {
    return (
        <div className='w-full h-full px-5 md:px-10 lg:px-15'>
            <Navbar />
            <Hero />
            <About />
            <Marquee/>
            <Section2/>
            <Section3/>

        </div>
    )
}

export default HomePage