import React from "react";
import TodoItem from "./components/TodoItem.component";
import todosData from "./components/todosData";

function App() {
  const todoList = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));
  return <div>{todoList}</div>;
}

export default App;
