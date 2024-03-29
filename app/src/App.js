import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import bookData from "./assets/book-data.json";
import BookItem from "./components/BookItem";

// image URLs:
bookData.forEach((item) => {
  item.image = item.image;
});


function App() {

  const [cartState, setCartState] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleClick(price, name) {
    setCartState(cartState + 1);
    setCartPrice(cartPrice + price);
    setCartItems([
      ...cartItems,
      name
    ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        Angela's Bookstore
      </header>

      {bookData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BookItem 
          onClick={() => handleClick(item.price, item.title)}
          title = {item.title}
          author = {item.author}
          genre = {item.genre}
          price = {item.price}
          imgLink = {item.image}
        >
          
        </BookItem> // replace with BakeryItem component
      ))}

    </div>
  );
}

export default App;