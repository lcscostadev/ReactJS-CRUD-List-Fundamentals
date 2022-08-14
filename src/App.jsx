import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      // Loop em cada task, se o task.id for identico ao taskId que estamos recebendo no loop ex (task 1 === id task 1) retorna a task e altera o completed para o inverso do anterior (se era falso fica verdadeiro, se era verdadeiro fica falso)
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
    ];
    setTasks(newTask);
  }

  return (
    <>
      {/* handleTaskClick={handleTaskClick} === passar como prop */}
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
    </>
  );
};

export default App;