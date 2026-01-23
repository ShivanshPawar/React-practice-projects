import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import CollectionCard from '../components/CollectionCard'


const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <div id='result-grid' className="flex flex-wrap gap-5 overflow-auto pb-10 px-10 mt-10 justify-center">
        {collection.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage