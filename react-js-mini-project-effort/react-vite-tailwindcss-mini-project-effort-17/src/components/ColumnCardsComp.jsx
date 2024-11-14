import React from "react";
import { motion } from "framer-motion";
import { cards } from './../constants/cardsData';

const ColumnCardsComp = () => {
  return(
    <>
    <div className="card-container">
      {cards.map((card) => (
        <Cards key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
    </>
  )
};

export default ColumnCardsComp;

const Cards = ({ title, description }) => {
  return (
    <>
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </motion.div>
    </>
  );
};
