import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();
  const [formData, setformData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { nama, email } = formData;
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className='profile'>
      <header className='profileHeader'>
        <h3 className='pageHeader'>My Profile</h3>
        <button onClick={handleLogout} type='button' className='logOut'>
          Log Out
        </button>
      </header>
    </div>
  );
};

export default Profile;
