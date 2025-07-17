import { useCallback, useState } from "react";
import Input from "./components/Input";
import { Lists } from "./components/Lists";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { CounterTimeout } from "./components/CounterTimeout";
import "./App.css"

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn JS",
    },
    {
      id: 3,
      text: "Learn React",
    },
  ]);

  const remove = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const add = () => {
    if (value.trim() === "") {
      return;
    }

    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: value,
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
      <Lists todos={todos} remove={remove}/>
      <Counter />
      <CounterTimeout />
    </>
  );
}

export default App;
