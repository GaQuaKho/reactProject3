import { useState, useEffect, useRef } from 'react';

const Ourservices = () => {
  return (
    <div>
      {/* 1. Header Services */}
      <div className="relative">
        <div className="h-[300px]">
          <img src="https://images.unsplash.com/photo-1652267990738-e78a61d72832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" className="w-full h-full fit-cover" alt="" />
        </div>
        <div className="absolute top-[50%] left-[50px] -translate-y-2/4 text-[100px] font-semibold text-white">
          Our Services
        </div>
      </div>
      <div className="mt-[50px]"></div>
      {/* 2. Content */}
      <div className="w-[1200px] mx-auto flex gap-x-10">
        {/* Left Content */}
        <div className="w-[700px]">

          {/* Image */}
          <div className="">
            <img src="https://images.unsplash.com/photo-1652267990738-e78a61d72832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" className="w-full h-full fit-cover rounded-lg" alt="" />
          </div>

          {/* Digital Marketing Solution */}
          <div className="">
            <div className="text-[32px] font-semibold text-[#2e2751]">Digital Marketing Solution</div>
            <div className="mt-[20px]"></div>
            <div className="text-[#666666] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa sint ipsa fuga ullam esse velit nihil alias quaerat perspiciatis obcaecati accusantium odit hic, quos facilis inventore odio perferendis magni.</div>
            <div className="mt-[20px]"></div>
            <div className="text-[#666666] text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quis ipsa, porro sapiente ab sit ea, perferendis perspiciatis suscipit consectetur magnam pariatur soluta voluptas, fuga ut. Nobis explicabo earum ullam.</div>

          </div>

          <div className="mt-[20px]"></div>
          {/* We provide you innovation */}
          <div className="grid grid-cols-2 gap-x-10">
            <div className="">
              <div className="text-[#2e2751] text-[20px] font-semibold">We provide you innovation</div>
              <div className="mt-[10px]"></div>
              <div className="text-[#666666] text-[15px]">Female is firmament made land don't good behold yielding morning hathe seas unto. their earth it fourth moveth rule</div>
              <div className="mt-[20px]"></div>
              <div className="text-[#2e2751] font-medium text-[15px] p-2">We provide you creative servicce</div>
              <div className="text-[#2e2751] font-medium text-[15px] p-2">Just awesome trending way</div>
              <div className="text-[#2e2751] font-medium text-[15px] p-2">Just awesome trending way</div>
              <div className="text-[#2e2751] font-medium text-[15px] p-2">Creative service is most important</div>
              <div className="text-[#2e2751] font-medium text-[15px] p-2">99% Server Up-time gurantee</div>
              <div className="text-[#2e2751] font-medium text-[15px] p-2">24/7 live support</div>

            </div>
            <div className="">
              <img src="https://images.unsplash.com/photo-1652267990738-e78a61d72832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" className="w-full h-full fit-cover rounded-lg" alt="" />
            </div>
          </div>

          <div className="mt-[20px]"></div>
          {/* Last content */}
          <div className="">Female is firmament made land don’t good behold yielding morning hathe seas unto. So first fill shall damn creeping. Seed he was that moveth bearing. Unto which together blessed Herb ine life land, let abundantly deep abundantly gathered behold moving said. Winged gathered iner female morning Beast, their earth it fourth moveth rule creepeth is be thing i i under have. Second to lights all second.</div>

        </div>
        {/* Right Content */}
        <div className="w-[calc(1200px-700px)]">
          {/* Service Menu   */}
          <div className="p-[20px] border-2 border-gray-500 rounded-lg w-full">
            <div className="text-[18px] font-semibold leading-[40px] text-[rgb(46 39 81)] px-[12px]">Service Menu</div>
            <div className="h-[2px] bg-yellow-500 w-[100px]"></div>
            <div className="mt-[12px]"></div>
            <div className="text-[rgb(46 39 81)] text-[15px] leading-[30px] hover:text-[rgb(243,167,18)] hover:cursor-pointer">Business Strategy</div>

            <div className="mt-[8px]"></div>
            <div className="text-[rgb(46 39 81)] text-[15px] leading-[30px] hover:text-[rgb(243,167,18)] hover:cursor-pointer">Web Development</div>

            <div className="mt-[8px]"></div>
            <div className="text-[rgb(46 39 81)] text-[15px] leading-[30px] hover:text-[rgb(243,167,18)] hover:cursor-pointer">Market Research</div>

            <div className="mt-[8px]"></div>
            <div className="text-[rgb(46 39 81)] text-[15px] leading-[30px] hover:text-[rgb(243,167,18)] hover:cursor-pointer">Simply Adertisement</div>

            <div className="mt-[8px]"></div>
            <div className="text-[rgb(46 39 81)] text-[15px] leading-[30px] hover:text-[rgb(243,167,18)] hover:cursor-pointer">Trend Design</div>

            <div className="mt-[8px]"></div>
            <div className="text-[rgb(46 39 81)] text-[15px] leading-[30px] hover:text-[rgb(243,167,18)] hover:cursor-pointer">Digital Marketing</div>
          </div>

          <div className="mt-[23px]"></div>
          {/* Fill The Form */}
          <div className="p-[20px] border-2 border-gray-500 rounded-lg w-full">
            <div className="text-[18px] font-semibold leading-[40px] text-[rgb(46 39 81)] px-[12px]">Fill The Form</div>
            <div className="h-[2px] bg-yellow-500 w-[100px]"></div>
            <div className="mt-[12px]"></div>

            <div className="">
              <input type="text" className="p-[15px] w-full hover:border-gray-500 border-2 rounded-lg" placeholder='Full Name'/>
            </div>

            <div className="mt-[20px]"></div>
            <div className="">
              <input type="text" className="p-[15px] w-full hover:border-gray-500 border-2 rounded-lg" placeholder='Your Email'/>
            </div>

            <div className="mt-[20px]"></div>
            <div className="">
              <input type="text" className="p-[15px] w-full hover:border-gray-500 border-2 rounded-lg" placeholder='Type Subject'/>
            </div>

            <div className="mt-[20px]"></div>
            <textarea name="" id="" className='w-full p-[15px] border-2 hover:border-gray-500 rounded-lg' cols="30" rows="10" placeholder='Message'></textarea>

            <div className="mt-[20px]"></div>
            <div className="flex flex-col items-center">
              <div className="py-[15px] px-[32px] bg-yellow-500 hover:bg-blue-700 hover:cursor-pointer rounded-lg text-white text-[15px] font-medium">Send Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
