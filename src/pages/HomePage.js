import { useState, useEffect } from 'react'

import AddTask from '../components/AddTask'
import Events from '../components/Events'

const HomePage = ({ showAddTask }) => {
  const [events, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchEvents()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Events
  const fetchEvents = async () => {
    const res = await fetch('http://localhost:3500/events')
    const data = await res.json()

    return data
  }

  // Fetch Event
  const fetchEvent = async (id) => {
    const res = await fetch(`http://localhost:3500/events/${id}`)
    const data = await res.json()

    return data
  }

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

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3500/events/${id}`, {
      method: 'DELETE',
    })

    setTasks(events.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchEvent(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:3500/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      events.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <>
      {showAddTask && <AddTask onAdd={handleAddTask} />}
      {events.length > 0 ? (
        <Events
          events={events}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No events to show'
      )}
    </>
  )
}

export default HomePage
