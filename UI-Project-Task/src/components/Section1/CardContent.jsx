import React from 'react'

const CardContent = (props) => {
    return (
        <div className='absolute p-8 top-0 left-0 h-full w-full   flex flex-col justify-between'>
            <h2 className='text-2xl rounded-full font-medium w-10 h-10 bg-white flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-lg leading-relexed shadow-black text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aperiam quasi vero fuga quo illum!</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className='rounded-full text-white font-medium px-8 py-2'>{props.tag}</button>
                    <button style={{ backgroundColor: props.color }} className='rounded-full text-white font-medium px-3 py-2'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CardContent