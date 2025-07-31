import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { CatCategories } from "./components/CatAPI/CatCategories";
import "./App.css";

function App() {
  return (
    <>
      <CatCategories />

      <Outlet />
      <Home />
    </>
  );
}

export default App;
