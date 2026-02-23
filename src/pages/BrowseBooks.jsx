import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  let filteredBooks = books;

  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category === category
    );
  }

  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Browse Books {category && `- ${category}`}</h2>

      <input
        className="form-control mb-3"
        placeholder="Search by title or author..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredBooks.map((book) => (
          <div className="col-md-4 mb-3" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;