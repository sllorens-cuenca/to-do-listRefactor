
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react'


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideBar from './components/Sidebar'
import tasks from './data/tasks.json'
import List from './pages/List'
import NewList from "./pages/NewList";
import About from "./pages/about";
import NotFound from "./pages/NotFound";

import './App.css'

function App() {

    const [taskToDisplay, setTasktoDisplay] = useState(tasks);
    // const [newTasks, setNewTasks] = useState([]);

    const deleteTask = (TaskId) => {

        const newTaskArr = taskToDisplay.filter((taskObj) => {
            return taskObj.id !== TaskId;
        });
        setTasktoDisplay(newTaskArr);
    }

    // const newDeleteTask = (TaskId) => {

    //     const newTaskArr = newTasks.filter((taskObj) => {
    //         return taskObj.id !== TaskId;
    //     });
    //     setNewTasks(newTaskArr);
    // }
    
    console.log("::::::::::::::::" + taskToDisplay);

    // create new task
  const createTask = (taskDetail) => {

    const taskId = taskToDisplay.map((task) => task.id);
    const maxId = Math.max(...taskId);
    const nextId = maxId + 1;

    const newTask = {
      ...taskDetail,
      id: nextId
    }

    // const newList = [newId, ...taskToDisplay];

    // setNewTasks([...newTasks, newTask]);
  }
//   <AddNewTask callbackToCreate = {createTask}/>


    return (
        <>
            <Navbar />            
            <   SideBar />
          
            <Routes>
                <Route path="/" element={<NewList  callbackToCreate={createTask} tasksArr={taskToDisplay} callbackToDelete={deleteTask}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/my-lists" element={<List tasksArr={taskToDisplay} callbackToDelete = {deleteTask}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        

            {/* <Routes>
                <Route path="/" element={<NewList  callbackToCreate={createTask} tasksArr={taskToDisplay} callbackToDelete={deleteTask} newcallbackToDelete = {newDeleteTask}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/my-lists" element={<List newTasks={newTasks}tasksArr={taskToDisplay} callbackToDelete = {deleteTask} newcallbackToDelete = {newDeleteTask} />} />
                <Route path="*" element={<NotFound />} />
            </Routes> */}

          
            <Footer />
        </>

    )

}




export default App