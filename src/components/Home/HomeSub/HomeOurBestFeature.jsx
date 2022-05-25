import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Homeourbestfeature = () => {
  const navigate = useNavigate();
  
  const [{ bestFeature }, setBestFeature] = useState({
    bestFeature: [
      {
        icon: 'code-outline',
        title: 'Web Development',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      },
      {
        icon: 'pencil-outline',
        title: 'Creative Design',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      },
      {
        icon: 'newspaper-outline',
        title: 'Quality Service',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      },
      {
        icon: 'cafe-outline',
        title: 'Without Hassle',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      },
      {
        icon: 'cafe-outline',
        title: 'Without Hassle',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      },
      {
        icon: 'cafe-outline',
        title: 'Without Hassle',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      },
      {
        icon: 'cafe-outline',
        title: 'Without Hassle',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      },
      {
        icon: 'cafe-outline',
        title: 'Without Hassle',
        content: 'Molitia modi quae labori osam nemo minimaafb services dafeandable'
      }
    ]
  })
  return (
    <div>
      <div className="bg-gradient-to-r from-[#000046] to-[#1CB5E0]">
        <div className="w-[1200px] mx-auto">
          <div className="p-10"></div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <img src="https://images.unsplash.com/photo-1649615644623-a4f6220f4352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" className='w-full h-full fit-contain rounded-lg' alt="" />
            </div>

            {/* Feature */}
            <div className="">
              <div className="text-[100px] font-semibold text-white">Our Best Features</div>
              <div className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae optio minima libero quidem, id nulla aperiam, qui officiis ipsa consectetur nihil repellat laudantium temporibus mollitia autem similique delectus sed deserunt!</div>
              <div className="mt-[10px]"></div>
              <div className="grid grid-cols-2 gap-3">
                {bestFeature.map((item, index) => (
                  <div key={index} className="flex bg-white rounded-lg p-1 gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex">
                        <ion-icon size="large" name={item.icon}></ion-icon>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[20px] font-semibold">{item.title}</div>
                      <div className="">{item.content}</div>
                    </div>
                  </div>


                ))
              }
              </div>
              <div className="mt-[10px]"></div>
              <div className="p-2 text-center rounded-lg hover:cursor-pointer font-semibold bg-white" onClick={()=>navigate('/contact')}>Know More</div>
            </div>
          </div>

          <div className="p-10"></div>

        </div>


      </div>
    </div>
  );
}

export default Homeourbestfeature;
