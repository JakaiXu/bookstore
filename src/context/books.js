import { createContext, useCallback, useState } from "react";
import axios from "axios";
const BookContext = createContext();

function Provider({ children }) {
  const bookStore = [
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Dark Tower" },
    { id: 3, title: "Hunger Games" },
  ];
  const [books, setBooks] = useState(bookStore);
  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  },[]);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    const updatedBooks = [
      ...books,
      response.data,
      // { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };
  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBook,
    createBook,
  };
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}
export { Provider };
export default BookContext;
