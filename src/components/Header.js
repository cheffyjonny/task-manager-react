import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from './ui/Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <div className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? '#d95252' : '#6ecc76'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </div>
  )
}

Header.defaultProps = {
  title: 'Event Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// }

export default Header
