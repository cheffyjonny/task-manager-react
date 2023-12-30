import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div style={{ marginBottom: '6vh' }}>
        <h3>Event manager 1.0.0</h3>
        <p style={{ fontSize: '0.8rem' }}>
          This is a basic react project with local backend set up.
        </p>
      </div>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
