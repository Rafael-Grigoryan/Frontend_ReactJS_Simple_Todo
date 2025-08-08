import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { CatCategories } from "./components/CatAPI/CatCategories";
import CatPage from "./components/CatAPI/CatPage";
import "./App.css";

function App() {
  return (
    <>
      {/* <PersistentDrawerLeft/> */}
      {/* <Header /> */}
      <CatPage />
      {/* <CatCategories /> */}
      {/* <Navbar/> */}
      <Outlet />
      {/* <Home /> */}
    </>
  );
}

export default App;
