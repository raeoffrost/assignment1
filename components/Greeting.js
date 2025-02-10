import React from "react";
// simple greeting that can be customized by the user
// takes the user prop from Nav to get whatever the user input as their name
const Greeting = ({ user }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Greetings, {user}!</h2>
      <p>What would you like to get done today?</p>
    </div>
  );
};

export default Greeting;
