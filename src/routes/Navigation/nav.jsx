import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCart from '../../components/shopping-cart-icon/shopping-cart';
import Dropdown from '../../components/shopping-cart-dropdown/dropdown';

import {ReactComponent as Logo} from '../../assets/logo.svg'

import { selectIsCartOpen } from '../../store/cart/cart-selector';
// import { CartContext } from '../../contexts/shopping-context';
import { signOutUser } from '../../utils/firebase/firebase';

import './nav.scss';

const Nav = () => {

  const currUser = useSelector((state) => state.user.currUser); 
    // const { currUser } = useContext(UserContext);
  // const{ isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);


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