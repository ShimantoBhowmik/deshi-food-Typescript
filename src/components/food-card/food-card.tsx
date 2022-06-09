import {FC} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart-action';
import { selectCartItems  } from '../../store/cart/cart-selector';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button';

import { CategoryItem } from '../../store/categories/category-types';

import './food-card.scss';

type FoodCardProps = {
    food: CategoryItem;
  };


const FoodCard: FC<FoodCardProps> = ({ food }) =>{

    const{name, price, imageUrl} = food;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems); 


    const addFoodToCart = () => dispatch(addItemToCart(cartItems,food));

    return (<div className = "food-card-container">
        <img src = {imageUrl} alt={`${name}`}/>
        <div className="content">
            <span className="name">{name}</span>
            <span className="cost">{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick = {addFoodToCart} > Add to cart</Button>
    </div>)
}

export default FoodCard;

