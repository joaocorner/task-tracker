import { useState } from 'react';

const Tasks = () => {
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
        //don't use tasks.push() in the render function, use the setTasks function instead to insert a new task in the array. State is imutable, you can't change the state directly.
               
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>// key is used to identify each element in an array. It's used in parent components.
            ))}
        </>
    )
}

export default Tasks