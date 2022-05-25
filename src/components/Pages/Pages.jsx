import React, { useState } from 'react';

const Pages = () => {
   const [{ data }, setData] = useState({
      data: [
         {
            title: 'How Can i Start my Online Business?',
            content: 'Proin dui purus, facilisis quis euismod quis, euismod eu augue. Etiam vel dui arcu. Cras varius mi ut eros pharetra, id aliquam metus venenatis. Donec sollicitudin tincidunt semper. Integer ultrices luctus ultricies. Curabitur quis sem eget ipsum vulputate pulvinar. Curabitur ullamco'
         },
         {
            title: 'Can you give me 50% discount as 1st purchase?',
            content: 'Proin dui purus, facilisis quis euismod quis, euismod eu augue. Etiam vel dui arcu. Cras varius mi ut eros pharetra, id aliquam metus venenatis. Donec sollicitudin tincidunt semper. Integer ultrices luctus ultricies. Curabitur quis sem eget ipsum vulputate pulvinar. Curabitur ullamco',
         },
         {
            title: 'How Do i Start making Money from Home??',
            content: 'Proin dui purus, facilisis quis euismod quis, euismod eu augue. Etiam vel dui arcu. Cras varius mi ut eros pharetra, id aliquam metus venenatis. Donec sollicitudin tincidunt semper. Integer ultrices luctus ultricies. Curabitur quis sem eget ipsum vulputate pulvinar. Curabitur ullamco',
         },
         {
            title: 'Can i use unlimited website from a single licence?',
            content: 'Proin dui purus, facilisis quis euismod quis, euismod eu augue. Etiam vel dui arcu. Cras varius mi ut eros pharetra, id aliquam metus venenatis. Donec sollicitudin tincidunt semper. Integer ultrices luctus ultricies. Curabitur quis sem eget ipsum vulputate pulvinar. Curabitur ullamco',
         },
         {
            title: 'Have any replace or refund policy?',
            content: 'Proin dui purus, facilisis quis euismod quis, euismod eu augue. Etiam vel dui arcu. Cras varius mi ut eros pharetra, id aliquam metus venenatis. Donec sollicitudin tincidunt semper. Integer ultrices luctus ultricies. Curabitur quis sem eget ipsum vulputate pulvinar. Curabitur ullamco',
         }
      ]
   })
 
   const [{ indexA, handleIndexA }, setIndexA] = useState({
      indexA: 0,
      handleIndexA: number => setIndexA(state => {
         return {
            ...state,
            indexA: number !== state.indexA ? number : -1
         }
      })
   })
   return (
      <div className='w-[1200px] mx-auto'>
         <div className="h-[400px] relative">
            <img src="https://images.unsplash.com/photo-1653372512929-5ac36eb22a73?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" className='w-full h-full fit-cover' alt="" />
            <div className="absolute text-white font-semibold text-[100px] top-[50%] -translate-y-2/4 left-[10%]">
               Asked & Questions
            </div>
         </div>
         
         <div className="mt-5"></div>
         <div className="flex gap-x-5 items-center">
            <div className="flex flex-col gap-5 w-[700px]">
               {data.map((item, index) => (
                  <div className=" ">
                     <div className="">
                        <div
                           onClick={() => handleIndexA(index)}
                           className="flex hover:cursor-pointer"
                        >
                           <div className="px-2 py-1 border-2 text-green-600">
                              <ion-icon name="pencil-outline" size="large"></ion-icon>
                           </div>
                           <div className="px-2 py-1 border-2 border-l-0 flex flex-col justify-center text-[20px] text-blue-900 font-semibold w-full text-left">
                              {item.title}
                           </div>
                        </div>
                     </div>
                     {index === indexA && (
                        <div className="border-2 border-t-0 p-2">{item.content}</div>
                     )}
                  </div>

               ))}
            </div>
            <div className="flex-1">
               <img src="https://themelamp.com/templates/bizwheel/img/faq.png" className='w-full h-full fit-cover' alt="" />
            </div>
         </div>
         <div className="text-center">
            <div className="text-[100px] font-semibold">Contact</div>
            <div className="text-[50px] font-semibold text-gray-400">Contact Still No Luck?</div>
            <div className="w-[700px] mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque, quidem debitis eum quaerat necessitatibus dolore dolores pariatur laboriosam recusandae quia adipisci modi architecto ea ipsam. Beatae unde sequi dolor!</div>
         </div>
         <div className="mt-5"></div>
         <div className="w-[700px]  pb-5 mx-auto shadow-2xl">
            <div className="h-[10px] bg-green-500"></div>
            <form action="">
               <div className="px-5 py-5 flex flex-col gap-5">
                  <div className="relative  border-b-2">
                     <input type="text" className=' w-[95%] p-2 border-none outline-none' placeholder="Full name" />
                     <div className="absolute flex top-[50%] -translate-y-2/4 right-[20px]">
                        <ion-icon name="person-outline"></ion-icon>
                     </div>
                  </div>
                  <div className="relative border-b-2">
                     <input type="text" className=' w-[95%] p-2 border-none outline-none' placeholder="Type email" />
                     <div className="absolute flex top-[50%] -translate-y-2/4 right-[20px]">
                        <ion-icon name="mail-outline"></ion-icon>
                     </div>
                  </div>
                  <div className="relative border-b-2">
                     <input type="text" className=' w-[95%] p-2 border-none outline-none' placeholder="Type subject" />
                     <div className="absolute flex top-[50%] -translate-y-2/4 right-[20px]">
                        <ion-icon name="pricetag-outline"></ion-icon>
                     </div>
                  </div>
                  <div className="relative border-b-2">

                     <textarea name="" className=' w-full p-2 border-none outline-none h-[200px]' placeholder="Your message"></textarea>
                     <div className="absolute flex top-[5%]  right-[20px]">
                        <ion-icon name="pencil-outline"></ion-icon>
                     </div>
                  </div>
                  <div className="text-right">
                     <input type="submit" className='px-10 py-2 bg-green-500 text-white font-semibold hover:cursor-pointer hover:bg-yellow-500 rounded-lg ' />
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Pages;
