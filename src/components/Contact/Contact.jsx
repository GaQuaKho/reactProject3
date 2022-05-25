import React from 'react';

const Contact = () => {
   return (
      <div>
         <div className="h-[300px] relative">
            <img className='w-full h-full fit-cover' src="https://images.unsplash.com/photo-1653322446742-36feb67ca9de?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400" alt="" />
            <div className="absolute top-0 left-[20px] text-white">
               <div className="text-[100px] font-semibold">Contact</div>
               <div className="text-[100px] font-semibold">Our Address</div>
            </div>
         </div>
         <div className="mt-[100px]"></div>
         <div className="flex w-[1200px] mx-auto gap-x-10">
            <div className="shadow-2xl ">
               <div className="h-[10px] bg-red-400 rounded-t-lg"></div>
               <div className="mt-10"></div>
               <div className="px-10 text-[50px] font-semibold">Get In Touch</div>
               <div className="mt-10"></div>
               <form action="#" className=' px-10 pb-10'>
                  <div className="grid grid-cols-2 gap-5">

                     <div className="relative border-2">
                        <input type="text" placeholder='First Name' className=" p-2 pr-10 border-none outline-none" />
                        <div className="flex absolute top-[50%] -translate-y-2/4 right-[5px]">
                           <ion-icon name="person-outline" size="large"></ion-icon>
                        </div>
                     </div>

                     <div className="relative border-2">
                        <input type="text" placeholder='Last Name' className=" p-2 pr-10 border-none outline-none" />
                        <div className="flex absolute top-[50%] -translate-y-2/4 right-[5px]">
                           <ion-icon name="person-outline" size="large"></ion-icon>
                        </div>
                     </div>

                     <div className="relative border-2">
                        <input type="text" placeholder='Type Subjects' className=" p-2 pr-10 border-none outline-none" />
                        <div className="flex absolute top-[50%] -translate-y-2/4 right-[5px]">
                           <ion-icon name="mail-open-outline" size="large"></ion-icon>
                        </div>
                     </div>

                     <div className="relative border-2">
                        <input type="text" placeholder='Type Subjects' className=" p-2 pr-10 border-none outline-none" />
                        <div className="flex absolute top-[50%] -translate-y-2/4 right-[5px]">
                           <ion-icon name="pricetag-outline" size="large"></ion-icon>
                        </div>
                     </div>


                  </div>
                  <div className="mt-[20px]"></div>
                  <div className="relative">
                     <textarea className='w-full h-[100px] border-2 p-3' name="" id=""></textarea>
                     <div className="flex absolute top-[2px]  right-[2px]">
                        <ion-icon name="pencil-outline" ></ion-icon>
                     </div>
                  </div>
                  <div className="mt-10"></div>
                  <div className="text-center">
                     <input type="submit" className='bg-red-400 py-2 px-[100px] font-semibold text-white hover:cursor-pointer rounded-lg' placeholder='Gửi' />
                  </div>
               </form>
            </div>
            <div className="w-[calc(1200px-600px)]">
               <div className="text-[50px] font-semibold">Contact with us</div>
               <div className="mt-5"></div>

               <div className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum mollitia blanditiis quae doloribus deserunt, cupiditate sunt expedita ad cumque quasi ipsam assumenda fugit tenetur perspiciatis! Voluptatibus nisi sequi est?</div>
               <div className="mt-5"></div>
               <div className="flex flex-col gap-y-10">
                  <div className="flex items-center gap-x-3">
                     <div className="flex p-4 bg-blue-900 text-white rounded-[1000px]"><ion-icon name="time-outline" size="large"></ion-icon></div>
                     <div className="">
                        <div className="text-blue-900 font-semibold">Opening Hour</div>
                        <div className="text-gray-500">Friday - Saturday</div>
                        <div className="text-gray-500">08AM - 10PM (everyday)</div>
                     </div>
                  </div>

                  <div className="flex items-center gap-x-3">
                     <div className="flex p-4 bg-blue-900 text-white rounded-[1000px]"><ion-icon name="call-outline" size="large"></ion-icon></div>
                     <div className="">
                        <div className="text-blue-900 font-semibold">Opening Hour</div>
                        <div className="text-gray-500">Tel.: 888 765 4321</div>
                        <div className="text-gray-500">Mob.: 765 654 3451</div>
                     </div>
                  </div>

                  <div className="flex items-center gap-x-3">
                     <div className="flex p-4 bg-blue-900 text-white rounded-[1000px]"><ion-icon name="mail-outline" size="large"></ion-icon></div>
                     <div className="">
                        <div className="text-blue-900 font-semibold">Email US</div>
                        <div className="text-gray-500">contact@bizwheel.com</div>
                        <div className="text-gray-500">info@bizwheel.com</div>
                     </div>
                  </div>
               </div>
               <div className="mt-5"></div>
               <div className="flex">

                  <div className="px-10 py-2 bg-green-700  text-white font-semibold hover:bg-blue-900 hover:cursor-pointer rounded-lg flex items-center">Our Works <ion-icon name="chevron-forward-outline" size="large"></ion-icon></div>
               </div>
            </div>

         </div>
      </div>
   );
}

export default Contact;
