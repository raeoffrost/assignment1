import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

// displays the todo items based on the filter button state

const TodoList = ({ items, onToggle, onDelete }) => {
  const [active, setActive] = useState(null);

  const contentStyle = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  // recreates the list based on the conditional set by the filter buttons
  // if the active state is null it just prints the list
  // if the active state is true/false(incomplete/complete)
  // then it only displays the items with a matching state
  const filteredItems = items.filter((item) => {
    if (active === null) return true;
    return item.active === active;
  });

  return (
    <div style={contentStyle}>
      <div>
        <Button onClick={() => setActive(null)}>Show All</Button>
        <Button onClick={() => setActive(true)}>Show Incomplete</Button>
        <Button onClick={() => setActive(false)}>Show Complete</Button>
      </div>
      <br />
      <h3>Todo Items</h3>
      <ul style={{ padding: 20, listStyle: "none" }}>
        {
          // loops through the list of todo items based on the filter
          filteredItems.map((item) => (
            <TodoItem key={item.id} item={item} editMode={false} onToggle={onToggle} onDelete={onDelete} />
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
