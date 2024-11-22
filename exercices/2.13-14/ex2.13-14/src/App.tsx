import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState<{joke : string } | null>();
  const [category, setCategory] = useState<{category : string} | null>();

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `fetch error: ${response.status} : ${response.statusText}`
        );
        return response.json();
      })
      .then ( joke  => {
        setJoke(joke)
        setCategory({ category: joke.category });
      })
      .catch((err) => {
        console.error("HomePage::error ", err);
      })
    }, []);

  return (
    <div>
      <h1>Random Jokes</h1>
      <p>{joke?.joke}</p>
      <h2>Category :</h2>
      <p>{category?.category}</p>
    </div>
    
  )
}

export default App
