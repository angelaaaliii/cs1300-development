// import logo from './logo.svg';
import './CartItem.css';
import { useState } from "react";

export default function CartItem({title, quantity, onClick}) {
  return (
    <div className="cart-item">
      {title} x{quantity}
      <button 
        className="cart-remove"
        onClick={onClick}
      >
        </button>
    </div>
  );
}
