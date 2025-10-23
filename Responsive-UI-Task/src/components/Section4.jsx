import React from 'react'
import { RiDoubleQuotesL } from '@remixicon/react';
const Section4 = (props) => {
  return (
    <div className='w-full flex flex-col py-5'>
      <h1 className='text-2xl font-bold'>Form Our Clients</h1>
      <div id='sec4card' className='w-full flex overflow-auto gap-5'>
        {props.testimonials.map((testimonial) => (
          <div key={testimonial.id} className='w-full p-5 lg:p-10 mt-5 shrink-0 rounded-2xl bg-gray-200'>
            <h4 className='text-lg font-bold flex justify-center'>{testimonial.name}</h4>
            <p>
              <RiDoubleQuotesL
                size={36}
              />
              {testimonial.description}
            </p>
            <h3 className='text-sm flex justify-end pt-5'>{testimonial.project}</h3>
            <h3 className='text-sm flex justify-end'>{testimonial.type}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Section4