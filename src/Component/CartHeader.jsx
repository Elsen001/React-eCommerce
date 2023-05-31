import React from 'react'
import bg_logo from "../img/download.jpg"
import { Link } from 'react-router-dom'

const CartHeader = () => {
    return (
        <div className='cart-header'>
            <img src={bg_logo} alt="" />
            <div className="link-container">
                <h3>Cart</h3>
                <Link to="/">Home <i className="fa-solid fa-chevron-right"></i></Link>
                <Link to="/cart">Cart </Link>
            </div>
        </div>
    )
}

export default CartHeader
