import React, { useEffect } from 'react'
import { addToCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addLike } from '../redux/likeSlice'
import { useState } from 'react'

const AddCartStyle = ({item}) => {
    const dispatch = useDispatch()
    const [likeColor,setLikeColor]=useState(null)

    
    
    return (
        <div className="toCart">
            <i style={{backgroundColor:likeColor}} onClick={()=>dispatch(addLike(item))} className="fa-regular fa-heart"></i>
            <button onClick={() => dispatch(addToCart(item))}>ADD TO CART</button>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default AddCartStyle
