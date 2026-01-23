import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {

    const Tabs = ["all", 'photos', 'videos']

    const dispatch = useDispatch();

    const activeTab = useSelector((state) => state.search.activeTab);

    return (
        <div className='w-full flex gap-4 px-10'>
            {Tabs.map(function (tab, idx) {
                return (
                    <button
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTab(tab))
                        }}
                        className={`${activeTab === tab ? 'bg-cyan-500 opacity-100 text-sm' : 'bg-cyan-700 opacity-60 text-sm'} transition px-5 py-2 bg-cyan-500 rounded cursor-pointer active:scale-95`}
                    >
                        {tab}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs