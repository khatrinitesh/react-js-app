import React from 'react';

const PricingTableApp = () => {
    return (
        <>
            <PricingTable />
        </>
    )
}

export default PricingTableApp

const PricingTable = () => {
    const plans = [
        {
            title: 'Basic',
            price: 19.99,
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
        {
            title: 'Standard',
            price: 29.99,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
            title: 'Premium',
            price: 39.99,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
    ];

    return (
        <>
            {plans.map((plan, index) => {
                return (
                    <PricingPlan key={index} {...plan} />
                )
            })}
        </>
    )
}

const PricingPlan = ({ title, price, features }) => {
    return (
        <>
            <div className="pricing-plan bg-[#c9c9c9] p-[20px] mb-[30px] rounded-[10px]">
                <h2>{title}</h2>
                <p className='price'>${price} / month</p>
                <ul className='features'>
                    {features.map((feature, index) => {
                        return (
                            <li key={index}>
                                {feature}
                            </li>
                        )
                    })}
                </ul>
                <button className='subscribe-button'>Subscribe</button>
            </div>
        </>
    )
}
