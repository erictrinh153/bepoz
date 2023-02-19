import React, { useState } from 'react';
import { CartItem } from './CartItem';
import Button from '@mui/material/Button';

const Cart = ({cartItems, onPayment}) => {
  const [total, setTotal] = useState(0);
  const calculateTotal = (items) => {
    return items.reduce((acc, item) =>acc + item.amount * item.price, 0);
  }
  const onClickPayCredit = () => {
    setTotal((calculateTotal(cartItems) + calculateTotal(cartItems)*1.57/100).toFixed(2));
  } 
  const onClickPayCash = () => {
    setTotal(calculateTotal(cartItems).toFixed(2));
  } 
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item._id}
          item={item}
        />
      ))}
      <Button onClick={onClickPayCredit}>Credit Card</Button>
      <Button onClick={onClickPayCash}>Cash</Button>
      <h2>Total: ${total}</h2>
      <Button onClick={onPayment}>Purchase</Button>
      

    </div>
  )
}

export {Cart};