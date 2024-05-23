import React from 'react';
import './custom.css';

const PortfolioGalleryApp = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/009/841/162/small/geometric-ethnic-seamless-pattern-traditional-native-striped-american-mexican-style-design-for-background-illustration-wallpaper-fabric-batik-carpet-clothing-embroidery-free-vector.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'Project 2',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/009/841/162/small/geometric-ethnic-seamless-pattern-traditional-native-striped-american-mexican-style-design-for-background-illustration-wallpaper-fabric-batik-carpet-clothing-embroidery-free-vector.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        // Add more projects as needed
    ];
    return (
        <>
            <div className="portfolio-gallery">
                {projects.map((val) => {
                    const { id, title, image, description } = val;
                    return (
                        <div key={id}>
                            <h3>{title}</h3>
                            <img src={image} />
                            <p>{description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PortfolioGalleryApp
