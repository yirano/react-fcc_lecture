import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <span>{props.item.text}</span>
      <hr />
    </div>
  );
}

export default TodoItem;
