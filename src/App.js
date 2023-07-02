import React, { useState } from "react";
import "./App.css";
import DoneItems from "./components/DoneItems";
import TodoItems from "./components/TodoItems";

function App() {
  const [doneItems, setDoneItems] = useState([]);

  return (
    <div className="main-container">
      <div className="main-box">
        <h1 className="headline">Todo App</h1>
        <div className="inner-layout">
          <div className="left-box flex-child">
            <TodoItems doneItems={doneItems} setDoneItems={setDoneItems} />
          </div>
          <div className="right-box flex-child">
            <div className="sub-headline">Done Items</div>
            <div className="done-item-box">
              <DoneItems doneItems={doneItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
