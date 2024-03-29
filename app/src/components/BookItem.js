// import logo from './logo.svg';
import './BookItem.css';
import { useState } from "react";

export default function BookItem({onClick, title, author, genre, price, imgLink}) {
  return (
    <div className="book">
      <img src={imgLink} className="book-image" alt="image of BOOK TITLE cover" />
      <div className="title">{title}</div>
      <div className="author">{author}</div>
      <div className="genre">{genre}</div>
      <div className="price">{price}</div>
      <button className = "addToCart"
        onClick = {onClick}
        title="Add to Cart"
        color="#841584"
      />
    </div>
  );
}
