import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent';

const Page1Content = () => {
  return (
    <div className='py-10 flex justify-between gap-10 px-13 h-[90vh]'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content