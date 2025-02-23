import { useEffect, useState } from "react"

export default function Task({task}){
    const [status, setStatus] = useState(task.isCompleted);
    const [isLoading, setLoading] = useState(false);

    const changeStatusHandler = async () => {
        const updatedStatus = !status;
        try {
            setLoading(true);
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
            setLoading(false);
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
            <button disabled={isLoading} 
                onClick={() => changeStatusHandler()} 
                className="btn todo-btn">{
                isLoading ? "Updating..." : "Change status"}
            </button>
            </td>
        </tr>
    )
}