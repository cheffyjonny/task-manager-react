import { useState, useEffect } from 'react'

import Events from '../components/homePage/Events'

const HomePage = ({ showAddTask }) => {
  return (
    <>
      <Events showAddTask={showAddTask} />
    </>
  )
}

export default HomePage
