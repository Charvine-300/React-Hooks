import './App.css';
import { useState, useEffect, createContext } from 'react';
import Ref from './components/Ref';
import Context from './components/Context';


//Initializing the createContext
export const UserContext = createContext();
export const ChannelContext = createContext();

 
function App() { 
  //Value supplied to component tree
  const [user, setUser] = useState("Samuel Okoli");

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

  const changeValue = () => {
    setUser("Arize Onubiyi");
  }


  
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <ChannelContext.Provider value="React Framework">
          <h1> I rendered {count} times </h1>
          <p> My car is a {car.brand} {car.model} made in the year {car.year} and is of the color <strong> {car.color} </strong> </p>
          <button onClick={changeColor}> Change color </button>
          <Ref />
          <Context />
          <button onClick={changeValue}> Change Context Value </button>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
 