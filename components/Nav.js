import React, { useState } from "react";
import TodoList from "./TodoList";
import UserProfile from "./UserProfile";
import Button from "./Button";
import EditList from "./EditList";
import Greeting from "./Greeting";

// nav holds most of the page components
// the navigation as well as handling page rendering
// it also manages the swap between edit/view modes
// it also contains the functions for adding items to the task list

const Nav = () => {
  // sets the state of the page, default is view mode
  const [currentPage, setCurrentPage] = useState("view");
  // sets the state of the user name, default is "friend"
  const [user, setUser] = useState({
    name: "Friend",
  });
  // sets the state of the to do list, a default list is there for the user to see how things work
  const [items, setItems] = useState([
    { id: 1, name: "Vacuum", active: true },
    { id: 2, name: "Buy Snacks", active: true },
    { id: 3, name: "Do Laundry", active: false },
    { id: 4, name: "Complete Assignment 1", active: false },
  ]);

  const navStyle = {
    padding: "10px 20px",
    marginBottom: "20px",
    border: "2px solid white",
    textAlign: "center",
  };
  // toggles the task state between Complete or incomplete
  // map loops over the list
  // if the id matches the id of the toggled item the state changes
  // if it doesnt match it does nothing
  // setItems rerenders the updated list
  const toggleItemStatus = (itemId) => {
    setItems(items.map((item) => (item.id === itemId ? { ...item, active: !item.active } : item)));
  };
  // deletes items from the to do list
  // filter loops through items and creates a new list based on the condition
  // the condition is, if the item id doesnt match the deleted item it gets rendered
  // setItems rerenders the updated list
  const deleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };
  // adds a new item to the to do list
  // gives the item an id
  // id is determined by getting the highest id in the list and adding +1
  // it defaults 0
  // the item name is the test added by the iser
  // items are set active by default
  // setItems rerenders the list with the new item at the end
  const addNewItem = (text) => {
    const newItem = {
      id: Math.max(...items.map((item) => item.id), 0) + 1,
      name: text,
      active: true,
    };
    setItems([...items, newItem]);
  };
  // renders the page based on the state
  // default is just view mode
  // uses switch statement to render the correct page contents
  const renderPage = () => {
    switch (currentPage) {
      case "view":
        return (
          <>
            <Greeting user={user.name} />
            <TodoList items={items} onToggle={toggleItemStatus} onDelete={deleteItem} />
          </>
        );
      case "edit":
        return (
          <>
            <Greeting user={user.name} />
            <EditList items={items} onAdd={addNewItem} onDelete={deleteItem} />
          </>
        );
      case "profile":
        return <UserProfile user={user} onUpdateUser={setUser} />;
      default:
        <>
          <Greeting user={user.name} />
          <TodoList items={items} onToggle={toggleItemStatus} onDelete={deleteItem} />
        </>;
    }
  };

  return (
    <div>
      <nav style={navStyle}>
        <Button variant={currentPage === "view" ? "nav-active" : "nav"} onClick={() => setCurrentPage("view")}>
          List View
        </Button>
        <Button variant={currentPage === "edit" ? "nav-active" : "nav"} onClick={() => setCurrentPage("edit")}>
          Edit List
        </Button>
        <Button variant={currentPage === "profile" ? "nav-active" : "nav"} onClick={() => setCurrentPage("profile")}>
          Profile
        </Button>
      </nav>
      <div style={{ padding: "20px" }}>{renderPage()}</div>
    </div>
  );
};

export default Nav;
