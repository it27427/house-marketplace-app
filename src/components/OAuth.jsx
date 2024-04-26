import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '@/assets/images/svg/googleIcon.svg';

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleClick = () => {};

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button
        onClick={handleGoogleClick}
        type='button'
        className='socialIconDiv'
      >
        <img src={googleIcon} alt='google-icon' />
      </button>
    </div>
  );
};

export default OAuth;
