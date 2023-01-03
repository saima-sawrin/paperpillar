import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Hero from '../Component/Home/Hero';

const router= createBrowserRouter ([
    {
        path: '/',
        element: <Hero></Hero>
    }
])
 
;

export default router;