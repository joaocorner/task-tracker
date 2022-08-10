import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // useEffect is a hook that runs after the component has been rendered
    const getTasks = async () => {
      // async is a keyword that tells the function to return a promise. Promise is a special type of object that represents the result of an asynchronous operation.
      const tasksFromServer = await fetchTasks(); //Await waits for the promise to resolve before continuing.
      setTasks(tasksFromServer); //setTasks is a function that sets the state of the tasks array to the tasks array from the server.
    };

    getTasks();
  }, []); // [] is an empty array. The empty array tells the useEffect hook to run only once.

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        " No tasks to display"
      )}
    </div>
  );
};

export default App;
