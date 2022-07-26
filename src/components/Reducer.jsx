import { useReducer } from "react";


const Reducer = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1
      case "DECREMENT":
        return state - 1;
      default:
        return initialState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return ( 
    <>
      <h1> The useReducer Hook </h1>
      <h2> {state} </h2>
      <button onClick={() => dispatch("INCREMENT")}> Increment </button>
      <button onClick={() => dispatch("DECREMENT")}> Decrement </button>
      <button onClick={() => dispatch("RESET")}> Reset </button>
    </>
  );
}
 
export default Reducer;