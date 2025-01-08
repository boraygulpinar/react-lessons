import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './redux/store'
import { decrement, increment } from './redux/counterSlice'
import Userlist from './components/Userlist'


function App() {

  /* 
  const dispatch = useDispatch()
 
   const { value } = useSelector((store) => store.counter)
   console.log(value)
   */

  return (
    /*
    < div >
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </div >
    */

    <div>
      <Userlist />
    </div>

  )
}

export default App
