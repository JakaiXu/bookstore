import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../../hooks/useBooksContext";
import "./BookList.css";

const BookList = () => {
  const { books } = useBooksContext();
  const renderList = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return <div className="book-list ui container">{renderList}</div>;
};

export default BookList;
