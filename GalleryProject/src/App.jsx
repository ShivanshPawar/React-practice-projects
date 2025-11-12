import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const  [userData, setuserData] = useState([]);

  const getData = async () => {


    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15');

    setuserData(response.data);

    console.log(userData);

  }

  let printUserData = 'No user Available'


  return (
    <div className='w-full h-screen bg-black text-white'>
      <button
        onClick={getData}
        className='bg-amber-700 text-white rounded-2xl py-2 px-4 active:scale-95'>
        Get Images
      </button>

      <div>
        {}
      </div>

    </div>
  )
}

export default App