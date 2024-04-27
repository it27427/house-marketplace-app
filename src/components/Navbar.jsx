import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as ExploreIcon } from '@/assets/images/svg/exploreIcon.svg';
import { ReactComponent as OfferIcon } from '@/assets/images/svg/localOfferIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '@/assets/images/svg/personOutlineIcon.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className='navbarNav'>
      <ul className='navbarListItems'>
        <li onClick={() => navigate('/')} className='navbarListItem'>
          <ExploreIcon
            fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
            width='2.25rem'
            height='2.25rem'
          />
          <span
            className={
              pathMatchRoute('/')
                ? 'navbarListItemNameActive'
                : 'navbarListItemName'
            }
          >
            Explore
          </span>
        </li>
        <li onClick={() => navigate('/offers')} className='navbarListItem'>
          <OfferIcon
            fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
            width='2.25rem'
            height='2.25rem'
          />
          <span
            className={
              pathMatchRoute('/offers')
                ? 'navbarListItemNameActive'
                : 'navbarListItemName'
            }
          >
            Offers
          </span>
        </li>
        <li onClick={() => navigate('/profile')} className='navbarListItem'>
          <PersonOutlineIcon
            fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
            width='2.25rem'
            height='2.25rem'
          />
          <span
            className={
              pathMatchRoute('/profile')
                ? 'navbarListItemNameActive'
                : 'navbarListItemName'
            }
          >
            Profile
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
