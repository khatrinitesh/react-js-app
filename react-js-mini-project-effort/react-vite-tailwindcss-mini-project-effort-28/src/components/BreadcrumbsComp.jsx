import React from 'react';
import { useBreadcrumbStore } from '../store/useBreadStore';
import { motion } from 'framer-motion';

const BreadcrumbsComp = () => {
    const {path, goBackTo, addCrumb } = useBreadcrumbStore();

    const current = path[path.length - 1];
    const nextCrumbs =      [current] || [];
  return (
    <>
       <div className="breadcrumb-container">
      <div className="breadcrumb-trail">
        {path.map((crumb, index) => (
          <motion.span
            key={index}
            className="breadcrumb"
            onClick={() => goBackTo(index)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {crumb}
            {index < path.length - 1 && <span className="breadcrumb-separator">/</span>}
          </motion.span>
        ))}
      </div>

      {nextCrumbs.length > 0 && (
        <div className="breadcrumb-options">
          {nextCrumbs.map((crumb, i) => (
            <motion.button
              key={i}
              className="breadcrumb-button"
              onClick={() => addCrumb(crumb)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {crumb}
            </motion.button>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default BreadcrumbsComp;
