import BoardSec from './BoardSec';

const Board = ({ secName, tasks, onDelete, onUpdateStatus }) => {

    return (
        <div className='board rounded-lg gap-5'>
            {secName.map((item) => (
                <BoardSec 
                    key={item.id} 
                    title={item} 
                    tasks={tasks} 
                    onDelete={onDelete}
                    onUpdateStatus={onUpdateStatus}
                />
            ))}
        </div>
    )
}

export default Board
