import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Button from "./Button";
// displays the how to for the todo list
// has a simple show/hide functionality that lets the user toggle its visibility
// the display is a conditional that depends on howto being true
const Howto = () => {
  const [howto, setHowto] = useState(true);
  return (
    <div>
      {howto && (
        <div className={styles.answer}>
          <h4>Instructions</h4>
          <br />
          <p>In List View you can toggle items complete and incomplete. You can also filter between showing all/complete/incomplete tasks.</p>
          <p>In Edit View you can add new items to your to-do list and remove items from your to do list. Toggling between complete/incomplete is disables in this mode.</p>
          <p>In profile you can update your name so the greeting will be customized.</p>
        </div>
      )}
      <br />
      <Button onClick={() => setHowto(!howto)}>Toggle Instructions</Button>
    </div>
  );
};

export default Howto;
