import React from 'react'
import Section1 from './components/Section1/Section1';

const App = () => {

  const users = [
    {
      img: 'https://i.pinimg.com/736x/06/2c/d2/062cd245bfd4569570d0963036c2508c.jpg',
      intro: '',
      color: 'lightseagreen',
      tag: 'Satisfied'
    },
    {
      img: 'https://i.pinimg.com/736x/34/ac/c4/34acc4884f0af2611a91cdefbe1eda2f.jpg',
      intro: '',
      color: 'lightgreen',
      tag: 'Business'
    },
    {
      img: 'https://i.pinimg.com/736x/1b/54/7b/1b547bc0640ab730c3ba5ff99121b7f9.jpg',
      intro: '',
      color: 'red',
      tag: 'Victorious'
    }
  ]

  return (
    <div className='w-full h-screen'>
      <Section1 users={users} />
    </div>
  )
}

export default App