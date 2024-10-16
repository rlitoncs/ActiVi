import { useState } from 'react';

const useToggle = (initial) => {
  const [toggle, setToggle ] = useState(initial);

  const handleToggle = () => setToggle(!toggle);

  return [toggle, handleToggle];
};

export default useToggle;