import React, { useRef} from "react";

const App = () =>{

  const textInput = useRef();


  const triggerHandle = () => {
    console.log(textInput.current.value)
  }


    return (
      <>
        <h1>Form:</h1>
        <InputComponent ref={ textInput} />
        <button onClick={triggerHandle}>
          Trigger
        </button>
      </>
  )
}

const InputComponent = React.forwardRef((props,ref) => {
    return (
       <input type='text' ref={ref}></input>
    )
  }
  )



export default App