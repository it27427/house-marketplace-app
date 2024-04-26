import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '@/assets/images/svg/googleIcon.svg';

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = signInWithPopup(auth, provider);
      const user = result.user;

      // CHECK FOR USER
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      // IF USER DOESN'T EXISTS, CREATE-USER
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with Google.');
    }
  };

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button
        onClick={handleGoogleClick}
        type='button'
        className='socialIconDiv'
      >
        <img src={googleIcon} alt='google-icon' className='socialIconImg' />
      </button>
    </div>
  );
};

export default OAuth;
