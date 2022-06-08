import './food-item.scss';

const CartItem = ({ cartItem }) => {
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
};

export default CartItem;