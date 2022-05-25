import React from 'react';
import { useNavigate } from 'react-router-dom';
const Homeourportfolio = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-green-500 px-10 py-[50px] flex justify-between'>
      <div className="">
        <div className="text-[50px] text-white font-semibold">Brand Products & Creativity is our Fashion</div>
        <div className="text-white text-[20px]">ehicula maximus velit. Morbi non tincidunt purus, a hendrerit nisi. Vivamus elementum</div>
      </div>
      <div className="flex items-center">
        <div className="p-4 bg-yellow-500 font-semibold text-white hover:cursor-pointer hover:bg-white rounded-lg hover:text-yellow-500"
          onClick={()=>navigate('/ourportfolio')}
        >Our Portfolio</div>

      </div>
    </div>
  );
}

export default Homeourportfolio;
