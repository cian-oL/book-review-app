import React, { createFactory } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  title: "Bored of Lunch: The Healthy Air Fryer Book: THE NO.1 BESTSELLER",
  author: "Nathan Anthony",
  image: "./images/amazon-book1.jpg",
};

const secondBook = {
  title: "Lessons in Chemistry",
  author: "Bonnie Garmus",
  image: "./images/amazon-book2.jpg",
};

const BookList = () => {
  return (
    <section className="book-list">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
      >
      <p>Yadda yadda yadda</p>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        image={secondBook.image}
      />
    </section>
  );
};

const Book = ({ author, title, image, children }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{children}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
