import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="container">
      <nav className="navbar-container">
        <h1>All Project</h1>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/todo" className="navbar-item">
          Todo List
        </Link>
        <Link to="/counter" className="navbar-item">
          Counter
        </Link>
        <Link to="/cat" className="navbar-item">
          Cat API
        </Link>
        <Link to="/cat-category" className="navbar-item">
          Cat Category
        </Link>
        <Link to="/random" className="navbar-item">
          random
        </Link>
      </nav>
    </div>
  );
}
