import { useContext } from "react";
import { UserContext } from "../App";
import Profile from "./Profile";



const Context = () => {
  const importedUser = useContext(UserContext);


  return ( 
    <>
      <h1> This is imported detail {importedUser} </h1>
      <Profile />
    </>
  );
}
 
export default Context;