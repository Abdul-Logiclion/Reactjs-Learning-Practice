import React,{useContext} from 'react'

import {userContext} from '../App'

function Comp2() {
    const {count,hoverCount}=useContext(userContext)
  return (
    <>
      <h1>count same but 2 added { count +2} and hover count after adding 2 {hoverCount+2}</h1>
    </>
  )
}

export default Comp2
