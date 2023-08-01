import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../../store/CartContext'
import classes from './cart.css'

const HeaderCart = (props) => {

    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx;

    const numberofCartItems = items.reduce((curNumber,item) => {
        return curNumber + item.amount
    },0)

    const btnClasses= `${classes.button} ${btnIsHighlighted ? classes.bump: ""}`

    useEffect(() => {
        if(items.length===0){
            return
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        },300)

        return () => {
            clearTimeout(timer)
        }
    },[items])

    return (
        <button className='button' onClick={props.onClick}>
            <span className='icon'>
                <AiOutlineShoppingCart />
            </span>
            <span>
                Cart
            </span>
            <span className='badge'>1</span>
        </button>
    )
}

export default HeaderCart