import React, { useState } from 'react';
import './custom.css';

export default function CustomApp() {
    const [projects, setProjects] = useState([
        { id: 1, title: 'Project 1', category: 'Web Development' },
        { id: 2, title: 'Project 2', category: 'Design' },
        { id: 3, title: 'Project 3', category: 'Web Development' },
        { id: 4, title: 'Project 4', category: 'Mobile App' },
      ]);

      const [selectedCategory, setSelectedCategory] = useState('All');

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      }

      const filteredProject = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory)
  return (
    <div>
        <h2>Portfolio</h2>
        <div>
            <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryChange('All')}>All</button>
            <button  className={selectedCategory === 'Web Development' ? 'active' : ''} onClick={() => handleCategoryChange('Web Development')}>Web Development</button>
            <button  className={selectedCategory === 'Mobile App' ? 'active' : ''} onClick={() => handleCategoryChange('Mobile App')}>Mobile App</button>
            <button  className={selectedCategory === 'Design' ? 'active' : ''} onClick={() => handleCategoryChange('Design')}>Design</button>
        </div>
        <ul>
            {filteredProject.map((project) => (
                <li key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
