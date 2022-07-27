import React, { useState, useCallback } from 'react'
const funccount = new Set();



const Callback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [results, setResults] = useState([]);

  const incrementCounter = useCallback(() => {
  	setCount(count + 1)
    console.log(count);
  }, [count]);

  const decrementCounter = useCallback(() => {
  	setCount(count - 1)
    console.log(count);
  }, [count]);

  const incrementNumber = useCallback(() => {
  	setNumber(number + 1)
    console.log(number);
  }, [number]);

  const getCharacters = useCallback(() => {
    fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(data => {
      const characters = data.results;
      console.log(characters);
      setNumber(number + 1);
      setResults(characters);
    })
  }, [number]);

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  funccount.add(getCharacters);

  console.log(funccount);
  alert(funccount.size);

  return (
  	<div>
  	<h1> The useCallback Hook </h1>
    <p> <strong> Count: {count} </strong> </p>
  	<button onClick={incrementCounter}>
  		Increase counter
  	</button>
  	<button onClick={decrementCounter}>
  		Decrease Counter
  	</button>
  	<button onClick={incrementNumber}>
  		increase number
  	</button>
    <button onClick={getCharacters}>
      Get Characters
    </button>
    <ul>
      {results.map(character => (
        <li key={character.name}> {character.name} </li>
      ))}
    </ul>
  	</div>
  )
}


export default Callback;
