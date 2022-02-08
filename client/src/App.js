import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {

  const [msg, setMsg] = useState('')

  const handleClick = async () => {
    const data = await fetch('/api/youtube')
    const json = await data.json()
    const msg = json.msg

    setMsg(msg)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>
          Dis bonjour au gens là
        </button>
        <p>{msg}</p>
      </header>
    </div>
  )
}

export default App
