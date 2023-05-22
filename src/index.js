import React, { createFactory } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import books from "./Books";
import Book from "./Book";

const BookList = () => {
  const getBook = (id) => {
    const foundBook = books.find((book) => book.id === id);
    console.log(foundBook);
  };

  return (
    <>
      <h1>Bestsellers</h1>
      <section className="book-list">
        {books.map((book, index) => {
          console.log(index);
          return (
            <Book {...book} key={book.id} getBook={getBook} index={index} />
          );
          //cannot access an object directly. Also using spread to accress & pass in all props from the obj
          // alternative approach: <Book book={book} />... and in Book Component, access props by {destructed} = book.props or by {{ book: { destructured } }}
        })}
      </section>
    </>
  );
};

// render in React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
