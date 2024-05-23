import React from "react"
import Back from "../../components/common/back";
import PriceCard from "../pricing/pricecard";
import "./price.css"
import Faq from "./faq";

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing