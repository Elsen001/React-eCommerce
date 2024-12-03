import React from 'react'
import logo from "../img/download2.jpg"
import { Link } from 'react-router-dom'

const MainContainer = () => {
    return (
        <div className='container-main'>
            <div className="timer-season">
                 <h1>Spring <span>Sale</span></h1>
                 <p>New Modern Stylist Fashionable Men's Wear <br /> holder bag holder.</p>
                 <Link to="/ascsa">EXPLORE NOW</Link>
                 <div><span>03</span>/<span>02</span>/<span>01</span></div>
            </div>
            <div className="container-img">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default MainContainer
