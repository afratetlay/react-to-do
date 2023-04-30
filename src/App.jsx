import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");

  //Create a brand new todo and add to the list
  const [todos, setToDos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); //stop page from refreshing
  }
  return (
    <>
      <form on Submit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.value.target)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
