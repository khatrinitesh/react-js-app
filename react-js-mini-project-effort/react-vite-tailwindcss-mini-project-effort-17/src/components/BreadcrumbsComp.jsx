import React from 'react';
import { breadCrumbsData } from '../constants/BreadPath';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BreadcrumbsComp = () => {
  return (
    <>
        <Breadcrumbs breadCrumbsData={breadCrumbsData} />
    </>
  );
}

export default BreadcrumbsComp;

const Breadcrumbs = ({ breadCrumbsData }) => {
    return (
      <div className="breadcrumbs-container p-4">
        <motion.ul
          className="flex space-x-4"
          initial={{ opacity: 0 }} // Initial state: breadcrumbs invisible
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 0.6 }} // Duration of the fade-in
        >
          {breadCrumbsData.map((path, index) => (
            <motion.li
              key={index}
              className="breadcrumb-item"
              initial={{ x: -50, opacity: 0 }} // Initial state: each item slides in from the left
              animate={{ x: 0, opacity: 1 }}  // Slide in and become visible
              transition={{
                delay: index * 0.2, // Delay between items for staggered animation
                duration: 0.5, // Duration for each item
              }}
            >
              <Link
                to={path.link}
                className="text-blue-500 hover:text-blue-700"
              >
                {path.name}
              </Link>
              {index < breadCrumbsData.length - 1 && <span className="mx-2">/</span>}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  };
  
