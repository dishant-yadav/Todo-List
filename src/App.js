import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1 className="title text-center my-4">Todo List</h1> <br />
      <Todo />
    </div>
  );
}

export default App;
