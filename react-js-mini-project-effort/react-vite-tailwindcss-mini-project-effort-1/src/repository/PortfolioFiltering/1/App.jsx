import React, { useState } from 'react';

const PortfolioFilteringApp = () => {

    return (
        <>
            <PortfolioFiltering />
        </>
    )
}

export default PortfolioFilteringApp

const PortfolioFiltering = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            category: 'Web Design',
            image: 'project1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'Project 2',
            category: 'Web Development',
            image: 'project2.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            title: 'Project 3',
            category: 'Graphic Design',
            image: 'project3.jpg',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory)

    return (
        <div>
            <div className="filter-buttons">
                <button onClick={() => handleCategoryChange('All')}>All</button>
                <button onClick={() => handleCategoryChange('Web Design')}>Web Design</button>
                <button onClick={() => handleCategoryChange('Web Development')}>Web Development</button>
                <button onClick={() => handleCategoryChange('Graphic Design')}>Graphic Design</button>
            </div>
            <div className="portfolio-gallery">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


