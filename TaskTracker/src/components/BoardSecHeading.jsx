
const BoardSecHeading = ({ title, count }) => {
    return (
        <div className='flex justify-between items-center'>
            <h3 className='font-semibold flex gap-2 items-center'>
                <div className={`w-2.5 h-2.5 ${title.dotColor} rounded-full`}></div>
                {title.title}
            </h3>
            <p className='text-gray-500 text-sm font-medium'>{count}</p>
        </div>
    )
}

export default BoardSecHeading