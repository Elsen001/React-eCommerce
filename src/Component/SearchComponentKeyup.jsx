import React from 'react'
import { Link } from 'react-router-dom'

const SearchComponentKeyup = ({ searchItem }) => {



    return (
        <div className='row'>
            {searchItem && searchItem.length > 0 ? (
                searchItem.map(item => (
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <img src={item.images[0]} alt="" />
                        <div className="pricelist">
                            <p>{item.title}</p>
                            <span>{item.price} $</span>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="noresult">
                    <p>No Product found.</p>
                </div>
            )}
        </div>

    )
}

export default SearchComponentKeyup
