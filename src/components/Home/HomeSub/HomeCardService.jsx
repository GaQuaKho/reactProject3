import React, { useState } from 'react';

const Homecardservice = ({ cardService }) => {
  const [{ indexColor, handleColor, removeColor }, setColor] = useState({
    indexColor: -1,
    handleColor: (index) => setColor(state => ({
      ...state,
      indexColor: index
    })),
    removeColor: () => setColor(state => ({ ...state, indexColor: -1 }))
  })
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-5">
        {cardService.map((item, index) => (
          // Card
          <div key={index} className={` py-2 border-gray-200 hover:border-green-500 border-[3px]  hover:cursor-pointer
          ${index == 0 && 'rounded-r-lg'}
          ${index == cardService.length - 1 && 'rounded-l-lg'} 
          ${index != cardService.length - 1 && index != 0 && 'rounded-lg'} 
          `}
            onMouseOver={() => handleColor(index)}
            onMouseLeave={removeColor}
          >
            {/* 1. Icon */}
            <div className="flex flex-col items-center">
              <div className={`flex p-5 rounded-[100%] ${indexColor === index && 'bg-green-500 text-white'} `}>
                <ion-icon size="large" name="server-outline"></ion-icon>
              </div>
            </div>

            {/* 2. Title */}
            <div className="mt-[10px]"></div>
            <div className="text-center text-[30px] font-semibold">{item.title}</div>

            {/* 3. Content */}
            <div className="mt-[10px]"></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis illum nostrum. Doloribus est, corporis nihil necessitatibus impedit quisquam id explicabo enim officia nobis fugit tempore? Libero nemo est architecto!</div>

            {/* 4. Learn more */}
            <div className="mt-[10px]"></div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div className={`flex  p-2 rounded-[100%] ${index === indexColor && 'bg-green-500 text-white'} `}
                >
                  <ion-icon size="large" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="">Learn more</div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Homecardservice;
