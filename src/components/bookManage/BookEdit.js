import React, { useState } from "react";
import useBooksContext from "../../hooks/useBooksContext";
import "./BookEdit.css";
const BookEdit = ({ book, onSubmit }) => {
  const { editBookById } = useBooksContext();
  const [editing, setEditing] = useState(book.title);

  const titleEdit = (e) => {
    setEditing(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit();
    editBookById(book.id, editing);
  };
  return (
    <form onSubmit={submitHandler} className="book-edit">
      <label>Title</label>

      <input value={editing} onChange={titleEdit} />
      <button className="button  is-small  is-fullwidth is-outlined">
        Save
      </button>
    </form>
  );
};
export default BookEdit;
