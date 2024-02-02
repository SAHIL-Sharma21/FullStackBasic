import { useState } from 'react'
import './App.css'

function App() {
  
  //jokes states
  const[jokes, setJokes] = useState([]); //initially empty

  return (
    <>
        <h1>FullStack App with React </h1>
        <p>Jokes: {jokes.length}</p>

        {
        jokes.map((joke) => (
          <div key={joke.id}> 
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
        }
    </>
  )
}

export default App
