import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="container">
        <h1>All Project</h1>
        <Link to="/todo">Todo List</Link>
        <Link to="/counter">Counter</Link>
    </nav>
  )
}
