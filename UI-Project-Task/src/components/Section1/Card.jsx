import React from 'react'
import CardContent from './CardContent'

const Card = () => {
    return (
        <div className='drop-shadow-2xl overflow-hidden h-full w-70 relative rounded-4xl '>
            <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg" alt="" />
            <CardContent/>
        </div>
    )
}

export default Card