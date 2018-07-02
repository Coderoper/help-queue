import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(){
  return (
    <div>
      <p>Have you gone through all the steps?</p>
      <button>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
