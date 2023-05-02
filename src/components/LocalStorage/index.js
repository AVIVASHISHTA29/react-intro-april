import React, { useState } from "react";

function LocalStorageComponent() {
  const [text, setText] = useState("");

  const saveItemFnc = () => {
    localStorage.setItem("text", text);
  };

  const getItemFnc = () => {
    setText(localStorage.getItem("text"));
  };

  return (
    <div>
      <input
        className={`hello ${text}`}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={saveItemFnc}>Save item</button>
      <button onClick={getItemFnc}>Get item</button>
      <p>{text}</p>
    </div>
  );
}

export default LocalStorageComponent;
