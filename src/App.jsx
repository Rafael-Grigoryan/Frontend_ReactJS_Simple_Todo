import { useCallback, useState } from "react";
import Input from "./components/Input";
import { Lists } from "./components/Lists";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn JS",
      subText: [
        { text1: "Learn Array Method" },
        { text2: "Learn Object" },
        { text3: "Learn Promise" },
      ]
    },
    {
      id: 3,
      text: "Learn React",
      subText: [
        { text1: "Learn Components" },
        { text2: "Learn useState hook" },
        { text3: "Learn useRef hook" },
      ]
    },
  ]);

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const add = () => {
    if (value.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: value,
        subText: [],
      },
    ]);

    setValue("");
  };

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <Input handleChange={handleChange} value={value} />
      <Button onClick={add} />
      <Lists todos={todos} remove={remove} />
      <Counter />
    </>
  );
}

export default App;
