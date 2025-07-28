import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>Not Found 404</h1>
      <Link className="navbar-item" to="/">
        Back to Home page
      </Link>
    </div>
  );
}
