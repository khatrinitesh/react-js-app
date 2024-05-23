import React from 'react';
import './style.css';

const TestimonialsApp = () => {
    const testimonialsData = [
        {
            author: 'John Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            author: 'Jane Doe',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];
    return (
        <>
            <div className="testimonials-container">
                <h2>Testimonials</h2>
                {testimonialsData.map((example, index) => {
                    return (
                        <Testimonial key={index} {...example} />
                    )
                })}
            </div>
        </>
    )
}

export default TestimonialsApp


const Testimonial = ({ author, content }) => {
    return (
        <>
            <div className='testimonial'>
                <p className='testimonial-content'>{content}</p>
                <p className='testimonial-author'>{author}</p>
            </div>
        </>
    )
}
