import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Counter } from "./components/Counter/Counter";
import { CatApi } from "./components/CatAPI/CatApi";
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { ThemeContextProvider } from "./providers/ThemeContextProvider.jsx";
import { lazy, Suspense } from "react";
const TodoList = lazy(() => import("./components/ToDo/TodoList.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: ":id",
        element: <CatApi />,
      },
    ],
  },
  {
    path: "/todo",
    element: (
      <Suspense fallback={null}>
        <TodoList />
      </Suspense>
    ),
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
);
