import React from 'react';
import Banner from "../components/Banner";

const About = ({ style }) => {
    return (
        <div className={`${style} w-full`}>
            <Banner title="About" desc="Lorem Ipsum" />
        </div>
    )
}

export default About
