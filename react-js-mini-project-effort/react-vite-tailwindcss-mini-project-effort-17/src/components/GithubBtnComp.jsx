import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GithubBtnComp = () => {
  return (
    <>
      <GitHubButtonComponent/>
    </>
  );
}

export default GithubBtnComp;

// Styled Component for the GitHub Button
const GitHubButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #24292f;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #2c2f38;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #444c56;
  }

  &:focus {
    border-color: #0366d6;
  }

  svg {
    margin-right: 8px;
  }
`;

// GitHub Icon SVG (You can use an icon library or your own SVG)
const GitHubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.55 5.47 7.61.4.07.55-.18.55-.39v-1.56c-2.22.48-2.69-1.07-2.69-1.07-.36-.91-.89-1.15-.89-1.15-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83 1.45 2.48 3.83 1.76 4.75 1.34.15-.77.57-1.77.98-2.17.65-.57.15-1.39-.23-1.7-1.46-.77-2.99-1.22-3.98-1.22-3.98-.95 0-1.72-.34-1.72-.75 0-.29.11-.55.29-.75-.98-.04-2.29-.48-2.29-1.72 0-1.07.92-2.29 2.1-2.29 1.17 0 1.81.48 2.12.98 1.31-.16 2.72-.44 3.27-.88.2.16.39.32.62.49.32-.26.48-.41.48-.41z" />
    </svg>
  );

  // Main Component that renders the button
const GitHubButtonComponent = () => {
    return (
      <GitHubButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://github.com', '_blank')}
      >
        <GitHubIcon />
        Star on GitHub
      </GitHubButton>
    );
  };
