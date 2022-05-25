import React, { useState } from 'react';

const HomePublished = () => {
   const [{ data }, setData] = useState({
      data: [
         {
            img: 'https://images.unsplash.com/photo-1652533885053-cc1bfc8d6bc4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400',
            title: '1. We Provide you Best & Creative Consulting Service',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae eius voluptas impedit aliquam ipsa iusto cumque dignissimos, esse quod tempora fugit ex amet ad iure error itaque corporis?',
            day: 'April 2021',
            emailNumber: 15,
            heartNumber: 35
         },
         {
            img: 'https://images.unsplash.com/photo-1653288180225-38f191d57e58?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436',
            title: '2. We Provide you Best & Creative Consulting Service',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae eius voluptas impedit aliquam ipsa iusto cumque dignissimos, esse quod tempora fugit ex amet ad iure error itaque corporis?',
            day: 'April 2021',
            emailNumber: 15,
            heartNumber: 35
         },
         {
            img: 'https://images.unsplash.com/photo-1653185225189-8e0516ee5284?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400',
            title: '3. We Provide you Best & Creative Consulting Service',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae eius voluptas impedit aliquam ipsa iusto cumque dignissimos, esse quod tempora fugit ex amet ad iure error itaque corporis?',
            day: 'April 2021',
            emailNumber: 15,
            heartNumber: 35
         },
         {
            img: 'https://images.unsplash.com/photo-1652819605107-068582b33bb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400',
            title: '4. We Provide you Best & Creative Consulting Service',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae eius voluptas impedit aliquam ipsa iusto cumque dignissimos, esse quod tempora fugit ex amet ad iure error itaque corporis?',
            day: 'April 2021',
            emailNumber: 15,
            heartNumber: 35
         }
      ]
   })
   return (
      <div>
         <div className="w-[1200px] mx-auto text-center">
            <div className="text-[100px] font-semibold">Latest</div>
            <div className="text-[100px] font-semibold">Published</div>
            <div className="w-[600px] mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae eius voluptas impedit aliquam ipsa iusto cumque dignissimos, esse quod tempora fugit ex amet ad iure error itaque corporis?</div>
            <div className="mt-[50px]"></div>
            <div className="grid grid-cols-2 text-left gap-5">
               {data.map(item => (
                  <div className="grid grid-cols-2 gap-x-2 shadow-2xl">
                     <div className="">
                        <img src={item.img} className='w-full h-full fit-cover' alt="" />
                     </div>
                     <div className="">
                        <div className="font-semibold text-[30px] text-blue-500">{item.title}</div>
                        <div className="flex gap-x-2 items-center">
                           <div className="flex flex-col items-center">
                              <div className="flex items-center gap-x-2"><ion-icon size="large" name="calendar-outline"></ion-icon>{item.day}</div>
                              
                           </div>
                           <div className="w-[2px] h-[20px] bg-slate-400"></div>
                           <div className="flex flex-col items-center">
                              <div className="flex items-center"><ion-icon size="large" name="mail-outline"></ion-icon> {item.emailNumber}</div>
                             
                           </div>
                           <div className="w-[2px] h-[20px] bg-slate-400"></div>
                           <div className="flex flex-col items-center justify-center">
                              <div className="flex items-center"><ion-icon size="large" name="heart-outline"></ion-icon>{item.heartNumber}</div>
                              
                           </div>
                        </div>
                        <div className="mt-[10px]"></div>
                        <div className="text-gray-500">{item.content}</div>
                     </div>
                  </div>

               ))}
            </div>
         </div>
      </div>
   );
}

export default HomePublished;
