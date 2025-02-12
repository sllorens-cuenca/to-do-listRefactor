import { Link } from "react-router-dom";

function ListItem(props) {


    return (
        <div className="list-item">

            <span > {props.listDetails.completed ? "✅" : "❌"}  </span>
            <span className={props.listDetails.completed ? 'completed' : ''}>{props.listDetails.task}</span>

            <div>
                <button className="delete" onClick={() => {
                    props.callbackToDelete(props.listDetails.id)
                }}>
                    Delete
                </button>

                <button className="complete" onClick={() => {
                    props.setTaskToDisplay(prev => prev.map(task => task.id === props.listDetails.id ? { ...task, completed: !task.completed } : task))
                }}>
                    Checked
                </button>

                <Link to={`/taskDetails/${props.listDetails.id}`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
            </div>
        </div>
    );
}

export default ListItem;