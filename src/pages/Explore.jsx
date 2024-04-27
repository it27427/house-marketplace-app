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
              alt='category-thumbnail'
              className='exploreCategoryImg'
            />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
