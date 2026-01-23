import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';
const SearchBar = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text))
    setText('');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='w-full h-10 bg-red p-10 flex gap-10 justify-between items-center'>
        <input
          className='w-900 border-2 px-4 py-2 rounded focus:outline-cyan-500'
          required
          type="text"
          placeholder='Search Anything...'
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <button className='bg-cyan-500 py-2 px-5 rounded cursor-pointer text-sm hover:scale-110 transition transform'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar