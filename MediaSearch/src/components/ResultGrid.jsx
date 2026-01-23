import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import { setQuery, setLoading, setError, setResult } from "../redux/features/searchSlice"
import { useEffect } from "react"
import ResultCard from "./ResultCard"





const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()

    useEffect(function () {
        const getData = async () => {
            dispatch(setLoading(true))
            try {
                let data;
                if (activeTab === 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        src: item.urls.full,
                        thumbnail: item.urls.small,
                        title: item.alt_description,
                        type: 'photo',
                        url: item.links.html

                    }))
                }
                else if (activeTab === 'videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        src: item.video_files[0].link,
                        thumbnail: item.image,
                        title: item.user.name || "video",
                        type: 'video',
                        url: item.url
                    }))
                }
                else if (activeTab === 'all') {
                    let resPhoto = await fetchPhotos(query)
                    let resVideo = await fetchVideos(query)
                    const photosData = resPhoto.results.map((item) => ({
                        id: item.id,
                        src: item.urls.full,
                        thumbnail: item.urls.small,
                        title: item.alt_description,
                        type: 'photo',
                        url: item.links.html
                    }))
                    const videosData = resVideo.videos.map((item) => ({
                        id: item.id,
                        src: item.video_files[0].link,
                        thumbnail: item.image,
                        title: item.user.name || "video",
                        type: 'video',
                        url: item.url
                    }))
                    data = [...photosData, ...videosData]
                    data = data.sort(() => Math.random() - 0.5)
                }
                dispatch(setResult(data))
                dispatch(setLoading(false))
                console.log(data);
            } catch (err) {
                dispatch(setError(err.message))
                dispatch(setLoading(false))
            }
        }
        getData();
    }, [query, activeTab, dispatch]);


    return (
        <div id='result-grid' className="flex flex-wrap gap-5 overflow-auto py-10 px-10 h-[calc(100vh-200px)] mt-5 justify-center">
            {results.map((item, idx) => {
                return <div className="hover:scale-102 transition" key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid