import React, { useState } from 'react';
import './Hero.css';
const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
       
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/QftqxYY/hero.jpg")` }}>
      {/* navbar  started*/}
      <div className=" nav  px-4 relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className=" relative flex items-center justify-between ">
       
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center text-white mr-56 "
        >
          
          <img src="Assets/images/logo-light.png" alt="" className='w-8 '/>
          
        </a>
     
       <ul className="flex items-center hidden space-x-8 lg:flex text-white ml-56 text-xs">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 active"
            >
            Home
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 active:disabled:"
            >
             Blog
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
           Contact
            </a>
          </li>
          
        </ul>

        <div className="lg:hidden text-white">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-gray-100 focus:bg-deep-purple-200"
            onClick={() => setIsMenuOpen(true)}
          >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-gray-100 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4 ">
                  <div className='text-gray-500'>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center  "
                    >
                       {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                       <img src="Assets/images/logo-light.png" alt="" className='w-12 bg-gray-500 '/>
                    </a>
                  </div>
                  <div >
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-1 -mt-2 -mr-2 transition duration-200 rounded bg-gray-400 focus:bg-gray-500 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-4 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                  
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 text-xs">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Contact
                      </a>
                    </li>
                    
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    
  {/* navbar closed */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">We Are Paperpillar</h1>
            <p className="mb-5">A team of passionate designers and developers from Yogyakarta</p>
            <button type="button" className="btn border-0 talkBtn px-9 py-2 font-semibold rounded-full bg-gray-100 text-xs ">Lets Talk!</button>
          </div>
        </div>
      </div>
 
    );
};

export default Hero;



  
