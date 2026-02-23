import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      alert("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...form,
      rating: Number(form.rating),
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <input className="form-control mb-2" placeholder="Author"
          onChange={(e) => setForm({ ...form, author: e.target.value })} />

        <input className="form-control mb-2" placeholder="Category"
          onChange={(e) => setForm({ ...form, category: e.target.value })} />

        <textarea className="form-control mb-2" placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })} />

        <input type="number" className="form-control mb-2" placeholder="Rating"
          onChange={(e) => setForm({ ...form, rating: e.target.value })} />

        <button className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;