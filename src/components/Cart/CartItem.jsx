import React from 'react'
import './cartItem.css'

const CartItem = (props) => {

    const price = `${props.price.toFixed(2)}`

  return (
    <li className="cart-items">
        <div>
            <h2>{props.name}</h2>
            <div className='summery'>
                <span className="price">&#8377;{price}</span>
                <span className="amount">x {props.amount} </span>
            </div>
        </div>
        <div className="actions">
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
    </li>
  )
}

export default CartItem