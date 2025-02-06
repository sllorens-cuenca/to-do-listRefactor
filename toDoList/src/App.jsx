import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideBar from './components/Sidebar'
import tasks from './data/tasks.json'
import List from './pages/List'
import HomePage from "./pages/Homepage";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import { useState } from 'react'
import './App.css'

function App() {

    const [taskToDisplay, setTasktoDisplay] = useState(tasks);

    const deleteTask = (TaskId) => {

        const newTaskArr = taskToDisplay.filter((taskObj) => {
            return taskObj.id !== TaskId;
        });
        setTasktoDisplay(newTaskArr);
    }
    console.log("::::::::::::::::" + taskToDisplay);


    return (
        <>
            <Navbar />
            <SideBar />
            {/* <Routes>
    <Route path="/" element = { <List tasksArr={taskToDisplay} callbackToDelete = {deleteTask} />}> 

    </Route>

   </Routes> */}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/Lists" element={<List tasksArr={taskToDisplay} callbackToDelete = {deleteTask} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

         
              
                {/* <List tasksArr={taskToDisplay} callbackToDelete = {deleteTask} /> */}
          
            <Footer />
        </>

    )

}




export default App
