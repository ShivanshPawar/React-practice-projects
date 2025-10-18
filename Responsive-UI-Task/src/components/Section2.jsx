import React from 'react'

const Section2 = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-10 py-10'>
            <div className='w-full lg:w-1/4 flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>Building Is What <br className='lg:block' /> We Do !</h1>
                <p>Building Is What We Do Cunstruct Impact Is Leading Quality Projects!</p>
            </div>
            <div className='w-full lg:w-3/4 flex flex-col lg:flex-row justify-between items-center gap-8 p-5'>
                <div className='w-full lg:w-1/3 h-full lg:h-130 flex flex-col gap-5 py-1'>
                    <img className='w-full h-[80%] object-cover rounded-2xl' src="https://i.pinimg.com/736x/b5/3d/71/b53d71459c1b19cd99e9e62dccb5d35e.jpg" alt="" />
                    <p>Constructing impactful, high-quality commercial towers that elevate business presence.</p>
                </div>
                <div className='w-full lg:w-1/3 h-full lg:h-130 flex flex-col gap-5 py-1'>
                    <img className='w-full h-[80%] object-cover rounded-2xl' src="https://i.pinimg.com/736x/89/73/5c/89735c60d0e4fc45e8cfdd15ab184aa9.jpg" alt="" />
                    <p>Engineering robust infrastructure solutions that empower communities and drive progress.</p>
                </div>
                <div className='w-full lg:w-1/3 h-full lg:h-130 flex flex-col gap-5 py-1'>
                    <img className='w-full h-[80%] object-cover rounded-2xl' src="https://i.pinimg.com/736x/b0/08/16/b0081624b97721dbb85e0962c22fb56c.jpg" alt="" />
                    <p>Designing elegant, livable residential spaces that blend comfort with modern aesthetics.</p>
                </div>
            </div>
        </div>
    )
}

export default Section2