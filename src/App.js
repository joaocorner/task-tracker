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
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
