import React from "react";
import Button from "./Button";
// simple to do item component
// gets props from other components for state toggling, text, and deletion
const TodoItem = ({ item, editMode, onToggle, onDelete }) => {
  return (
    <li
      style={{
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span
        // clicking the item sends its id to the toggle function in Nav
        onClick={() => onToggle(item.id)}
        // style has conditionals that let it be crossed out if item is complete
        style={{ flex: 1, opacity: item.active ? 1 : 0.6, textDecoration: item.active ? "none" : "line-through" }}
      >
        {item.name}
      </span>
      {
        // conditional that only shows delete button if the user is in the edit list mode
        // on click sends the idem id to the delete function in Nav
        editMode && (
          <Button variant="delete" onClick={() => onDelete(item.id)}>
            X
          </Button>
        )
      }
    </li>
  );
};

export default TodoItem;
