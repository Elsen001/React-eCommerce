import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../redux/categorySlice'
import { Link } from 'react-router-dom'

const CategoryPageData = () => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.category.category)
    

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])
    return (
        <div className='categoryItemData'>
            <h4>Categories</h4>
            {
               category && category.map((item)=>(
                    <Link  to={`/category/${item}`} key={item.name} >{item} <span>({item.length})</span></Link> 
                ))
            }
        </div>
    )
}

export default CategoryPageData
