import { Outlet } from 'react-router-dom';

import FoodMenu from '../../components/food-menu/food-menu';

const HomePage = () => {
  

  return (<div>
  <FoodMenu  />
  <Outlet/>
  </div>
  );
};

export default HomePage;