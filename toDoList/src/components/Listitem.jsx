

//Iscompleted condition
//.map()


// import { Link } from "react-router-dom";

function ListItem(props) {
    
    return (
        <div>
            <p>{props.listDetails.completed ? "✅" : "❌"} {props.listDetails.task}</p>


            <div>
                
                
                <button onClick={() => { 
                   if (props.listDetails.id > 7 ) {
                    props.callbackToDelete(props.listDetails.id)
                   } else {
                    props.newcallbackToDelete(props.listDetails.id)
                   }
                 }}>
                    Delete this Task
                </button>

                {/* <button onClick={() => { props.callbackToDelete(props.listDetails.id),  props.newcallbackToDelete(props.listDetails.id) }}>
                    Delete this Task


                      props.listDetails.id > 8 ?  props.newcallbackToDelete(props.listDetails.id) : props.callbackToDelete(props.listDetails.id)
                </button> */}


            </div>
        </div>
    );
}

export default ListItem;