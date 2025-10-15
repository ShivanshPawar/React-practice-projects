import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  return (
    <div id='rccw' className='h-full pb-10 flex overflow-x-auto gap-5 w-3/4'>
      {props.users.map(function (elem, idx) {
        return <Card key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent