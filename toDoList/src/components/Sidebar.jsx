import { Link } from "react-router-dom";


function SideBar(){
    return(
        <div className = 'side-bar'>
             

            <Link to="/">New List</Link>
            <Link to="/my-lists">My Lists</Link>
            <Link to="/about">About</Link>


        </div>
    )
}

export default SideBar