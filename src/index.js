import React, { createFactory } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img src="./images/amazon-book1.jpg" alt="Bored of Lunch Book Cover" />
  );
};

const Title = () => {
  return (
    <h2>Bored of Lunch: The Healthy Air Fryer Book: THE NO.1 BESTSELLER</h2>
  );
};

const Author = () => {
  return <h3>Nathan Anthony</h3>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
