import { useRef } from "react";


const Ref = () => {
  const count = useRef(0);
  const inputBar = useRef();
  const paragraph = useRef();


  return ( 
    <>
      <h1> The useRef Hook </h1>
      <p> Increment that does not trigger re-renders </p>
      <p> This application has been rendered {count.current} times. </p>
      <button onClick={() => {
        count.current += 1;
        console.log(count);
      }}> Add </button>

      <p> Accessing DOM Elements </p>
      <input 
        type="text" 
        ref={inputBar}
        onFocus={() => {
          console.log(inputBar);
          inputBar.current.value = "React Lesson Part 2 - Hooks in React";
        }}
      />
      <p
        ref={paragraph}
        onClick={() => {
          paragraph.current.innerHTML = "React Lesson Part 2 - Hooks in React";
        }}
      > Change text within me </p>
    </>
  );
}
 
export default Ref;