import CategoryItem from '../category-item/category-item';

import './food-menu.scss';

const foods = [
    {
      id: 1,
      title: 'Rice',
      imageUrl: 'https://i.ibb.co/bLPqrHV/polao.webp',
      route: 'shop/rice',
    },
    {
      id: 2,
      title: 'Curry',
      imageUrl: 'https://i.ibb.co/LCFrS27/chickencurry.webp',
      route: 'shop/curry',
    },
    {
      id: 3,
      title: 'Biriyani',
      imageUrl: 'https://i.ibb.co/xjXDjXf/chicb.jpg',
      route: 'shop/biriyani',
    },
    {
      id: 4,
      title: 'Snacks',
      imageUrl: 'https://i.ibb.co/K9ZHcpZ/fuch.webp',
      route: 'shop/snacks',
    },
    {
      id: 5,
      title: 'Dessert',
      imageUrl: 'https://i.ibb.co/6NNYL3w/payesh.webp',
      route: 'shop/dessert',
    },
  ];

const FoodMenu = () => {
  return (
    <div className='food-menu'>
      {foods.map((food) => (
        <CategoryItem key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodMenu;