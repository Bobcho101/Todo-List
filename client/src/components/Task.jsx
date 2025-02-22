import { useEffect, useState } from "react"

export default function Task({task}){
    const [status, setStatus] = useState(task.isCompleted);
    
    const changeStatusHandler = () => {
        setStatus(prevStatus => !prevStatus);  
    };

    return(
        <tr className={status ? 'todo is-completed' : 'todo'}>
            <td>{task.text}</td> 
            <td>{status ? 'Completed' : 'Not Completed'}</td>
            <td className="todo-action">
            <button onClick={() => changeStatusHandler()} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}