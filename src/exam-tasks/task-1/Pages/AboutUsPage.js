import React from 'react';

const AboutUsPage = () => {
  const goBack = () => {
    window.history.go(-1);
    return false;
  };

  return (
    <div>
      <h1>About us</h1>
      <button
        action="action"
        onClick={() => goBack()}
        type="submit"
        value="Cancel"
      >
        Go back
      </button>
    </div>
  );
};

export default AboutUsPage;
