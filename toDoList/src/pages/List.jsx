import AddNewTask from "../components/AddNewTask";
import ListItem from "../components/listItem";



function List({callbackToCreate, callbackToDelete, tasksArr,  setTaskToDisplay}) {

console.log(setTaskToDisplay)

    
    console.log(tasksArr)
    return (
        <div>
            <div>
                <AddNewTask callbackToCreate={callbackToCreate} />
            </div>
            <div className="page">
                {tasksArr.map((listObj) => {
                    return (
                        <ListItem setTaskToDisplay={setTaskToDisplay} listDetails={listObj} callbackToDelete={callbackToDelete} />
                    )
                })}
            </div>
        </div>

    )

}

export default List;