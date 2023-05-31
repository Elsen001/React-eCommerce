import React from 'react'
import logo from "../img/logo.png"

const Footer = () => {
    return (
        <footer>
            <div className='section1'>
                 <div className="footer-adress">
                      <img src={logo} alt="" />
                      <span><i className="fa-solid fa-location-dot"></i>59 Street, Newyork City, Rose Town, 05 Rive House</span>
                      <span><i className="fa-solid fa-phone"></i> +123 456 7890</span>
                      <span><i className="fa-solid fa-envelope"></i> info@example.com</span>
                 </div>
                 <div className="footer-information">
                    <ul>
                        <li><h3>Information</h3><hr /></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Latest Post</a></li>
                        <li><a href="">Selling Tips</a></li>
                        <li><a href="">Advertising</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                 </div>
                 <div className="account">
                    <ul>
                        <li><h3>My Account</h3> <hr /></li>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Login/Register</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Wishlist</a></li>
                        <li><a href="">Order History</a></li>
                    </ul>
                 </div>
                 <div className="Help">
                    <ul>
                        <li><h3>Help & Support</h3> <hr /></li>
                        <li><a href="">How To Shop</a></li>
                        <li><a href="">Payment</a></li>
                        <li><a href="">Returns</a></li>
                        <li><a href="">Delivery</a></li>
                        <li><a href="">Privacy & Cookie Policy</a></li>
                    </ul>
                 </div>
            </div>
            <div className='section2'>
                  <div>
                    <p>© Copyright Metro 2020. Designed and Developed by <a href="#">RadiusTheme</a></p>
                  </div>
                  <div className='footer-social'>
                    <span><i className="fa-brands fa-facebook-f"></i></span>
                    <span><i className="fa-brands fa-linkedin"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-youtube"></i></span>
                  </div>
                  <div className='footer-payment'>
                    <span><i className="fa-brands fa-cc-visa"></i></span>
                    <span><i className="fa-brands fa-cc-mastercard"></i></span>
                    <span><i className="fa-brands fa-cc-paypal"></i></span>
                  </div>
            </div>
        </footer>
    )
}

export default Footer






