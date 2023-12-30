import { useState } from 'react'
import PopupModal from './PopupModal'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState(new Date())
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add task')
      return
    }

    onAdd({ text, date, reminder })

    setText('')
    setDate(new Date())
    setReminder(false)
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
          type='text'
          placeholder='Add Event'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <PopupModal
          onChangeDate={(e) => {
            handleChangeDate(e)
          }}
          date={date}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type='submit'
        value='Save Event'
        className='btn btn-block'
      />
    </form>
  )
}

export default AddTask
