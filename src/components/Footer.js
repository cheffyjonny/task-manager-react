import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ fontSize: '0.6rem' }}>
      <p style={{ marginBottom: '4px' }}>Copyright &copy; 2023</p>
      <Link to='/about'>
        <span style={{}}>About</span>
      </Link>
    </footer>
  )
}

export default Footer
