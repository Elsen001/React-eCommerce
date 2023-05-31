import React from 'react';
import bg from "../img/office.png";
import { Link } from 'react-router-dom';

const Poster = () => {
    return (
        <div className='poster'>
            <div style={{ backgroundImage: `url(${bg})` }}>
                <div className="title">
                    <h2>End of Season Clearance Sale upto 30%</h2>
                    <p>Stock is limited. Order now to avoid disappointment.</p>
                    <Link>SHOP NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default Poster;
