import { Link } from 'react-router-dom';

import FoodCard from '../food-card/food-card';

import './category-preview.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products && products
          .filter((_, idx) => idx < 4)
          .map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;