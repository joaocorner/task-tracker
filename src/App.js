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

  // Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST", //POST is a method that sends data to the server.
      headers: {
        //headers is an object that contains the headers of the request.
        "Content-Type": "application/json", //Content-Type is a header that tells the server what kind of data is being sent.
      },
      body: JSON.stringify(task), //body is the data that is being sent to the server. JSON.stringify converts the data to a string.
    });

    const data = await res.json(); //data is the response from the server.

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
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
