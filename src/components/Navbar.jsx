import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as ExploreIcon } from '@/assets/images/svg/exploreIcon.svg';
import { ReactComponent as OfferIcon } from '@/assets/images/svg/localOfferIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '@/assets/images/svg/personOutlineIcon.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className='navbarNav'>
      <ul className='navbarListItems'>
        <li onClick={() => navigate('/')} className='navbarListItem'>
          <ExploreIcon fill='#2c2c2c' width='2.25rem' height='2.25rem' />
          <span>Explore</span>
        </li>
        <li onClick={() => navigate('/offers')} className='navbarListItem'>
          <OfferIcon fill='#2c2c2c' width='2.25rem' height='2.25rem' />
          <span>Offer</span>
        </li>
        <li onClick={() => navigate('/profile')} className='navbarListItem'>
          <PersonOutlineIcon fill='#2c2c2c' width='2.25rem' height='2.25rem' />
          <span>Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
