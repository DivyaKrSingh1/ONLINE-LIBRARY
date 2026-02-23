import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id === Number(id));

  if (!book) return <h3 className="m-4">Book Not Found</h3>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>

      <button className="btn btn-secondary" onClick={() => navigate("/books")}>
        Back to Browse
      </button>
    </div>
  );
}

export default BookDetails;