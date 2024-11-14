import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { initialContacts } from './../constants/contactchipsData';
import styled from 'styled-components';

const ContactChipsComp = () => {
  return (
    <>
      <ContactChips/>
    </>
  );
}

export default ContactChipsComp;

const ContactChips = () => {
    const [contacts,setContacts] = useState(initialContacts)

    const handleRemoveContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id))
    }

    return(
        <>
         <ChipsContainer>
      {contacts.map(contact => (
        <motion.div
          key={contact.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Chip>
            <Avatar>
              <img src={contact.avatar} alt={contact.name} />
            </Avatar>
            <ContactInfo>
              <Name>{contact.name}</Name>
              <Email>{contact.email}</Email>
            </ContactInfo>
            <RemoveButton
              whileHover={{ scale: 1.2, backgroundColor: '#e74c3c' }}
              onClick={() => handleRemoveContact(contact.id)}
            >
              ✕
            </RemoveButton>
          </Chip>
        </motion.div>
      ))}
    </ChipsContainer>
        </>
    )
}

// Styled Components

const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 20px;
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContactInfo = styled.div`
  flex-grow: 1;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Email = styled.span`
  font-size: 14px;
  color: #777;
`;

const RemoveButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  
  &:hover {
    color: #e74c3c;
  }

  &:focus {
    outline: none;
  }
`;



