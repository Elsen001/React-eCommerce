import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getItemsFetch, setLimit } from '../redux/itemSlice'
import Loading from './Loading'
import AddCartStyle from './AddCartStyle'


const Items = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.items.items.products)
    const limit = useSelector((state) => state.items.limit)
    const loading = useSelector(state => state.items.loading)
    const visibleProducts = items ? items.slice(0, limit) : false;


   

    useEffect(() => {
        dispatch(getItemsFetch())
        console.log(visibleProducts)
    }, [])
    return (
        <main>
            <h2>Our Trendy Products</h2>

            {
                loading ? <Loading /> : visibleProducts && visibleProducts.map((item) => (
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <article >
                            <img src={item.thumbnail} alt={item.brand} />
                            <div className='price'>
                                <h3>{item.title}</h3>
                                <span>{item.price} $</span>
                            </div>
                            <AddCartStyle item={item} />
                        </article>
                    </Link>
                ))
            }
            <div className='btn'>
                <button onClick={() => dispatch(setLimit(limit + 15))} >and more</button>
            </div>
        </main>
    )
}

export default Items


