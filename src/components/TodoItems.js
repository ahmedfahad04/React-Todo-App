import React, { useRef, useState } from "react";

function TodoItems({ doneItems, setDoneItems }) {
  const [txt, setTxt] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const setTodoList = () => {
    setTodos([...todos, txt]);
    setTxt("");
    inputRef.current.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodoList();
    }
  };

  return (
    <div>
      <div className="search-box">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="input-todo"
            ref={inputRef}
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="add" onClick={setTodoList}>
          <i className="fa-solid fa-plus add-icon"></i>
        </div>
      </div>
      <div className="list-box">
        {todos.map((todo) => (
          <div className="list-item" key={todo}>
            {todo}
            <div className="list-item-icons">
              <i
                className="fa-sharp fa-solid fa-check"
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => {
                  setDoneItems([...doneItems, todo]);
                  setTodos(todos.filter((item) => item !== todo));
                }}
              ></i>
              <i
                className="fa-solid fa-trash"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setTodos(todos.filter((item) => item !== todo));
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoItems;
