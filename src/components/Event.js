import { FaTimes } from 'react-icons/fa'
import moment from 'moment'

const Event = ({ task, onDelete, onToggle }) => {
  let formattedDate = moment(task.date).format('MMM Do YYYY')

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{formattedDate}</p>
    </div>
  )
}

export default Event
