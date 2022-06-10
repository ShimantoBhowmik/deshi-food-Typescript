import {  useEffect, lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkUserSession } from './store/user/user-action';
import Spinner from "./components/spinner/spinner";

const HomePage = lazy(() => import('./routes/home/homepage'));
const Nav = lazy(() => import('./routes/Navigation/nav'));
const Shop = lazy(() => import('./routes/shop/shop'));
const SignIn = lazy(() => import('./routes/sign-in/sign-in'));
const CheckOutPage = lazy(() => import('./routes/checkoutPage/checkoutPage'));

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(checkUserSession());
  }, []);


  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index={true} element={<HomePage />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='sign-in' element={<SignIn/>}/>
          <Route path='checkout' element={<CheckOutPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;