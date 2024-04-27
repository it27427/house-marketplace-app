import { Link } from 'react-router-dom';
import rentCategoryImage from '@/assets/images/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '@/assets/images/jpg/sellCategoryImage.jpg';

const Explore = () => {
  return (
    <div className='explore'>
      <header>
        <h2 className='pageHeader'>Explore</h2>
      </header>

      <main>
        <h4 className='exploreCategoryHeading'>Categories</h4>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent-thumbnail'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for rent</p>
          </Link>

          <Link to='/category/sell'>
            <img
              src={sellCategoryImage}
              alt='sell-thumbnail'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for sell</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
