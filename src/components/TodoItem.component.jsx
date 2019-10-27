import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={props.item.completed ? true : false}
      />
      <span>{props.item.text}</span>
      <hr />
    </div>
  );
}

export default TodoItem;
