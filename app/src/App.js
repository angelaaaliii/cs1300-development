import { Select } from '@chakra-ui/react';
import './App.css';
import { useState } from "react";
import bookData from "./assets/book-data.json";
import BookItem from "./components/BookItem";
import CartItem from "./components/CartItem";
import { ChakraProvider } from '@chakra-ui/react';

// TODOs:
// 2) sailor who fell from grace with the sea

// image URLs:
bookData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [cartPrice, setCartPrice] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(new Map());
  const [cartItems, setCartItems] = useState([]);
  const [books, setBooks] = useState(bookData);
  const [isSortFilter, setIsSortFilter] = useState([false, "", ""]);
                                                  // sort, author, genre

  function handleAddCartClick(price, title) {
    var newCart = cartItemCount;
    if (newCart.has(title)) {
      // increase item number
      newCart.set(title, newCart.get(title) + 1);
    }
    else {
      // add to cart
      newCart.set(title, 1);
      cartItems.push(title);
      setCartItems(cartItems);
    }
    setCartItemCount(newCart);
    setCartPrice(cartPrice + price);
  }

  function handleRemoveCartClick(title) {
    var price = bookData.filter((book) => book.title == title)[0].price;

    console.log("IN REMOVE");
    var newCartItemCount = cartItemCount;
    if (newCartItemCount.get(title) == 1) {
      // remove book completely
      newCartItemCount.delete(title);
      console.log("removing book");

      cartItems.splice(cartItems.indexOf(title), 1);
      var newCartItems = [...cartItems];
      setCartItems(newCartItems);
      console.log(cartItems);
    }
    else {
      // only decrease quantity by 1
      console.log("HERE");
      newCartItemCount.set(title, newCartItemCount.get(title)-1);
    }
    setCartItemCount(newCartItemCount);
    setCartPrice(cartPrice - price);
  }

  function compareByTitle(book1, book2) {
    if (book1.title < book2.title) {
      return -1;
    }
    if (book1.title > book2.title) {
      return 1;
    }
    return 0;
  }
  
  function handleSortClick(event) {
    console.log("sorting");
    const newIsSortFilter = [...isSortFilter];
    if (event.target.value == "sort titles alphabetically") {
      console.log("alphabet");
      var booksCopy = [...books];
      var newBooks = [...booksCopy.sort(compareByTitle)];
      setBooks(newBooks);
      newIsSortFilter[0] = true;
    }
    else {
      // reset sorting filter
      console.log("revert sort original");
      var newBooks = []
      if (isSortFilter[1] == "" && isSortFilter[2] == "") {
        // other filters are NOT active:
        newBooks = [...bookData];
        console.log(bookData);
      }
      else {
        // other filters are active:
        for (var i = 0; i < bookData.length; i++) {
          if (books.includes(bookData[i], 0)) {
            newBooks.push(bookData[i]);
          }
        }
        console.log("revert 2");
      }

      setBooks(newBooks);
      newIsSortFilter[0] = false;
    }
    setIsSortFilter(newIsSortFilter);
  }

  function handleAuthorFilterClick(event) {
    console.log(event.target.value);
    const newIsSortFilter = [...isSortFilter];
    newIsSortFilter[1] = event.target.value;
    var newBooks = [];

    if (event.target.value != "") {
      // author filter active
      if (isSortFilter[2] != "") {
        // genre filter active
        for (var i = 0; i < bookData.length; i++) {
          if (bookData[i].genre == isSortFilter[2] && bookData[i].author == event.target.value) {
            newBooks.push(bookData[i]);
          }
        }
      }
      else {
        // genre filter NOT active
        for (var i = 0; i < bookData.length; i++) {
          if (bookData[i].author == event.target.value) {
            newBooks.push(bookData[i]);
          }
        }
      }

      if (isSortFilter[0]) {
        newBooks = [...newBooks.sort(compareByTitle)];
      }
      
    }

    else {
      // reset filter
      console.log("RESET AUThOR FILTER");
      if (isSortFilter[2] != "") {
        // genre filter are active:
        console.log("genre filter is active here");
        for (var i = 0; i < bookData.length; i++) {
          if (bookData[i].genre == isSortFilter[2]) {
            newBooks.push(bookData[i]);
          }
        }
        console.log(isSortFilter[2]);
        console.log(newBooks.length);
      }
      else {
        // other filters are NOT active
        newBooks = bookData;
      }

      if (isSortFilter[0]) {
        newBooks = [...newBooks.sort(compareByTitle)];
      }
    }
    setBooks(newBooks);
    setIsSortFilter(newIsSortFilter);
  }

  function handleGenreFilterClick(event) {
    const newIsSortFilter = [...isSortFilter];
    newIsSortFilter[2] = event.target.value;
    var newBooks = [];

    if (event.target.value != "") {
      if (isSortFilter[1] != "") {
        // author filter active
        for (var i = 0; i < bookData.length; i++) {
          if (bookData[i].author == isSortFilter[1] && bookData[i].genre == event.target.value) {
            newBooks.push(bookData[i]);
          }
        }
      }
      else {
        // author filter NOT active
        for (var i = 0; i < bookData.length; i++) {
          if (bookData[i].genre == event.target.value) {
            newBooks.push(bookData[i]);
          }
        }
      }

      if (isSortFilter[0]) {
        newBooks = [...newBooks.sort(compareByTitle)];
      }
    }
    else {
      // reset genre filter
      if (isSortFilter[1] != "") {
        // author filter is active:
        for (var i = 0; i < bookData.length; i++) {
          if (bookData[i].author == isSortFilter[1]) {
            newBooks.push(bookData[i]);
          }
        }
      }
      else {
        // other filters are NOT active
        newBooks = bookData;
      }

      if (isSortFilter[0]) {
        newBooks = [...newBooks.sort(compareByTitle)];
      }

    }
    setBooks(newBooks);
    setIsSortFilter(newIsSortFilter);
  }

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          Bookstore
        </header>

        <div className="sort-filters">

          <div className="dropdown" aria-label="sort by titles alphabetically dropdown">
            <Select onChange={handleSortClick} placeholder='Sort by:'>
              <option value='sort titles alphabetically'>Title - Alphabetical</option>
            </Select>
          </div>

          <div className ="dropdown" aria-label="filter by author dropdown">
            <Select onChange={handleAuthorFilterClick} placeholder='Select Author'>
              <option value='Agatha Christie'>Agatha Christie</option>
              <option value='Alex Michaelides'>Alex Michaelides</option>
              <option value='Andy Weir'>Andy Weir</option>
              <option value='Charles Bukowski'>Charles Bukowski</option>
              <option value='Christina Lauren'>Christina Lauren</option>
              <option value='Eileen Chang'>Eileen Chang</option>
              <option value='Fredrik Backman'>Fredrik Backman</option>
              <option value='Jane Austen'>Jane Austen</option>
              <option value='Madeline Miller'>Madeline Miller</option>
              <option value='Martha Anne Toll'>Martha Anne Toll</option>
              <option value='Mary-Ann Tirone Smith'>Mary-Ann Tirone Smith</option>
              <option value='Min Jin Lee'>Min Jin Lee</option>
              <option value='Ocean Vuong'>Ocean Vuong</option>
              <option value='Olivie Blake'>Olivie Blake</option>
              <option value='Peng Shepherd'>Peng Shepherd</option>
              <option value='Raymond Carver'>Raymond Carver</option>
              <option value='Richard Yates'>Richard Yates</option>
              <option value='Yukio Mishima'>Yukio Mishima</option>
            </Select>
          </div>

          <div className="dropdown" aria-label="filter by genre dropdown">
            <Select onChange={handleGenreFilterClick} placeholder='Select Genre'>
              <option value='Fiction'>Fiction</option>
              <option value='Memoir'>Memoir</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Thriller'>Thriller</option>
              <option value='Romance'>Romance</option>
              <option value='Historical Fiction'>Historical Fiction</option>
              <option value='Mystery'>Mystery</option>
              <option value='Science Fiction'>Science Fiction</option>
            </Select>
          </div>

        </div>

        <div className ="bookshelf">

          {books.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BookItem 
              onClick={() => handleAddCartClick(item.price, item.title)}
              title = {item.title}
              author = {item.author}
              genre = {item.genre}
              price = {item.price}
              imgLink = {item.image}
            >
              
            </BookItem>
          ))}
        </div>

        <header className="Cart-header">
          My Cart
        </header>

        <div className="cart">
          {cartItems.map((title) => (
            <CartItem 
            title={title}
            quantity={cartItemCount.get(title)}
            onClick={() =>handleRemoveCartClick(title)}
            >
            
          </CartItem>
          ))}
          <br></br>
          <div className ="cart-price">
            Total Price: ${Math.abs(cartPrice.toFixed(2))}
          </div>
        </div>

      </div>
    </ChakraProvider>
  );
}

export default App;