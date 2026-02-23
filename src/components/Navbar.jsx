import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-4">
      <Link className="navbar-brand" to="/">Library</Link>
      <div>
        <Link className="btn btn-light me-2" to="/">Home</Link>
        <Link className="btn btn-light me-2" to="/books">Browse Books</Link>
        <Link className="btn btn-light" to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;