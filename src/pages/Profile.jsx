import { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';
import { db } from '@/firebase.config';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
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
