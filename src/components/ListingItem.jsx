import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '@/assets/images/svg/deleteIcon.svg';
import bedIcon from '../assets/images/svg/bedIcon.svg';
import bathtubIcon from '../assets/images/svg/bathtubIcon.svg';

const ListingItem = ({ listing, id }) => {
  return (
    <li className='categoryListing'>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
      </Link>
    </li>
  );
};

export default ListingItem;
