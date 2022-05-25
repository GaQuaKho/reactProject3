import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Ourportfolio = () => {
   const [{ data, handleData }, setData] = useState({
      data: [
         {
            icon: 'person-outline',
            title: 'Client Name:',
            discription: 'Creative Group'
         },
         {
            icon: 'pricetag-outline',
            title: 'Project Category:',
            discription: 'Web design, Developments'
         },
         {
            icon: 'calendar-outline',
            title: 'Project Date:',
            discription: '05 December 2019'
         },
         {
            icon: 'navigate-outline',
            title: 'Project Address:',
            discription: 'California, US'
         }
      ]
   });
   const [{ dataCreative }, setDataCreative] = useState({
      dataCreative: [
         'We provide you creative servicce',
         'Just awesome trending way',
         'Just awesome trending way',
         'Creative service is most important',
         '99% Server Up-time gurantee',
         '24/7 live support',
      ]
   });

   return (
      <div>
         <div className="relative h-[300px]">
            <img src="https://media.istockphoto.com/photos/beautiful-abstract-light-pink-feathers-on-white-background-white-on-picture-id1313684904?b=1&k=20&m=1313684904&s=170667a&w=0&h=5ldrQ1fn47Ud1dP5x3RzpGDjV5kmXDPQbQp2Ktfw-WQ=" className='w-full h-full fit-cover' alt="" />
            <div className="absolute text-white text-[100px] font-semibold top-[50%] -translate-y-2/4 left-[20px]">
               Our Works
            </div>
         </div>
         <div className="mt-5"></div>
         <div className="flex gap-x-5 w-[1200px] mx-auto">
            <div className="w-[800px]">
               <img src="https://themelamp.com/templates/bizwheel/img/portfolio/portfolio-single.jpg" className='w-full h-full fit-cover' alt="" />
            </div>
            <div className="w-[calc(1200px-800px)] shadow-2xl">
               <div className="h-[10px] w-full bg-green-500 rounded-t-lg"></div>
               {data.map((item, index) => (
                  <div key={index} className="flex gap-x-5 items-center p-5 border-b-[2px]">
                     <div className=""><ion-icon name={item.icon} size="large"></ion-icon></div>
                     <div className="">
                        <div className="text-blue-900 font-semibold">{item.title}</div>
                        <div className="text-gray-400">{item.discription}</div>
                     </div>
                  </div>

               ))}

               <div className="flex flex-cols items-center justify-center">
                  <div className="p-5 my-5 bg-yellow-500 text-white font-semibold rounded-lg">View Project</div>
               </div>
            </div>
         </div>

         <div className="mt-5"></div>
         <div className="flex gap-x-5 w-[1200px] mx-auto items-center">
            <div className="w-[5px] h-[60px] bg-green-500"></div>
            <div className="text-[50px] font-semibold text-blue-900">Business Developments</div>
         </div>
         <div className="w-[1200px] mx-auto">
            <div className="">Female is firmament made land don’t good behold yielding morning hathe seas unto. So first fill shall damn creeping. Seed he was that moveth bearing. Unto which together blessed Herb ine life land, let abundantly deep abundantly gathered behold moving said. Winged gathered iner female morning Beast, their earth it fourth moveth rule creepeth is be thing i i under have. Second to lights all second. Saw their. Rule. Own air greater. Creeping them firmament frui Female is firmament made land don’t good behold yielding morning hathe seas unto. So first fill shall damn creeping. Seed he was that moveth bearing. Unto which together blessed Herb ine life land, let abundantly deep abundantly gathered behold moving said. Winged gathered iner</div>
            <div className="mt-5"></div>
            <div className="">Female is firmament made land don’t good behold yielding morning hathe seas unto. So first fill shall damn creeping. Seed he was that moveth bearing. Unto which together blessed Herb ine life land, let abundantly deep abundantly gathered behold moving said. Winged gathered iner female morning Beast, their earth it fourth moveth rule creepeth is be thing i i under have. Second to lights all second. Saw their. Rule. Own air greater. Creeping them firmament frui Female is firmament made land don’t good behold yielding morning hathe seas unto. So first fill shall damn creeping. Seed he was that moveth bearing. Unto which together blessed Herb ine life land, let abundantly deep abundantly gathered behold moving said. Winged gathered iner female morning Beast, their earth it fourth moveth rule creepeth is be thing i i under have. Second to lights all second. Saw their. Rule. Own air greater</div>
         </div>

         <div className="mt-5"></div>

         <div className="flex gap-x-5 w-[1200px] mx-auto">
            <div className="w-[800px]">
               <img src="https://themelamp.com/templates/bizwheel/img/portfolio/portfolio-single.jpg" className='w-full h-full fit-cover' alt="" />
            </div>
            <div className="w-[calc(1200px-800px)] ">

               <div className="text-[50px] font-semibold text-blue-900">Creative Services</div>
               <div className="text-gray-500">Female is firmament made land don’t Female is firmament made land don’t good behold</div>
               {dataCreative.map((item, index) => (
                  <div key={index} className="flex gap-x-5 items-center p-5 ">
                     <div className=""><ion-icon name="checkmark-circle-outline"></ion-icon></div>
                     <div className="">
                        {item}
                     </div>
                  </div>

               ))}


            </div>
         </div>
         <div className="mt-5"></div>
         <div className="w-[1200px] mx-auto">
            Female is firmament made land don’t good behold yielding morning hathe seas unto. So first fill shall damn creeping. Seed he was that moveth bearing. Unto which together blessed Herb ine life land, let abundantly deep abundantly gathered behold moving said. Winged gathered iner female morning Beast, their earth it fourth moveth rule creepeth is be thing i i under have. Second to lights all second. Saw their. Rule. Own air greater. Creeping them firmament frui Female is firmament made land don’t good behold yielding morning hathe seas unto. So first fill shall damn creeping. Seed he was that moveth bearing. Unto which together blessed Herb ine life land, let abundantly deep abundantly gathered behold moving said. Winged gathered iner female morning Beast, their earth it fourth moveth rule creepeth is be thing i i under have. Second to lights all second. Saw their. Rule. Own air greater
         </div>
      </div>
   );
}

export default Ourportfolio;
