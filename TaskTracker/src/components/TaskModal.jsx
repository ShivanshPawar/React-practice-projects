import { useState, useEffect } from "react";

const TaskModal = ({ onClose, onAdd }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const submit = () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setError("");
    onAdd({
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      status,
      dueDate: dueDate || null
    });
    
    // Reset form
    setTitle("");
    setDescription("");
    setStatus("todo");
    setDueDate("");
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold mb-4">Add Task</h3>
        
        {error && (
          <div className="text-red-600 text-sm mb-2 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <label className="text-sm font-medium text-gray-700">Title *</label>
        <input 
          placeholder="Enter task title" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full"
          autoFocus
        />

        <label className="text-sm font-medium text-gray-700 mt-2">Description</label>
        <textarea 
          placeholder="Enter task description" 
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows="4"
          className="w-full resize-none"
        />

        <label className="text-sm font-medium text-gray-700 mt-2">Status</label>
        <select 
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="w-full"
        >
          <option value="todo">To-Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <label className="text-sm font-medium text-gray-700 mt-2">Due Date</label>
        <input 
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          className="w-full"
        />

        <div className="flex gap-2 mt-4">
          <button onClick={submit} className="flex-1">Add Task</button>
          <button className="cancel flex-1" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default TaskModal