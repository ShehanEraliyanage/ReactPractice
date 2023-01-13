import React,{useState}  from "react";

const App = ({initalCount}) => {
  
  let [count, setCount] = useState(initalCount  );

  const addOne = () => {
    setCount(count+1);
   }

  const restOne = () => {
    setCount(count - 1);
  }
   const resetOne = () => {
    setCount(initalCount);
  }
   
  return (
    <>
      <h3>count : { count}</h3>
      <button onClick={addOne}>Add one +1</button>
      <button onClick={restOne}>Rest one -1</button>
      <button onClick={resetOne}>Reset</button>
    </>
  );
}

export default App;
