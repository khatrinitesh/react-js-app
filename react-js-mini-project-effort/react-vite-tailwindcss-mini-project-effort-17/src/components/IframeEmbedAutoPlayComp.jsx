import React from 'react';
import { motion } from 'framer-motion';

const IframeEmbedAutoPlayComp = () => {
  return (
    <>
      <AutoPlayIframe/>
    </>
  );
}

export default IframeEmbedAutoPlayComp;

const AutoPlayIframe = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </motion.div>
    );
  };
  


