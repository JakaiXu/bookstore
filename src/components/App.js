import React, { useState } from "react";
import "bulma/css/bulma.css";
import BookCreate from "./BookCreate";
import BookList from "./bookManage/BookList";
import "../index.css";
import axios from "axios";
const App = () => {
  const bookStore = [
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Dark Tower" },
    { id: 3, title: "Hunger Games" },
  ];
  const [books, setBooks] = useState(bookStore);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const createBook = async(title) => {
  const response = await axios.post('http://[::1]:3001/books',{
      title:title
    })
   
    const updatedBooks = [
      ...books,
      response.data
      // { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1 className="title-h1">Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEditBookById={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
