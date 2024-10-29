import { useState } from 'react';

const useAboutEmail = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
  }

  return {
    handleEmailChange,
    handleSubmit,
    email,
    emailSubmitted,
  }
}

export default useAboutEmail;
