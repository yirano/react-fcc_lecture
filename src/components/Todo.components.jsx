import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="to-do">
        <input type="checkbox" />
        <p>Placeholder text here</p>

        <input type="checkbox" />
        <p>Placeholder text here</p>

        <input type="checkbox" />
        <p>Placeholder text here</p>
      </div>
    );
  }
}

export default TodoItem;
