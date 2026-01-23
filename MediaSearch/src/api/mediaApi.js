import axios from 'axios';


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos(query, page = 1, per_Page = 20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_Page },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
    })
    return res.data
}

export async function fetchVideos(query, per_Page = 15) {
    const res = await axios.get('https://api.pexels.com/videos/search?', {
        params: { query, per_Page },
        headers: { Authorization: PEXELS_API_KEY }
    })
    return res.data
}