import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card p-3">
      <h5>{book.title}</h5>
      <p>Author: {book.author}</p>
      <Link className="btn btn-primary" to={`/book/${book.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default BookCard;