import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
   return (
      <div>
         <div className="mt-[100px]"></div>
         <div className="flex w-[1200px] mx-auto items-center gap-x-5">
            <div className="w-[600px]">
               <div className="text-[100px] font-semibold">404</div>
               <div className="text-[70px] font-semibold">Page Not Found!</div>
               <div className="mt-2"></div>
               <div className="">It looks like nothing was found at this location. Please try to find something from the search form below. or go to back</div>
               <div className="mt-4"></div>
               <Link to="/">
                  
                  <div className="px-10 py-2 bg-green-500 font-semibold text-white inline-block rounded-lg">Go to Home</div>
               </Link>
            </div>
            <div className="">

               <img src="https://themelamp.com/templates/bizwheel/img/error-img.png" className="w-full h-full fit-cover" alt="" />

            </div>
         </div>
      </div>
   );
}

export default Error;
