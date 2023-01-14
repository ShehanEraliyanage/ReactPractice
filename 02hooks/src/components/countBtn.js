import React from "react";


const CountBtn = ({handleCount}) => {
  
   console.log('3- CountBtn');

  return (
    <>
          <button onClick={handleCount}>
              Increemnt the Count
        </button>
    </>
  );
}

export default React.memo (CountBtn);
