import React from 'react'
import Logo from './Logo';

const Footer = () => {
  return (
    <div className='w-full '>
      <hr />
      <div className='w-full lg:flex justify-between'>
        <div className='lg:w-2/5 p-5 lg:p-10'><Logo /></div>

        <div className='lg:w-2/5 p-5 lg:p-10 flex flex-col gap-1'>
          <h2 className='font-bold pb-5'>Head Office</h2>
          <a className='underline' href="https://www.google.com/maps/place/500+Terry+Francine+Street+San+Francisco,+CA+94158">500 Terry Francine Street San Francisco, CA 94158</a>
          <br />
          <a className='underline' href="tel:123-456-7890">123-456-7890</a>
          <br />
          <a className='underline' href="mailto:info@mysite.com">info@mysite.com</a>
        </div>

        <div className='lg:w-2/5 p-5 lg:p-10'>
          <h2 className='font-bold pb-5 flex flex-col'>Socials</h2>
          <a className='underline' href="https://www.facebook.com">Facebook</a>
          <br />
          <a className='underline' href="https://www.twitter.com">Twitter</a>
          <br />
          <a className='underline' href="https://www.instagram.com">Instagram</a>
        </div>

        <div className='lg:w-2/5 p-5 lg:p-10'>
          <h2 className='font-bold pb-5'>Inquiries</h2>
          <p>For any inquiries, questions or commendations, please <br /> call: 123-456-7890</p>
        </div>

      </div>

      <div>
        <p className='text-center text-sm py-4'>© 2026 Construct Impact. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer