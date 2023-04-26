import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import "./BookCreate.css";
const BookCreate = () => {
  const { createBook } = useBooksContext();

  const [term, setTerm] = useState("");
  const termHandler = (e) => {
    setTerm(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    createBook(term);
    setTerm("");
  };

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <h1 className="title is-3">Add a Book</h1>
          <h3 className="title is-5">Title</h3>
          <input
            onChange={termHandler}
            value={term}
            placeholder="Search a book ..."
            type="text"
            className="input is-primary is-rounded"
            style={{ marginBottom: "10px" }}
          />
          <button className="button is-white">Add</button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;
