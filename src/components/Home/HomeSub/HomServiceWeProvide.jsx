import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Homserviceweprovide = () => {
  const navigate = useNavigate();
  const [{card},setCard] = useState({
    card:[
      {
        img:'http://themelamp.com/templates/bizwheel/img/services/service-01.jpg',
        title:'Business Strategy',
        content:'Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti'
      },
      {
        img:'http://themelamp.com/templates/bizwheel/img/services/service-02.jpg',
        title:'Web Development',
        content:'Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti'
      },
      {
        img:'http://themelamp.com/templates/bizwheel/img/services/service-03.jpg',
        title:'Market Research',
        content:'Cras venenatis, purus sit amet tempus mattis, justo nisi facilisis metus, in tempus ipsum ipsum eu ipsum. Class aptent taciti'
      },
    ]
  })
  return (
    <div>
        {/* Information */}
        <div className="flex justify-between w-[1200px] mx-auto">
          <div className="">
            <div className="text-[13px] bg-yellow-500 rounded-lg inline-block p-2 font-semibold text-white">Creative</div>
            <div className="mt-2"></div>
            <div className="font-semibold text-[40px] text-blue-700">Service We Provide</div>
            <div className="">We provide quality service & support..</div>
          </div>
          <div className="w-[700px] flex items-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cum iure fuga reprehenderit, placeat sed maiores assumenda in, quae similique, corrupti deserunt incidunt quidem adipisci consectetur? Sint cum ipsam voluptatum.
          </div>
        </div>
        <div className="mt-[20px]"></div>
        {/* Card */}
        <div className="grid grid-cols-3 w-[1200px] mx-auto gap-10">
          {card.map((item,index)=>(
            <div className="" key={index}>
              <div className=""><img src={item.img} className='w-full h-full fit-cover rounded-lg' alt="" /></div>
              <div className="text-[30px] font-semibold">{item.title}</div>
              <div className="mt-[10px]"></div>

              <div className="">{item.content}</div>
              <div className="mt-[10px]"></div>
              <div className="flex items-center hover:cursor-pointer hover:text-yellow-600"
                onClick={()=>navigate('/ourservices')}
              >
                <div className="flex"><ion-icon name="arrow-forward-circle-outline"></ion-icon></div>
                <div className="">View source</div>
              </div>

            </div>


          ))}

        </div>
    </div>
  );
}

export default Homserviceweprovide;
