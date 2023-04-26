import React, { useState } from "react";
import icon from "../../assets/book-icon.png";
import BookEdit from "./BookEdit";

import useBooksContext from "../../hooks/useBooksContext";
import "./BookShow.css";
const BookShow = ({book   }) => {
const {deleteBook, editBookById} =useBooksContext()

  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteBook(book.id);
  };
  const showEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id,newTitle) => {
    setShowEdit(false);
    editBookById(id,newTitle);
  };
  return (
    <div className="book-show">
      <div className="book">
        <img alt="books" src={icon}></img>
        <h3>{book.title}</h3>
        <i onClick={showEditClick} className="edit icon"></i>
        <i onClick={handleDeleteClick} className="close icon"></i>
      </div>
      {showEdit && <BookEdit book={book} onSubmit={handleSubmit} />}
    </div>
  );
};

export default BookShow;
