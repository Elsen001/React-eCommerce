import React, { useEffect } from 'react'
import bg_logo from "../img/download.jpg"
import { Link } from 'react-router-dom'

const DetailsBack = ({item}) => {
    
    if (!item) {
        return <p>Error: Item not found</p>;
    }

    //  const capitalizeWords = (str) => {
    //     return str
    //         .toLowerCase()
    //         .split(' ')
    //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    //         .join(' ');
    //   };
      
    return (
        <div className='title-img'>
            <img src={bg_logo} alt="" />
            <h2>Shop</h2>
            <p className='params'>
                <Link className='arrow-link' to="/">Home <i class="fa-solid fa-chevron-right"></i> </Link>
                <Link className='arrow-link' to="/">Products <i class="fa-solid fa-chevron-right"></i> </Link>
                <Link className='arrow-link' to={`/category/${item.category}`}>{item.category} <i className="fa-solid fa-chevron-right"></i> </Link>
                <Link className='arrow-link arrow-active' to={`/details/${item.id}`}>{item.title}</Link>
            </p>
        </div>
    )
}

export default DetailsBack
