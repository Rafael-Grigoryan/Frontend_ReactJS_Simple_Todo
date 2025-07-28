import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Counter } from "./components/Counter/Counter";
import { TodoList } from "./components/ToDo/TodoList";
import { CatApi } from "./components/CatAPI/CatApi";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Home />

      {/* <Routes>
        <Route path="/todo" element={<TodoList />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/cat" element={<CatApi />}/>
      </Routes> */}
    </>
  );
}

export default App;
