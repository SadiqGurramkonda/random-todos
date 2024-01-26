import { useEffect, useState } from 'react'

import './App.css'



function App() {

  return (
    <div>
      <WrapperComponet >
        <Todo></Todo>
      </WrapperComponet>
    </div>
  )
}

function WrapperComponet({children}){
  return(
    <div style={{
      border: "1px solid black", padding:"10px"}}>
        {children}
    </div>
  )
}

function Todo(){
  const [todos, setTodos] = useState([])

  useEffect(()=>{

    setInterval((() => {
      fetch('https://sum-server.100xdevs.com/todos').then(res => {
        res.json().then(data => {
          setTodos(data.todos);
        })
      })
    }),5 * 1000)
  },[])
  return(
    <>
      {
        todos.map((todo)=>{
          return<div key={todo.title} style={{
            border:"1px solid grey",
            padding:"5px",
            boxShadow:"2px 2px 1px 2px grey",
            borderRadius:"5px",
            width:"200px"
          }}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        })
      }
    </>)
}

export default App
