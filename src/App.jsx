import { useState } from 'react'
import { Input } from "./components/Input";
import { Lists } from "./components/Lists";
import { Button } from "./components/Button";

function App() {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn JS",
      isEditing: false
    },
    {
      id: 3,
      text: "Learn React",
      isEditing: false
    },
  ]);

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const add = () => {
    if (value.trim() === "") {
      return
    }

    setTodos([...todos, {
      id: Math.random(),
      text: value,
      isEditing: false
    }])

    setValue("");
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const startEditing = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: true } : todo
    ));
  }

  const stopEditing = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: false, text: newText } : todo
    ));
  }

  return (
    <>
      <Input handleChange={handleChange} value={value} />
      <Button onClick={add} />
      <Lists todos={todos} remove={remove} startEditing={startEditing} stopEditing={stopEditing} />
    </>
  )
}

export default App