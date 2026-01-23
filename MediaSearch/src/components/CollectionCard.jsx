import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()
    const removeFromCollection = () => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }


  return (
        <div className='bg-white w-80 h-60 rounded relative'>
            <a className="h-full" href={item.url}>
                {item.type === 'photo' ? <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover rounded" /> : ''}
                {item.type === 'video' ? <video autoPlay loop muted src={item.src} className="w-full h-full object-cover rounded" /> : ''}
            </a>
            <div id="bottom" className="absolute bottom-0 left-0 right-0 text-white p-4 flex gap-5 justify-between items-center">
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <button
                    onClick={() => {
                        removeFromCollection(item)
                    }}
                    className="py-1 px-2 text-sm bg-cyan-500 rounded active:scale-95 cursor-pointer">Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard