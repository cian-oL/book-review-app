import React, { createFactory } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "Bored of Lunch: The Healthy Air Fryer Book: THE NO.1 BESTSELLER";
  const author = "Nathan Anthony";

  return (
    <article className="book">
      <img
        src="./images/amazon-book1.jpg"
        alt="Bored of Lunch Book Cover"
      />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
