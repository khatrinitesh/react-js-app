import React, { useState, useEffect } from 'react';
import './style.css';

const SkillBarsApp = () => {
    return (
        <>
            <SkillBars />
        </>
    )
}

export default SkillBarsApp


const SkillBars = () => {
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'Reactjs', level: 95 },
        { name: 'TailwindCSS', level: 75 },
    ];

    return (
        <div className="skill-bars-container">
            {skills.map((skill, index) => (
                <div key={index} className="skill-bar">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                        {skill.level}%
                    </div>
                </div>
            ))}
        </div>
    );
};