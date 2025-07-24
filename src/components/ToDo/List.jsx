import { useState } from "react";

export function List({ todo, remove, subText }) {
  const [show, setShow] = useState(false);

  const openSubText = () => {
    setShow(!show);
  };

  return (
    <div>
      <p>{todo.text}</p>
      <button onClick={() => remove(todo.id)}>X</button>
      <button onClick={openSubText}>
        {show ? "-" : "+"}
      </button>

      {show && (
        <ul>
          {subText && subText.map((item, index) => {
            const key = Object.keys(item)[0];
            return <li key={index}>{item[key]}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

