import React, { useEffect, useContext, useCallback } from "react";
import "bulma/css/bulma.css";
import BookCreate from "./BookCreate";
import BookList from "./bookManage/BookList";
import "../index.css";
import BookContext from "../context/books";
const App = () => {
  const { fetchBooks } = useContext(BookContext);


  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1 className="title-h1">Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
