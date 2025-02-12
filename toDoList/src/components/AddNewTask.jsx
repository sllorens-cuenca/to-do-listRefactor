import { useState } from "react";

function AddNewTask(props) {

    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const taskObj = {
            task: task,
            completed: completed
        }

        // invoke function in the parent component 
        props.callbackToCreate(taskObj);

        // clear form
        setTask("");
        setCompleted("");
    }

    return (
        <div className="Addtask-box">
            {/* form */}
            <form onSubmit={handleSubmit} className=".form ">

                <label>
                    <a className="h1">Task to Do:</a>
                    <input
                        type="text"
                        name="task"
                        required={true}
                        placeholder="add a new task"
                        value={task}
                        onChange={(e) => { setTask(e.target.value) }}
                    />
                    <button  className="add">Submit</button>
                </label>

                
            </form>
        </div>
    );
}

export default AddNewTask;