import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutUsPage = () => {
  let history = useHistory();

  return (
    <div>
      <h1>About us</h1>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};

export default AboutUsPage;
