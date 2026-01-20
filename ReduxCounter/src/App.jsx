import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0)

  return (
    <div className="w-screen h-screen bg-linear-to-br from-slate-900 to-slate-800 text-white flex flex-col">
      {/* Header */}
      <div className="w-full py-8 bg-linear-to-r from-blue-600 to-purple-600 shadow-lg">
        <h1 className="text-4xl font-bold text-center">Redux Counter</h1>
      </div>

      {/* Counter Display */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Current Count</p>
          <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
            {count}
          </h2>
        </div>
      </div>

      {/* Controls */}
      <div className="pb-12 px-8">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => dispatch(increment())}
            className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors active:scale-95 transform"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors active:scale-95 transform"
          >
            Decrement
          </button>
        </div>

        <div className="max-w-2xl mx-auto flex gap-4">
          <input
            className="flex-1 py-3 px-4 text-black rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            value={num}
            type="number"
            onChange={(e) => setNum(e.target.value)}
          />
          <button
            onClick={() => dispatch(incrementByAmount(Number(num)))}
            className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors active:scale-95 transform"
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  )
}

export default App