import { Link } from 'react-router-dom';
import { MdCollectionsBookmark, MdImageSearch } from 'react-icons/md';

const NavBar = () => {
    return (
        <div className='py-2 px-10 bg-cyan-500 flex justify-between items-center'>
            <h2 className='font-medium text-2xl text-center '>Media Search</h2>
            <div className='flex gap-5 text-2xl'>
                <Link to="/"><MdImageSearch className='hover:scale-110 transition transform' /></Link>
                <Link to="/collection"><MdCollectionsBookmark className='hover:scale-110 transition transform' /></Link>
            </div>
        </div>
    )
}

export default NavBar