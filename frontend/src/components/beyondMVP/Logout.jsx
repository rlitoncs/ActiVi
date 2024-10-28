import { useNavigate } from 'react-router-dom';
const Logout = ({onLogout}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div>      
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Logout;