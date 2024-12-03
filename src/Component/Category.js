import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../redux/categorySlice';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import MainContainer from './MainContainer';

const Category = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.category);
    const cateSlice = category.slice(0, 11);
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
                <button onClick={showCategory}><i className="fa-solid fa-bars-staggered"></i>CATEGORIES</button>
                {
                    cateSlice?.map((item,index) => (
                        <Link  key={index} style={{ display: show}} to={`/category/${item.name}`}>
                            {item.name} 
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
