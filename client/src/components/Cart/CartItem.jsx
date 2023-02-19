import React from 'react'

export const CartItem = ({item}) => {
  return (
    <div>
        <h3>{item.name}</h3>
        <div className='information'>
            <p>Price: ${item.price}</p>
            <p>Amount: {item.amount}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
    </div>
  )
}
