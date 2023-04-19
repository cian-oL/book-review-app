import React, { createFactory } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const title = "Bored of Lunch: The Healthy Air Fryer Book: THE NO.1 BESTSELLER";
const author = "Nathan Anthony";
const image = "./images/amazon-book1.jpg";

const BookList = () => {
  return (
    <section className="book-list">
      <Book author={author} title={title} image={image} />
      <Book author={author} title={title} image={image} />
      <Book author={author} title={title} image={image} />
      <Book author={author} title={title} image={image} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
