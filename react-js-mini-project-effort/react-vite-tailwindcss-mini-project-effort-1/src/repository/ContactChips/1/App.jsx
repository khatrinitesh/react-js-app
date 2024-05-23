import React, { useState } from 'react';
import './style.css';

const ContactChipsApp = () => {
  return (
    <>
      <ContactChips/>
    </>
  )
}

export default ContactChipsApp

const ContactChips = () => {

    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    ])

    const handleRemove = (contactId) => {
        setContacts(contacts.filter((contact) => contact.id !== contactId))
    }


    return(
        <>
         <h2>Contact Chips</h2>
         <div className="contact-chip">
            {contacts.map((contact) => {
                return(
                    <div key={contact.id}>
                        <span>{contact.name}</span>
                        <span>{contact.email}</span>
                        <button onClick={() => handleRemove(contact.id)}>Remove</button>
                    </div>
                )
            })}
         </div>
        </>
    )
}
