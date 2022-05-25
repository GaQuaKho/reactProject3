import React from 'react';
import { useState,useEffect } from 'react';

const Homeoursatisfiedclients = () => {
  const [{ avatar, hoverAvatar, leaveAvatar }, setAvatar] = useState({
    avatar: false,
    hoverAvatar: () => setAvatar(state => ({ ...state, avatar: true })),
    leaveAvatar: () => setAvatar(state => ({ ...state, avatar: false })),
  })
  const [user, setUser] = useState([
    {
      name: 'User 1',
      job: 'Maketing',
      star: 2,
      img:'https://images.unsplash.com/photo-1652172264794-a83fe7c190f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      content: 'Lorem ipsum  dolor sit amet consectetur adipisicing elit. Facere omnis totam magnam quia, repellat, placeat tenetur nihil tempora, hic voluptate quidem accusantium laboriosam laborum sed ex eius? Debitis, tempore qui.orem ipsum  dolor sit amet consectetur adipisicing elit. Facere omnis totam magnam quia, repellat, placeat tenetur nihil tempora, hic voluptate quidem accusantium laboriosam laborum sed ex eius? Debitis, tempore qui.orem ipsum  dolor sit amet consectetur adipisicing elit. Facere omnis totam magnam quia, repellat, placeat tenetur nihil tempora, hic voluptate quidem accusantium laboriosam laborum sed ex eius? Debitis, tempore qui.'
    },
    {
      name: 'User 2',
      job: 'IT',
      star: 5,
      img:'https://images.unsplash.com/photo-1651981054670-0752d6144f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      content: 'Lorem ipsum  dolor sit amet consectetur adipisicing elit. Facere omnis totam magnam quia, repellat, placeat tenetur nihil tempora, hic voluptate quidem accusantium laboriosam laborum sed ex eius? Debitis, tempore qui.'
    },
    {
      name: 'User 3',
      job: 'Doctor',
      star: 4,
      img:'https://images.unsplash.com/photo-1652088056798-9162e4c044a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=510&q=80',
      content: 'Lorem ipsum  dolor sit amet consectetur adipisicing elit. Facere omnis totam magnam quia, repellat, placeat tenetur nihil tempora, hic voluptate quidem accusantium laboriosam laborum sed ex eius? Debitis, tempore qui.orem ipsum  dolor sit amet consectetur adipisicing elit. Facere omnis totam magnam quia, repellat, placeat tenetur nihil tempora, hic voluptate quidem accusantium laboriosam laborum sed ex eius? Debitis, tempore qui.orem ipsum  dolor sit amet consectetur adipisicing elit. Facere omnis totam magnam quia, repellat, placeat tenetur nihil tempora, hic voluptate quidem accusantium laboriosam laborum sed ex eius? Debitisantium '
    }
  ])
  const [{starUser,handleStarUser},setStarUser] = useState({
    starUser:[],
    handleStarUser: start=>setStarUser(state=>{
      let mapStar = [];
      for(let i=0;i<start;i++){
        mapStar.push(i)
      }
      return {
        ...state,
        starUser: mapStar
      }
    })
  })
  const [{ index, handleIndex }, setIndex] = useState({
    index: 0,
    handleIndex: indexInput => setIndex(state => {
        handleStarUser(user[indexInput].star)
        return { ...state, index: indexInput }
    })
  })
  useEffect(()=>{
    handleStarUser(user[index].star)
  },[])
  return (
    <div>
      <div className="relative">
        <div className="h-full">
          <img src="https://images.unsplash.com/photo-1652113827326-5a47fea17cf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="w-full h-full fit-cover" alt="" />
        </div>
        <div className="absolute top-[50px] left-[50px] w-[1000px]">
          <div className="font-semibold text-[100px] text-white">Our Satisfied Clients</div>
          <div className="mt-[50px]"></div>
          <div className="font-semibold text-[50px] text-white">some of our great clients and their review</div>
          <div className="mt-[50px]"></div>

          {/* User */}
          <div className="p-2 bg-white rounded-lg text-[#666]">
            <div className="flex gap-x-3 text-green-700">
              {starUser.map((item,index)=>(

               <ion-icon key={index} size="large" name="star-outline"></ion-icon>
              ))}
           
            </div>
            <div className="mt-[10px] "></div>
            <div className="">
              {user[index].content}
            </div>
            <div className="flex gap-x-[50px]">
              <div className={`h-[200px] p-2 border-2 hover:cursor-pointer ${avatar && 'border-green-500'}`} onMouseOver={hoverAvatar} onMouseLeave={leaveAvatar}>
                <img src={user[index].img} className="w-full h-full fit-cover" alt="" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-[50px] font-semibold">{user[index].name}</div>
                <div className="">{user[index].job}</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-x-4">
                {user.map((item, index) => (
                  <div className="px-2  bg-green-600 text-white hover:cursor-pointer rounded-lg text-[20px] font-semibold" key={index} onClick={() => handleIndex(index)}>{index}</div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10px]"></div>
      <div className=""></div>
    </div>
  );
}

export default Homeoursatisfiedclients;
