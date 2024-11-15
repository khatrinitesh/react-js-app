import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { emails } from './../constants/emailData';

const Emailer = () => {

    const [selectedEmail, setSelectemails] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };
  return (
    <>
       <Container>
      <Sidebar>
        <h2>Inbox</h2>
        <EmailList>
          {emails.map((email) => (
            <motion.div
              key={email.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleEmailClick(email)}
            >
              <EmailPreview>
                <h3>{email.subject}</h3>
                <p>{email.sender}</p>
                <p>{email.preview}</p>
              </EmailPreview>
            </motion.div>
          ))}
        </EmailList>
      </Sidebar>

      <MainContent>
        {selectedEmail ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <EmailDetail>
              <h1>{selectedEmail.subject}</h1>
              <h3>From: {selectedEmail.sender}</h3>
              <p>{selectedEmail.preview}</p>
              <p><strong>Full Email Content</strong></p>
              <p>This is where the full email content would go...</p>
            </EmailDetail>
          </motion.div>
        ) : (
          <h2>Select an email to read</h2>
        )}
      </MainContent>
    </Container>
    </>
  );
}

export default Emailer;

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const EmailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EmailPreview = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
    font-size: 14px;
  }

  &:hover {
    background: #e1e1e1;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const EmailDetail = styled.div`
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h1 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
  }

  h3 {
    color: #555;
    font-size: 18px;
  }

  p {
    color: #666;
    font-size: 16px;
  }
`;