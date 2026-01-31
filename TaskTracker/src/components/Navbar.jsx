
const Navbar = ({ onAdd }) => {
  return (
    <div 
      className='w-full h-15 flex items-center justify-between px-5 rounded-lg border border-gray-200' 
      style={{ backgroundColor: 'var(--sec-bg-color)' }}
    >
      <h1 className='text-2xl text-black font-semibold'>Task Tracker</h1>
      <button 
        className='text-white px-4 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform hover:opacity-90'
        style={{ backgroundColor: 'var(--pri-text-color)' }}
        onClick={onAdd}
      >
        Add Task
      </button>
    </div>
  )
}

export default Navbar