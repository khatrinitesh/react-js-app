import React from 'react';

const MailToComp = () => {
  return (
    <>
      <MailtoLink/>
    </>
  );
}

export default MailToComp;

const MailtoLink = () => {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us via email:</p>
        <a href="mailto:xyz@gmail.com">Send an Email to xyz@gmail.com</a>
      </div>
    );
  }