import React, { useState } from 'react'
import "./jokeapi.css"
const Jokeapi = () => {
    const [user , setUsers] = useState([]);

    const btnHandler = () => {
        fetch("https://v2.jokeapi.dev/joke/Any")
        .then(res => res.json())
        .then(res => setUsers(res))
        
    }
  return (
    <>
      <div className='container'>
        <h1>Joke Generator Using React and Joke API</h1>
        <button onClick={btnHandler}>Click to generate a joke</button>
        <h1>{user.setup} </h1>
        <h1>{user.delivery} </h1>
      </div>
    </>
  )
}

export default Jokeapi
