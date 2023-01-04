import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Home/Footer/Footer';
import Hero from '../Component/Home/Hero';

const Main = () => {
    return (
 
        <div>
            <Hero></Hero>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
            
        
    );
};

export default Main;