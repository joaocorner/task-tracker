//import React from "react"; // if you are using class instead of function

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'; //bring this from Tasks

const App = () => {

  const [tasks, setTasks] = useState(// useState is a hook that allows you to manage the state of a component, in the right side of the equal sign you pass the initial state of the component. If you want to change the state of the component you have to use the setTasks function.
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

  return (
    <div className="container">
      <Header />{/* if you remove the title(title:"blablabla"), it will show the default title */}
      <Tasks tasks={tasks}/>
    </div>
  );
}

// class App extends React.Component { // if you are using class instead of function
//   render() {
//     return <h1>Hello World</h1>
//   }
// }

export default App;
