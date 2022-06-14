import { useDispatch } from 'react-redux';
import { remove } from '../../../redux/slices/cartSlices';
import './cartItem.css';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const cartRemove = (productId) => {
    dispatch(remove(productId));
  }
  return (
    <div className="cart_item p-4">
      <div className="img">
        <img src={cartItem.image} alt="" />
      </div>
      <div className="name">
        <p>{cartItem.title}</p>
      </div>
      <div className="price">${cartItem.price}</div>
      <div className="action">
        <button onClick={() => cartRemove(cartItem.id)} className="btn btn-danger shadow-none btn-sm">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;