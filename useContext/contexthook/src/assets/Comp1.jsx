import React, { useContext } from 'react'
import Comp2 from './Comp2'
import {userContext} from '../App'

function Comp1() {
     
    const {count,hoverCount}=useContext(userContext)
  return (
    <>
      <h1>number of counts  {count} {hoverCount} </h1>
   <Comp2 />
    </>
  )
}

export default Comp1
