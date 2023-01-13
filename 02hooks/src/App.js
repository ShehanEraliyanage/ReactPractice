import React,{useState}  from "react";

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
   
  return (
    <>
      <h2>{state.name }</h2>
      <h3>count : {state.count}</h3>
      <button onClick={addOne}>Add one +1</button>
      <button onClick={restOne}>Rest one -1</button>
      <button onClick={resetOne}>Reset</button>
      <div>
        <button onClick={addPost}>ADD Post</button>
      </div>
      <hr/>
      
    
        {post.map((item,i) => (
          <div key={i}>
            <div>
              Name : {item.name}
              <br></br>
              Body : {item.body}
              <hr/>
            </div>
          </div>
        ))}
 

    </>
  );
}

export default App;
