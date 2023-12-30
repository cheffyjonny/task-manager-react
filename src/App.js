import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
// import Events from './components/Events'
// import AddTask from './components/AddTask'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path='/'
            element={<HomePage showAddTask={showAddTask} />}
          />
          <Route
            path='/about'
            element={<AboutPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
