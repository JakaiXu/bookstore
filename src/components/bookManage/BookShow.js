import React, { useState } from "react";
import "./BookShow.css";
import icon from "../../assets/book-icon.png";
import BookEdit from "./BookEdit";
const BookShow = ({ book, onDelete, onEditBookById }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const showEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id,newTitle) => {
    setShowEdit(false);
    onEditBookById(id,newTitle);
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
