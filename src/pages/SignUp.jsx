import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase.config';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '@/assets/images/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '@/assets/images/svg/visibilityIcon.svg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      navigate('/');
    } catch (error) {
      toast.error('Something went wrong with registration!');
    }
  };

  return (
    <>
      <div className='pageContainer'>
        <header className='loginHeader'>
          <h2 className='pageHeader'>Welcome Back!</h2>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='name'
              className='nameInput'
              placeholder='Enter Full Name'
              autoComplete='off'
              value={name}
              onChange={handleChange}
            />

            <input
              type='email'
              id='email'
              className='emailInput'
              placeholder='Enter Email Address'
              autoComplete='off'
              value={email}
              onChange={handleChange}
            />

            <div className='passwordInputDiv'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='passwordInput'
                placeholder='Enter Password'
                autoComplete='off'
                value={password}
                onChange={handleChange}
              />

              <img
                src={visibilityIcon}
                alt='show-password'
                className='showPassword'
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <div className='signUpBar'>
              <p className='signUpText'>Sign Up</p>
              <button type='submit' className='signUpButton'>
                <ArrowRightIcon fill='#ffffff' width='24px' height='24px' />
              </button>
            </div>
          </form>

          {/* GOOGLE oAUTH */}
          <div className='authtext'>
            <span className='signtext'>Already have an account?</span>

            <Link to='/sign-in' className='registerLink'>
              Sign In
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignUp;
