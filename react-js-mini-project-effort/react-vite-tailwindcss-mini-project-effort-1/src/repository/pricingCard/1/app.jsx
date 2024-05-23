import React from 'react';
import PricingCard from './pricingCard';
import styles from './PricingCard.module.css'

export default function CustomApp() {
  return (
    <>
    <div className={styles.prices}>
        <PricingCard label="Start-Up 1"
        price="Free 1"
        image="https://placehold.co/600x400/EEE/31343C"
        imageAlt="Moving bicycle with clouds 1" duration={3}/>
        <PricingCard label="Start-Up 2"
        price="Free 2"
        image="https://placehold.co/600x400/EEE/31343C"
        imageAlt="Moving bicycle with clouds 2" duration={33}/>
        <PricingCard label="Start-Up 3"
        price="Free 3"
        image="https://placehold.co/600x400/EEE/31343C"
        imageAlt="Moving bicycle with clouds 3" duration={113}/>
        <PricingCard label="Start-Up 4"
        price="Free 4"
        image="https://placehold.co/600x400/EEE/31343C"
        imageAlt="Moving bicycle with clouds 4" duration={333}/>
    </div>
    </>
  )
}
