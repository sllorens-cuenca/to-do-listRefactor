import AddNewTask from "../components/AddNewTask";
import ListItem from "../components/Listitem";

function List({ callbackToCreate, callbackToDelete, tasksArr, setTaskToDisplay }) {

    return (
        <div className="list-container">

            <AddNewTask callbackToCreate={callbackToCreate} />

            {tasksArr.map((listObj) => {
                return (
                    <ListItem setTaskToDisplay={setTaskToDisplay} listDetails={listObj} callbackToDelete={callbackToDelete} />
                )
            })}
        </div>
    )
}

export default List;