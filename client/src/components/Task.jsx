export default function Task({task}){
    return(
    <tr className="todo is-completed">
        <td>{task.text}</td> 
        <td>{task.isCompleted ? 'Completed' : 'Not Completed1'}</td>
        <td className="todo-action">
        <button className="btn todo-btn">Change status</button>
        </td>
    </tr>
    )
}