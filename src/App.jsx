import { useState } from 'react'
import Navbar from './Nav'
import Header from './Head'
import Goal from './Mainn'

import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <div className='flex justify-center'>
      <Goal/>
      </div>
    </>
  )
}

export default App
