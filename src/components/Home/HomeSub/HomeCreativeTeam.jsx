
import {useEffect,useState} from 'react';

const HomeCreativeTeam = () => {
  const [{user,handleUser},setUser] = useState({
    user:[],
    handleUser: data => setUser(state=>({...state,user:data}))
  })
  useEffect( ()=>{
    fetch('https://fakestoreapi.com/users',{
      method: 'GET'
    })
      .then(data => {
        return data.json()
      })
      .then(data => handleUser(data))
  },[])
  return (
    <div>
      <div className="flex w-[1200px] mx-auto p-[15px] text-[15px]">
        <div className="w-[570px]">
          <div className="text-[13px] text-white rounded-lg font-semibold px-[15px] py-[5px] bg-[#f3a712] inline-block">Leader </div>
          <div className="mt-[15px]"></div>
          <div className="text-[#2e2751] text-[32px] font-bold  text-capitalize">Creative Team</div>
          <div className="text-[#2e2751] text-[15px]">Our experts leaders are waiting for you.</div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[#666666] text-[15px]">Aliquam Sodales Justo Sit Amet Urna Auctor Scelerisquinterdum Leo Anet Tempus Enim Esent Egetis Hendrerit Vel Nibh Vitae Ornar Sem Velit Aliquam</div>
        </div>
      </div>
      <div className="mt-[70px]"></div>
      <div className="grid grid-cols-3 gap-y-[20px] gap-x-4 w-[1120px] mx-auto">
        {user.map((item,index)=>(
          <div className="bg-blue-400 p-2 rounded-lg text-center text-white font-medium " key={index}>
            <div className="text-capitalize">{item.name.firstname +' '+ item.name.lastname}</div>
            <div className="">{item.email}</div>
            <div className="">Address: {item.address.city}</div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default HomeCreativeTeam;
