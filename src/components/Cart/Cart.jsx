import React, { useContext, useState } from 'react'
import Model from '../UI/Model'
import CartContext from '../../store/CartContext'
import './cart.css'
import CartItem from './CartItem'
import OrderDelivered from './OrderDelivered'

const Cart = (props) => {

  const cartCtx = useContext(CartContext)
  const [showOrder, setShowOrder] = useState(false)

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };


  const orderHanlder = () => {
    cartCtx.clearall();
    setShowOrder(true);
  };

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))
      }
    </ul>
  )

  return (
    <Model onClose={props.onClose}>
      {!showOrder ? (
        <>
          {cartItems}
          <div className="total">
            <span>Total Amount</span>
            <span>&#8377;{totalAmount}</span>
          </div>
          <div className="actions">
            <button className="button--alt" onClick={props.onClose}>Close</button>
            {hasItems && (
              <button className='button' onClick={orderHanlder} >Order</button>
            )}
          </div>
        </>
      ) : (
        <OrderDelivered onClose={props.onClose} />
      )}
    </Model>
  )
}

export default Cart