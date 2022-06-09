import { CartItem as TCartItemTypes } from '../../store/cart/cart-types';

import { FC, memo } from 'react';

import './food-item.scss';


type CartItemProps = {
  cartItem: TCartItemTypes;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cart-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item'>
        <span className='name'>{name}</span>
        <span className='cost'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
});

export default CartItem;