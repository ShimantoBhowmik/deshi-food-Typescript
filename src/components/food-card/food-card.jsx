import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart-action';
import { selectCartItems  } from '../../store/cart/cart-selector';
import Button from '../button/button';



import './food-card.scss';


const FoodCard = ({ food }) =>{

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
        <Button buttonType='inverted' onClick = {addFoodToCart} > Add to cart</Button>
    </div>)
}

export default FoodCard;

