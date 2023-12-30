import Event from './Event'

const Events = ({ events, onDelete, onToggle }) => {
  return (
    <>
      {events.map((task) => (
        <Event
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
      <p style={{ opacity: 0.3, fontSize: '0.8rem' }}>
        (Double click to set remidner)
      </p>
    </>
  )
}

export default Events
