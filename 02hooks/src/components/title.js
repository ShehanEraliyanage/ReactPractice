import React from "react";


const Title = () => {
    
    console.log('1- Title');
   
  return (
    <>
          <h1>My age</h1>
          <hr></hr>
    </>
  );
}

export default React.memo(Title);
