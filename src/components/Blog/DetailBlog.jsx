import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SAMPLE_REPORT from './../../../Sample_Report.json'
export default function DetailBlog() {
   const { id } = useParams();

   const [{ content, handleContent }, setContent] = useState({
      content: {},
      handleContent: id => setContent(state => {

         return {
            ...state,
            content: { ...SAMPLE_REPORT.results[id] },
         }
      })
   })
   useEffect(() => {
      handleContent(id)
   }, []);
   return (
      <div className='w-[1200px] mx-auto'>
         <div className="mt-[100px]"></div>
         <div className="w-[500px] mx-auto">
            <img src={content.image_url ? content.image_url : 'https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8='} className="w-full h-full fit-cover" alt="" />
         </div>
         <div className="mt-5"></div>
         <div className="text-gray-400">
            <div className="flex gap-x-5">
               <div className="flex items-center gap-x-2">
                  <div className="flex"><ion-icon size="large" name="person-outline"></ion-icon></div>
                  {content.creator}</div>
               <div className="flex items-center gap-x-2">
                  <div className="flex"><ion-icon size="large" name="calendar-outline"></ion-icon></div>
                  {content.pubDate}</div>
               <div className="flex items-center gap-x-2">
                  <div className="flex"><ion-icon size="large" name="bookmark-outline"></ion-icon></div>
                  {content.category}</div>
            </div>
         </div>
         <div className="mt-5"></div>
         <div className="text-[50px] font-semibold">{content.title}</div>
         <div className="mt-5"></div>
         <div className="">{content.full_description ? content.full_description : 'Nội dung bị lỗi hoặc chưa hiển thị.'}</div>
         <div className="mt-5"></div>
         <div className="text-gray-400">Từ khóa: {content.keywords ? content.keywords.join(', ') : 'không có từ khóa'}.</div>
         <div className="mt-5"></div>
         <div className="text-[30px] font-semibold">Bình luận</div>
         <div className="">All fields marked with an asterisk (*) are required</div>
         <div className="mt-5"></div>

         <div className="">
            <form action="">
               <div className="grid grid-cols-3 gap-x-5">
                  <div className="">
                     <div className="">Your Name*</div>
                     <input type="text" placeholder='Your Name*' className='w-full border-2 p-2' />
                  </div>
                  <div className="">
                     <div className="">Your Email*</div>

                     <input type="text" placeholder='Your Email*' className='w-full border-2 p-2' />

                  </div>
                  <div className="">
                     <div className="">Your Website*</div>

                     <input type="text" placeholder='Your Website*' className='w-full border-2 p-2' />

                  </div>
               </div>
               <div className="mt-5"></div>
               <div className="">
               <div className="">Your Comment*</div>

                  <textarea name="" className='p-2 w-full border-2' placeholder='Your Comment*'></textarea>
               </div>
               <div className="mt-5"></div>

               <div className="text-right">
                  <input type="submit" className='px-[100px] py-2 bg-green-500 hover:cursor-pointer text-white font-semibold' />
               </div>
            </form>
         </div>


      </div>
   )
}
