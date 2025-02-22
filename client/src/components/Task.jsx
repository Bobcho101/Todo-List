import { useEffect, useState } from "react"

export default function Task({task}){
    const [status, setStatus] = useState(task.isCompleted);
    

    const changeStatusHandler = async () => {
        const updatedStatus = !status;
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/todos/${task._id}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: task._id,
                    text: task.text,
                    isCompleted: updatedStatus
                }),
            });

            setStatus(updatedStatus); 
        } catch (err) {
            console.log(err.message);
        }
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