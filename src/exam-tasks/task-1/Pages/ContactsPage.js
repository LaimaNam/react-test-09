import React from 'react';

const ContactsPage = () => {
  const goBack = () => {
    window.history.go(-1);
    return false;
  };
  return (
    <div>
      <h1>Contact us</h1>
      <button
        action="action"
        onClick={() => goBack()}
        type="submit"
        value="Cancel"
      >
        Go Back
      </button>
    </div>
  );
};

export default ContactsPage;
