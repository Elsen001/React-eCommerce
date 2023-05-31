import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { fetchCategoryItems } from '../redux/categoryİtemSlice';
import Loading from './Loading';
import CategoryPage from './CategoryPage';
import CategoryPageData from './CategoryPageData';
import AddCartStyle from './AddCartStyle';

const CategoryItems = () => {
  const categoryItems = useSelector((state) => state.categoryItems.categoryItems);
  const loading = useSelector((state) => state.categoryItems.loading);
  const dispatch = useDispatch();
  const { name } = useParams()

 

  useEffect(() => {
    dispatch(fetchCategoryItems(name))
    console.log(categoryItems)
  }, [name])


  return (
    <main>
      <CategoryPage nameId={name} />
      <div className="container-category-item">
           <h4> Showing all { categoryItems.products&& categoryItems.products.length} results </h4>
        {
          loading ? <Loading /> : categoryItems.products && categoryItems.products.map((item,key) => (
            <Link key={key} to={`/details/${item.id}`}>
              {
                <div className="cart">
                  <img src={item.images[0]} alt={item.brand} />
                  <h3>{item.title}</h3>
                  <h4> $ {item.price}</h4>
                  <AddCartStyle  item={item}/>
                </div>
         }
            </Link>
          ))
        }
      </div>
      <CategoryPageData />
    </main>
  )
}

export default CategoryItems
