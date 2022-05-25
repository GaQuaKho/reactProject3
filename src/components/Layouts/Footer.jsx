import React, { useState } from 'react';

const Footer = () => {
   const [{ data }, setData] = useState({
      data: [
         'https://themelamp.com/templates/bizwheel/img/client/client-1.png',
         'https://themelamp.com/templates/bizwheel/img/client/client-2.png',
         'https://themelamp.com/templates/bizwheel/img/client/client-4.png',
         'https://themelamp.com/templates/bizwheel/img/client/client-5.png',
         'https://themelamp.com/templates/bizwheel/img/client/client-6.png',
      ]
   })
   return (
      <div className="">
         <div className="px-10 py-5 grid grid-cols-5 gap-10 bg-gray-200">
            {data.map(item => (

               <div key={item} className=""><img src={item} className="h-full w-full fit-cover" alt="" /></div>
            ))}
         </div>
         <div className='bg-gradient-to-r from-purple-500 to-pink-500 text-white'>

            <div className="pt-[50px]"></div>
            <div className="grid grid-cols-4 w-[1200px] mx-auto gap-10">
               {/* Col 1 */}
               <div className="">
                  <div className="flex">
                     <ion-icon size="large" name="arrow-redo-outline"></ion-icon>
                  </div>

                  <div className="mt-[20px]"></div>
                  <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex esse, ea eligendi, sed dolores molestias voluptatum illo dignissimos eius doloribus doloremque natus officia animi ipsa cupiditate. Maxime vel natus tenetur.</div>

                  <div className="mt-[20px]"></div>
                  <div className="flex flex-col items-center">
                     <div className="flex gap-x-5">
                        <div className="flex"><ion-icon size="large" name="logo-facebook"></ion-icon></div>
                        <div className="flex"><ion-icon size="large" name="logo-twitter"></ion-icon></div>
                        <div className="flex"><ion-icon size="large" name="logo-linkedin"></ion-icon></div>
                        <div className="flex"><ion-icon size="large" name="logo-pinterest"></ion-icon></div>
                        <div className="flex"><ion-icon size="large" name="logo-instagram"></ion-icon></div>
                     </div>
                  </div>

                  <div className="mt-[20px]"></div>
                  <div className="px-[10px] py-[5px] bg-black text-white text-center font-semibold hover:bg-red-300  rounded-lg hover">About</div>
                  <div className="pb-10"></div>
               </div>

               {/* Col 2 */}
               <div className="">
                  <div className="text-[30px] font-semibold">Company</div>
                  <div className="mt-[10px]"></div>
                  <div className="h-[5px] bg-yellow-500"></div>
                  <div className="mt-[10px]"></div>
                  <div className="flex gap-x-3 items-center">

                     <div className="">About Us</div>
                  </div>
                  <div className="mt-[10px]"></div>
                  <div className="flex gap-x-3 items-center">

                     <div className="">Our Services</div>
                  </div>
                  <div className="mt-[10px]"></div>
                  <div className="flex gap-x-3 items-center">

                     <div className="">Portfolio</div>
                  </div>
                  <div className="mt-[10px]"></div>
                  <div className="flex gap-x-3 items-center">

                     <div className="">Pricing Plan</div>
                  </div>
                  <div className="mt-[10px]"></div>
                  <div className="flex gap-x-3 items-center">

                     <div className="">Contact us</div>
                  </div>
               </div>

               {/* Col 3 */}
               <div className="">
                  <div className="text-[30px] font-semibold">Blog Page</div>
                  <div className="mt-[10px]"></div>
                  <div className="h-[5px] bg-yellow-500"></div>
                  <div className="mt-[10px]"></div>
                  <div className="flex gap-x-3">
                     <div className="flex flex-col items-center justify-center">
                        <div className="w-[50px] h-[50px]">

                           <img src="https://images.unsplash.com/photo-1649323915198-fc416c07f809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" className='w-full h-full fit-cover rounded-[100%]' alt="" />
                        </div>
                     </div>
                     <div className="flex flex-col w-[calc(100%-50px)]">
                        <div className="flex gap-x-2 items-center">
                           <div className="flex"><ion-icon size="large" name="time-outline"></ion-icon></div>
                           <div className="">April 15, 2020</div>
                        </div>
                        <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere iure </div>
                     </div>
                  </div>

                  <div className="mt-[10px]"></div>
                  <div className="flex gap-x-3">
                     <div className="flex flex-col items-center justify-center">
                        <div className="w-[50px] h-[50px]">
                           <img src="https://images.unsplash.com/photo-1649323915198-fc416c07f809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" className='w-full h-full fit-cover rounded-[100%]' alt="" />
                        </div>
                     </div>
                     <div className="flex flex-col w-[calc(100%-50px)]">
                        <div className="flex gap-x-2 items-center">
                           <div className="flex"><ion-icon size="large" name="time-outline"></ion-icon></div>
                           <div className="">April 15, 2020</div>
                        </div>
                        <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere iure </div>
                     </div>
                  </div>
               </div>

               {/* Col 4 */}
               <div className="">
                  <div className="text-[30px] font-semibold">Contact</div>
                  <div className="mt-[10px]"></div>
                  <div className="h-[5px] bg-yellow-500"></div>
                  <div className="mt-[10px]"></div>
                  <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam natus reiciendis error ea beatae maiores porro itaque impedit praesentium dicta. Culpa iure quia alias aut molestiae quae blanditiis veniam doloremque?</div>
                  <div className="mt-[10px]"></div>

                  <div className="flex items-center gap-x-2">
                     <div className="flex">
                        <ion-icon size="large" name="call-outline"></ion-icon>
                     </div>
                     <div className="">+(600) 125-4985-214</div>
                  </div>
                  <div className="mt-[10px]"></div>
                  <div className="flex items-center gap-x-2">
                     <div className="flex">
                        <ion-icon size="large" name="mail-open-outline"></ion-icon>
                     </div>
                     <div className="">info@yoursite.com</div>
                  </div>
                  <div className="mt-[10px]"></div>

                  <div className="flex items-center gap-x-2">
                     <div className="flex">
                        <ion-icon size="large" name="location-outline"></ion-icon>
                     </div>
                     <div className="">House Building Uttara</div>
                  </div>
               </div>
            </div>
            <div className="pt-[50px]"></div>

         </div>
      </div>
   );
}

export default Footer;
