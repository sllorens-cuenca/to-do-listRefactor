

//Iscompleted condition
//.map()


// import { Link } from "react-router-dom";

function ListItem(props) {
    
    return (
        <div>
            <p>{props.listDetails.completed ? "✅" : "❌"} {props.listDetails.task}</p>


            <div>
                
                
                <button onClick={() => { props.callbackToDelete(props.listDetails.id) }}>
                    Delete this Task
                </button>


            </div>
        </div>
    );
}

export default ListItem;