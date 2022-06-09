import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './routes/home/homepage';
import Nav from './routes/Navigation/nav';
import SignIn from './routes/sign-in/sign-in';
import CheckOutPage from './routes/checkoutPage/checkoutPage';
import Shop from './routes/shop/shop';
import {  useEffect } from "react";
import { checkUserSession } from './store/user/user-action';



const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(checkUserSession());
  }, []);


  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index={true} element={<HomePage />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='checkout' element={<CheckOutPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;