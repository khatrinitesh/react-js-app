import React from 'react';
import Banner from './../components/Banner';
import Splash from './../components/Splash';
import { Reason } from '../constants/constants';

const Home = () => {
  return (
    <>
    <Splash/>
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center">
        <Banner title="Home" desc="Esse aliqua irure fugiat cupidatat dolore elit nostrud ea ut cupidatat amet exercitation."/>
        <div className="mt-8"> {/* Add top margin */}
          <h2 className="text-2xl font-bold mb-4">{Reason.title}</h2> 
          <div className="grid grid-cols-2 gap-4"> 
            <ul>
              {Reason.listBullet1.map((item, index) => (
                <li key={index} className="mb-2">{item.item}</li> 
              ))}
            </ul>
            <ul>
              {Reason.listBullet2.map((item, index) => (
                <li key={index} className="mb-2">{item.item}</li> 
              ))}
            </ul>
          </div>
        </div>
    </div>
    </>
   
  )
}

export default Home