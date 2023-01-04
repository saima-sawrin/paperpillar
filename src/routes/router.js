import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Hero from '../Component/Home/Hero';
import Services from '../Component/Services/Services';
import Main from '../Layout/Main';

const router= createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
          path:'/',
          element:<Services></Services>
        },
        
    ]
    }
    
])
 
;

export default router;