import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <p style={{ opacity: 0.3, fontSize: '0.8rem' }}>
        (Double click to set remidner)
      </p>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
