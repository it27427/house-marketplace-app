import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '@/assets/images/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '@/assets/images/svg/visibilityIcon.svg';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  return (
    <div>
      <h2>Sign In Page</h2>
    </div>
  );
};

export default SignIn;
