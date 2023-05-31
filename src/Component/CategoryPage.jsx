import React from 'react'
import bg_logo from "../img/download.jpg"
import { Link, useParams } from 'react-router-dom';

const CategoryPage = ({ nameId }) => {
    const {name}  = useParams()

    const capitalizeWords = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };


    return (
        <div className='title-img'>
            <img src={bg_logo} alt="" />
            <h2>{capitalizeWords(nameId)}</h2>
            <p className='params'>
                <Link className='arrow-link' to="/">Home <i className="fa-solid fa-chevron-right"></i> </Link>
                <Link className='arrow-link' to="/">Products <i className="fa-solid fa-chevron-right"></i> </Link>
                <Link className="arrow-active" to={`/category/${name}`} >{capitalizeWords(name)}</Link>
            </p>
        </div>
    )
}

export default CategoryPage
