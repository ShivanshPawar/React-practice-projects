import { FileText, Handshake, MessageCircleMore, MessageSquareMore, Search, SlidersVertical } from 'lucide-react'
import React from 'react'

const Section3 = () => {
    return (
        <div className='w-full flex flex-col'>
            <h1 className='text-2xl font-bold mb-5'>Our Projects</h1>

            <div className='w-full flex flex-col lg:flex-row gap-5 mb-5'>
                <div className='lg:w-[40%]'>
                    <p>We build bold commercial icons, resilient infrastructure, and soulful residences—each crafted to leave a lasting legacy.</p>
                    <div className='w-full p-5'>
                        <img className='lg:w-[80%] object-cover rounded-2xl' src="https://i.pinimg.com/1200x/6f/50/1f/6f501f424a904f012a1134ad0fb96742.jpg" alt="" />
                    </div>
                </div>

                <div className='lg:w-[60%] lg:px-20 flex flex-col gap-3'>

                    <div className='w-full flex gap-5 py-5'>
                        <div className='w-[50px] h-[50px] p-3 bg-black rounded-full flex items-center justify-center'><MessageCircleMore color="#ffffff" /></div>
                        <div className='w-[70%]'>
                            <h2 className='font-bold'>Client Meeting</h2>
                            <p className='text-sm'>We discuss your vision, needs, and project goals to plan the perfect start.</p>
                        </div>
                    </div>

                    <hr />

                    <div className='w-full flex gap-5 py-5'>
                        <div className='w-[50px] h-[50px] p-3 bg-black rounded-full flex items-center justify-center'><Search color="#ffffff" /></div>
                        <div className='w-[70%]'>
                            <h2 className='font-bold'>Site Review</h2>
                            <p className='text-sm'>Our team inspects and analyzes the location to ensure safety and feasibility.</p>
                        </div>
                    </div>

                    <hr />

                    <div className='w-full flex gap-5 py-5'>
                        <div className='w-[50px] h-[50px] p-3 bg-black rounded-full flex items-center justify-center'><SlidersVertical color="#ffffff" /></div>
                        <div className='w-[70%]'>
                            <h2 className='font-bold'>Project Configuration</h2>
                            <p className='text-sm'>We customize every construction plan to meet your technical and design standards.</p>
                        </div>
                    </div>

                    <hr />

                    <div className='w-full flex gap-5 py-5'>
                        <div className='w-[50px] h-[50px] p-3 bg-black rounded-full flex items-center justify-center'><FileText color="#ffffff" /></div>
                        <div className='w-[70%]'>
                            <h2 className='font-bold'>Documentation Ready</h2>
                            <p className='text-sm'>All project blueprints, legal papers, and compliance docs are handled seamlessly.</p>
                        </div>
                    </div>

                    <hr />

                    <div className='w-full flex gap-5 py-5'>
                        <div className='w-[50px] h-[50px] p-3 bg-black rounded-full flex items-center justify-center'><Handshake color="#ffffff" /></div>
                        <div className='w-[70%]'>
                            <h2 className='font-bold'>Client Loyalty</h2>
                            <p className='text-sm'>We build long-term trust through transparent work and on-time project delivery.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section3