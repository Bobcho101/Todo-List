import { useEffect, useState } from "react";
import Task from "./Task";

export default function TodoList(){ 
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true); 
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3030/jsonstore/todos');
                const data = await res.json();
                setData(Object.values(data));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return(
    <>
        <main className="main">
            <section className="todo-list-container">
                <h1>Todo List</h1>
                <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
                </div>
                <div className="table-wrapper">
                {isLoading ? (<div className="loading-container">
                    <div className="loading-spinner">
                    <span className="loading-spinner-text">Loading</span>
                    </div>
                </div>) : ''}
                <table className="table">
                    <thead>
                    <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(el => <Task task={el} key={el._id}/> )}
                    {/* <tr className="todo is-completed">
                        <td>Give dog a bath</td>
                        <td>Complete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo is-completed">
                        <td>Do laundry</td>
                        <td>Complete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo">
                        <td>Vacuum floor</td>
                        <td>Incomplete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo is-completed">
                        <td>Feed cat</td>
                        <td>Complete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo">
                        <td>Change light bulbs</td>
                        <td>Incomplete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo is-completed">
                        <td>Feed cat</td>
                        <td>Complete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo">
                        <td>Change light bulbs</td>
                        <td>Incomplete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo is-completed">
                        <td>Go to Store</td>
                        <td>Completed</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>
                    <tr className="todo">
                        <td>Fill gas tank</td>
                        <td>Incomplete</td>
                        <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
                </div>
            </section>
        </main>
    </>
    );
}