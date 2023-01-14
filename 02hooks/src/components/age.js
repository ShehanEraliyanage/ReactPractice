import React from "react";


const Age = ({age}) => {
  
   console.log('4- Age');
   
  return (
    <>
          <h3>The Age is : {age }</h3>
    </>
  );
}

export default React.memo(Age);
