import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCart from '../../components/shopping-cart-icon/shopping-cart';
import Dropdown from '../../components/shopping-cart-dropdown/dropdown';

import {ReactComponent as Logo} from '../../assets/logo.svg'

import { selectIsCartOpen } from '../../store/cart/cart-selector';
import { selectCurrUser } from '../../store/user/user-selector';
import { signOutStart } from '../../store/user/user-action';

import { useDispatch } from 'react-redux';

import './nav.scss';

const Nav = () => {
  const dispatch = useDispatch();
  const currUser = useSelector(selectCurrUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'> 
            <Logo className="logo" />
        </Link>
        <div className="links">
          <Link className="link" to='/shop'>
            SHOP
          </Link>
          {
            currUser ? (
              <span className="link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) :(
              <Link className="link" to='/sign-in'>
                SIGN IN
              </Link>
            )
          }
          <ShoppingCart />
        </div>
        {isCartOpen && <Dropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;