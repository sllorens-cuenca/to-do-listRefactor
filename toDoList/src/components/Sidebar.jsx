import { Routes, Route, NavLink, Link } from "react-router-dom";


function SideBar(){
    return(
        <div className = 'side-bar'>
             

            <Link to="/">Home Page</Link>
            <Link to="/Lists">Lists</Link>
            <Link to="/about">About</Link>


        </div>
    )
}

export default SideBar