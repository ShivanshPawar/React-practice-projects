import React from 'react'

const CardContent = () => {
    return (
        <div className='absolute p-8 top-0 left-0 h-full w-full   flex flex-col justify-between'>
            <h2 className='text-2xl rounded-full font-medium w-10 h-10 bg-white flex justify-center items-center'>1</h2>
            <div>
                <p className='text-lg leading-relexed shadow-black text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aperiam quasi vero fuga quo illum!</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 rounded-full text-white font-medium px-8 py-2'>Satisfied</button>
                    <button className='bg-blue-600 rounded-full text-white font-medium px-3 py-2'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CardContent