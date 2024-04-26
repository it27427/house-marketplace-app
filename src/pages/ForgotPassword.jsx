import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '@/assets/images/svg/keyboardArrowRightIcon.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent');
    } catch (error) {
      toast.error('Could not send reset email');
    }
  };

  return (
    <div className='pageContainer'>
      <header className='loginHeader'>
        <h4 className='pageHeader'>Forgot Password</h4>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Enter email address'
            id='email'
            className='emailInput'
            value={email}
            onChange={handleChange}
          />

          <Link to='/sign-in' className='forgotPasswordLink'>
            Sign In
          </Link>

          <div className='signInBar'>
            <p className='signInText'>Send Reset Link</p>
            <button type='submit' className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='24px' height='24px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
