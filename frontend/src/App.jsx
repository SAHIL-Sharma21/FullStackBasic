import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'; //importing axios

function App() {
  
  //jokes states
  const[jokes, setJokes] = useState([]); //initially empty

  //when our app load initially then we get the data instantaly so we use useEffect to do so
  useEffect(() => {
    //making axios web request
    axios.get('http://localhost:3000/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

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
