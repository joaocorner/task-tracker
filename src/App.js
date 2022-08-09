import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

const App = () => {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Do the laundry',
        day: 'Feb 5th at 5:00pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Do the dishes',
        day: 'Feb 7th at 1:00pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Make breakfast',
        day: 'Feb 8th at 8:30am',
        reminder: false,
      }
    ]
  )

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
        :
        ' No tasks to display'}
    </div>
  );
}

export default App;
