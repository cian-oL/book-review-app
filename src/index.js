import React, { createFactory } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// book data
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

//Component for book data
const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book {...book} key={book.id} />; //cannot access an object directly. Also using spread to accress & pass in all props from the obj
        // alternative approach: <Book book={book} />... and in Book Component, access props by {destructed} = book.props or by {{ book: { destructured } }} 
      })}
    </section>
  );
};

// Component for render of each book
const Book = ({ author, title, image }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

// render in React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
