import React from 'react';
import { useState, useEffect } from 'react';
const Homeourworks = () => {
  const [{ category }, setCategory] = useState({
    category: ['All', 'Animation', 'Branding', 'Business', 'Consulting', 'Marketing', 'SEO']
  })
  const [{ card, subCard, handleSubCard }, setSubCard] = useState({
    card: [{
      img: 'https://images.unsplash.com/photo-1650959526581-a8d22e083d4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Creative Marketing',
      category: ['Business', 'Animation']
    },
    {
      img: 'https://images.unsplash.com/photo-1650896794018-bfb54e28e4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Creative Marketing',
      category: ['SEO', 'Consulting']
    },
    {
      img: 'https://images.unsplash.com/photo-1647010163530-7bdc69e8806a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      title: 'Creative Marketing',
      category: ['Marketing', 'SEO']
    },
    {
      img: 'https://images.unsplash.com/photo-1650847821830-2c24e212213f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title: 'Creative Marketing',
      category: ['Animation', 'Branding']
    },
    {
      img: 'https://images.unsplash.com/photo-1650898858449-2d3c2bdbbadc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      title: 'Creative Marketing',
      category: ['Branding', 'Consulting']
    },
    {
      img: 'https://images.unsplash.com/photo-1650880465964-7a2b4cfdd47e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      title: 'Creative Marketing',
      category: ['Business']
    }],
    subCard: [],
    handleSubCard: (value, data) => {
      setSubCard(item => {
        const newData = data.filter(item => item.category.includes(value))
        return {
          ...item,
          subCard: value === 'All' ? data : newData
        }
      })
    }
  })
  useEffect(() => {
    handleSubCard('All', card)
  }, [])
  return (
    <div className='w-[1200px] mx-auto'>
      {/* Information */}
      <div className="">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-yellow-500 font-semibold text-white rounded-lg">Project</div>
        </div>
        <div className="mt-[10px]"></div>
        <div className="text-center text-[100px] font-semibold">Our Works</div>
        <div className="mt-[10px]"></div>
        <div className="text-center text-gray-500 font-normal">
          Lorem Ipsum Dolor Sit Amet, Conse Ctetur Adipiscing Elit, Sed Do Eiusmod Tempor Ares Incididunt Utlabore. Dolore Magna Ones Baliqua
        </div>
      </div>
      <div className="mt-[30px]"></div>
      {/* Card */}
      <div className="">
        <div className="flex flex-cols justify-center">
          <div className="flex items-center gap-x-4">
            {category.map(item => (
              <div className="p-2 bg-green-600 rounded-lg text-[20px] font-semibold text-white hover:cursor-pointer" key={item}
                onClick={(e) => handleSubCard(e.target.innerText.trim(), card)}
              >{item}</div>
            ))}
          </div>


        </div>
        <div className="mt-5"></div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-20">
          {subCard.map(item => (
            <div className="relative" key={item.img}>
              <div className="h-[300px]">
                <img src={item.img} className="w-full h-full fit-cover" alt="" />
              </div>
              <div className="absolute bottom-0px bg-white rounded-r-lg shadow-2xl right-[50%] p-5 translate-x-2/4 -translate-y-2/4">
                <div className="h-full absolute left-[-10px] top-0 bg-green-600 w-[10px] rounded-l-lg"></div>
                <div className="">{item.title}</div>
                <div className="">{item.category.join(',')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[100px]"></div>
      <div className=""></div>
    </div>
  );
}

export default Homeourworks;
