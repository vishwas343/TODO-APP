import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

// 3622668
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  useEffect(() => {
    let todoString = localStorage.getItem('todos');
    if (todoString) {
     let todos=JSON.parse(localStorage.getItem("todos"))
     setTodos(todos)
    }
  }, []);
  

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);
  
  

  const handleAdd=(e)=>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
    saveToLS()
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleCheckbox=(e) => {
    let id=e.target.id;
    let index=todos.findIndex(item=>{
      return item.id===id
    })
    let newTodos=[...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()

  }

  const handleDelete=(e,id) => {
    
    let newTodos=todos.filter(item=>{
      return item.id!=id
    })
    setTodos(newTodos)
    saveToLS()
  }
  
  const handleEdit=(e,id) => {
    let t=todos.filter(item=>item.id===id)
      setTodo(t[0].todo) 
    let newTodos=todos.filter(item=>{
        return item.id!=id
      })
    setTodos(newTodos)
    saveToLS()
  }
  
  const toggleFinished=(e) => {
    setshowFinished(!showFinished)
  }
  


  return (
    <>
      <Navbar />
      <div>
        <div className="container md:w-[45%] bg-purple-100 min-h-[85vh] md:mx-auto my-4 rounded-2xl p-6">
        <div className='w-full text-center mb-5'><h1 className='font-bold text-2xl '>TaskHandy-Manage all your Todos at one place :)</h1></div>
          <div className="add  gap-2 flex flex-col m-2">
            <h2 className='font-bold text-xl'>Add a Todo</h2>
            <div className="input flex gap-3">
              <input value={todo}  type='text' className='w-full rounded-xl p-2' onChange={handleChange}/>
              <button className="addBtn bg-purple-400 rounded-2xl p-2 px-4 hover:bg-purple-600 disabled:bg-purple-800" disabled={todo.length<1} onClick={handleAdd}>Add</button>
            </div>
          </div>

          <hr className='bg-gray-500 p-[0.35px] ' />
          <div className="flex item-center m-4 gap-2">
            <input type="checkbox"onChange={toggleFinished} checked={showFinished} />Show Finished
          </div>
          <div className="display  gap-2 flex flex-col m-2">
            <h2 className='font-bold text-xl'>Your Todos</h2>
            <div className="todos">
            {todos.length===0 && <div className='m-5'>No Todos to display</div>}
             { todos.map(item=>{
                return (showFinished || !item.isCompleted ) && (<div className="todo flex p-1   my-1 justify-between items-center  text-ellipsis" key={item.id}>
                  <div className="flex gap-3 flex-grow items-center">
                    <input onClick={handleCheckbox} type="checkbox"  id={item.id} checked={item.isCompleted} />
                    <div className={`flex-grow  break-words ${item.isCompleted ? 'line-through' : ''} max-w-[250px]`}>{item.todo}</div>
                  </div>
                    <div className="buttons flex gap-1">
                      <button className="edit bg-purple-400 rounded-xl p-2 px-4 hover:bg-purple-600 " onClick={(e)=>{handleEdit(e,item.id)}}><FaEdit /></button>
                      <button className="delete bg-purple-400 rounded-xl p-2 px-4 hover:bg-purple-600" onClick={(e)=>{handleDelete(e,item.id)}}><AiFillDelete /></button>
                    </div>
                </div>)

             })}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
