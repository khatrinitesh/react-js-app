import React, { useState } from 'react';

  // List of available skills
  const skills = [
    "JavaScript",
    "ReactJS",
    "Node.js",
    "CSS",
    "HTML",
    "TypeScript",
  ];

const CustomApp = () => {
    // Initialize state to keep track of which checkboxes are checked
  const [checkedSkills, setCheckedSkills] = useState([]);

    // Handle checkbox change
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
    
        // Update state based on checkbox checked/unchecked
        if (checked) {
          setCheckedSkills((prevSkills) => [...prevSkills, value]);
        } else {
          setCheckedSkills((prevSkills) =>
            prevSkills.filter((skill) => skill !== value)
          );
        }
      };


  return (
    <>
      <h3>Select your skills:</h3>
      {skills.map((skill) => (
        <div key={skill}>
          <input
            type="checkbox"
            id={skill}
            value={skill}
            checked={checkedSkills.includes(skill)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={skill}>{skill}</label>
        </div>
      ))}

      <div>
        <h4>Selected Skills:</h4>
        <p>{checkedSkills.join(", ")}</p>
      </div>
    </>
  );
}

export default CustomApp;
