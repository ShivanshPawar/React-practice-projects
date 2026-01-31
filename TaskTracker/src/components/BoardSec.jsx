import { useState } from 'react';
import BoardSecHeading from './BoardSecHeading'
import Card from './Card'


const BoardSec = ({ title, tasks, onDelete, onUpdateStatus }) => {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const filteredTasks = tasks.filter((task) => task.status === title.status);
    const taskCount = filteredTasks.length;

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        setIsDraggingOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        // Check if we're actually leaving the drop zone (not just entering a child element)
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        
        if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
            setIsDraggingOver(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDraggingOver(false);
        
        const taskId = e.dataTransfer.getData('text/plain');
        if (taskId && onUpdateStatus) {
            onUpdateStatus(taskId, title.status);
        }
    };

    return (
        <div className='board-col w-full rounded-lg border border-gray-200 p-3'>
            <BoardSecHeading title={title} count={taskCount} />
            <div 
                className={`scrollable w-full h-full mt-3 rounded-lg border border-gray-300 px-3 overflow-y-auto transition-colors ${
                    isDraggingOver ? 'bg-blue-50 border-blue-300' : ''
                }`}
                style={{ backgroundColor: isDraggingOver ? '#eff6ff' : 'var(--sec-bg-color)' }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {filteredTasks.length === 0 ? (
                    <div className='text-center text-gray-400 py-8 text-sm'>
                        No tasks in this column
                    </div>
                ) : (
                    filteredTasks.map((task) => (
                        <Card 
                            key={task.id} 
                            task={task} 
                            onDelete={onDelete}
                            onUpdateStatus={onUpdateStatus}
                            currentStatus={title.status}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default BoardSec