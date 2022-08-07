import Task from "./Task"

const Tasks = ({ tasks }) => {

    return (
        //don't use tasks.push() in the render function, use the setTasks function instead to insert a new task in the array. State is imutable, you can't change the state directly.

        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task}/>// key is used to identify each element in an array. It's used in parent components.
            ))}
                </>
            )
}

            export default Tasks