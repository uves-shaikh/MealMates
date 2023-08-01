import React from 'react'
import './cart.css'

const OrderDelivered = (props) => {
  return (
    <>
    <section>
        <h2>Thankyou so much for your order!</h2>
        <p>We really appreciate it</p>
        <p>
            Enjoy <b>10%</b> off your next purchase with this coupen code:
            <b>THANKYOU10.</b>
        </p>
    </section>
    <div className="actions">
        <button className='button-alt' onClick={props.onClose} >Close</button>
    </div>
    </>
  )
}

export default OrderDelivered