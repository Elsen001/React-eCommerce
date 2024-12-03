import React from 'react';
import Services from '../Component/Services';
import Footer from '../Component/Footer';
import Poster from '../Component/Poster';
import LikePage from '../Component/LikePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../Component/Cart';
import Category from '../Component/Category';
import CategoryItems from '../Component/CategoryItems';
import Details from '../Component/Details';
import Header from '../Component/Header';
import Items from '../Component/Items';
import Search from '../Component/Search';

const Page = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route  path='/' element={<><Category /> <Services /> <Items /> <Poster /></>} />
                <Route path='/category/:name' element={<CategoryItems />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/search' element={<Search />} />
                <Route path='/like' element={<LikePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Page;
