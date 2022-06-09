import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import './category-item.scss';
import   {FoodCategory}  from '../food-menu/food-menu'

type CategoryItemProps = {
  food: FoodCategory;
};

const CategoryItem: FC<CategoryItemProps> = ({ food }) => {
  const { imageUrl, title, route } = food;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <div className='foods'onClick={navigateHandler}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='food-body'>
        <h2>{title}</h2>
        <p>Enjoy this delight today!</p>
      </div>
    </div>
  );
};

export default CategoryItem;