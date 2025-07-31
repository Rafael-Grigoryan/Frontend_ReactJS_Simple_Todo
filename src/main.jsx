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
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { CatCategories } from "./components/CatAPI/CatCategories";
import { ThemeContextProvider } from "./providers/ThemeContextProvider.jsx";
import { Test } from "./components/CatAPI/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/todo",
        element: <TodoList />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/cat",
        element: <CatApi />,
      },
      {
        path: "/cat-category",
        element: <CatCategories />,
      },
      {
        path: "/cat-test",
        element: <Test />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
);

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
