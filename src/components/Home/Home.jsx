import React, { useState } from 'react';
import Homeinformation from './HomeSub/HomeInformation';
import Homecardservice from './HomeSub/HomeCardService';
import Homeourbestfeature from './HomeSub/HomeOurBestFeature';
import Homserviceweprovide from './HomeSub/HomServiceWeProvide';
import Homeourportfolio from './HomeSub/HomeOurPortfolio';
import Homeourworks from './HomeSub/HomeOurWorks';
import Homeoursatisfiedclients from './HomeSub/HomeOurSatisfiedClients'
import HomeCreativeTeam from './HomeSub/HomeCreativeTeam'
import HomePublished from './HomeSub/HomePublished'
const Home = () => {
  const [{ cardService }, setCardService] = useState({
    cardService: [
      {
        title: 'Creative Design',
      },
      {
        title: 'Quality Service',
      },
      {
        title: 'On-time Delivery',
      },
      {
        title: '24/7 Live support',
      }
    ]
  })
  return (
    <div className=''>
      {/* Information */}
      <Homeinformation />

      {/* Card Service */}
      <div className="mt-[20px]"></div>
      <Homecardservice cardService={cardService} />

      {/* Our Best Feature */}
      <div className="mt-[20px]"></div>
      <Homeourbestfeature />

      {/* Service We Provide */}
      <div className="mt-[20px]"></div>
      <Homserviceweprovide />

      {/* Our Portfolio */}
      <div className="mt-[20px]"></div>
      <Homeourportfolio />

      {/* Our Works */}
      <div className="mt-[20px]"></div>
      <Homeourworks />

      <div className="mt-[20px]"></div>
      <Homeoursatisfiedclients />

      <div className="mt-[20px]"></div>
      <HomeCreativeTeam />

      <div className="mt-[20px]"></div>
      <HomePublished/>
    </div>
  );
}

export default Home;
