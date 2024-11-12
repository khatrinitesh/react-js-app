import React from 'react';
import { cardData } from '../constants/cardData';
import { motion } from 'framer-motion';

const CardsComp = () => {
  return (
    <>
       <h1>Neumorphism Card Example</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
}

export default CardsComp;



const Card = ({ title, description, image }) => {
    return (
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="card-header">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </motion.div>
    );
  };
  
