import React from 'react'
import bg_logo from "../img/download.jpg"
import { Link, useParams } from 'react-router-dom';

const CategoryPage = () => {
    const {name}  = useParams()

    return (
        <div className='title-img'>
            <img src={bg_logo} alt="" />
            <h2>{name}</h2>
            <p className='params'>
                <Link className='arrow-link' to="/">Home <i className="fa-solid fa-chevron-right"></i> </Link>
                <Link className='arrow-link' to="/">Products <i className="fa-solid fa-chevron-right"></i> </Link>
                <Link className="arrow-active" to={`/category/${name}`} ></Link>
            </p>
        </div>
    )
}

export default CategoryPage
