import ListItem from "../components/listItem";



function List(props) {
    console.log(props)
    return (
        <div  className="page">
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