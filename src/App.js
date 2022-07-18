import './App.css';
import { useState, useEffect } from 'react';
import Ref from './components/Ref';



 
function App() { 
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const changeColor = () => {
    setCar({
      ...car,
      color: "blue"
    });
  }

  useEffect(() => {
    /*setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);*/
    console.log("useEffect Ran");
  });


  
  return (
    <div className="App">
      <h1> I rendered {count} times </h1>
      <p> My car is a {car.brand} {car.model} made in the year {car.year} and is of the color <strong> {car.color} </strong>  </p>
      <button onClick={changeColor}> Change color </button>
      <Ref />
    </div>
  );
}

export default App;
 