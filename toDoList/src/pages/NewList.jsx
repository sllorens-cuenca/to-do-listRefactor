import { useState } from "react";

import ListItem from "../components/listItem";

/* const listscontainer =[]
then this needs to summ all new list into the new lists container

listscontainers =  NewList

*/
function NewList(props) {

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
      <>
      <div className="Addtask-box">
            {/* form */}
            <form onSubmit={handleSubmit}>

                <label>
                    Task to Do:
                    <input
                        type="text"
                        name="task"
                        required={true}
                        placeholder="add a new task"
                        value={task}
                        onChange={(e) => { setTask(e.target.value) }}
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
        {/* {props.tasksArr.map((listObj) => {
                return (
                    <ListItem listDetails={listObj} callbackToDelete={props.callbackToDelete} />

                )
            })} */}
      </>
        
        
    );
}


export default NewList;