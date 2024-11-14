import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CouponComp = () => {
  return (
    <>
      <Coupon/>
    </>
  );
}

export default CouponComp;

const Coupon = () => {
    const [copied, setCopied] = useState(false);
    const couponCode = "Cn7elhl7"; // Example coupon code
    
    const handleCopy = () => {
        if (navigator.clipboard) {
          // Try to use the Clipboard API (modern approach)
          navigator.clipboard.writeText(couponCode)
            .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
            })
            .catch((err) => console.error('Failed to copy text: ', err));
        } else {
          // Fallback to document.execCommand for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = couponCode;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
    
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
        }
      };
    return(
        <>
        <Container>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <CouponCard>
          <CouponHeader>
            <h3>Exclusive Discount</h3>
            <span>For limited time only</span>
          </CouponHeader>
          <Discount>
            <h1>20% OFF</h1>
            <span>on your next purchase</span>
          </Discount>
          <CouponCode>
            <span>{couponCode}</span>
          </CouponCode>
          <motion.button
            onClick={handleCopy}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Copy Code
          </motion.button>

          {copied && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SuccessMessage>Coupon Code Copied!</SuccessMessage>
            </motion.div>
          )}
        </CouponCard>
      </motion.div>
    </Container>
        </>
    )
}

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f9;
`;

const CouponCard = styled.div`
  width: 350px;
  padding: 30px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
`;

const CouponHeader = styled.div`
  margin-bottom: 15px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
  span {
    font-size: 1rem;
    color: #888;
  }
`;

const Discount = styled.div`
  margin: 20px 0;
  h1 {
    margin: 0;
    font-size: 3rem;
    color: #3498db;
  }
  span {
    font-size: 1.2rem;
    color: #555;
  }
`;

const CouponCode = styled.div`
  margin: 10px 0;
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #27ae60;
  font-weight: bold;
`;