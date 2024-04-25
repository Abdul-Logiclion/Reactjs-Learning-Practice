import { useState,useContext, createContext } from 'react'
import Comp1 from './assets/Comp1';


import './App.css'


export const userContext=createContext()


function App() {
  const [count, setCount] = useState(0)
  const [hoverCount,setHoverCount]=useState(0)

  
  return (
    <>
    <userContext.Provider value={{count,hoverCount}}  >
    <button onClick={()=>{setCount(count+1)}} onMouseEnter={()=>{setHoverCount(hoverCount+1)}}>counter </button>
    <Comp1 />

    
    </userContext.Provider>
    </>
  )
}

export default App
