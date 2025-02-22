export default function Task({task}){
    return(
    <tr className={task.isCompleted ? 'todo is-completed' : 'todo'}>
        <td>{task.text}</td> 
        <td>{task.isCompleted ? 'Completed' : 'Not Completed'}</td>
        <td className="todo-action">
        <button className="btn todo-btn">Change status</button>
        </td>
    </tr>
    )
}