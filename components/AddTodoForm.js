import React, { useState } from "react";
import Button from "./Button";
// this component is for adding new to do list items
const AddTodoForm = ({ onAdd }) => {
  // use state holds the new item text to be added
  const [newItemText, setNewItemText] = useState("");

  // handles the submit event for the form
  const handleSubmit = (e) => {
    // prevent default submit
    e.preventDefault();
    // if there is a new text item added to the input box
    // remove extra whitespace(to preserve formatting)
    // then send the new item to nav.js where itll be added to the list
    // setNewItemText gets rid of the text so the user is free to add another thing
    if (newItemText.trim()) {
      onAdd(newItemText);
      setNewItemText("");
    } else {
      // gives error alert if form is submitted without input
      alert("ERROR: Please add a task");
    }
  };

  return (
    // calls handleSubmit then the submit button is clicked
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItemText}
        // when the input is added to the form it updates the state with that value
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="What's next?"
        style={{
          padding: 5,
          marginRight: 5,
          borderRadius: 5,
          border: "1px solid white",
        }}
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default AddTodoForm;
