import AddNewTask from "../components/AddNewTask";
import ListItem from "../components/listItem";



function List({callbackToCreate, callbackToDelete, tasksArr,  setTaskToDisplay}) {

console.log(setTaskToDisplay)

    
    console.log(tasksArr)
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