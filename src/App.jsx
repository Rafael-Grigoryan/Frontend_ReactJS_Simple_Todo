import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Home />
    </>
  );
}

export default App;
