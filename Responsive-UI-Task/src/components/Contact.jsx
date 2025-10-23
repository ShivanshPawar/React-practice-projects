import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-5 mt-5 rounded-2xl'>
      <h1 className='text-2xl font-bold'>For Inquiries or Questions</h1>
      <p className='pt-5'>Please use the form or call us on 123-456-7890</p>
      <div className='w-full lg:flex'>
        <div className='w-full lg:w-[50%] py-5 flex justify-center'>
          <img className='lg:w-[90%] object-cover rounded-2xl' src="https://i.pinimg.com/1200x/71/bb/cd/71bbcd3d11fb2f3ac0c4c568f500f5d7.jpg" alt="" />
        </div>

        <form className='w-full lg:w-[50%] lg:pl-10 flex flex-col justify-center'>
          <h1 className='text-2xl font-bold mb-5'>Get in Touch</h1>
          <label className='py-2'>Name:</label>
          <input type='text' className='mb-4 p-2 border rounded' />
          <label className='py-2'>Email:</label>
          <input type='email' className='mb-4 p-2 border rounded' />
          <label className='py-2'>Phone:</label>
          <input type='tel' className='mb-4 p-2 border rounded' />
          <label className='py-2'>Message:</label>
          <textarea rows="5" className='mb-4 p-2 border rounded'></textarea>
          <button className='bg-[#006297] text-white py-2 rounded'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact