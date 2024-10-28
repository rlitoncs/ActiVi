import { useState } from 'react';


const useAbout = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

  }

  return {
    handleEmailChange,
    handleSubmit,
    email,
    submitted,
  }
}

export default useAbout;
