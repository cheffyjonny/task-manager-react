import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import moment from 'moment'
import PopupCalendarModal from './PopupCalendarInput'

const Event = ({ task, onDelete, onEdit }) => {
  const [payload, setPayload] = useState({
    text: task.text,
    date: task.date,
  })
  const [isEditMode, setIsEditMode] = useState(false)
  let formattedDate = moment(task.date).format('MMM Do YYYY')

  const handleCancelEdit = () => {
    setIsEditMode(!isEditMode)
    setPayload({
      text: task.text,
      date: task.date,
    })
  }

  if (isEditMode) {
    return (
      <>
        <div className='task'>
          <div>
            <label>Event</label>
            <input
              autoFocus
              type='text'
              placeholder='Add Event'
              value={payload.text}
              onChange={(e) =>
                setPayload({
                  ...payload,
                  text: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Date</label>
            <PopupCalendarModal
              onChangeDate={(e) => {
                setPayload({
                  ...payload,
                  date: e,
                })
              }}
              date={payload.date}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <input
              type='button'
              value='Save Edit'
              className='btn btn-block'
              onClick={() => {
                onEdit(task.id, { payload })
                setIsEditMode(!isEditMode)
              }}
            />
            <input
              type='button'
              value='Cancel Edit'
              className='btn btn-block'
              style={{ backgroundColor: 'rgb(212, 52, 41)' }}
              onClick={handleCancelEdit}
            />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div
          className={`task ${task.reminder ? 'reminder' : ''}`}
          onDoubleClick={() => setIsEditMode(!isEditMode)}
        >
          <h3>
            {task.text}
            <FaTimes
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation()
                onDelete(task.id)
              }}
            />
          </h3>
          <p>{formattedDate}</p>
        </div>
      </>
    )
  }
}

export default Event
