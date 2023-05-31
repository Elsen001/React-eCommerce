import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeLike } from '../redux/likeSlice'

const LikePage = (e) => {
    const likes = useSelector((state) => state.like.likes)
    const dispatch = useDispatch()


   

    return (

        <div className='tableContainer'>
            {
                likes.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th colspan="1">Products Name</th>
                            <th>Unit price</th>
                            <th>Stock status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            likes && likes.map((item, key) => (
                                <tr>
                                    <td className='desc'> <img src={item.images[0]} alt="item-brand" /> {item.title}</td>
                                    <td>{item.price} $</td>
                                    <td>{item.stock > 0 ? <span className='instock'>In stock</span> : <span className='nostock'>No stock</span>}</td>
                                    <td><Link to={`/details/${item.id}`}>Get Details</Link></td>
                                    <td><i onClick={() => dispatch(removeLike(item.id))} className="fa-solid fa-circle-xmark"></i></td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table> 
                : <div className="not">
                    <p>Not you like product</p>
                    <Link  to="/">Return shop</Link>
                </div>
            }
        </div>
    )
}

export default LikePage
