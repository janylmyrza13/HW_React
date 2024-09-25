import './Index.css'
import React, {useState, useRef, useEffect}from 'react';
import Item from './Item';

interface Todo{
  id: number;
  el: string;
}

function App(){
//  const initalizTodos = ["Work", "Study","Sleep"];
 const initalizTodos: Todo [] = [
  {id: 1, el: "Work"},
  {id: 2, el: "Study"},
  {id: 3, el: "Sleep"},
 ];
  
 const storedTodos: Todo[] = JSON.parse(localStorage.getItem("todos")??
 JSON.stringify(initalizTodos));
//  const [todos, setTodos] = useState(storedTodos);
 const[todos, setTodos] = useState<Todo[]>(storedTodos);
 const inputRef = useRef<HTMLInputElement>(null);

 const addTodoHandler = (e: React.FormEvent) => {
  e.preventDefault(); 
  if (inputRef.current?.value.trim()) {
    const newTodo: Todo = {
      id: Date.now(),
      el: inputRef.current.value
    };
   setTodos((prevTodos) => [...prevTodos, newTodo]);
   inputRef.current.value = "";
  }
};
  const deleteTodo = (id: number) => {setTodos((prevTodos) => prevTodos.filter(todo => todo.id !==id));
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
      
      {todos.map((todo: Todo) => (
           <Item key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
        {todos.length >= 4 && <div>Всего задач: {todos.length}</div> }
        <button onClick={clearTodos}> Очистить всего</button>
     </div>
        );
     }
     export default App;