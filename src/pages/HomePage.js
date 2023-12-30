import { useState, useEffect } from 'react'

import AddTask from '../components/AddTask'
import Events from '../components/Events'

const HomePage = ({ showAddTask }) => {
  const [events, setTasks] = useState([])

  // Add Task
  const handleAddTask = async (task) => {
    console.log(task)
    const res = await fetch(`http://localhost:3500/events`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...events, data])
    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = { id, ...task }
    // setTasks([...events, newTask])
  }

  return (
    <>
      {showAddTask && <AddTask onAdd={handleAddTask} />}
      <Events />
    </>
  )
}

export default HomePage
