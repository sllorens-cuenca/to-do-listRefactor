
function ListItem(props) {
    console.log(props   )
    console.log(props   )
    return (
        <div className="list-item">
            <p>{props.listDetails.completed ? "✅" : "❌"} {props.listDetails.task}</p>

            <span > {props.listDetails.completed ? "✅" : "❌"}  </span>
            <span className={props.listDetails.completed ? 'completed' : ''}>{props.listDetails.task}</span>
            <div>
                
                
                <button onClick={() => { 
                    props.callbackToDelete(props.listDetails.id)
                
                 }}>
                    Checked
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