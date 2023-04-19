import React, { createFactory } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Bored of Lunch: The Healthy Air Fryer Book: THE NO.1 BESTSELLER",
    author: "Nathan Anthony",
    image: "./images/amazon-book1.jpg",
    id: 1,
  },
  {
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    image: "./images/amazon-book2.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ author, title, image }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
