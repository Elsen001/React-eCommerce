import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCategoryItems } from '../redux/categoryİtemSlice';
import Loading from './Loading';
import CategoryPage from './CategoryPage';
import CategoryPageData from './CategoryPageData';
import AddCartStyle from './AddCartStyle';

const CategoryItems = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const productsItems = useSelector((state) => state.categoryItems.categoryItems?.products);
  const loading = useSelector((state) => state.categoryItems.loading);

  useEffect(() => {
    dispatch(fetchCategoryItems(name));
    console.log(productsItems);
     
  }, [dispatch, name]);

  return (
    <main>
    <CategoryPage/>

      <div className="container-category-item">
        <h4> Showing all {productsItems?.length || 0} results </h4>
        {
          loading ? <Loading /> : productsItems && productsItems.map((item) => (
            <Link key={item.id} to={`/details/${item.id}`}>
              <article>
                <img src={item.images[0]} alt={item.brand} />
                <h3>{item.brand}</h3>
                <h4> $ {item.price}</h4>
                <AddCartStyle item={item} />
              </article>
            </Link>
          ))
        }
      </div>
    </main>
  );
};

export default CategoryItems;
