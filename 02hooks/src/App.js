import React, { useState, useEffect } from "react";
import Post from "./post";

const App = ({initalCount}) => {
  
  // let [count, setCount] = useState(initalCount  );

  const [state, setState] = useState({
    count: initalCount,
    name: 'shehan'
  })

  let [post, setPost] = useState([
    {
      name: 'This is first post',
      body: 'First Body'
    },
    {
      name: 'This is second post',
      body: 'Second Body'
    }
  ])

  const addPost = () => {
    let newPost = {
      name: 'New Post',
      body: 'new Body'
    }
    setPost([
      ...post,
      newPost
    ])
  }

  const addOne = () => {
    setState({
      ...state,
      count: state.count + 1
    });
   }

  const restOne = () => {
    setState({
      ...state,
      count: state.count - 1
    })
  }
   const resetOne = () => {
     setState({
       ...state,
       count: state.count = initalCount
     })
  }
  const removePost = () => {
    setPost([])
  }
  useEffect(() => {
    // console.log('state updated')
  },[state])
   
  return (
    <>
      <h2>{state.name }</h2>
      <h3>count : {state.count}</h3>
      <button onClick={addOne}>Add one +1</button>
      <button onClick={restOne}>Rest one -1</button>
      <button onClick={resetOne}>Reset</button>
      <div>
        <button onClick={addPost}>ADD Post</button>
        <button onClick={removePost}>Remove Post</button>
      </div>
      <hr/>
      
    
        {post.map((item,i) => (
          <Post item={item} id = {i}/>
        ))}
 

    </>
  );
}

export default App;
