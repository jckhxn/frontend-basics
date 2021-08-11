import "./App.css";
import { useEffect, useRef, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  // Binding
  const todoText = useRef();

  // Side Effects Lifestyle

  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input ref={todoText} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
