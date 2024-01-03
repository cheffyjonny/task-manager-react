import { forwardRef } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import Event from './Event'

const PopupEventList = ({ task, onDelete, onToggle }) => {
  // let formattedDate = moment(date).format('MMM Do YYYY')
  const event = Event({
    task: task,
    onDelete: onDelete,
    onToggle: onToggle,
  })
  return (
    <Popup
      trigger={event}
      modal
      nested
    >
      {(close) => (
        <div className='modal'>
          <button
            className='close'
            onClick={close}
          >
            &times;
          </button>
          <div className='header'> Select Date </div>
          <div className='content'>
            <Calendar
            // onChange={(e) => {
            //   onChangeDate(e)
            //   close()
            // }}
            />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default PopupEventList
