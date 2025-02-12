
function ListItem(props) {
    console.log(props   )
    return (
        <div className="list-item">
            <p>{props.listDetails.completed ? "✅" : "❌"} {props.listDetails.task}</p>


            <div>
                
                <button className="delete-button" onClick={() => { 
                    props.callbackToDelete(props.listDetails.id)
                
                 }}>
                    Delete this Task
                </button>
                <button onClick={() => { 
                    props.setTaskToDisplay(prev => prev.map(task => task.id === props.listDetails.id ? {...task, completed: !task.completed} : task))
                 }}>
                    Mark as completed
                </button>


            </div>
        </div>
    );
}

export default ListItem;