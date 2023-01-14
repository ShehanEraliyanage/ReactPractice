import React from "react";


const AgeBtn = ({handleAge}) => {
  
    console.log('5- AgeButn');
    
  return (
    <>
          <button onClick={handleAge}>
              Increemnt the Age
        </button>
    </>
  );
}

export default React.memo (AgeBtn);
