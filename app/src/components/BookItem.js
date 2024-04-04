import './BookItem.css';

export default function BookItem({onClick, title, author, genre, price, imgLink}) {
  return (
    <div className="book">
      <img src={imgLink} className="book-image" alt="image of book cover" />
      <div className ="book-info">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="genre">{genre}</div>
        <div className="price">${price}</div>
        <button className="addToCart"
          onClick = {onClick}
        > Add to Cart </button>
      </div>
    </div>
  );
}
