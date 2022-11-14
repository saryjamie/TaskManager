import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
     {
    id: 1,
    text: "study",
    day: "Tuesday",
    reminder: false,
  },
  {
    id: 2,
    text: "gym",
    day: "Saturday",
    reminder: true,
  },
  {
    id: 3,
    text: "work",
    day: "Monday",
    reminder: true,
  }, 
  ])

  //add Task
  const addTask =(task) => {
    console.log(task)
  }

  //Delete Task
  const deleteTask = (id) => {
  console.log("Delete", id)
    setTasks(tasks.filter((task)=> task.id !== id))
  }
 
// Toggle Reminder
const toggleReminder = (id) => {
  console.log("Double clicked for a reminder!", id)
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
    <Header title='Task Manager'/>
    <AddTask onAdd={addTask} />
    {tasks.length > 0 ?
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'
    }
    </div>
  );
  }



export default App;
