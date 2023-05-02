import React from 'react'
import { useState } from 'react';


const NameChange = () => {

  const [name, setname ]=useState("mario")
 
function handle(){
  setname ("luigi");
 
}



  return (
    <div>
      
      
      <button onClick={handle }>change</button>
      <p >{name}</p>
    </div>
  )
}

export default NameChange;
