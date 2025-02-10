import React, { useState } from "react";
import Button from "./Button";
// lets the user update their name so the greeting can be customized
// can swap between editing and not editing
const UserProfile = ({ user, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(user.name);

  const contentStyle = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  };
  // similar to the addnewtask
  // has simple validation to remove white space and check for empty input
  // updated the user name
  // sends the new name to the user state held in Nav
  // disables the editing state after the name is saved
  const handleSave = () => {
    if (tempName.trim()) {
      onUpdateUser({ ...user, name: tempName });
      setIsEditing(false);
    } else {
      // gives error alert if form is submitted without input
      alert("ERROR: Please add a name");
    }
  };

  return (
    <div style={contentStyle}>
      <h1>Username</h1>
      <p>What would you like to be called?</p>
      <br />
      {
        // if in editing state, it is an input
        // if not it is text with the name prop
        isEditing ? (
          <div>
            <input value={tempName} onChange={(e) => setTempName(e.target.value)} style={{ marginBottom: "10px", padding: "5px" }} />
          </div>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
          </div>
        )
      }
      <br />
      <Button
        // button changes depending on state
        // if editing it saves the name then switches state to not editing
        // if not editing it switched the state to editing
        // btn text also depends on state
        onClick={() => {
          if (isEditing) {
            handleSave();
          } else {
            setIsEditing(true);
          }
        }}
      >
        {isEditing ? "Save" : "Edit Username"}
      </Button>
    </div>
  );
};

export default UserProfile;
