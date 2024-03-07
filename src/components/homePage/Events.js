import { useState, useEffect } from 'react'
import AddEvent from './AddEvent'
import Event from './Event'

const Events = ({ showAddTask }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [events, setEvent] = useState([])

  useEffect(() => {
    // Fetch Events
    const fetchTasks = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('http://localhost:3500/events')
        const data = await res.json()
        setEvent(data)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()
  }, [])

  // Add Event
  const handleAddEvent = async (event) => {
    const res = await fetch(`http://localhost:3500/events`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(event),
    })

    const data = await res.json()

    setEvent([...events, data])
  }

  // Delete Event
  const deleteEvent = async (id) => {
    await fetch(`http://localhost:3500/events/${id}`, {
      method: 'DELETE',
    })

    setEvent(events.filter((event) => event.id !== id))
  }

  // Edit Event
  const handleEditEvent = async (id, { payload }) => {
    const updEvent = { text: payload.text, date: payload.date }
    const res = await fetch(`http://localhost:3500/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updEvent),
    })

    const data = await res.json()

    setEvent(
      events.map((task) =>
        task.id === id ? { ...task, text: data.text, date: data.date } : task
      )
    )
  }

  return (
    <>
      {showAddTask && <AddEvent onAdd={handleAddEvent} />}
      {events.length > 0 ? (
        <>
          {events.map((task) => (
            <Event
              key={task.id}
              task={task}
              onDelete={deleteEvent}
              onEdit={handleEditEvent}
            />
          ))}
          <p style={{ opacity: 0.3, fontSize: '0.8rem' }}>
            (Double click to edit the event)
          </p>
        </>
      ) : (
        'No events to show'
      )}
    </>
  )
}

export default Events
