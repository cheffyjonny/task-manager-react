import { useState, useEffect } from 'react'
import Event from './Event'

const Events = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [events, setTasks] = useState([])

  useEffect(() => {
    // Fetch Events
    const fetchEvents = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('http://localhost:3500/events')
        const data = await res.json()
        setTasks(data)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Fetch Single Event
  const fetchEvent = async (id) => {
    const res = await fetch(`http://localhost:3500/events/${id}`)
    const data = await res.json()

    return data
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
      {events.length > 0 ? (
        <>
          {events.map((task) => (
            <Event
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ))}
          <p style={{ opacity: 0.3, fontSize: '0.8rem' }}>
            (Double click to set reminder)
          </p>
        </>
      ) : (
        'No events to show'
      )}
    </>
  )
}

export default Events
