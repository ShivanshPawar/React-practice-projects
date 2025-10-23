import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-start rounded-2xl px-4 lg:px-20 lg:py-10 pb-40 lg:pb-60  bg-blue-200' bg-image="url('')" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1652057289438-eec100a486ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', }}>
            <h1 className='text-white text-4xl lg:text-6xl font-extrabold leading-tight mt-10 uppercase'>Building a <br /> better world</h1>
            <p className='text-white mt-5 md:mr-80 '>Construct Impact is your trusted partner in <br className='hidden lg:block' /> construction project management, delivering <br className='hidden lg:block' /> excellence from concept to completion.</p>
            <button className='bg-white text-[#006093] font-bold px-15 lg:px-40 py-3 rounded-full mt-7 active:scale-99'>Get Started</button>
        </div>
    )
}

export default Hero