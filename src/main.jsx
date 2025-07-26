import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Counter } from "./components/Counter/Counter";
import { TodoList } from "./components/ToDo/TodoList";
import { CatApi } from "./components/CatAPI/CatApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/todo", 
        element: <TodoList />
      },
      {
        path: "/counter",
        element: <Counter />
      },
      {
        path: "/cat",
        element: <CatApi />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
