import React from 'react';
import { useHistory } from 'react-router-dom';

const ContactsPage = () => {
  let history = useHistory();

  return (
    <div>
      <h1>Contact us</h1>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default ContactsPage;
