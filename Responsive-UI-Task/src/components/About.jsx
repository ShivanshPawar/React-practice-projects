import React from 'react'

const About = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-between py-5'>
            <div className='w-full lg:w-[60%] flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>Who we are?</h1>
                <p className='md:mr-20 lg:mr-25'>We are a company dedicated to building a better world through innovative construction solutions. and we strive to deliver excellence in every project. We prioritize safety, quality, and transparent communication at every  stage — from planning and permitting through construction and handover.</p>
            </div>
            <div className='w-full py-5 lg:pl-10 flex justify-between lg:w-[40%]'>
                <div className='flex flex-col gap-5 md:gap-12'>
                    <div><h1 className='text-2xl font-bold'>10+</h1> Project Completed</div>
                    <div><h1 className='text-2xl font-bold'>10001</h1> Hours Worked</div>
                </div>
                <div className='flex flex-col gap-5 md:gap-12'>
                    <div><h1 className='text-2xl font-bold'>500+</h1> Happy Clients</div>
                    <div><h1 className='text-2xl font-bold'>20+</h1> Awards Won</div>
                </div>
            </div>
        </div>
    )
}

export default About