import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../img/logo.png"



const Header = () => {
  const dispatch = useDispatch()
  const total = useSelector((state) => state.cart.cart.length)
  const searchItem = useSelector(state => state.search.item)
  const totalPrice = useSelector(state => state.cart.cartTotal);
  const likes = useSelector(state => state.like.likes);
  const priceFormat = "0.00"
  const [classNameCart, setClassNameCart] = useState("")

  useEffect(() => {
    if (total > 0) {
      setClassNameCart("animateCart");
      setTimeout(() => {
        setClassNameCart("")
      }, 2000);
    }
  }, [total]);



  useEffect(() => {
  }, [searchItem])

  let activeStyle = {
    color: "red"
  };

  return (
      <header>
          <Link to="/"><img src={logo} alt="nav-logo" /></Link>
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav>
            <ul>
              <li><NavLink exact to="/" style={({ isActive }) => isActive ? activeStyle : undefined}> Home </NavLink></li>
              <li><NavLink to="/shop" style={({ isActive }) => isActive ? activeStyle : undefined}> Shop </NavLink></li>
              <li><NavLink to="/blogs" style={({ isActive }) => isActive ? activeStyle : undefined}> Pages </NavLink></li>
              <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}> Blog </NavLink></li>
              <li><NavLink to="/Contact" style={({ isActive }) => isActive ? activeStyle : undefined}> Contact </NavLink></li>
            </ul>

          </nav>
          <div className="icon">
            <i className="fa-regular fa-user"></i>
            <Link to="/like"><i className="fa-regular fa-heart"></i><span>{likes.length}</span></Link>
            <Link to="/cart"><i className={`fa-solid fa-cart-shopping ${classNameCart}`} ></i><span className={`${classNameCart}`}>{total}</span></Link><span className='totalPrice'>${totalPrice > 0 ? totalPrice + ".00" : priceFormat}</span>
          </div>

      </header>
  )
}

export default Header
