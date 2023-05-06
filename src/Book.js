// Component for render of each book
const Book = ({ author, title, image, getBook, id }) => {
    const displayTitle = () => {
      getBook(id);
    }
    // alternatively, you could use an anon fcn in the onClick that calls getBook(id)
  
    return (
      <article className="book">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <button onClick={displayTitle}>Display Title</button>
        <h3>{author}</h3>
      </article>
    );
  };

export default Book;