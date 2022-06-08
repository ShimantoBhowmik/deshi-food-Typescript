import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart-selector';



import './checkoutPage.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Payment from '../../components/payments/payments';


const CheckOutPage = () =>{
    // const{ cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return(
        <div className="container">
            <div className="header">
                <div className="header-block">
                    <span>Food</span>
                </div>
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Amount</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })
            }
            <span className="total">Total: ${cartTotal}</span>
            <Payment />
        </div>
    )
}


export default CheckOutPage;