import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../redux/categorySlice';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import MainContainer from './MainContainer';

const Category = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category);
    const itemsLength = category.category;
    const cateSlice = itemsLength.slice(0, 11);
    const [show, setShow] = useState(false);




    const showCategory = () => {
        if (show === "block") {
            setShow("none");
        } else {
            setShow("block");
        }
    };


    useEffect(() => {
        dispatch(fetchCategory());
    }, []);

    return (
        <div className='items'>
            <div className="section-items1">
                <button onClick={showCategory}><i class="fa-solid fa-bars-staggered"></i>CATEGORIES</button>
                {
                    itemsLength && cateSlice.map((item, key) => (
                        <Link key={key} style={{ display: show }} to={`/category/${item}`}>
                            {item.toUpperCase()}
                        </Link>
                    ))
                }
            </div>
            <div className="section-items2">
                <SearchComponent />
                <MainContainer />
            </div>
        </div>
    );
};

export default Category;
