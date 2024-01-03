import { useState, useRef } from 'react'
import PopupCalendarModal from './PopupCalendarInput'

const AddEvent = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState(new Date())
  // const [reminder, setReminder] = useState(false)
  const inputRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add task')
      return
    }

    onAdd({ text, date })

    setText('')
    setDate(new Date())
    // setReminder(false)
    inputRef.current.focus()
  }

  const handleChangeDate = (e) => {
    setDate(e)
  }

  return (
    <form
      className='add-form'
      onSubmit={onSubmit}
    >
      <div className='form-control'>
        <label>Event</label>
        <input
          autoFocus
          ref={inputRef}
          type='text'
          placeholder='Add Event'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <PopupCalendarModal
          onChangeDate={(e) => {
            handleChangeDate(e)
          }}
          date={date}
        />
      </div>
      {/* <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div> */}

      <input
        type='submit'
        value='Save Event'
        className='btn btn-block'
      />
    </form>
  )
}

export default AddEvent
