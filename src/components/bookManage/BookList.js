import React from "react";
import BookShow from "./BookShow";
import "./BookList.css";
const BookList = ({ books, onDelete, onEditBookById }) => {
  const renderList = books.map((book) => {
   
    return (
      <BookShow
        book={book}
        key={book.id}
        onDelete={onDelete}
        onEditBookById={onEditBookById}
      />
    );
  });
  return <div className="book-list ui container">{renderList}</div>;
};

export default BookList;
