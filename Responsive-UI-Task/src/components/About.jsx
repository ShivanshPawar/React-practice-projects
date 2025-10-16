import React from 'react'

const About = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-between py-5'>
            <div className='w-full lg:w-[60%] flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>Who we are?</h1>
                <p className=''>We are a company dedicated to building a better world through innovative <br className='hidden lg:block' /> construction solutions. and we strive to deliver excellence in every project. <br className='hidden lg:block' /> We prioritize safety, quality, and transparent communication at every <br className='hidden lg:block' /> stage — from planning and permitting through construction and handover.</p>
            </div>
            <div className='w-full py-5 flex justify-between lg:w-[40%]'>
                <div className='flex flex-col gap-5'>
                    <div><h1 className='text-2xl font-bold'>10+</h1> Project Completed</div>
                    <div><h1 className='text-2xl font-bold'>10001</h1> Hours Worked</div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div><h1 className='text-2xl font-bold'>500+</h1> Happy Clients</div>
                    <div><h1 className='text-2xl font-bold'>20+</h1> Awards Won</div>
                </div>
            </div>
        </div>
    )
}

export default About