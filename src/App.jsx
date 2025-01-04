import { useState } from 'react'

import './App.css'
import DataEnginneringJobs from './components/DataEnginneringJobs'
import UKJobs from './components/UKJobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
  <UKJobs/>
      </div>
     
    </>
  )
}

export default App
