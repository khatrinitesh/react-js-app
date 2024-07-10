import React from 'react'
import Footer from '../components/Footer'
import MapComp from '../components/Map'
import CallToAction from '../components/CallToAction'
import CountDownComp from '../components/CountDown'
import { countdownData } from '../constants/constants'

const MainLayout = () => {
  return (
    <>
     <div className="counter-area pt100">
      <div className="container">
        <div className="row">
     <div className="counters">
        {countdownData.map((item, index) => (
          <CountDownComp key={index} end={item.value} icon={item.icon} title={item.title} />
        ))}
        </div>
        </div>
        </div>
      </div>
        <CallToAction/>
        <MapComp/>
        <Footer/>
    </>
  )
}

export default MainLayout