import './Index.css'
import React, {useState, useRef, useEffect}from 'react';
import Item from './Item';

function App() {
 const initalizTodos = ["Work", "Study","Sleep"];
 const storedTodos = JSON.parse(localStorage.getItem("todos")??
 JSON.stringify(initalizTodos));
 const [todos, setTodos] = useState(storedTodos);
 const inputRef = useRef<HTMLInputElement>(null);

 const addTodoHandler = (e: React.FormEvent) => {
  e.preventDefault(); 
  if (inputRef.current?.value.trim()) {
    setTodos([...todos, inputRef.current.value]);
    inputRef.current.value = ""; 
  }
};
  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

 useEffect(() => {
  localStorage.setItem('todos',JSON.stringify(todos));
 },[todos]);
  return (
     <div>
      <form onSubmit={addTodoHandler}>
        <input type="text" placeholder='Введите задачу' ref={inputRef}/>
        <button type='submit'> Добавить</button>
      </form>
      
        {todos.map((el: string,index: number) => (
          <Item key={index} el={el} index = {index} onDelete ={deleteTodo}/>
        ))}
        {todos.length >= 4 && <div>Всего задач: {todos.length}</div>}
        <button onClick={clearTodos}> Очистить всего</button>
     </div>

      
         );
     }
     export default App
