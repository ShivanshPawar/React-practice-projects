import React from 'react'
import CardContent from './CardContent'

const Card = (props) => {
    return (
        <div className='flex-nowrap shrink-0 overflow-hidden h-full w-70 relative rounded-4xl '>
            <img className='w-full h-full object-cover' src={props.img} alt="" />
            <CardContent id={props.id} color={props.color} tag={props.tag} />
        </div>
    )
}

export default Card