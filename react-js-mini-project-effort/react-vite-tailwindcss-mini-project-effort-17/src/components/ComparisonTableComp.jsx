import React from 'react';
import { features } from '../constants/comparisontableData';
import { motion } from 'framer-motion';

const ComparisonTableComp = () => {
  return (
    <>
      <ComparisonTable/>
    </>
  );
}

export default ComparisonTableComp;

const ComparisonTable = () => {
    return (
      <div className="comparison-table-container">
        <motion.table
          className="comparison-table"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic Plan</th>
              <th>Pro Plan</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <motion.tr
                key={feature.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <td>{feature.name}</td>
                <motion.td
                  className={`feature-cell ${feature.basic ? 'available' : 'not-available'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: feature.basic ? 1 : 0.3 }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.basic ? '✔️' : '❌'}
                </motion.td>
                <motion.td
                  className={`feature-cell ${feature.pro ? 'available' : 'not-available'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: feature.pro ? 1 : 0.3 }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.pro ? '✔️' : '❌'}
                </motion.td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    );
  };




