import React from "react";

function Box({ id, width, height, color, removeBox }) {
  return (
    <div>
      <div style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }} />
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
