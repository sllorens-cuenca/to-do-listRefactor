import ListItem from "../components/listItem";



function List(props) {
    console.log(props.tasksArr)
    return (
        <div className="page">
            {props.tasksArr.map((listObj) => {
                return (
                    <ListItem listDetails={listObj} callbackToDelete={props.callbackToDelete} />
                )
            })}
        </div>
    )

}

export default List;