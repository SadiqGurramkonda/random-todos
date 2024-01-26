import { useState } from 'react'

import './App.css'

let id = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "title": "Go to Gym",
      "description": "Hit the gym from 7-8"
    },
    {
      "id": 2,
      "title": "Go to Gym",
      "description": "Hit the gym from 7-8"
    },{
      "id": 3,
      "title": "Go to Gym",
      "description": "Hit the gym from 7-8"
    }
  ]);

  function addRandomTodo(){
    setTodos([...todos,{
      "id": id++,
      "title": "A random title",
      "description": "A random description for the title"
    }])
  }



  return (
    <div> 
      <button onClick={addRandomTodo}>Add a Random todo</button>
      {
        todos.map((todo)=>{
          return(
            <Todo title={todo.title} description={todo.description} id={todo.id} key={todo.id}></Todo>
          )
        })
      }
    </div>
  )
}

function Todo({title,description,id}){
  return(
    <div style={{
      color: 'green'
    }}>
      <h3>{id}: { title }</h3>
      <p>{description}</p>
    </div>
  )
}

export default App
