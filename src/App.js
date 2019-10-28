import React from "react";
import TodoItem from "./components/TodoItem.component";
import todosData from "./components/todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  handleChange = id => {
    this.setState(prevState => {
      const updated = prevState.todos.map(function(todo) {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return updated;
    });
  };

  render() {
    const todoList = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div>{todoList}</div>;
  }
}

export default App;
