import { useState } from 'react';

const useAboutGoal = () => {
  const [goalMessage, setGoalMessage] = useState('');
  const [goalSubmitted, setGoalSubmitted] = useState(false);


  const handleGoalChange = (e) => {
    setGoalMessage(e.target.value);
  };

  const handleGoalClick = (e) => {
    e.preventDefault();
    setGoalSubmitted(true);
  };

  return {
    handleGoalChange,
    handleGoalClick,
    goalMessage,
    goalSubmitted,
  }

};

export default useAboutGoal;

