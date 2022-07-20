import { useContext } from "react";
import { UserContext, ChannelContext } from "../App";


const Profile = () => {
  const profileName = useContext(UserContext);
  const channelName = useContext(ChannelContext);


  return ( 
    <>
      <h1> This is a child of the Context Component {profileName} </h1>
      <p> This is a {channelName} </p>
      
    </>
  );
}
 
export default Profile;