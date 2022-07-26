import { useContext } from "react";
import { UserContext, ChannelContext } from "../App";


const Profile = () => {
  const profileName = useContext(UserContext);
  const channelName = useContext(ChannelContext);


  return ( 
    <>
      <h1> This is a child of the Context Component {profileName} </h1>
      <ul>
        {channelName.map(profile => (
          <li key={profile.id}> 
            My name is {profile.name} and I am a {profile.age} year old - {profile.gender && profile.gender.toUpperCase()}
          </li>
        ))}
      </ul>

    </>
  );
}
 
export default Profile;