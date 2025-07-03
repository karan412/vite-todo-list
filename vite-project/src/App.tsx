import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState('');
  const [selectedPriority, setSelectedPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input.trim(), 
        completed: false, 
        priority: selectedPriority 
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const cyclePriority = (id: number) => {
    const priorities: ('high' | 'medium' | 'low')[] = ['high', 'medium', 'low'];
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        const currentIndex = priorities.indexOf(todo.priority);
        const nextIndex = (currentIndex + 1) % priorities.length;
        return { ...todo, priority: priorities[nextIndex] };
      }
      return todo;
    }));
  };

  const sortedTodos = [...todos].sort((a, b) => {
    // First sort by completion status (incomplete todos first)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    // Then sort by priority for incomplete todos
    if (!a.completed && !b.completed) {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    // For completed todos, maintain the order they were completed
    return 0;
  });

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <div className="clock-container">
          <div className="date">{formatDate(currentTime)}</div>
          <div className="time">{formatTime(currentTime)}</div>
        </div>
        
        <h1 className="title">Todo List</h1>
        
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="todo-input"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="add-button"
            onClick={addTodo}
            title="Add todo"
          >
          </motion.button>
        </div>

        <div className="priority-selector">
          <span className="priority-label">Priority:</span>
          <button
            className={`priority-btn high ${selectedPriority === 'high' ? 'active' : ''}`}
            onClick={() => setSelectedPriority('high')}
          >
            🔴 High
          </button>
          <button
            className={`priority-btn medium ${selectedPriority === 'medium' ? 'active' : ''}`}
            onClick={() => setSelectedPriority('medium')}
          >
            🟡 Medium
          </button>
          <button
            className={`priority-btn low ${selectedPriority === 'low' ? 'active' : ''}`}
            onClick={() => setSelectedPriority('low')}
          >
            🟢 Low
          </button>
        </div>

        <AnimatePresence>
          <motion.ul className="todo-list">
            {sortedTodos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <div
                  className={`checkbox ${todo.completed ? 'checked' : ''}`}
                  onClick={() => toggleTodo(todo.id)}
                />
                <button
                  className={`priority-flag ${todo.priority}`}
                  onClick={() => cyclePriority(todo.id)}
                  title={`Priority: ${todo.priority} (click to change)`}
                >
                  {todo.priority === 'high' && '🔴'}
                  {todo.priority === 'medium' && '🟡'}
                  {todo.priority === 'low' && '🟢'}
                </button>
                <span className="todo-text">{todo.text}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="delete-button"
                  onClick={() => deleteTodo(todo.id)}
                  title="Delete todo"
                >
                  🗑️
                </motion.button>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
