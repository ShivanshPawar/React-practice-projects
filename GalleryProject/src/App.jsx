import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1)



  const getData = async () => {
    // const response = await axios.get(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10) + 1}&limit=${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`);
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=100`);
    setuserData(response.data);
    console.log(response.data);

  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url}>
          <div className='p-1 flex items-center justify-center'>
            <img className='w-full lg:h-50 rounded-2xl' src={elem.download_url} loading='lazy' alt="" />
          </div>
          <h1 className='ml-2'>{elem.author}</h1>
        </a>
      </div>
    })
  }


  return (
    <div className='w-full h-screen flex flex-col justify-between p-5 bg-black text-white overflow-auto'>

      <div className='flex justify-between items-center p-4 gap-5'>
        <h1 className='text-3xl font-semibold'>Gallery</h1>
        <h1 className='bg-white text-black font-bold rounded px-5 py-1'>Page no. {index}</h1>
      </div>

      <hr className='my-5 text-gray-400' />

      <div className='flex flex-wrap gap-6 items-center justify-center'>
        {printUserData}
      </div>

      <hr className='my-5 text-gray-400' />

      <div className='flex justify-center items-center p-4 gap-5'>
        <button
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
              setuserData([])
            }
          }}
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className='bg-red-600 text-amber-50 rounded px-10 py-2 font-bold active:scale-95 hover:bg-red-700 cursor-pointer'>
          Prev
        </button>

          <p className='text-sm'>Page no. {index}</p>

        <button onClick={() => {
          setuserData([])
          setindex(index + 1)
        }}
          className='bg-red-600 text-amber-50 rounded px-10 py-2 font-bold active:scale-95 hover:bg-red-700 cursor-pointer'>
          Next
        </button>
      </div>

    </div>
  )
}

export default App