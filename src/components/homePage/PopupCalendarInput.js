import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const PopupModal = ({ onChangeDate, date }) => {
  let formattedDate = moment(date).format('MMM Do YYYY')

  return (
    <Popup
      trigger={
        <input
          type='text'
          placeholder='Add Date'
          readOnly
          value={formattedDate}
        />
      }
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
              onChange={(e) => {
                onChangeDate(e)
                close()
              }}
            />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default PopupModal
