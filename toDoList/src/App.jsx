
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideBar from './components/Sidebar'
import tasks from './data/tasks.json'
import List from './pages/List'
import NewList from "./pages/NewList";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import {v4 as uuid} from 'uuid'
import './App.css'

function App() {

    const [taskToDisplay, setTasktoDisplay] = useState(tasks);
    

    const deleteTask = (TaskId) => {

        const newTaskArr = taskToDisplay.filter((taskObj) => {
            return taskObj.id !== TaskId;
        });
        setTasktoDisplay(newTaskArr);
    }


    // create new task
  const createTask = (taskDetail) => {
    setTasktoDisplay([{...taskDetail, id: uuid()},...taskToDisplay]);
  }


    return (
        <>
            <Navbar />            
            <   SideBar />
          
            <Routes>
                <Route path="/" element={<NewList  callbackToCreate={createTask} tasksArr={taskToDisplay} callbackToDelete={deleteTask}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/my-lists" element={<List callbackToCreate={createTask} setTaskToDisplay={setTasktoDisplay} tasksArr={taskToDisplay} callbackToDelete = {deleteTask}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          
            <Footer />
        </>

    )

}




export default App