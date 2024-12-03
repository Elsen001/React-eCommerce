import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addToCart, deleteItems, removeCart } from '../redux/cartSlice';
import DetailsBack from './DetailsBack';
import CartHeader from './CartHeader';

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.cartTotal);

    return (
        <div>
           {cart.length<1?<></>:<CartHeader/>} 
            {cart.length < 1 ? <section><div className='empty'>Cart Empty...</div> <NavLink to="/">Return to shop</NavLink> </section> :
                <table>
                    <thead>
                        <tr>
                            <th colspan="1">Products Title</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            cart && cart.map((item) => (
                                <tr key={item.id}>
                                    <td className='desc'> <img src={item.images[0]} alt="item-brand" /> <span>{item.title}</span></td>
                                    <td> <button onClick={() => dispatch(removeCart(item.id))}><i className="fa-solid fa-minus"></i></button> {item.qty}  <button onClick={() => dispatch(addToCart(item))}><i className="fa-solid fa-plus"></i></button></td>
                                    <td><i onClick={() => dispatch(deleteItems(item.id))} className="fa-solid fa-trash"></i></td>
                                    <td>{item.price} $</td>
                                </tr>
                            ))
                        }
                       
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total Price {totalPrice.toFixed(2)} $</td>
                        </tr>
                    </tfoot>
                </table>
            }
            {
                cart.length>0 && <div className="cartCheckout">
                <div className="content">
                    <h4>Cart totals</h4>
                    <p><span>Subtotal</span><span>$ {totalPrice.toFixed(2)}</span></p>
                    <p><span>Total</span><span>$ {totalPrice.toFixed(2)}</span></p>
                    <button>PROCEED TO CHECKOUT <i class="fa-solid fa-circle-arrow-right"></i></button>
                </div>
            </div>
            }
        </div>
    )
}

export default Cart
