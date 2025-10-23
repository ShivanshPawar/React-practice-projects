import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Marquee from '../components/Marquee'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'

const HomePage = () => {

    const testimonials = [
        {
            id: 1,
            name: "Mr. Rajesh Khanna",
            project: "Khanna Heights",
            type: "Residential Project",
            description:
                "The team delivered exactly what we envisioned — a modern, durable, and energy-efficient apartment complex. Their project tracking updates and transparent workflow made construction stress-free."
        },
        {
            id: 2,
            name: "Mrs. Neha Verma",
            project: "Verma Business Plaza",
            type: "Commercial Project",
            description:
                "From design consultation to finishing touches, everything was handled with precision. I could monitor daily progress online — something no contractor had offered me before!"
        },
        {
            id: 3,
            name: "Mr. Aarav Mehta",
            project: "Greenstone Residency",
            type: "Villa Project",
            description:
                "I’m amazed by the quality control and on-time delivery. The platform’s live progress dashboard kept me informed of every milestone achieved on-site."
        },
        {
            id: 4,
            name: "Mr. Sanjay Patel",
            project: "Patel Manufacturing Unit",
            type: "Industrial Project",
            description:
                "Their team managed our large-scale factory construction efficiently. Every stage — from foundation to roofing — was executed with detailed planning and proper safety standards."
        },
        {
            id: 5,
            name: "Mrs. Priya Sharma",
            project: "City Infrastructure Upgrade – Phase II",
            type: "Government Project",
            description:
                "This was a complex project involving multiple contractors. The digital documentation and coordination tools made communication seamless and ensured the project stayed on schedule."
        },
        {
            id: 6,
            name: "Mr. Rohit Bansal",
            project: "Lotus Health Care Center",
            type: "Hospital Project",
            description:
                "I appreciated their professionalism and real-time reports. Quality construction, timely updates, and zero compromise on materials — highly recommend their service!"
        },
        {
            id: 7,
            name: "Mrs. Kavita Singh",
            project: "Sunrise International School Campus",
            type: "Educational Project",
            description:
                "They transformed our design concept into a beautiful and functional campus. The construction tracking portal made it easy for our management to stay in the loop."
        }
    ];


    return (
        <div className='w-full h-full px-5 md:px-10 lg:px-15'>
            <Navbar />
            <Hero />
            <About />
            <Marquee />
            <Section2 />
            <Section3 />
            <Section4 testimonials={testimonials} />

        </div>
    )
}

export default HomePage