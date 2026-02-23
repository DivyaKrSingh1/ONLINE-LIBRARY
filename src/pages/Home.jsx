import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);

  return (
    <div className="container mt-4">
      <h2>Welcome to Online Library</h2>

      <h4 className="mt-4">Categories</h4>
      <div className="mb-4">
        <Link className="btn btn-secondary me-2" to="/books/Fiction">Fiction</Link>
        <Link className="btn btn-secondary me-2" to="/books/Non-Fiction">Non-Fiction</Link>
        <Link className="btn btn-secondary" to="/books/Sci-Fi">Sci-Fi</Link>
      </div>

      <h4>Popular Books</h4>
      <div className="row">
        {books.slice(0, 2).map((book) => (
          <div className="col-md-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;