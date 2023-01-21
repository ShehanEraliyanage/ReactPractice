import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return(
  <>
   <div>Profile</div> 
      <Link to={{
        pathname : '/posts'
      }}>
        Go to profile Post
      </Link>
  </>
  )
};

export default Profile;
