import React, { useState, useEffect } from 'react';
import Sample_ReportJson from './../../../Sample_Report.json';
import { Link } from 'react-router-dom';
const Blog = () => {
   const [{ news, sumNews, indexNews, handleNews, handleSumNews }, setNews] = useState({
      news: [],
      sumNews: [],
      indexNews: 0,
      handleNews: value => setNews(state => ({
         ...state,
         indexNews: value,
         news: [...Sample_ReportJson.results.slice(value * 10, value * 10 + 10)]
      })),
      handleSumNews: number => setNews(state => {
         let index = [];
         for (let i = 0; i < number; i++) {
            index = [...index, i];
         }
         return {
            ...state,
            sumNews: [...index]
         }
      })
   })

   useEffect(() => {
      handleNews(0)
      handleSumNews(Math.ceil(Sample_ReportJson.results.length / 10))
   }, []);

   return (
      <div>
         <div className="mt-[100px]"></div>
         <div className="flex gap-x-5 w-[1200px] mx-auto" >
            <div className="flex flex-col gap-y-5">
               {news.map((item, index) => (

                  <Link to={`/blog/${indexNews * 10 + index}`} key={index}>
                     <div className="flex gap-x-5 hover:bg-gray-200" >
                        <div className="h-[200px] w-[400px]">
                           <img src={item.image_url ? item.image_url : 'https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8='} className="w-full h-full fit-cover" alt="" />
                        </div>
                        <div className="w-[400px]">
                           <div className="text-[20px] font-semibold">{item.title}</div>
                           <div className="text-gray-400">{item.description ? `${item.description.length < 100 ? item.description : `${item.description.slice(0, 100)}...`}` : `Chưa có miêu tả`}</div>
                        </div>
                     </div>
                  </Link>

               ))}
            </div>
            <div className="w-full">
               <div className="">Popular Posts</div>
               <div className="h-[2px] bg-yellow-500 w-[100px]"></div>
               <div className=""></div>
               <div className="flex flex-col gap-5">
                  {Sample_ReportJson.results.slice(0, 10).map((item, index) => (
                     <Link to={`/blog/${index}`} key={index}>


                        <div className="flex items-center gap-5" >
                           <div className="w-[100px] h-[80px]">
                              <img src={item.image_url ? item.image_url : 'https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8='} className="w-full h-full fit-cover" alt="" />
                           </div>
                           <div className="w-full">
                              <div className="flex items-center">
                                 <div className="flex">
                                    <ion-icon name="time-outline"></ion-icon>
                                 </div>
                                 {item.pubDate}
                              </div>
                              <div className="text-gray-400 text-blue-900 font-normal">{item.title}</div>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
         <div className="mt-5"></div>
         <div className="flex flex-col items-center">
            <div className="flex gap-x-5">
               {sumNews.map((item, index) => (
                  <div className={`px-5 py-1  text-white font-semibold hover:cursor-pointer hover:bg-red-500 rounded-lg ${indexNews === item ? `bg-red-500` : `bg-blue-500`}`}
                     onClick={() => handleNews(index)}
                     key={item}>{item + 1} </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Blog;
