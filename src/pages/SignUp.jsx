import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '@/assets/images/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '@/assets/images/svg/visibilityIcon.svg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className='pageContainer'>
        <header className='loginHeader'>
          <h2 className='pageHeader'>Welcome Back!</h2>
        </header>

        <main>
          <form>
            <input
              type='email'
              id='email'
              className='emailInput'
              placeholder='Enter Email Address'
              autoComplete='off'
              value={email}
              onChange={onChange}
            />

            <div className='passwordInputDiv'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='passwordInput'
                placeholder='Enter Password'
                autoComplete='off'
                value={password}
                onChange={onChange}
              />

              <img
                src={visibilityIcon}
                alt='show-password'
                className='showPassword'
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <div className='signInBar'>
              <p className='signInText'>Sign Up</p>
              <button type='submit' className='signInButton'>
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
