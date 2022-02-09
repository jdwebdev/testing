import React, { useState } from 'react'
import Board from './games/breakout/Board'
import Breakout from './games/breakout/index'
import './App.css'

const App = () => {

  const [msg, setMsg] = useState('')

  // const handleClick = async () => {
  //   const data = await fetch('/api/youtube')
  //   const json = await data.json()
  //   const msg = json.msg

  //   setMsg(msg)
  // }

  const handleClick = () => {
    setMsg("bla")
    console.log(msg)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <button onClick={handleClick}>
          Dis bonjour aux gens là
        </button>
        <p>{msg}</p> */}
        <Breakout />
      </header>
    </div>
  )
}

export default App
