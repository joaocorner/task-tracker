const tasks = [
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

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>// key is used to identify each element in an array. It's used in parent components.
            ))}
        </>
    )
}

export default Tasks