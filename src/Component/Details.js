import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { getDetails } from '../redux/itemDetails';
import Loading from './Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsBack from './DetailsBack';
import AddCartStyle from './AddCartStyle';

const Details = () => {
    const item = useSelector(state => state.itemDetails.item);
    const loading = useSelector(state => state.itemDetails.loading);
    const [selectedImage, setSelectedImage] = useState(null);


    const dispatch = useDispatch();
    const { id } = useParams();

  

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(getDetails(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (item && item.images.length > 0) {
            setSelectedImage(item.images[0]);
        }
    }, [item]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className='details-container'>
            <DetailsBack item={item} id={id} />
            {loading ? (
                <Loading />
            ) : item ? (
                <div className='details'>
                    <div className='details-img-container'>
                        {selectedImage && (
                            <img src={selectedImage} alt="" />

                        )}
                        <div className="alternate-img">
                            {item.images.map((img, index) => (
                                <img
                                    key={index}
                                    onClick={() => handleImageClick(img)}
                                    src={img}
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                    <div className='description'>
                        <h3>{item.brand}</h3>
                        <span>$ {item.price}</span>
                        <span>Availability: In Stock ({item.stock})</span>
                        <span>Category {item.category}</span>
                        <p>{item.description}</p>
                        <AddCartStyle item={item} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Details;
