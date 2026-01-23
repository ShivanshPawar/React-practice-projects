import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import { ToastContainer } from 'react-toastify';



const App = () => {


  return (
    <div className="w-screen h-screen text-white bg-gray-950">


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer/>

      {/* <button onClick={async () => {
        const data = await fetchPhotos("nature");
        console.log(data.results);
      }}>Get Photos</button><br />
      <button onClick={async () => {
        const data = await fetchVideos("nature");
        console.log(data.videos);
      }}>Get Videos</button> */}
    </div>


  )
}

export default App