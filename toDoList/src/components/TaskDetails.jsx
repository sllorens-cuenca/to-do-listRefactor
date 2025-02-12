import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function TaskDetails(props) {

    const { taskId } = useParams();
    const [taskState, setTask] = useState("");

    const task = props.tasksArr.find((taskObj) => {
        return String(taskObj.id) === String(taskId);
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const taskObj = {
            task: taskState,
            completed: task.completed,
            id: task.id
        }

        // invoke function in the parent component 
        props.callbackToEdit(taskObj);

        // clear form
        setTask("");
    }

    return (
        <div className='TaskDetails card'>
            <p>{task.task}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Task
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the edit task"
                        value={taskState}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button className="add">Submit</button>
                </label>
            </form>
            <p>
                <Link to="/my-lists" className="btn btn-primary">Back</Link>
            </p>

        </div>
    );
}

export default TaskDetails;
