// import logo from './logo.svg';
import './CartItem.css';
import { useState } from "react";

export default function CartItem({title, quantity, onClick}) {
  return (
    <div className="cart-item">
      <button 
        className="cart-remove"
        onClick={onClick}
      >
        -1
      </button>
      <div className="cart-text">
        {title} x{quantity}
      </div>
    </div>
  );
}
