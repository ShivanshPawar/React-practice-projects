import React from 'react'

const Card = ({ task, onDelete, onUpdateStatus, currentStatus }) => {
    const getStatusConfig = (status) => {
        const configs = {
            todo: { label: 'To-Do', bg: 'var(--sec-btn-color)', text: 'var(--sec-text-color)' },
            inprogress: { label: 'In Progress', bg: '#dbeafe', text: '#2563eb' },
            done: { label: 'Done', bg: 'var(--ter-btn-color)', text: 'var(--ter-text-color)' }
        };
        return configs[status] || configs.todo;
    };

    const statusConfig = getStatusConfig(task.status);
    const formatDate = (dateString) => {
        if (!dateString) return 'No due date';
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        } catch {
            return dateString;
        }
    };

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', task.id);
        e.dataTransfer.effectAllowed = 'move';
        e.currentTarget.style.opacity = '0.5';
    };

    const handleDragEnd = (e) => {
        e.currentTarget.style.opacity = '1';
    };

    return (
        <div 
            className='w-full min-h-[120px] rounded-lg bg-white border border-gray-200 shadow-sm my-3 p-4 cursor-grab hover:shadow-md transition-shadow active:cursor-grabbing'
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <span 
                className='inline-block px-2 py-1 text-xs font-semibold rounded mb-2'
                style={{ 
                    backgroundColor: statusConfig.bg, 
                    color: statusConfig.text 
                }}
            >
                {statusConfig.label}
            </span>
            <h4 className='py-2 font-semibold text-lg text-gray-900'>{task.title}</h4>
            <p className='text-gray-600 text-sm mb-3 line-clamp-3'>
                {(() => {
                    const text = task.description || 'No description';
                    const words = text.split(' ');
                    return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : text;
                })()}
            </p>
            <hr className='my-2 border-gray-200' />
            <div className='flex justify-between items-center'>
                <p className='text-gray-500 text-xs'>{formatDate(task.dueDate)}</p>
                <button 
                    onClick={() => onDelete(task.id)} 
                    className='px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors'
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Card