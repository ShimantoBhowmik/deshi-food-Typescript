import { useDispatch, useSelector } from 'react-redux';

import {ReactComponent as Icon} from '../../assets/shopping-cart.svg' 

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart-selector';
import { setIsCartOpen } from '../../store/cart/cart-action';


import './shopping-cart.scss';


const ShoppingCart = () =>{
    
    
    const dispatch = useDispatch();

    const cartItemNumber = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggle = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return(
        <div className="icon-container" onClick={toggle}>
            <Icon className="shopping-icon"/>
            <span className="count"> {cartItemNumber} </span>
        </div>
    )

}

export default ShoppingCart;