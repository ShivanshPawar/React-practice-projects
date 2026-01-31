import Navbar from './components/Navbar';
import Board from './components/Board';
import { useEffect, useState } from 'react';
import TaskModal from './components/TaskModal';

const secName = [
  {
    id: 1,
    title: 'To-Do',
    dotColor: 'bg-amber-500',
    status: 'todo'
  },
  {
    id: 2,
    title: 'In Progress',
    dotColor: 'bg-blue-500',
    status: 'inprogress'
  },
  {
    id: 3,
    title: 'Done',
    dotColor: 'bg-green-500',
    status: 'done'
  }
];

const STORAGE_KEY = "kanban_tasks";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks])

  const onAdd = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const onDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const onUpdateStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <div className='main w-screen h-screen p-5 flex flex-col gap-5' style={{ backgroundColor: 'var(--bg-color)' }}>
      <Navbar onAdd={() => setIsModalOpen(true)} />
      <Board secName={secName} tasks={tasks} onDelete={onDelete} onUpdateStatus={onUpdateStatus} />
      {isModalOpen && (
        <TaskModal
          onClose={() => setIsModalOpen(false)}
          onAdd={onAdd}
        />
      )}
    </div>
  )
}

export default App