import ListItem from "../components/listItem";
import AddNewTask from "../components/AddNewTask";



function List(props) {
    console.log(props)
    return (
        
        <div className="list-container">
        <AddNewTask />
            {props.tasksArr.map((listObj) => {
                return (
                    <ListItem listDetails={listObj} callbackToDelete={props.callbackToDelete} />

                )
            })}
             {/* {props.newTasks.map((listObj) => {
                return (
                    <ListItem listDetails={listObj} newcallbackToDelete={props.newcallbackToDelete} />

                )
            })} */}
        </div>

    )

}

export default List;