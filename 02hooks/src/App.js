import React, { useState,useCallback } from "react";

import Title from './components/title'
import Count from "./components/count"
import CountBtn from "./components/countBtn";
import Age from "./components/age";
import AgeBtn from "./components/ageBtn";

const App = () => {
  
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10)


  const IncreementCount = useCallback(() => {
    setCount(count+1)
  },[count] )
  const IncreementAge = useCallback(() => {
    setAge(age+1)
  },[age])
   
  return (
    <>
      <Title />
      <Count count={count} />
      <CountBtn handleCount={IncreementCount} />
      <Age age={age} />
      <AgeBtn handleAge = {IncreementAge}/>
    </>
  );
}

export default App;
