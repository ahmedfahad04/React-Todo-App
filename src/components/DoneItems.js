import React from "react";

function DoneItems({ doneItems }) {
  console.log("Checked Items: ", doneItems);

  return (
    <div className="done-items">
      <ul>
        {doneItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DoneItems;
