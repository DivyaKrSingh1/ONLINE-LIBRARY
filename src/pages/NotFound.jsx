import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="container mt-5 text-center">
      <h2>404 - Page Not Found</h2>
      <p>Invalid URL: {location.pathname}</p>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;