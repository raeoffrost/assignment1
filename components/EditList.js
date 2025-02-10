import React from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
// this component holds the UI for the add item editing
// it also allows the swap between view and edit modes
const EditList = ({ items, onAdd, onDelete }) => {
  const contentStyle = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <div style={contentStyle}>
      <AddTodoForm onAdd={onAdd} />
      <br />
      <h3>Edit Todo Items</h3>
      <ul style={{ padding: 20, listStyle: "none" }}>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            editMode={true}
            // No toggling in edit mode
            onToggle={() => {}}
            // the delete functionality
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default EditList;
